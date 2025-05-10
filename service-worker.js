self.addEventListener('install', function(event) {
  console.log('Service Worker Installed');
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    fetch(event.request).catch(function() {
      return new Response('آپ آف لائن ہیں۔');
    })
  );
});
