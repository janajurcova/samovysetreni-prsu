/*self.addEventListener('install', event => {
    console.log("app installed");
});

self.addEventListener('activate', event => {
    console.log("app activated");
});
*/

self.addEventListener('fetch', event => {
    return
});

/*
self.addEventListener('periodicsync', event => {
    console.log('periodicsync', event)
    if (event.tag == 'test-tag-from-devtools') {
        self.registration.showNotification('Notifocation Sample', {
            body: 'Buzz! Buzz!',
            tag: 'notification-sample'
        });
    }
});
*/