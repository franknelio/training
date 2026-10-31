const CACHE = "treino-v1";
const CORE = ["/", "/index.html", "/manifest.webmanifest", "/icons/icon-192.png", "/icons/icon-512.png"];
self.addEventListener("install", e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(CORE))); self.skipWaiting(); });
self.addEventListener("activate", e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k))))); self.clients.claim(); });
self.addEventListener("fetch", e => {
  const req = e.request; if(req.method !== "GET") return;
  const url = new URL(req.url);
  // página: rede primeiro (pega atualizações), cai no cache se offline
  if(req.mode === "navigate"){ e.respondWith(fetch(req).then(r => { caches.open(CACHE).then(c => c.put("/index.html", r.clone())); return r; }).catch(() => caches.match("/index.html"))); return; }
  // vídeos e demais arquivos: cache primeiro
  e.respondWith(caches.match(req).then(hit => hit || fetch(req).then(r => { if(r.ok && (url.origin === location.origin || url.hostname.includes("fonts"))) { const cp = r.clone(); caches.open(CACHE).then(c => c.put(req, cp)); } return r; })));
});
