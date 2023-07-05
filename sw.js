self.addEventListener("install", event => {
   this.skipWaiting();
   event.waitUntil(
       caches.open(staticCacheName)
       .then(cache => {
           return cache.addAll(filesToCache);
       })
   )
});

self.addEventListener('fetch', (e) => {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request)),
  );
});