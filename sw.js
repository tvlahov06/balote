const CACHE = 'balote-v4';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './icons/icon-192x192.png',
  './icons/icon-512x512.png'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS).catch(()=>{})));
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys =>
    Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
  ));
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  // Never cache data.json or API calls
  if (e.request.url.includes('data.json') || e.request.url.includes('api.github.com') || e.request.url.includes('raw.githubusercontent.com')) {
    e.respondWith(fetch(e.request));
    return;
  }
  // Network-first for HTML (always try fresh index.html, fall back to cache if offline)
  if (e.request.mode === 'navigate' || e.request.destination === 'document' || e.request.url.endsWith('.html') || e.request.url.endsWith('/')) {
    e.respondWith(
      fetch(e.request).then(r => {
        const copy = r.clone();
        caches.open(CACHE).then(c => c.put(e.request, copy)).catch(()=>{});
        return r;
      }).catch(() => caches.match(e.request))
    );
    return;
  }
  // Cache-first for other static assets
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request))
  );
});
