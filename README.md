# Modern Restaurant Website (Vite + React + Tailwind)
A clean, animated, multi-page restaurant site.

## Features
- Pages: Home, Why Choose Us?, Explore Menu, Delivery & Payment, Follow Us
- Responsive navbar, cards, menu grid
- Framer Motion micro-animations
- Lucide icons
- Tailwind CSS styling

## Quickstart
```bash
# 1) Install deps
npm install

# 2) Start dev server
npm run dev

# 3) Build for production
npm run build && npm run preview
```

> Tailwind is pre-configured (see `tailwind.config.js` and `src/styles/global.css`).

## Project Structure
```
modern-restaurant-site/
  ├─ public/
  ├─ src/
  │  ├─ components/
  │  ├─ pages/
  │  ├─ styles/
  │  ├─ App.jsx
  │  └─ main.jsx
  ├─ index.html
  ├─ package.json
  ├─ tailwind.config.js
  ├─ postcss.config.js
  ├─ vite.config.js
  └─ README.md
```

## Notes
- Replace placeholder images with your own in `MenuGrid` cards (currently gradient blocks).
- Update social links in Footer & FollowUs.
- Feel free to swap the brand color in `tailwind.config.js`.
