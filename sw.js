// Service Worker for VoiceTok Background Audio
const CACHE_NAME = 'voiceTok-v1';
const AUDIO_CACHE = 'voiceTok-audio';

// Files to cache for offline support
const urlsToCache = [
    '/',
    '/index.html',
    '/manifest.json',
    '/sw.js'
];

// Install event
self.addEventListener('install', (event) => {
    console.log('Service Worker installing...');
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                console.log('Opened cache');
                return cache.addAll(urlsToCache);
            })
    );
    self.skipWaiting();
});

// Activate event
self.addEventListener('activate', (event) => {
    console.log('Service Worker activating...');
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (cacheName !== CACHE_NAME) {
                        console.log('Deleting old cache:', cacheName);
                        return caches.delete(cacheName);
                    }
                })
            );
        }).then(() => self.clients.claim())
    );
});

// Background sync for audio
self.addEventListener('sync', (event) => {
    if (event.tag === 'background-audio-sync') {
        event.waitUntil(handleBackgroundAudioSync());
    }
});

// Handle push notifications
self.addEventListener('push', (event) => {
    const options = {
        body: 'VoiceTok: Audio is available!',
        icon: '/icon-192x192.png',
        badge: '/badge-72x72.png',
        vibrate: [100, 50, 100],
        data: {
            dateOfArrival: Date.now(),
            primaryKey: 1
        },
        actions: [
            {
                action: 'open',
                title: 'Open App',
                icon: '/icon-192x192.png'
            },
            {
                action: 'close',
                title: 'Close',
                icon: '/icon-192x192.png'
            }
        ]
    };

    event.waitUntil(
        self.registration.showNotification('VoiceTok', options)
    );
});

// Handle notification clicks
self.addEventListener('notificationclick', (event) => {
    event.notification.close();

    if (event.action === 'open') {
        event.waitUntil(
            self.clients.openWindow('/')
        );
    }
});

// Handle background audio sync
async function handleBackgroundAudioSync() {
    try {
        // Get stored session data
        const sessionData = await getStoredSession();
        if (!sessionData || sessionData.isCreator) return;

        // Check for new audio data
        const audioData = await checkForNewAudio(sessionData.roomCode);
        if (audioData) {
            // Store audio data for when user reopens
            await storeAudioData(audioData);
            
            // Show notification
            await self.registration.showNotification('VoiceTok', {
                body: 'New audio from room creator!',
                icon: '/icon-192x192.png',
                badge: '/badge-72x72.png',
                vibrate: [100, 50, 100],
                tag: 'voiceTok-audio',
                requireInteraction: true,
                actions: [
                    {
                        action: 'open',
                        title: 'Listen Now',
                        icon: '/icon-192x192.png'
                    }
                ]
            });
        }
    } catch (error) {
        console.error('Background audio sync error:', error);
    }
}

// Helper functions
async function getStoredSession() {
    // This would be implemented with IndexedDB or similar
    return null;
}

async function checkForNewAudio(roomCode) {
    // This would check Firebase for new audio data
    return null;
}

async function storeAudioData(audioData) {
    // This would store audio data for later playback
    return null;
}

// Fetch event for offline support
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then((response) => {
                // Return cached version or fetch from network
                return response || fetch(event.request);
            })
    );
});

// Message handling
self.addEventListener('message', (event) => {
    if (event.data && event.data.type === 'SKIP_WAITING') {
        self.skipWaiting();
    }
}); 