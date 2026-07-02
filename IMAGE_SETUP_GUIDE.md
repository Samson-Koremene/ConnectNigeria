# 🖼️ Hero Image Setup Guide

## ✅ Image Selected

**Source:** Freepik  
**URL:** https://www.magnific.com/free-photo/group-international-business-people-raising-their-hands_2789189.htm  
**Theme:** International business collaboration, unity, success  
**Perfect for:** Government, institutional, development platforms

---

## 📥 Step 1: Download the Image

### Option A: Download from Freepik (Recommended)
1. Go to: **https://www.freepik.com/free-photo/group-international-business-people-raising-their-hands_53876-13910.htm**
2. Click **"Free Download"** button
3. Select **"Large"** or **"Original"** size
4. Accept license terms (Free for commercial use with attribution)
5. Download as **JPG** format

### Option B: Use Alternative Link
If the Freepik link doesn't work, use this direct URL in your code:
```
https://img.freepik.com/free-photo/group-international-business-people-raising-their-hands_53876-13910.jpg
```

---

## 🎨 Step 2: Optimize the Image

### Using Online Tools (Easiest)

#### Method 1: TinyPNG (Recommended)
1. Go to: **https://tinypng.com/**
2. Upload your downloaded image
3. Wait for compression (reduces ~70% file size)
4. Download optimized image
5. **Target:** Under 300KB

#### Method 2: Squoosh (Advanced Control)
1. Go to: **https://squoosh.app/**
2. Upload image
3. Settings:
   - **Format:** WebP or MozJPEG
   - **Quality:** 75-85
   - **Resize:** 1920x1080 (if larger)
4. Download optimized image

### Using Command Line (For Developers)
```bash
# Install ImageMagick
# Then compress:
magick hero-image.jpg -quality 80 -resize 1920x1080 hero-optimized.jpg
```

---

## 📁 Step 3: Add Image to Project

### Option 1: Local Image (Recommended for Production)

1. **Create images folder** (if not exists):
   ```
   src/assets/images/
   ```

2. **Save optimized image as:**
   ```
   src/assets/images/hero-bg.jpg
   ```

3. **Update Hero component** (`src/components/Hero.tsx`):
   ```tsx
   import heroBg from '../assets/images/hero-bg.jpg';
   
   // Then in the component:
   style={{
     backgroundImage: `url(${heroBg})`,
   }}
   ```

### Option 2: External URL (Quick Testing)

Already implemented! The component uses:
```tsx
backgroundImage: 'url(https://img.freepik.com/free-photo/group-international-business-people-raising-their-hands_53876-13910.jpg)',
```

**This works immediately but:**
- ⚠️ Depends on external server
- ⚠️ Slower load times
- ⚠️ No control over caching

---

## ✅ What I Already Did

I've updated your Hero component with:

### 1. **Background Image**
```tsx
<div 
  className="absolute inset-0 bg-cover bg-center bg-no-repeat"
  style={{
    backgroundImage: 'url(...your-image...)',
  }}
>
```

### 2. **Dark Gradient Overlay**
For text readability:
```tsx
{/* Gradient from left to right (95% → 75% opacity) */}
<div className="absolute inset-0 bg-gradient-to-r from-[#1A2E26]/95 via-[#1A2E26]/85 to-[#1A2E26]/75" />

{/* Gradient from top to bottom (subtle vignette) */}
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#1A2E26]/60" />
```

### 3. **Updated Text Colors**
- Headline: **White** with glow effect
- Accent: **Bright green (#00ff88)** with glow
- Body: **White/90%** opacity
- Badge: **Green background** with white text

### 4. **Glassmorphism Buttons**
- Primary: Solid green with shadow
- Secondary: Glass effect with blur

### 5. **Stats Cards**
- Frosted glass effect
- White text with shadows
- Subtle borders

---

## 🎨 Current Design

### Color Overlay Breakdown
```css
/* Main Overlay - Ensures text readability */
from-[#1A2E26]/95  /* Left: 95% dark green opacity */
via-[#1A2E26]/85   /* Middle: 85% opacity */
to-[#1A2E26]/75    /* Right: 75% opacity (shows more image) */

/* Bottom Vignette - Adds depth */
from-transparent           /* Top: Full transparency */
to-[#1A2E26]/60           /* Bottom: 60% dark overlay */
```

### Text Treatment
```css
/* Headline */
color: white
text-shadow: 0 4px 20px rgba(0,0,0,0.5)

/* Accent Word "Development Journey" */
color: #00ff88 (bright green)
text-shadow: 0 0 30px rgba(0,255,136,0.3) /* Glow effect */

/* Body Text */
color: rgba(255,255,255,0.9)
text-shadow: 0 2px 10px rgba(0,0,0,0.3)
```

---

## 📊 Image Specifications

### Technical Details
- **Format:** JPG or WebP
- **Dimensions:** 1920x1080px (Full HD) minimum
- **File Size:** <300KB (after optimization)
- **Aspect Ratio:** 16:9
- **Quality:** 75-85 (balanced)

### Responsive Sizes (Optional)
Create multiple versions:
```
hero-bg-mobile.jpg   →  640x360   (small phones)
hero-bg-tablet.jpg   →  1024x576  (tablets)
hero-bg-desktop.jpg  →  1920x1080 (desktops)
hero-bg-4k.jpg       →  3840x2160 (high-end displays)
```

---

## 🚀 Testing Checklist

After adding the image:

- [ ] Image loads properly on all devices
- [ ] Text is readable over the image
- [ ] File size is <300KB
- [ ] No CORS errors (if external URL)
- [ ] Image doesn't slow page load
- [ ] Looks good on mobile
- [ ] Overlay darkness is balanced
- [ ] Colors match brand (green/dark green)

---

## 🎯 Fine-Tuning (Optional)

### Adjust Overlay Darkness
If text is hard to read, increase opacity:
```tsx
// Make darker (more opacity)
from-[#1A2E26]/98 via-[#1A2E26]/90 to-[#1A2E26]/85

// Make lighter (less opacity)
from-[#1A2E26]/90 via-[#1A2E26]/75 to-[#1A2E26]/60
```

### Change Overlay Color
```tsx
// Darker green
from-[#0d1814]/95

// Pure black (dramatic)
from-black/95

// Green tint
from-[#008751]/95
```

### Adjust Image Position
```tsx
// Focus on center
bg-center

// Focus on top (show faces)
bg-top

// Focus on bottom
bg-bottom

// Custom position
bg-[center_30%]
```

---

## 📝 License & Attribution

### Freepik License
- ✅ Free for commercial use
- ✅ No attribution required (Premium)
- ⚠️ Attribution required (Free)

### Add Attribution (if using free version)
In your footer:
```tsx
<a href="https://www.freepik.com/free-photo/group-international-business-people-raising-their-hands_53876-13910.htm">
  Image by Freepik
</a>
```

Or in your `README.md`:
```markdown
## Credits
Hero image by [Freepik](https://www.freepik.com)
```

---

## 🔧 Troubleshooting

### Issue: Image not loading
**Solution:**
1. Check file path is correct
2. Verify image is in `src/assets/images/`
3. Check file extension (.jpg not .jpeg)
4. Clear browser cache

### Issue: Image too slow
**Solution:**
1. Compress with TinyPNG
2. Use WebP format instead of JPG
3. Add lazy loading:
   ```tsx
   loading="lazy"
   ```

### Issue: Text not readable
**Solution:**
1. Increase overlay opacity
2. Add stronger text shadow
3. Use bolder font weights

### Issue: CORS error (external URL)
**Solution:**
1. Download and host locally
2. Use a CDN with CORS enabled
3. Add proxy in development

---

## 🎨 Alternative Images (Backup Options)

If you want to change the image later:

### Similar Professional Images
```
Search Terms:
1. "business professionals collaboration meeting"
2. "diverse team raising hands success"
3. "government officials strategic planning"
4. "Nigerian business people teamwork"
5. "corporate team celebrating achievement"
```

### Free Stock Photo Sites
- **Unsplash** - https://unsplash.com
- **Pexels** - https://pexels.com
- **Pixabay** - https://pixabay.com
- **Freepik** - https://freepik.com (current source)

---

## ✅ Summary

**Current Status:**
- ✅ Hero component updated with image background
- ✅ Dark overlay for text readability
- ✅ White text with glow effects
- ✅ Glassmorphism buttons
- ✅ Responsive stats cards
- ✅ External URL ready (works immediately)

**Next Step:**
Download, optimize, and add locally for best performance!

---

**Last Updated:** January 2025  
**Component:** `src/components/Hero.tsx`  
**Image URL:** https://img.freepik.com/free-photo/group-international-business-people-raising-their-hands_53876-13910.jpg
