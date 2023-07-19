// service-worker.js

// Cache static assets (CSS, JS, images) for offline use
const staticCacheName = "Get Dad Jokes";
const assetsToCache = [
  "/source/styles.css",
  "/index.js",
  "/images/android-chrome-192x192.png",
  // Add more assets to cache as needed
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(staticCacheName).then((cache) => {
      return cache.addAll(assetsToCache);
    })
  );
});

// Serve static assets from cache when offline
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
