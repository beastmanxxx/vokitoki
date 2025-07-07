# VoiceTok - Real-time Audio Sharing PWA

A Progressive Web App for real-time audio sharing with lifetime connections, inspired by VoiceTok. Users can create rooms, share links, and maintain persistent audio connections even when the app is closed.

## 🌟 Features

### 🎤 Audio Sharing
- **Real-time audio streaming** from room creators to listeners
- **Lifetime connections** - listeners stay connected until creator leaves
- **Background audio** - continues receiving audio when app is closed
- **Volume control** for listeners

### 📱 Progressive Web App
- **Installable** - can be installed as a native app on any device
- **Offline support** - works without internet connection
- **Push notifications** - alerts when new audio arrives
- **Background sync** - continues monitoring for audio when closed

### 🔗 Room Management
- **Room creation** with unique codes
- **Shareable links** - creators can share direct room links
- **Auto-join** - clicking shared links automatically joins rooms
- **User management** - shows all connected users with roles

### 💾 Persistent Sessions
- **localStorage** - remembers user sessions across browser sessions
- **Auto-reconnect** - automatically reconnects when app is reopened
- **Background processing** - service worker handles background tasks

## 🚀 Quick Start

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/voiceTok.git
cd voiceTok
```

### 2. Generate Icons
1. Open `generate-icons.html` in your browser
2. Download all the generated icons
3. Save them in your project root directory

### 3. Deploy

#### Option A: GitHub Pages
1. Go to your repository settings
2. Scroll to "GitHub Pages" section
3. Select "Deploy from a branch"
4. Choose "main" branch and "/ (root)" folder
5. Click "Save"

#### Option B: Netlify
1. Go to [netlify.com](https://netlify.com)
2. Click "New site from Git"
3. Connect your GitHub repository
4. Deploy automatically

#### Option C: Vercel
1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Import your GitHub repository
4. Deploy automatically

## 📁 Project Structure

```
voiceTok/
├── index.html              # Main application
├── manifest.json           # PWA manifest
├── sw.js                  # Service worker
├── generate-icons.html     # Icon generator
├── README.md              # This file
├── icon-16x16.png         # App icons (generated)
├── icon-32x32.png
├── icon-72x72.png
├── icon-96x96.png
├── icon-128x128.png
├── icon-144x144.png
├── icon-152x152.png
├── icon-192x192.png
├── icon-384x384.png
└── icon-512x512.png
```

## 🔧 Configuration

### Firebase Setup
The app uses Firebase for real-time communication. Update the Firebase configuration in `index.html`:

```javascript
const firebaseConfig = {
    apiKey: "your-api-key",
    authDomain: "your-project.firebaseapp.com",
    projectId: "your-project-id",
    storageBucket: "your-project.firebasestorage.app",
    messagingSenderId: "your-sender-id",
    appId: "your-app-id"
};
```

### Custom Domain (Optional)
If using a custom domain, update the manifest.json:
```json
{
    "start_url": "https://yourdomain.com/",
    "scope": "https://yourdomain.com/"
}
```

## 📱 How to Use

### For Room Creators:
1. Enter your username
2. Click "Create Room"
3. Share the generated room link with others
4. Click "Start Speaking" to begin broadcasting
5. Your audio will be transmitted to all listeners

### For Listeners:
1. Click a shared room link
2. Install the VoiceTok app when prompted
3. Enter your username
4. Enjoy lifetime audio connection
5. Adjust volume as needed

## 🌐 Browser Support

- ✅ Chrome/Edge (Full PWA support)
- ✅ Firefox (Full PWA support)
- ✅ Safari (Limited PWA support)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🔒 Security Features

- HTTPS required for PWA features
- Firebase security rules
- Audio permission handling
- Secure room access

## 🛠️ Development

### Local Development
1. Serve the files using a local server:
```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx serve .

# Using PHP
php -S localhost:8000
```

2. Open `http://localhost:8000` in your browser

### Testing PWA Features
- Use Chrome DevTools > Application tab
- Test service worker functionality
- Verify manifest.json
- Check offline capabilities

## 📊 Performance

- **Lightweight**: Single HTML file with minimal dependencies
- **Fast loading**: Optimized assets and caching
- **Efficient**: Background processing with service workers
- **Responsive**: Works on all device sizes

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🆘 Support

If you encounter any issues:
1. Check the browser console for errors
2. Verify Firebase configuration
3. Ensure HTTPS is enabled
4. Check service worker registration

## 🔮 Future Features

- [ ] Video support
- [ ] Multiple creators per room
- [ ] Chat functionality
- [ ] Screen sharing
- [ ] Recording capabilities
- [ ] Advanced audio controls

---

**Made with ❤️ for real-time audio sharing** 