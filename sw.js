const CACHE_NAME = 'ptec-Classroom-Management-v2';
const urlsToCache = [
  './index.html',
  './manifest.json',
  './icon-192.png',
  './icon-512.png'
];

// ពេល Install វាលោតកូដថ្មីចូលភ្លាមៗ
self.addEventListener('install', event => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

// លុប Cache ចាស់ៗចោលពេលមាន Update ថ្មី
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cache => {
          if (cache !== CACHE_NAME) {
            return caches.delete(cache);
          }
        })
      );
    })
  );
});

// ទាញយកកូដពីអុីនធឺណិតមុន (Network First) បើអត់សេវាទើបប្រើ Cache
self.addEventListener('fetch', event => {
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});