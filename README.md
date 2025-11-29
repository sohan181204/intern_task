
# Elite Events – Responsive React Website

## Project Overview

Elite Events is a responsive single‑page React website for an event management company. It features a hero background video, services overview, animated statistics, testimonials, and a gallery, and is optimized for phones, tablets, and desktops using Tailwind CSS responsive utilities.[web:263][web:356]

---

## Folder Structure

root/
├─ public/
│ ├─ index.html
│ ├─ favicon_io/
│ │ ├─ favicon.ico
│ │ ├─ favicon-16x16.png
│ │ ├─ favicon-32x32.png
│ │ ├─ android-chrome-192x192.png
│ │ ├─ android-chrome-512x512.png
│ │ ├─ apple-touch-icon.png
│ │ └─ site.webmanifest
│ ├─ videos/
│ │ └─ event1.mp4
│ └─ images/
│ ├─ img1.jpg
│ ├─ img2.jpg
│ └─ img3.jpg
│
├─ src/
│ ├─ index.js # React entry, renders <App />
│ ├─ App.jsx # Main app layout + routes
│ ├─ index.css # Global styles + Tailwind layers
│ ├─ pages/
│ │ ├─ Home.jsx # Hero video, services, stats, testimonials, gallery
│ │ ├─ About.jsx
│ │ ├─ Services.jsx
│ │ ├─ Portfolio.jsx
│ │ ├─ Blog.jsx
│ │ └─ Contact.jsx
│ ├─ components/
│ │ ├─ Navbar.jsx
│ │ └─ Footer.jsx
│ ├─ assets/ # (optional) extra icons / logos
│ └─ routes/ # (optional) route configuration if used
│
├─ package.json
├─ tailwind.config.js
├─ postcss.config.js
├─ .gitignore
└─ README.md



- Background video is loaded from `public/videos/event1.mp4` via an HTML5 `<video>` element in `Home.jsx`.[web:326][web:331]  
- Gallery images live in `public/images` and are referenced by public paths such as `/images/img1.jpg`.[web:331]

---

## Technologies Used

- **React (Create React App)** – Component‑based UI, SPA routing, and JSX for pages and layout.[web:360]  
- **Tailwind CSS** – Utility‑first styling and responsive design (`sm:`, `md:`, `lg:`) for phones, tablets, and desktops.[web:263][web:352]  
- **AOS (Animate On Scroll)** – Scroll‑triggered fade/slide animations for cards, stats, testimonials, and gallery.[web:244][web:247]  
- **Animate.css** – Prebuilt CSS animations such as `animate__fadeInDown` on hero .[web:248]  
- **HTML5 `<video>`** – Autoplay, muted, looped hero background video with `playsInline` for mobile browser compatibility.[web:324][web:228]  
- **Git & GitHub** – Version control and remote hosting of the repository.[web:160][web:168]  
- **Vercel** – Static deployment platform that builds the React app and serves files from the `build/` directory.[web:199][web:211]

Key npm packages (from `package.json`):

- `react`, `react-dom`, `react-router-dom`  
- `tailwindcss`, `postcss`, `autoprefixer`  
- `aos`, `animate.css`  
- `@testing-library/*` (optional testing utilities)

---

## Development Setup

### 1. Install Dependencies

npm install


Installs React, Tailwind, AOS, and all other dependencies defined in `package.json`.[web:360][web:363]

### 2. Run in Development Mode

npm start



This starts the development server (typically at `http://localhost:3000`) with hot reloading.[web:360]

### 3. Available Scripts

Defined in `package.json`:

- `npm start` – Start the dev server.  
- `npm run build` – Create an optimized production build in the `build/` folder.  
- `npm test` – Run tests (if configured).

---

## Git & GitHub Workflow

### Initial Push (once per repo)

git init
git remote add origin <your-repo-url>
git add .
git commit -m "Initial Elite Events website"
git branch -M main
git push -u origin main



This creates the `main` branch on GitHub and sets `origin/main` as the upstream for local `main`.[web:160][web:166]

### Regular Updates

After making code changes:

git status
git add .
git commit -m "Describe your change"
git push



Because the upstream is configured, `git push` is enough to sync `main` to GitHub.[web:160][web:338]

---

## Deployment (Vercel)

You can adapt these steps for Netlify or Render, but Vercel is straightforward for Create React App builds.[web:199][web:212]

### 1. Prepare the Repository

- Ensure `build/` and `node_modules/` are listed in `.gitignore` so they are not committed.[web:337]  
- Push the latest code to GitHub on the `main` branch.

### 2. Create a Vercel Project

1. Open the Vercel dashboard and click **“New Project”**.  
2. Import the GitHub repository (Elite Events project).  
3. Confirm the framework preset as **Create React App** (auto‑detected in most cases).  
4. Use the defaults:
   - **Build Command:** `npm run build`  
   - **Output Directory:** `build`  

These match CRA defaults, so no extra configuration is usually required.[web:199]

### 3. First Deployment

- Click **Deploy**.  
- Vercel will run `npm install`, then `npm run build`, and then deploy the contents of `build/` as a static site.[web:199][web:211]  
- After deployment, you receive a production URL like `https://elite-events.vercel.app`.

### 4. Automatic Redeploys

- Every `git push` to `main` triggers a new production deployment.  
- Pushes to feature branches (for example, `feature/home-video`) create preview deployments linked to those branches/PRs.[web:199]

### 5. Environment Variables (Optional)

If you later integrate APIs (e.g., contact form backend):

1. In Vercel → Project → **Settings → Environment Variables**, add keys and values.  
2. For Create React App, use the `REACT_APP_*` naming convention (e.g., `REACT_APP_API_URL`) and reference them via `process.env.REACT_APP_API_URL` in the code.[web:331]

---

## Updating Content

- **Hero  / buttons:** Edit the copy and links inside `src/pages/Home.jsx`.  
- **Services cards:** Modify titles and descriptions in the `service-cards` section of `Home.jsx` or `Services.jsx`.  
- **Testimonials:** Update the `testimonials` array in the `Testimonials` component inside `Home.jsx`.  
- **Gallery images:** Replace `img1.jpg`, `img2.jpg`, `img3.jpg` under `public/images/` or add new file names and update the `galleryImgs` array.

This structure and workflow make it easy to maintain and extend the Elite Events website while keeping it performant and responsive across devices.[web:355][web:366]