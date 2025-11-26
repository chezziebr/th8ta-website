# Next Developer: Start Here 👋

Welcome to the TH8TA project! This document will get you up and running quickly.

## Quick Start (5 minutes)

```bash
# 1. Navigate to project
cd "/Users/caesarabrungraber/CascadeProjects/TH8TA Endurance/th8ta-website"

# 2. Install dependencies (if needed)
npm install

# 3. Start dev server
npm run dev

# 4. Open browser
# → http://localhost:3000
```

## What You're Looking At

A modern e-commerce site for **TH8TA** - recovery wear for endurance athletes. The unique angle: everything is organized by a **4-Stage Recovery System™** that maps what to wear from the moment you finish working out until you fall asleep.

**Think:** Title Nine's curation + The Feed's authority + Patagonia's transparency

## Current State: ✅ 12 Pages Built, Ready for E-commerce

### What Works Now

✅ **Homepage** - Complete with hero, 4-stage cards, featured products
✅ **The System** - Flagship content page explaining the entire philosophy
✅ **About, Science, Contact** - All core content pages
✅ **Women's Shop** - Product listing with working filters (stage, type, fabric, price)
✅ **Blog** - Index + post template (8 placeholder posts)
✅ **Shipping, Privacy** - Policy pages

### What Needs to Be Built Next

**Priority 1 (Block everything else):**
1. **Product Detail Page (PDP)** - Template for individual products
   - See `DEVELOPMENT_LOG.md` for PDP requirements
   - Must include stage badge, fabric transparency, "Complete the Stage"

**Priority 2 (Core e-commerce):**
2. **Shopping Cart** - State management + cart page
3. **Men's Shop** - Clone women's shop, update products
4. **Search** - Make the search icon functional

**Priority 3 (Platform integration):**
5. **E-commerce Platform** - Shopify/Stripe integration (ask product owner)
6. **CMS** - Connect blog to Contentful/Sanity
7. **Real Product Data** - Replace placeholder products

## Key Files to Review First

**Start here in this order:**

1. **DEVELOPMENT_LOG.md** (this is your bible)
   - Full project status
   - What's built, what's not
   - Design system reference
   - Recent changes

2. **TH8TA_The_System_Page.md** (understand the vision)
   - 758-line design spec
   - Brand voice guidelines
   - Content strategy

3. **README.md** (project documentation)
   - Tech stack details
   - Component usage
   - Deployment options

4. **app/globals.css** (design system)
   - All CSS variables (colors, fonts, spacing)
   - Stage color mappings

5. **app/page.tsx** (homepage - see patterns)
   - Component usage examples
   - Layout patterns
   - Responsive design approach

## Design System Cheat Sheet

### Colors (CSS Variables)

```css
/* Use these in your code, NOT hex codes */
var(--color-sage)       /* #5C6F4E - Stage 2 */
var(--color-teal)       /* #3B5F75 - Stage 1 */
var(--color-terracotta) /* #D4653B - Stage 3, CTAs */
var(--color-lavender)   /* #A6A3C5 - Stage 4 */
var(--color-cream)      /* #E8E3D5 - Backgrounds */
var(--color-charcoal)   /* #3D3D3D - Text */
```

### Stage → Color Mapping (Memorize This)

```
Stage 1 = Teal       (Immediate Swap)
Stage 2 = Sage       (Shower & Soothe)
Stage 3 = Terracotta (Reintegrate)
Stage 4 = Lavender   (Reset)
```

### Typography

```typescript
// Headlines
<h1 className="text-4xl md:text-6xl font-bold font-[var(--font-headline)]">

// Body
<p className="text-lg leading-relaxed font-[var(--font-body)]">
```

### Components (Pre-built)

```typescript
import { Button, Badge, Card } from '@/components/ui';

// Button
<Button variant="primary" size="lg">Shop Now</Button>
<Button variant="secondary">Learn More</Button>
<Button variant="outline">View Details</Button>

// Badge (auto-colors by stage)
<Badge stage={1} />  // Teal
<Badge stage={2} />  // Sage
<Badge stage={3} />  // Terracotta
<Badge stage={4} />  // Lavender

// Card
<Card hover padding="md">
  {children}
</Card>
```

## Common Tasks

### Adding a New Page

```bash
# 1. Create directory
mkdir app/your-page

# 2. Create page.tsx
touch app/your-page/page.tsx
```

```typescript
// Template:
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';

export const metadata = {
  title: 'Page Title | TH8TA',
  description: 'Page description',
};

export default function YourPage() {
  return (
    <>
      <Navigation />
      <main>
        {/* Your content */}
      </main>
      <Footer />
    </>
  );
}
```

### Adding a New Component

```typescript
// components/YourComponent.tsx
import React from 'react';

interface YourComponentProps {
  // Define props
}

export const YourComponent: React.FC<YourComponentProps> = ({ props }) => {
  return (
    <div>
      {/* Your component */}
    </div>
  );
};
```

### Linking to Filtered Shop Pages

```typescript
// Link to Stage 1 women's products
<Link href="/shop/women?stage=1">

// Link to specific product type
<Link href="/shop/women?type=tops">

// Multiple filters (not yet implemented, but structure ready)
<Link href="/shop/women?stage=2&type=sets">
```

## Project Structure at a Glance

```
app/
├── page.tsx              ← Homepage
├── system/page.tsx       ← 🌟 Flagship content
├── about/page.tsx
├── science/page.tsx
├── shop/
│   └── women/page.tsx    ← Has filters & sort
├── blog/
│   ├── page.tsx          ← Index
│   └── [slug]/page.tsx   ← Dynamic posts
├── contact/page.tsx
├── shipping/page.tsx
├── privacy/page.tsx
├── globals.css           ← All CSS variables here
└── layout.tsx            ← Root layout + fonts

components/
├── ui/
│   ├── Button.tsx        ← 3 variants, 3 sizes
│   ├── Badge.tsx         ← Stage badges (auto-color)
│   └── Card.tsx          ← Container with hover
├── Navigation.tsx        ← Responsive nav + dropdowns
└── Footer.tsx            ← Footer with newsletter
```

## Known Issues (Don't Spend Time on These)

These are documented and expected:

1. All images are CSS gradients (need real photos)
2. Blog posts are hardcoded (need CMS)
3. Products are placeholder data (need database)
4. Cart icon is non-functional (needs implementation)
5. Search icon is non-functional (needs implementation)
6. Forms don't submit anywhere (need backend)

## Testing Your Changes

```bash
# Always build before committing
npm run build

# Should see:
# ✓ Compiled successfully
# Route (app)
# ├ ○ / (12 routes listed)

# If you see errors, fix them before moving on
```

## Brand Voice (Important!)

**Do:**
- Be specific: "Post-long run in the car" ✅ not "after exercise" ❌
- Add personality: "Presentable AF" ✅
- Tell the truth: Fabric disclosure, microplastic notes ✅
- Science-backed but accessible ✅

**Don't:**
- Oversell: "Life-changing miracle gear" ❌
- Medical claims: "Prevents injury" ❌
- Vague: "Versatile comfort" ❌

**Example Headlines:**
- "You earned this layer." ✅
- "Not activewear. Afterwear." ✅
- "Because you've already done enough." ✅

## Need Help?

1. **Design questions:** Check `TH8TA_The_System_Page.md`
2. **Technical questions:** Check `DEVELOPMENT_LOG.md`
3. **Component usage:** Look at existing pages (`app/page.tsx`, `app/system/page.tsx`)
4. **Stuck on something:** Read the existing code - patterns are consistent

## Before You Commit

- [ ] `npm run build` succeeds
- [ ] Tested on mobile view (resize browser)
- [ ] Used CSS variables, not hex codes
- [ ] Added proper TypeScript types
- [ ] Component follows existing patterns
- [ ] Updated `DEVELOPMENT_LOG.md` if major change

## Recommended Next Task

**Build the Product Detail Page (PDP)** - This unblocks everything else.

### PDP Requirements:
- Left: Image gallery (main + thumbnails)
- Right: Product name, price, stage badge, size selector, add to cart
- Tabs below: "When to Wear This", "Why We Chose It", "Fabric & Transparency", "Specs", "Reviews"
- Bottom: "Complete the Stage" (related products), "You Might Also Like"

### PDP Route:
- Path: `/product/[id]`
- Create: `app/product/[id]/page.tsx`

### Placeholder Product ID to Test:
- `/product/1` (Recovery Jogger - Stage 3)
- `/product/4` (Modal Sleep Set - Stage 4)

See women's shop page (`app/shop/women/page.tsx`) for existing product data structure.

## Quick Wins (If You Have 30 Minutes)

1. **Add real favicon** - Replace `app/favicon.ico`
2. **Create 404 page** - `app/not-found.tsx`
3. **Add loading states** - `app/loading.tsx`
4. **Men's shop page** - Copy `app/shop/women/page.tsx` to `app/shop/men/page.tsx`

## Questions to Ask Product Owner

Before building more features, need answers on:

1. **E-commerce platform:** Shopify, Stripe, custom?
2. **CMS for blog:** Contentful, Sanity, or keep hardcoded?
3. **Product data source:** Where does it live?
4. **User accounts:** Required? Which auth provider?
5. **Image hosting:** Cloudinary, self-hosted?

---

## TL;DR

- ✅ 12 pages built and working
- 🚧 Need: Product Detail Page, Cart, E-commerce integration
- 🎨 Design system fully implemented (use CSS variables)
- 📚 Read: `DEVELOPMENT_LOG.md` for full context
- 🚀 Next: Build PDP at `/product/[id]`

**Good luck! The foundation is solid. Time to add the e-commerce layer.** 🎯

---

*Created: November 22, 2024*
*Project Location: `/Users/caesarabrungraber/CascadeProjects/TH8TA Endurance/th8ta-website`*
