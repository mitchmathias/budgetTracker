if ("serviceWorker" in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker
            .regiser('index.js')
            .then(reg => console.log('its working'))
            .catch(err => console.log('error'))
    })
}
const cacheName = 'v1';
const DATA_CACHE = 'data-cache';

const FILES_TO_CACHE = [
    "/",
    "../models/transaction.js",
    "/icons/icon-192x192.png",
    "/icons/icon-512x512.png",
    "/index.html",
    "/index.js",
    "/style.css"
]


self.addEventListener('install', e => {
    console.log('Installed');

    e.waitUntill(
        caches.open(cacheName)
            .then(cache => { cache.addAll(FILES_TO_CACHE) })
            .then(() => self.skipWaiting())
    )
})