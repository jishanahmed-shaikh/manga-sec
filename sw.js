// MANGA-SEC Service Worker
const CACHE_NAME = 'manga-sec-v1.0.0';
const urlsToCache = [
  '/',
  '/index.html',
  '/style.css',
  '/script.js',
  '/css/animations.css',
  '/css/components.css',
  '/js/sound-effects.js',
  '/js/notifications.js',
  '/js/theme-manager.js',
  '/js/particle-effects.js',
  '/js/keyboard-shortcuts.js',
  '/js/analytics.js',
  '/js/accessibility.js',
  '/data/quiz-topics.json',
  '/data/achievements.json',
  '/Assets/Manga-Sec-Logo.png',
  '/Assets/4Grid-1.png',
  '/Assets/ActionPush.png',
  '/Assets/Pose1-Stop.png',
  '/Assets/Pose2-Laptop.png',
  'https://fonts.googleapis.com/css2?family=Bangers&family=Comic+Neue:wght@400;700&family=Press+Start+2P&display=swap'
];

// Install event
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('MANGA-SEC: Cache opened');
        return cache.addAll(urlsToCache);
      })
      .catch((error) => {
        console.log('MANGA-SEC: Cache install failed', error);
      })
  );
});

// Fetch event
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Return cached version or fetch from network
        if (response) {
          return response;
        }
        
        return fetch(event.request).then((response) => {
          // Check if valid response
          if (!response || response.status !== 200 || response.type !== 'basic') {
            return response;
          }

          // Clone the response
          const responseToCache = response.clone();

          caches.open(CACHE_NAME)
            .then((cache) => {
              cache.put(event.request, responseToCache);
            });

          return response;
        });
      })
      .catch(() => {
        // Return offline page for navigation requests
        if (event.request.destination === 'document') {
          return caches.match('/index.html');
        }
      })
  );
});

// Activate event
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('MANGA-SEC: Deleting old cache', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// Background sync for analytics
self.addEventListener('sync', (event) => {
  if (event.tag === 'background-sync') {
    event.waitUntil(doBackgroundSync());
  }
});

function doBackgroundSync() {
  // Sync analytics data when online
  return new Promise((resolve) => {
    console.log('MANGA-SEC: Background sync completed');
    resolve();
  });
}

// Push notifications (for future use)
self.addEventListener('push', (event) => {
  const options = {
    body: event.data ? event.data.text() : 'New cybersecurity challenge available!',
    icon: '/Assets/Manga-Sec-Logo.png',
    badge: '/Assets/Manga-Sec-Logo.png',
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1
    },
    actions: [
      {
        action: 'explore',
        title: 'Take Quiz',
        icon: '/Assets/Manga-Sec-Logo.png'
      },
      {
        action: 'close',
        title: 'Close',
        icon: '/Assets/Manga-Sec-Logo.png'
      }
    ]
  };

  event.waitUntil(
    self.registration.showNotification('MANGA-SEC', options)
  );
});

// Notification click
self.addEventListener('notificationclick', (event) => {
  event.notification.close();

  if (event.action === 'explore') {
    event.waitUntil(
      clients.openWindow('/?action=quiz')
    );
  }
});