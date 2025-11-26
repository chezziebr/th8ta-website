# TH8TA - Recovery Wear for Endurance Athletes

A modern, clean e-commerce website for TH8TA, a curated retail brand for endurance athlete recovery wear. Built with Next.js 16, TypeScript, and Tailwind CSS.

## Brand Overview

**TH8TA** is what comes after. After the finish line, the climb, the brutal tempo effort. Not activewear. Afterwear.

- **Science-backed**: Every product is organized around a 4-Stage Recovery System
- **Curated**: Like Title Nine's curation + The Feed's authority
- **Authentic**: Real endurance athletes testing real recovery gear
- **Transparent**: Full fabric disclosure and honest microplastic conversations

## Features

### 🎨 Design System
- **Brand Colors**: Sage Green, Teal Blue, Soft Cream, Burnt Orange, Soft Lavender, Charcoal
- **Typography**: Montserrat (headlines) + Inter (body text)
- **Components**: Fully reusable Button, Badge, and Card components
- **Responsive**: Mobile-first design with clean, modern aesthetics

### 📄 Pages Built

#### Core Pages
- **Homepage** - Hero, 4-Stage System cards, featured products, science teaser
- **The System** - ⭐ **Flagship Content Page** - Complete 4-Stage Recovery System explanation with:
  - Hero section with system overview
  - The Recovery Reality (time spent training vs. recovering)
  - All 4 Stages in detail with lifestyle imagery placeholders
  - Recovery cycle visual diagram
  - Science section (sympathetic vs. parasympathetic)
  - "How to Use the System" practical guidance
  - Shop by Stage conversion cards
  - Athlete testimonials
- **About Us** - Brand story, values, transparency statement, curator profiles
- **The Science of Recovery** - Neuroscience of recovery, parasympathetic activation
- **Contact** - Contact form, email, social links

#### E-Commerce Pages
- **Product Listing Page (PLP)** - Women's shop with filters:
  - Filter by Recovery Stage (1-4)
  - Filter by Product Type (tops, bottoms, sets, accessories)
  - Filter by Fabric (natural, synthetic, blend)
  - Price range slider
  - Sort options (newest, price low-high, price high-low)
  - 12 placeholder products with stage badges

#### Blog
- **Blog Index** - Featured post + grid of all posts
- **Blog Post Template** - Individual post pages with related products
- **8 Placeholder Posts**:
  - How Does Sitting on the Couch Help Recovery?
  - Do Compression Socks Really Help You Recover?
  - Hot vs. Cold: The Great Recovery Debate
  - Why Your Workout Clothes Are Sabotaging Your Recovery
  - The Ritual Effect: How Hot Chocolate Accelerates Recovery
  - Microplastics in Athletic Wear: What You Need to Know
  - You Spend More Time Recovering Than Training
  - Soft Fabrics Aren't a Luxury, They're a Signal

#### Supporting Pages
- **Shipping & Returns** - 60-day return window, free shipping over $75
- **Privacy Policy** - Full GDPR-compliant privacy policy

### 🧩 Components

#### Navigation
- Responsive navigation with dropdown menus
- Mobile hamburger menu
- Organized by:
  - Men / Women (with stage filters)
  - Shop by Type (Sets, Compression, Loungewear, Sleep, Accessories)
  - The System (How It Works, Science, Why Clothing Matters)
  - About / Blog

#### UI Components
- **Button** - 3 variants (primary, secondary, outline) with 3 sizes
- **Badge** - Stage badges (color-coded by stage 1-4)
- **Card** - Hover effects, customizable padding

#### Footer
- Shop, Learn, and Support columns
- Newsletter signup
- Social media icons
- Copyright and links

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS (v4 with @theme inline)
- **Fonts**: Google Fonts (Montserrat + Inter)
- **Build Tool**: Turbopack
- **Linting**: ESLint

## 📚 Documentation

**New Developer? Start here:**
1. **[NEXT_STEPS.md](NEXT_STEPS.md)** - Quick start guide (read this first!)
2. **[DEVELOPMENT_LOG.md](DEVELOPMENT_LOG.md)** - Complete project status & session notes
3. **[TH8TA_The_System_Page.md](TH8TA_The_System_Page.md)** - Full design spec for flagship page
4. **This README** - Project overview & technical reference

## Getting Started

### Prerequisites
- Node.js 18+
- npm, yarn, or pnpm

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

```
th8ta-website/
├── app/
│   ├── about/          # About Us page
│   ├── blog/           # Blog index + [slug] post template
│   ├── contact/        # Contact page
│   ├── privacy/        # Privacy Policy
│   ├── science/        # Science of Recovery page
│   ├── shipping/       # Shipping & Returns
│   ├── shop/
│   │   └── women/      # Product Listing Page with filters
│   ├── globals.css     # Global styles + brand colors
│   ├── layout.tsx      # Root layout with fonts + metadata
│   └── page.tsx        # Homepage
├── components/
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── Badge.tsx
│   │   ├── Card.tsx
│   │   └── index.ts
│   ├── Navigation.tsx
│   └── Footer.tsx
└── public/             # Static assets
```

## Design Tokens

### Colors (CSS Variables)
```css
--color-sage: #5C6F4E
--color-teal: #3B5F75
--color-cream: #E8E3D5
--color-terracotta: #D4653B
--color-lavender: #A6A3C5
--color-charcoal: #3D3D3D
```

### Typography
- Headlines: `font-[var(--font-headline)]` (Montserrat)
- Body: `font-[var(--font-body)]` (Inter)

### 4-Stage Recovery System

Each product is tagged with one of four recovery stages:

1. **Stage 1: Immediate Swap** (Teal) - Soaked, frozen, or just finished
2. **Stage 2: Shower & Soothe** (Sage) - Clean, warm, gently held
3. **Stage 3: Reintegrate** (Terracotta) - Presentable AF, still recovering
4. **Stage 4: Reset** (Lavender) - Wind-down mode, deep calm

## Next Steps / TODO

### Essential for Launch
- [ ] Add actual product images (currently using gradients)
- [ ] Create Product Detail Page (PDP) template
- [ ] Add men's product listing page
- [ ] Connect to a CMS (Contentful, Sanity, etc.) for blog posts
- [ ] Integrate e-commerce platform (Shopify, Stripe, etc.)
- [ ] Add shopping cart functionality
- [ ] Implement search functionality
- [ ] Add wishlist feature

### Nice-to-Have
- [ ] User accounts / authentication
- [ ] Product reviews
- [ ] Size recommendation tool
- [ ] Live chat support
- [ ] Email newsletter integration
- [ ] Analytics integration (Google Analytics, Plausible, etc.)
- [ ] Performance optimization (image optimization, lazy loading)
- [ ] SEO optimization (sitemap, meta tags, structured data)
- [ ] Accessibility audit (WCAG AA compliance)

### Content Needed
- [ ] Professional product photography
- [ ] Lifestyle images for hero sections
- [ ] Team/curator headshots
- [ ] Blog post images
- [ ] Logo design (infinity hourglass mark)
- [ ] Favicon
- [ ] Social media images

## Deployment

### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Other Options
- **Netlify**: Compatible with Next.js
- **Cloudflare Pages**: Supports Next.js
- **AWS Amplify**: Supports Next.js
- **Self-hosted**: Use `npm run build` + `npm start`

## Brand Voice

- Confident, warm, real
- Funny but never cheap
- Think: "cashmere after a hot bath... but with jokes"
- Tone examples:
  - "You earned this layer."
  - "Not activewear. Afterwear."
  - "Because you've already done enough."

## Contributing

This is a proprietary project. For questions or contributions, contact hello@th8ta.com.

## License

Copyright © 2024 TH8TA. All rights reserved.
