self.addEventListener('install', event => {
    console.log('Install');
})

self.addEventListener('activate', event => {
    console.log('Activate');
})

self.addEventListener('fetch', event => {
    console.log('Fetch data');
})

let CACHE_NAME = "lesson7"
let urlToCache = [
    'script.js',
    'style.css'
]

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(
            cache => {
                return cache.addAll(urlToCache);
            }
        )
    )
})
//

//
// const CACHE = 'network-or-cache-v1';
// const timeout = 400;
// // При установке воркера мы должны закешировать часть данных (статику).
// self.addEventListener('install', (event) => {
//     event.waitUntil(
//         caches.open(CACHE).then((cache) => cache.addAll([
//                 './img/background'
//             ])
//         ));
// });
//
// // при событии fetch, мы и делаем запрос, но используем кэш, только после истечения timeout.
// self.addEventListener('fetch', (event) => {
//     event.respondWith(fromNetwork(event.request, timeout)
//         .catch((err) => {
//             console.log(`Error: ${err.message()}`);
//             return fromCache(event.request);
//         }));
// });
//
// // Временно-ограниченный запрос.
// function fromNetwork(request, timeout) {
//     return new Promise((fulfill, reject) => {
//         var timeoutId = setTimeout(reject, timeout);
//         fetch(request).then((response) => {
//             clearTimeout(timeoutId);
//             fulfill(response);
//         }, reject);
//     });
// }
//
// function fromCache(request) {
// // Открываем наше хранилище кэша (CacheStorage API), выполняем поиск запрошенного ресурса.
// // Обратите внимание, что в случае отсутствия соответствия значения Promise выполнится успешно, но со значением `undefined`
//     return caches.open(CACHE).then((cache) =>
//         cache.match(request).then((matching) =>
//             matching || Promise.reject('no-match')
//         ));
// }