const CACHE_NAME = 'kota-menu-v2';

const ASSETS = [
    '/',
    'index.html',
    'styles.css',
    'main.js',
    './manifest.json',
    './beefGwinya.jfif',
    './chickenBurger.jfif',
    './chips.jfif',
    './jumboGwinya.jfif',
    './staffedGwinya.jfif'
];

// Install service worker and cache all files
self.addEventListener('install', (e) => {
    e.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(ASSETS);
        }).then(() => self.skipWaiting())
    );
});

// Activate and clean up old caches
self.addEventListener('activate', (e) => {
    e.waitUntil(
        caches.keys().then((keys) => {
            return Promise.all(
                keys.map((key) => {
                    if(key !== CACHE_NAME) {
                        return caches.delete(keys);
                    }
                })
            );
        }).then(() => self.clients.claim())
    );
});

// Serve files from cache when offline
self.addEventListener('fetch', (e) => {
    e.respondWith(
        caches.match(e.request).then((cachedResponse) => {
            return cachedResponse || fetch(e.request);
        })
    );
});

