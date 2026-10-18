// ============================================================================
// Service Worker for 偉人AIグループチャット (PWA)
// ============================================================================
const APP_VERSION = 'v1.0.4';
const CACHE_NAME = `history-ai-chat-${APP_VERSION}`;

// 初回起動時にキャッシュするコア静的ファイル群
const CORE_STATIC_ASSETS = [
  './',
  './index.html',
  './character_details.js',
  './manifest.json',
  './icons/icon-192.png',
  './icons/icon-192-maskable.png',
  './icons/icon-512.png',
  './icons/apple-touch-icon.png'
];

// 1. インストール時：コアアセットをキャッシュ
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(CORE_STATIC_ASSETS);
    })
  );
});

// 2. 新バージョン切り替えメッセージの待受
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

// 3. アクティベーション時：古いバージョンのキャッシュを完全消去
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

// 4. フェッチ処理：通信の完全最適化
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

  // ② 静的ファイル（HTML, JS, 画像アイコン等）：完全なCache-First
  // キャッシュに存在する場合はサーバーへのお問い合わせ通信を一切行わず、スマホ内から即座に返す（通信量ゼロ）
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }

      // 初回表示時などキャッシュにない画像やアセットのみネットワークからダウンロードしてキャッシュ
      return fetch(event.request).then((networkResponse) => {
        if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic') {
          return networkResponse;
        }

        const responseToCache = networkResponse.clone();
        caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, responseToCache);
        });

        return networkResponse;
      }).catch(() => {
        // オフライン時のページ遷移フォールバック
        if (event.request.mode === 'navigate') {
          return caches.match('./index.html');
        }
      });
    })
  );
});
