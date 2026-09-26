/*
  sw.js – sostituisce il service worker della vecchia app installata da questo indirizzo.
  Cancella la copia salvata, si disinstalla e ricarica le pagine aperte, che così arrivano
  al reindirizzamento verso https://comprensivoalmese.github.io/iclaudecanti/app/
*/
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', evento => evento.waitUntil(
  caches.keys()
    .then(nomi => Promise.all(nomi.map(n => caches.delete(n))))
    .then(() => self.registration.unregister())
    .then(() => self.clients.matchAll({ type: 'window' }))
    .then(finestre => Promise.all(finestre.map(f => f.navigate(f.url).catch(() => {}))))
));
