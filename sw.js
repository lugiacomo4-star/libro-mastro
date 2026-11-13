// La vecchia app non c'e' piu': questo service worker cancella la cache e si toglie.
self.addEventListener('install',function(){self.skipWaiting()});
self.addEventListener('activate',function(e){e.waitUntil(caches.keys().then(function(k){return Promise.all(k.map(function(n){return caches.delete(n)}))}).then(function(){return self.registration.unregister()}).then(function(){return self.clients.matchAll()}).then(function(c){c.forEach(function(x){x.navigate(x.url)})}))});
