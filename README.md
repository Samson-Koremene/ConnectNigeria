# Connect Nigeria First Project (CNFP)

A national development documentation platform that bridges the gap between government institutions and citizens by creating a transparent, searchable repository of Nigeria's reforms, projects, and innovation ecosystem.

![Connect Nigeria First Project](src/assets/images/logo_official_1782844342793.jpg)

## 🎯 Project Overview

**Connect Nigeria First Project** is a comprehensive web platform designed to:
- Document institutional reforms and development projects
- Showcase Nigeria's innovation ecosystem
- Promote transparency through real-time dashboards
- Enable citizen participation in national documentation
- Create a verified repository of national progress

## 🚀 Tech Stack

- **Frontend:** React 19 + TypeScript 5.8
- **Build Tool:** Vite 6.2.3
- **Styling:** Tailwind CSS 4.1.14
- **Animations:** Motion (Framer Motion 12)
- **Routing:** React Router DOM 7
- **Backend:** Firebase 12.15.0
  - Authentication (Google OAuth)
  - Firestore Database
  - Security Rules
- **Icons:** Lucide React

## 📋 Prerequisites

Before you begin, ensure you have:
- **Node.js** (v18 or higher)
- **npm** or **yarn**
- **Firebase account** (free tier works)
- **Git** (for version control)

## 🛠️ Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/ConnectNigeria.git
cd ConnectNigeria
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Firebase Configuration

#### A. Create Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Add project"
3. Follow the setup wizard (you can disable Google Analytics if not needed)

#### B. Enable Authentication

1. In Firebase Console, go to **Authentication** → **Sign-in method**
2. Enable **Google** provider
3. Add authorized domains if deploying to production

#### C. Create Firestore Database

1. Go to **Firestore Database** → **Create database**
2. Choose **Production mode** (we have security rules)
3. Select a location (closest to your users)

#### D. Get Firebase Configuration

1. Go to **Project Settings** → **General** → **Your apps**
2. Click **Web** icon (</>) to add a web app
3. Copy the configuration object

#### E. Configure the App

Create or update `firebase-applet-config.json` in the root directory:

```json
{
  "projectId": "your-project-id",
  "appId": "your-app-id",
  "storageBucket": "your-project-id.appspot.com",
  "apiKey": "your-api-key",
  "authDomain": "your-project-id.firebaseapp.com",
  "messagingSenderId": "your-sender-id",
  "measurementId": "your-measurement-id",
  "firestoreDatabaseId": "(default)"
}
```

### 4. Deploy Security Rules

Install Firebase CLI if you haven't:

```bash
npm install -g firebase-tools
```

Login and initialize:

```bash
firebase login
firebase init firestore
```

Select your project and use existing `firestore.rules`.

Deploy the rules:

```bash
firebase deploy --only firestore:rules
```

### 5. Run Development Server

```bash
npm run dev
```

The app will be available at `http://localhost:3000`

## 📊 Initial Database Setup

### 1. Create Your Admin Account

1. Sign in to the app using Google OAuth
2. Go to **Firebase Console** → **Firestore Database**
3. Navigate to: `users` → `[your-uid]`
4. Add a field: `isAdmin` = `true` (boolean)
5. Refresh the application

### 2. Seed Sample Data

1. Navigate to: `http://localhost:3000/admin/setup`
2. Click **"Seed Database Now"**
3. Wait for confirmation message
4. Data will be populated:
   - 8 Projects (Infrastructure, Technology, Healthcare, etc.)
   - 6 News Articles
   - 10 Partners
   - 4 Stakeholders
   - Dashboard Metrics

## 🔐 Security Rules Overview

The Firestore security rules implement:
- **Default deny all** - Security-first approach
- **User profiles** - Owner-only read/write
- **Admin authorization** - Role-based access control
- **Public collections** - Projects, news, partners (read-only for public)
- **Schema validation** - Type checking and required fields
- **Timestamp enforcement** - Server-side timestamps

## 📁 Project Structure

```
ConnectNigeria/
├── src/
│   ├── components/          # React components
│   │   ├── Navbar.tsx       # Navigation with auth
│   │   ├── Hero.tsx         # Landing section
│   │   ├── Dashboard.tsx    # Transparency metrics
│   │   ├── Repository.tsx   # Documentation database
│   │   ├── UserProfile.tsx  # User settings
│   │   ├── AdminDashboard.tsx # Admin panel
│   │   ├── GlobalSearch.tsx # Cmd+K search
│   │   └── [11 more]
│   ├── context/
│   │   └── AuthContext.tsx  # Authentication state
│   ├── lib/
│   │   ├── firebase.ts      # Firebase initialization
│   │   ├── firestore.ts     # Firestore CRUD operations
│   │   └── seedData.ts      # Database seeding
│   ├── pages/
│   │   ├── Home.tsx         # Landing page
│   │   └── Admin.tsx        # Admin setup page
│   ├── assets/              # Images and media
│   ├── types.ts             # TypeScript interfaces
│   └── main.tsx             # React entry point
├── firestore.rules          # Security rules
├── firebase-applet-config.json # Firebase config
└── package.json             # Dependencies
```

## 🎨 Features

### Public Features
- ✅ Hero landing with animated icons and national stats
- ✅ About section (mission, vision, values)
- ✅ Documentation scope (6 categories)
- ✅ Development stories (filterable project gallery)
- ✅ Repository (searchable documentation database)
- ✅ Real-time transparency dashboard
- ✅ News & updates
- ✅ FAQ section
- ✅ Global search (Cmd/Ctrl + K)
- ✅ Multi-language toggle (EN/HA/IG/YO)

### Authenticated Features
- ✅ Google OAuth sign-in
- ✅ User profile management
- ✅ Save/bookmark projects
- ✅ Notification preferences
- ✅ Newsletter subscription

### Admin Features
- ✅ Protected admin dashboard
- ✅ Project management (CRUD)
- ✅ Media center
- ✅ Analytics dashboard
- ✅ User management
- ✅ Database seeding tool

## 🔑 Environment Variables

Create a `.env.local` file (optional, for Gemini API):

```env
GEMINI_API_KEY=your_gemini_api_key_here
APP_URL=http://localhost:3000
```

## 🚢 Deployment

### Deploy to Firebase Hosting

1. Build the project:
```bash
npm run build
```

2. Initialize Firebase Hosting:
```bash
firebase init hosting
```

3. Configure `firebase.json`:
```json
{
  "hosting": {
    "public": "dist",
    "ignore": ["firebase.json", "**/.*", "**/node_modules/**"],
    "rewrites": [
      {
        "source": "**",
        "destination": "/index.html"
      }
    ]
  }
}
```

4. Deploy:
```bash
firebase deploy --only hosting
```

### Deploy to Vercel/Netlify

1. Connect your GitHub repository
2. Set build command: `npm run build`
3. Set output directory: `dist`
4. Add environment variables if needed
5. Deploy

## 🧪 Development

### Available Scripts

```bash
npm run dev       # Start development server
npm run build     # Build for production
npm run preview   # Preview production build
npm run lint      # TypeScript type checking
```

### Code Style

- TypeScript for type safety
- Functional React components with hooks
- Tailwind CSS for styling
- Motion for animations
- ESLint for code quality

## 🐛 Troubleshooting

### Firebase Connection Issues

If you see "client is offline" error:
1. Check your Firebase configuration
2. Ensure Firestore rules are deployed
3. Verify network connectivity

### Authentication Errors

1. Verify Google OAuth is enabled in Firebase Console
2. Check authorized domains in Authentication settings
3. Ensure user is created in Firestore after first sign-in

### Build Errors

1. Clear node_modules and reinstall:
```bash
rm -rf node_modules package-lock.json
npm install
```

2. Check TypeScript errors:
```bash
npm run lint
```

## 📚 Documentation

- [Firebase Documentation](https://firebase.google.com/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Vite Guide](https://vitejs.dev)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is licensed under the Apache-2.0 License - see the LICENSE file for details.

## 👥 Team

Built with ❤️ for Nigeria's development documentation

## 🔗 Links

- [Live Demo](#) (Coming soon)
- [Firebase Console](https://console.firebase.google.com/)
- [Report Issues](#)

## 📝 Changelog

### Version 1.0.0 (Current)
- ✅ Firebase authentication and authorization
- ✅ Firestore database integration
- ✅ Admin role-based access control
- ✅ Real-time search functionality
- ✅ Project and news management
- ✅ User profile system
- ✅ Database seeding tool
- ✅ Responsive design
- ✅ Security rules implementation

## 🎯 Roadmap

- [ ] Multi-language content (i18n implementation)
- [ ] Firebase Storage for image uploads
- [ ] Advanced search with filters
- [ ] Email notifications
- [ ] Export reports (PDF/CSV)
- [ ] Analytics dashboard
- [ ] Mobile app (React Native)
- [ ] API for third-party integrations

---

**Made with 🇳🇬 by the Connect Nigeria First Project Team**
