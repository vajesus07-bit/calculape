const CACHE_NAME='docsperu-v1';
const STATIC_ASSETS=[
'/',
'/index.html',
'/assets/css/styles.css',
'/assets/js/utils.js',
'/assets/img/favicon.svg',
'/manifest.json',
'/documents/constancia-trabajo.html',
'/documents/recibo-honorarios.html',
'/documents/recibo-venta.html',
'/documents/factura-simplificada.html',
'/documents/calculadora-sueldo-neto.html'
];

self.addEventListener('install',e=>{
e.waitUntil(caches.open(CACHE_NAME).then(c=>c.addAll(STATIC_ASSETS)).then(()=>self.skipWaiting()));
});

self.addEventListener('activate',e=>{
e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE_NAME).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));
});

self.addEventListener('fetch',e=>{
if(e.request.method!=='GET')return;
e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request).then(resp=>{
if(resp.status===200&&resp.type==='basic'){
const clone=resp.clone();
caches.open(CACHE_NAME).then(c=>c.put(e.request,clone));
}
return resp;
}).catch(()=>caches.match('/index.html'))));
});
