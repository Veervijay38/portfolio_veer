# Veervijaysinh Rana — Portfolio

A modern, dark-themed portfolio built with **Next.js 14** (App Router) and **Tailwind CSS**.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
├── app/
│   ├── globals.css       # Global styles + Tailwind
│   ├── layout.tsx        # Root layout with fonts & metadata
│   └── page.tsx          # Main page (assembles all sections)
├── components/
│   ├── Navbar.tsx        # Sticky navigation
│   ├── Hero.tsx          # Landing hero section
│   ├── About.tsx         # About me + education
│   ├── Skills.tsx        # Tech stack grid
│   ├── Experience.tsx    # Work history timeline
│   ├── Projects.tsx      # Featured projects grid
│   ├── Contact.tsx       # Contact info & links
│   └── Footer.tsx        # Footer
├── lib/
│   └── data.ts           # ← All your personal data lives here
└── public/               # Static assets
```

## ✏️ Updating Your Info

All personal data is in **`lib/data.ts`** — just edit that file:

- Update `name`, `email`, `linkedin`, `github`, `website`
- Add/edit `projects` array
- Add/edit `experience` array
- Update `skills` object

## 🎨 Customization

- **Colors**: Edit `tailwind.config.ts` → `theme.extend.colors`
- **Fonts**: Change in `app/layout.tsx` (uses Google Fonts)
- **Sections**: Add/remove sections in `app/page.tsx`

## 🌐 Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Or connect your GitHub repo to [vercel.com](https://vercel.com) for auto-deploy.

## 🛠 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Fonts**: DM Sans + Syne + Fira Code (Google Fonts)
- **Deployment**: Vercel
