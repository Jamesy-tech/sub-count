self.addEventListener('install', event => self.skipWaiting());
self.addEventListener('activate', event => console.log('Service Worker activated'));

self.addEventListener('message', event => {
    const { title, body } = event.data;
    self.registration.showNotification(title, { body });
});
