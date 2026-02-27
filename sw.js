// Sudarshan Chakra — Service Worker
// Version bump forces cache refresh on every deploy
const CACHE_NAME = 'sc-cache-v10';
const URLS_TO_CACHE = [
  './',
  './index.html',
  './gratitude.html',
  './hire_checkout.html',
  './manifest.json'
];

// Install — cache core files
self.addEventListener('install', event => {
  self.skipWaiting(); // Activate immediately
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(URLS_TO_CACHE))
  );
});

// Activate — delete ALL old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))
      )
    ).then(() => self.clients.claim()) // Take control immediately
  );
});

// Fetch — network first, fallback to cache
// This ensures users always get fresh files
self.addEventListener('fetch', event => {
  event.respondWith(
    fetch(event.request)
      .then(response => {
        // Update cache with fresh response
        if (response && response.status === 200) {
          const responseClone = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, responseClone));
        }
        return response;
      })
      .catch(() => {
        // Offline fallback — serve from cache
        return caches.match(event.request);
      })
  );
});
