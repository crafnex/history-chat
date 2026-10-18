// ============================================================================
// Service Worker for 偉人トークAI (PWA)
// ============================================================================
const APP_VERSION = 'v1.8.0';
const CACHE_NAME = `history-ai-chat-${APP_VERSION}`;

// 初回起動時にキャッシュするコア静的ファイル群
const CORE_STATIC_ASSETS = [
  './',
  './index.html',
  './mode_topics.js?v=1.8.0',
  './character_details.js?v=1.8.0',
  './manifest.json?v=1.8.0',
  './icons/app-icon-192.png?v=1.7.0',
  './icons/app-icon-maskable.png?v=1.7.0',
  './icons/app-icon-512.png?v=1.7.0',
  './icons/apple-touch-icon-v2.png?v=1.7.0',
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

  // APIリクエスト（Gemini / Groq / Wikipedia / Anilist / Jikan 等）はSWキャッシュ完全バイパス
  if (
    url.hostname.includes('googleapis.com') ||
    url.hostname.includes('groq.com') ||
    url.hostname.includes('openai.com') ||
    url.hostname.includes('wikipedia.org') ||
    url.hostname.includes('wikimedia.org') ||
    url.hostname.includes('anilist.co') ||
    url.hostname.includes('jikan.moe') ||
    url.hostname.includes('workers.dev') ||
    url.pathname.includes('/v1/')
  ) {
    return; // SWは介入せず通常のネットワーク通信を行う
  }

  // index.html または ナビゲーションリクエスト（ルートへのアクセス）
  // ★最重要：HTMLファイルは「Network-First（ネットワーク優先）」で取得！
  // ネットワークがオンラインなら常に最新のHTMLを取得し、オフラインの時だけキャッシュを返す。
  // これによりユーザーが「リロード」した瞬間に最新版が必ず表示される。
  if (event.request.mode === 'navigate' || url.pathname.endsWith('index.html') || url.pathname.endsWith('/')) {
    event.respondWith(
      fetch(event.request)
        .then((networkResponse) => {
          // ネットワーク取得が成功したらキャッシュも最新版に更新
          if (networkResponse && networkResponse.status === 200) {
            const responseToCache = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(event.request, responseToCache);
            });
          }
          return networkResponse;
        })
        .catch(() => {
          // オフラインまたはネットワーク接続不能時のみキャッシュをフォールバックとして返す
          return caches.match(event.request).then((cachedResponse) => {
            return cachedResponse || caches.match('./index.html');
          });
        })
    );
    return;
  }

  // その他の静的アセット（JS / CSS / 画像 / アイコン等）は Cache-First (無ければNetwork取得＆キャッシュ)
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }
      return fetch(event.request).then((networkResponse) => {
        if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic') {
          return networkResponse;
        }
        const responseToCache = networkResponse.clone();
        caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, responseToCache);
        });
        return networkResponse;
      });
    })
  );
});
