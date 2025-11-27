self.addEventListener('install', e => self.skipWaiting());
self.addEventListener('activate', e => console.log('SW activated'));

self.addEventListener('message', event => {
    const { title, body } = event.data;
    if (self.registration) {
        self.registration.showNotification(title, { body });
    } else {
        console.log("Cannot show notification: no registration");
    }
});
