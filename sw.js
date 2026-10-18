// ============================================================================
// Service Worker for 偉人トークAI (PWA)
// ============================================================================
const APP_VERSION = 'v1.4.0';
const CACHE_NAME = `history-ai-chat-${APP_VERSION}`;

// 初回起動時にキャッシュするコア静的ファイル群
const CORE_STATIC_ASSETS = [
  './',
  './index.html',
  './character_details.js?v=1.4.0',
  './manifest.json?v=1.4.0',
  './icons/app-icon-192.png?v=1.4.0',
  './icons/app-icon-maskable.png?v=1.4.0',
  './icons/app-icon-512.png?v=1.4.0',
  './icons/apple-touch-icon-v2.png?v=1.4.0',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/apple-touch-icon.png'
];

// 1. インストール時：キャッシュを準備し、ユーザーのアップデート承認を待機
self.addEventListener('install', (event) => {
  // 自動スキップを廃止：ユーザーが確認して「アップデート」を押すまで待機状態を維持
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(CORE_STATIC_ASSETS).catch((err) => {
        console.warn('[SW] Pre-caching non-fatal warning:', err);
      });
    })
  );
});

// 2. 新バージョン切り替えメッセージの待受
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

// 3. アクティベーション時：古いバージョンのキャッシュを完全消去 & 即座にクライアントを掌握
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            console.log(`[SW] Purging old cache: ${key}`);
            return caches.delete(key);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// 4. フェッチ処理：HTMLは常に「Network-First（リロード即反映）」
self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);

  // ① AI API通信 (Groq, Gemini, OpenAI) はキャッシュせず常にネットワーク直通
  if (
    url.hostname.includes('groq.com') ||
    url.hostname.includes('googleapis.com') ||
    url.hostname.includes('google.com') ||
    url.hostname.includes('openai.com') ||
    event.request.method !== 'GET'
  ) {
    event.respondWith(fetch(event.request));
    return;
  }

  // ② HTMLナビゲーション（リロードやページアクセス）は【Network-First】
  // サーバーの最新 index.html を最優先で取得し、キャッシュを即座に更新する。
  // これにより、スマホでリロードした際に古い壊れたキャッシュが表示され続けるのを完全に防ぐ。
  const isHtmlRequest = event.request.mode === 'navigate' ||
                        url.pathname.endsWith('/') ||
                        url.pathname.endsWith('index.html');

  if (isHtmlRequest) {
    event.respondWith(
      fetch(event.request)
        .then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            const copy = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(event.request, copy);
            });
          }
          return networkResponse;
        })
        .catch(() => {
          // ネットワークがオフラインの時だけキャッシュを返す
          return caches.match(event.request).then((cached) => {
            return cached || caches.match('./index.html');
          });
        })
    );
    return;
  }

  // ③ 静的アセット（画像・アイコン・スクリプトなど）：Stale-While-Revalidate
  // キャッシュがあれば即座に応答しつつ、バックグラウンドで最新を取得して次回に備える
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      const fetchPromise = fetch(event.request).then((networkResponse) => {
        if (networkResponse && networkResponse.status === 200 && networkResponse.type === 'basic') {
          const responseToCache = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache);
          });
        }
        return networkResponse;
      }).catch(() => null);

      return cachedResponse || fetchPromise;
    })
  );
});
