# 🚀 Quick Setup Guide - Connect Nigeria First Project

This guide will help you get the Connect Nigeria First Project running in **15 minutes**.

## ⚡ Prerequisites Checklist

- [ ] Node.js (v18+) installed - [Download](https://nodejs.org/)
- [ ] Firebase account created - [Sign up](https://console.firebase.google.com/)
- [ ] Code editor (VS Code recommended)

## 📝 Step-by-Step Setup

### Step 1: Clone & Install (2 minutes)

```bash
# Clone the repository
git clone https://github.com/yourusername/ConnectNigeria.git
cd ConnectNigeria

# Install dependencies
npm install
```

### Step 2: Firebase Project Setup (5 minutes)

#### 2.1 Create Project
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click **"Add project"**
3. Enter project name: `ConnectNigeria` (or your choice)
4. Disable Google Analytics (optional)
5. Click **"Create project"**

#### 2.2 Enable Google Authentication
1. In Firebase Console, click **"Authentication"** in sidebar
2. Click **"Get started"**
3. Go to **"Sign-in method"** tab
4. Click **"Google"** provider
5. Toggle **"Enable"**
6. Select a support email
7. Click **"Save"**

#### 2.3 Create Firestore Database
1. Click **"Firestore Database"** in sidebar
2. Click **"Create database"**
3. Choose **"Production mode"**
4. Select location closest to you
5. Click **"Enable"**

#### 2.4 Get Configuration
1. Click **⚙️ (gear icon)** → **"Project settings"**
2. Scroll to **"Your apps"**
3. Click **"</>"** (Web app) icon
4. Register app name: `ConnectNigeria Web`
5. **Copy the config object** (you'll need this next)

### Step 3: Configure the App (3 minutes)

Create/update `firebase-applet-config.json` in project root:

```json
{
  "projectId": "YOUR_PROJECT_ID_HERE",
  "appId": "YOUR_APP_ID_HERE",
  "storageBucket": "YOUR_PROJECT_ID_HERE.appspot.com",
  "apiKey": "YOUR_API_KEY_HERE",
  "authDomain": "YOUR_PROJECT_ID_HERE.firebaseapp.com",
  "messagingSenderId": "YOUR_SENDER_ID_HERE",
  "measurementId": "YOUR_MEASUREMENT_ID_HERE",
  "firestoreDatabaseId": "(default)"
}
```

**Replace the values** with your Firebase config from Step 2.4.

### Step 4: Deploy Security Rules (2 minutes)

```bash
# Install Firebase CLI globally (if not installed)
npm install -g firebase-tools

# Login to Firebase
firebase login

# Initialize Firestore (select existing project)
firebase init firestore

# When prompted:
# - Select your project from the list
# - Use existing firestore.rules
# - Use existing firestore.indexes.json

# Deploy rules
firebase deploy --only firestore:rules
```

### Step 5: Start Development Server (1 minute)

```bash
npm run dev
```

Open browser to: **http://localhost:3000**

You should see the landing page! 🎉

### Step 6: Create Admin Account (2 minutes)

#### 6.1 Sign In
1. Click **"Sign In"** button in navbar
2. Sign in with your Google account
3. You'll be redirected back to the home page

#### 6.2 Make Yourself Admin
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Open your project
3. Click **"Firestore Database"**
4. Click **"users"** collection
5. Click your user document (it has your Google ID)
6. Click **"Add field"**:
   - Field: `isAdmin`
   - Type: `boolean`
   - Value: `true` ✓
7. Click **"Save"**
8. Refresh your app

#### 6.3 Seed Database
1. Navigate to: **http://localhost:3000/admin/setup**
2. Click **"Seed Database Now"**
3. Wait for success message (30-60 seconds)
4. Done! Database is populated with sample data

## ✅ Verification Checklist

Test these features to confirm everything works:

- [ ] **Landing page loads** with animated logo
- [ ] **Sign in with Google** works
- [ ] **User profile** accessible at `/profile`
- [ ] **Admin dashboard** accessible at `/admin` (after making yourself admin)
- [ ] **Global search** works with `Cmd/Ctrl + K`
- [ ] **Projects** visible on homepage
- [ ] **News** section populated
- [ ] **Save project** from Repository section

## 🎯 Next Steps

Now that setup is complete:

1. **Explore the Platform**
   - Browse projects and news
   - Test the search functionality
   - Save some projects to your profile

2. **Admin Dashboard**
   - Go to `/admin` to manage content
   - View analytics and metrics
   - Manage user accounts

3. **Customize Content**
   - Edit `src/lib/seedData.ts` to add your own data
   - Run the seed script again from `/admin/setup`

4. **Deploy to Production** (Optional)
   ```bash
   npm run build
   firebase deploy --only hosting
   ```

## 🆘 Common Issues & Solutions

### Issue: "Client is offline" error

**Solution:**
```bash
# Redeploy Firestore rules
firebase deploy --only firestore:rules
```

### Issue: Can't access admin dashboard

**Solution:**
1. Verify `isAdmin: true` is set in Firestore
2. Sign out and sign in again
3. Clear browser cache

### Issue: Search returns no results

**Solution:**
1. Verify database was seeded at `/admin/setup`
2. Check browser console for errors
3. Ensure Firestore rules are deployed

### Issue: Build fails

**Solution:**
```bash
# Clean install
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Issue: Authentication not working

**Solution:**
1. Check Google OAuth is enabled in Firebase Console
2. Verify `authDomain` in `firebase-applet-config.json`
3. Check browser console for errors

## 📞 Need Help?

- Check full [README.md](./README.md) for detailed docs
- Review [Firebase Documentation](https://firebase.google.com/docs)
- Open an issue on GitHub

## 🎉 You're All Set!

Congratulations! Your Connect Nigeria First Project is now running locally.

**Quick Links:**
- **Home:** http://localhost:3000
- **Profile:** http://localhost:3000/profile
- **Admin:** http://localhost:3000/admin
- **Setup:** http://localhost:3000/admin/setup

---

**Total Setup Time:** ~15 minutes ⏱️

Happy coding! 🚀
