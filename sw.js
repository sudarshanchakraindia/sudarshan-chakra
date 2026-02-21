// ==================== SUDARSHAN CHAKRA SERVICE WORKER ====================
// Version: bump this string to force cache refresh on all users' devices
const CACHE_VERSION = 'sc-v1.0';

// Resources to pre-cache on install (app shell)
const PRECACHE_URLS = [
    '/sudarshan-chakra/',
    '/sudarshan-chakra/index.html',
    '/sudarshan-chakra/manifest.json'
];

// External CDN resources to cache on first use
const CDN_CACHE = 'sc-cdn-v1.0';

// ==================== INSTALL ====================
self.addEventListener('install', (event) => {
    console.log('[SW] Installing version:', CACHE_VERSION);
    event.waitUntil(
        caches.open(CACHE_VERSION).then((cache) => {
            console.log('[SW] Pre-caching app shell');
            return cache.addAll(PRECACHE_URLS).catch(err => {
                // Don't fail install if pre-cache fails (e.g. offline during install)
                console.warn('[SW] Pre-cache failed (ok if offline):', err);
            });
        }).then(() => self.skipWaiting())
    );
});

// ==================== ACTIVATE ====================
// Clean up old caches when a new SW takes over
self.addEventListener('activate', (event) => {
    console.log('[SW] Activating version:', CACHE_VERSION);
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames
                    .filter(name => name !== CACHE_VERSION && name !== CDN_CACHE)
                    .map(name => {
                        console.log('[SW] Deleting old cache:', name);
                        return caches.delete(name);
                    })
            );
        }).then(() => self.clients.claim())
    );
});

// ==================== FETCH STRATEGY ====================
self.addEventListener('fetch', (event) => {
    const url = new URL(event.request.url);

    // Skip non-GET and non-http(s) requests
    if (event.request.method !== 'GET') return;
    if (!event.request.url.startsWith('http')) return;

    // Skip Firebase Realtime Database requests — always go to network
    if (url.hostname.includes('firebasedatabase.app') ||
        url.hostname.includes('firebase') ||
        url.hostname.includes('firestore')) {
        return;
    }

    // CDN resources (Tailwind, Leaflet, Firebase SDK) — Cache First
    if (url.hostname.includes('cdn.tailwindcss.com') ||
        url.hostname.includes('unpkg.com') ||
        url.hostname.includes('gstatic.com') ||
        url.hostname.includes('tile.openstreetmap.org')) {
        event.respondWith(
            caches.open(CDN_CACHE).then(async (cache) => {
                const cached = await cache.match(event.request);
                if (cached) return cached;
                try {
                    const response = await fetch(event.request);
                    if (response.ok) cache.put(event.request, response.clone());
                    return response;
                } catch {
                    return cached || new Response('', { status: 503 });
                }
            })
        );
        return;
    }

    // App shell (our own files) — Network First, fallback to cache
    if (url.hostname === self.location.hostname) {
        event.respondWith(
            fetch(event.request)
                .then((response) => {
                    // Cache successful responses
                    if (response.ok) {
                        const clone = response.clone();
                        caches.open(CACHE_VERSION).then(cache => cache.put(event.request, clone));
                    }
                    return response;
                })
                .catch(() => {
                    // Offline fallback — serve from cache
                    return caches.match(event.request).then(cached => {
                        if (cached) return cached;
                        // If requesting a page, serve the main app
                        if (event.request.destination === 'document') {
                            return caches.match('/sudarshan-chakra/index.html');
                        }
                        return new Response('Offline', { status: 503 });
                    });
                })
        );
        return;
    }
});

// ==================== PUSH NOTIFICATIONS (Future Use) ====================
self.addEventListener('push', (event) => {
    const data = event.data?.json() || {};
    const title = data.title || 'Sudarshan Chakra';
    const options = {
        body: data.body || 'You have a new notification',
        icon: '/sudarshan-chakra/icon-192.png',
        badge: '/sudarshan-chakra/icon-192.png',
        data: { url: data.url || '/sudarshan-chakra/' },
        vibrate: [200, 100, 200]
    };
    event.waitUntil(self.registration.showNotification(title, options));
});

self.addEventListener('notificationclick', (event) => {
    event.notification.close();
    const url = event.notification.data?.url || '/sudarshan-chakra/';
    event.waitUntil(clients.openWindow(url));
});
