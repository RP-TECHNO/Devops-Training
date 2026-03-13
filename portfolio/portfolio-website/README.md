# 🚀 DevOps Portfolio Website

Dark futuristic portfolio for DevOps / Cloud Engineers.

## 📁 Folder Structure

```
portfolio/
├── index.html                  # Main HTML file
├── public/
│   └── resume.pdf              # Apna resume yahan rakho
└── src/
    ├── styles/
    │   └── main.css            # All styles
    └── components/
        └── main.js             # All JavaScript
```

## ✏️ Customize Kaise Karein

### 1. Apna Naam Change Karo
`index.html` mein `Alex Singh` ko apne naam se replace karo.

### 2. Stats Update Karo (Hero Section)
```html
<span class="stat-num">3+</span>      <!-- Apne years of experience -->
<span class="stat-num">50+</span>     <!-- Pipelines built -->
<span class="stat-num">99.9%</span>   <!-- Uptime SLA -->
```

### 3. About Section
- Location, education, certification apna daalo
- Current job update karo

### 4. Projects Update Karo
Har `.project-card` mein:
- Title, description apna daalo
- GitHub/Live links update karo
- Tech tags change karo
- Metrics apne daalo

### 5. Experience Update Karo
`.timeline-item` mein apni companies aur roles daalo.

### 6. Contact Info
Email, LinkedIn, GitHub links update karo.

### 7. Resume
`public/resume.pdf` mein apna resume rakho.

---

## 🌐 Deploy Kahan Karein - 3 Best Options

### Option 1: Vercel (RECOMMENDED - FREE)
Sabse aasan aur fast. Custom domain bhi free milta hai.

```bash
# Step 1: Install Vercel CLI
npm install -g vercel

# Step 2: Portfolio folder mein jao
cd portfolio

# Step 3: Deploy
vercel

# Step 4: Follow the prompts:
# - Login with GitHub
# - Project name: your-name-portfolio
# - Done! URL milega: yourname.vercel.app
```

**Custom Domain add karna:**
1. Vercel dashboard → Project → Settings → Domains
2. Add `yourname.dev` ya koi bhi domain
3. DNS records update karo

---

### Option 2: Netlify (FREE)
Vercel jaisa hi, drag & drop bhi support karta hai.

```bash
# Option A: Drag & Drop (No CLI needed)
1. netlify.com par jao
2. "Deploy" section mein folder drag karo
3. Done! URL milega: random-name.netlify.app

# Option B: CLI
npm install -g netlify-cli
netlify deploy --prod --dir .
```

---

### Option 3: GitHub Pages (FREE)
GitHub repo se seedha deploy.

```bash
# Step 1: GitHub par repo banao: your-username.github.io

# Step 2: Files push karo
git init
git add .
git commit -m "Portfolio website"
git remote add origin https://github.com/USERNAME/USERNAME.github.io.git
git push -u origin main

# Step 3: Settings → Pages → Source: main branch
# Live: https://USERNAME.github.io
```

---

## ⚡ Quick Deploy Commands Summary

```bash
# Vercel (Best)
npx vercel --prod

# Netlify
npx netlify deploy --prod

# GitHub Pages
git push origin main
```

## 🔧 Local Development

Koi build tool nahi chahiye! Directly browser mein open karo:

```bash
# Option 1: VS Code Live Server extension use karo

# Option 2: Python simple server
python3 -m http.server 3000
# Browser: http://localhost:3000

# Option 3: Node http-server
npx http-server . -p 3000
```

## 📝 Tech Used
- Pure HTML5, CSS3, JavaScript (No frameworks!)
- Fonts: Orbitron, Rajdhani, Share Tech Mono (Google Fonts)
- Matrix rain animation (Canvas API)
- Intersection Observer API (scroll animations)
- CSS custom properties (easy theming)
