# TH8TA WEBSITE BUILD PROMPT
## For Claude Code, Lovable, Bolt, or Similar AI Dev Tools

---

## PROJECT OVERVIEW

Build a modern, minimal e-commerce website for **TH8TA** (pronounced "theta"), a curated retail brand for endurance athlete recovery wear. 

**Brand positioning:** We're not activewear. We're afterwear—curated recovery gear organized around a 4-Stage Recovery System for endurance athletes who know that what you wear after matters just as much.

**Design philosophy:** Minimal, sophisticated, photography-forward. The interface is clean gray/white/lilac; the product photography carries all the warmth and color.

---

## TECH STACK

- **Framework:** Next.js 14+ (App Router)
- **Styling:** Tailwind CSS (use the custom design tokens provided)
- **Hosting:** Vercel
- **E-commerce Backend:** Shopify Headless (Storefront API) - integrate later
- **Fonts:** DM Sans (headings) + Inter (body) via Google Fonts

---

## DESIGN SYSTEM

### Color Palette

```css
/* Primary Colors */
--color-charcoal: #2A2A2A;        /* Headlines, nav, primary text */
--color-charcoal-soft: #3D3D3D;   /* Large text blocks */

/* Backgrounds */
--color-white: #FFFFFF;            /* Cards, clean space */
--color-soft-white: #FAFAFA;       /* Main page background */
--color-warm-gray: #F2F0ED;        /* Section dividers, alternating sections */

/* Accent - Lilac (USE SPARINGLY) */
--color-lilac: #B8A9C9;            /* CTAs, badges, hovers */
--color-lilac-hover: #A899BA;      /* Hover state */

/* Neutrals */
--color-border: #E5E5E5;           /* Borders, dividers */
--color-text-secondary: #6B6B6B;   /* Captions, metadata */
--color-text-tertiary: #999999;    /* Placeholders */
```

### Lilac Usage Rules (CRITICAL)

**USE lilac for:**
- Primary CTA buttons ("Add to Cart", "Shop Now")
- Stage badges (small pills)
- Hover states on text links
- Active navigation indicator
- Focus states on form inputs
- Newsletter signup button

**NEVER use lilac for:**
- Large background sections
- Headers or body text
- Multiple elements at once on screen

**Rule:** Lilac should be a whisper, not a shout. Aim for 1-3 lilac elements visible at any time.

### Typography

```css
/* Headings - DM Sans */
H1: 48px/1.1, semibold, charcoal
H2: 36px/1.2, semibold, charcoal  
H3: 28px/1.3, medium, charcoal
H4: 22px/1.4, medium, charcoal

/* Body - Inter */
Body: 16px/1.6, regular, charcoal-soft
Body Large: 18px/1.6, regular
Body Small: 14px/1.5, regular
Caption: 14px/1.5, regular, text-secondary

/* Special */
Overline: 12px, semibold, uppercase, tracking-wide, text-secondary
```

### Spacing Scale

```
4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px, 96px, 128px
```

### Border Radius

- Buttons: 4px
- Cards: 8px
- Badges: 9999px (pill)

---

## PAGES TO BUILD

### 1. Homepage

**Hero Section**
- Full-width lifestyle image (athlete in recovery gear, muted color grading)
- Overlay with headline and CTA
- Content:
  ```
  H1: "You earned this layer."
  Subtitle: "Not activewear. Afterwear. Curated recovery gear for endurance athletes."
  CTA Button (lilac): "Shop the System"
  Secondary Link: "Learn the Science →"
  ```

**Section 2: The Problem (warm-gray background)**
```
"There were so many cute clothes out there, but we hit saturation. Another puffer—when do I wear it? Is it for working out? The gym-to-office crossover wasn't for us. Every piece of TH8TA gear has a purpose. A stage. A moment in your recovery when it's the exact right thing."
```

**Section 3: The 4 Stages (white background)**
- 4-column grid (2x2 on mobile)
- Each card has:
  - Lifestyle image (stone background or muted environment)
  - Stage number in lilac circle
  - Stage name
  - One-line tagline
  - "Shop Stage X →" link

```
Stage 1: Immediate Swap — "Get dry. Get warm. Get moving."
Stage 2: Shower & Soothe — "Cashmere after a hot bath."
Stage 3: Reintegrate — "Presentable AF. Still recovering."
Stage 4: Reset — "Permission to do absolutely nothing."
```

**Section 4: Featured Products (soft-white background)**
- "Curator's Picks" header
- 4-product grid with product cards
- Product cards show: image, name, price, stage badge

**Section 5: The Science Teaser (warm-gray background)**
```
"Your brain needs permission to stop being an athlete."
Body: "Recovery isn't just physical. The faster your nervous system shifts from fight-or-flight to rest-and-digest, the better you recover. What you wear plays a role."
CTA Button (lilac): "Explore the Science"
```

**Section 6: Newsletter Signup**
```
"Recovery tips + new drops."
Email input + Submit button (lilac)
```

**Footer**
- Charcoal background, white text
- Columns: Shop, The System, About, Support
- Social icons
- Copyright

---

### 2. Navigation

**Desktop Header:**
- Left: TH8TA logo (wordmark in charcoal)
- Center: Nav links (Women, Men, The System, About)
- Right: Search icon, Cart icon

**Mobile Header:**
- Left: Hamburger menu
- Center: TH8TA logo
- Right: Cart icon

**Dropdown Menus:**

**Women / Men:**
```
Shop by Stage
├── Stage 1: Immediate Swap
├── Stage 2: Shower & Soothe
├── Stage 3: Reintegrate
├── Stage 4: Reset
└── Shop All

Shop by Type
├── Joggers & Pants
├── Tops & Layers
├── Sets
├── Compression
└── Sleep & Lounge
```

**The System:**
```
├── How It Works
├── The Science of Recovery
└── Why Clothing Matters
```

**About:**
```
├── Our Story
├── Transparency & Values
└── Contact
```

---

### 3. Product Listing Page (PLP)

**Layout:**
- Left sidebar: Filters (desktop) / Filter button (mobile)
- Main area: Product grid

**Filters:**
- Stage (1, 2, 3, 4)
- Type (Joggers, Tops, Sets, etc.)
- Size
- Color
- Price range

**Product Grid:**
- 4 columns desktop, 3 tablet, 2 mobile
- Product cards with hover effect (slight lift + shadow)

**Product Card:**
```
┌─────────────────────┐
│ [Product Image]     │  ← 3:4 aspect ratio, stone background
│                     │
├─────────────────────┤
│ Stage 2             │  ← Lilac badge (small pill)
│ Recovery Jogger     │  ← Product name, charcoal, medium weight
│ $88                 │  ← Price, text-secondary
└─────────────────────┘
```

**Hover State:**
- Card lifts slightly (translateY -4px)
- Subtle shadow appears
- Optional: Second product image

---

### 4. Product Detail Page (PDP)

**Layout:**
- Left: Image gallery (main image + thumbnails)
- Right: Product info

**Image Gallery:**
- Main image (stone background product shot)
- 4-5 thumbnails below
- Mix of studio shots and 1 lifestyle shot
- Click to enlarge/zoom

**Product Info:**
```
Stage 2: Shower & Soothe          ← Lilac badge
Recovery Jogger                    ← H1
$88                                ← Price

Ultra-soft modal blend. Post-shower perfect. 
Gentle compression without restriction.      ← Description

[Size selector: XS S M L XL]
[Color swatches]

[ Add to Cart ]                    ← Lilac button, full width

─────────────────────────────────

When to Wear This                  ← Accordion/tabs
└── "Post-shower, pre-couch. The coffee shop after a long run. 
     Anywhere you need to look human but still feel like you're 
     recovering."

Why We Chose It                    ← Accordion/tabs  
└── "We tested 14 joggers. This one had the perfect balance of 
     structure and softness—tapered enough to look intentional, 
     soft enough to feel like nothing."

Fabric & Transparency              ← Accordion/tabs
└── "92% Modal, 8% Spandex. No microplastic shedding. 
     Machine wash cold, tumble dry low."

─────────────────────────────────

Complete the Stage                 ← Related products (same stage)
[3-4 product cards]
```

---

### 5. The System Page

**Hero:**
```
H1: "The 4-Stage Recovery System"
Subtitle: "You already know what to wear during your workout. We mapped everything after."
```

**Section: The Recovery Reality**
```
H2: "Here's What Most Athletes Miss"

"You spend 1-3 hours training. You spend 21-23 hours recovering.

Yet somehow, the entire athletic apparel industry is obsessed with those 2 hours. 
They'll engineer you a lighter running short, a more breathable top, a faster shoe. 
But when you peel off that gear—soaked, exhausted, finally done—what are you supposed to put on?"
```

**Section: The 4 Stages (detailed)**

For each stage, create a full-width section with:
- Left: Lifestyle image (alternating sides)
- Right: Content

```
STAGE 1: IMMEDIATE SWAP
─────────────────────────────────
Color accent: Lilac badge with "01"

When You're Here:
☑ You just finished your workout
☑ You're soaked (sweat, rain, or both)
☑ You're still in fight-or-flight mode
☑ Your car seat is leather and you're dripping

What Your Body Needs:
Your sympathetic nervous system is still dominant. You're not recovering yet—you're transitioning. Stage 1 gear gets you out of wet, restrictive fabric and into something dry, warm, and easy.

The Right Gear:
• Moisture-wicking pullovers
• Quick-dry shorts or joggers
• Lightweight baselayers
• The Rump Wrap™

[Shop Stage 1 →] (lilac button)

─────────────────────────────────
```

Repeat for Stages 2, 3, 4 with alternating layouts.

**Section: The Cycle Diagram**
- Visual circular diagram showing:
  WORKOUT → Stage 1 → Stage 2 → Stage 3 → Stage 4 → SLEEP → (back to WORKOUT)

**Section: Shop by Stage**
- 4 large clickable cards linking to each stage's PLP

---

### 6. Science of Recovery Page

**Hero:**
```
H1: "Your Brain Needs Permission to Stop Being an Athlete"
Subtitle: "The neuroscience of recovery clothing, rituals, and why soft fabrics aren't a luxury."
```

**Sections:**

1. **The Sympathetic-Parasympathetic Switch**
   - Explain fight-or-flight vs rest-and-digest
   - Simple diagram showing the two states
   - Why athletes stay in sympathetic mode post-workout

2. **The Role of Rituals & Tactile Anchors**
   - How soft fabrics signal safety to the brain
   - Why consistent recovery rituals accelerate nervous system switching
   - The science of tactile comfort

3. **Why Recovery Clothing Matters**
   - The compression contradiction (tight workout clothes vs. soft recovery needs)
   - How looking good = feeling good = recovery signal
   - Data: Athletes spend 80%+ of time in recovery, not training

4. **Beyond Nutrition**
   ```
   "Everyone knows post-workout carbs and protein matter. But most athletes 
   ignore the mental recovery switch. That switch determines how well your 
   body absorbs those nutrients, repairs tissue, and adapts."
   ```

**Design notes:**
- Use warm-gray background sections for key quotes
- Include simple illustrations/icons for the nervous system
- Pull quotes in larger text
- Keep it accessible, not academic

---

### 7. About Page

**Hero Image:** Team/founder or lifestyle shot

**Sections:**

1. **Who We Are**
   ```
   "TH8TA is what comes after. After the finish line, the climb, the brutal 
   tempo effort. We're not here to make your new favorite race-day kit. 
   We're here for everything after that."
   ```

2. **Why We Exist**
   ```
   "Because the recovery aisle doesn't exist. Because most brands stop at 
   the sweat. Because you've already done enough."
   ```

3. **Transparency & Values**
   - Microplastics commitment
   - Supply chain honesty
   - Recommend laundry filters (Guppyfriend, Cora Ball)

4. **The Curators** (optional)
   - Team photos with short bios
   - Endurance credentials (ultra-runner, cyclist, etc.)

---

### 8. Blog (Journal)

**Index Page:**
- Header: "The Recovery Journal"
- Subhead: "Science, stories, and sass from the cool-down."
- Grid of blog post cards (image, title, excerpt, date)

**Blog Post Template:**
- Hero image (full-width)
- Title, author, date
- Body content (markdown/rich text)
- Related products section at bottom
- Share buttons

**Initial Post Ideas:**
1. How Does Sitting on the Couch Help Recovery?
2. Do Compression Socks Really Help You Recover?
3. Hot vs. Cold: The Great Recovery Debate
4. Why Your Workout Clothes Are Sabotaging Your Recovery
5. Soft Fabrics Aren't a Luxury—They're a Signal

---

### 9. Additional Pages

**Contact**
- Simple contact form (Name, Email, Subject, Message)
- Email address
- Social links

**Shipping & Returns**
- Free shipping over $75
- 60-day returns ("Test it through a full training cycle")
- Easy exchanges

**Privacy Policy**
- Standard e-commerce privacy policy

**Size Guide**
- Size chart tables
- How to measure
- Fit descriptions

---

## COMPONENT LIBRARY

Build these reusable components:

### Buttons
```jsx
<Button variant="primary">Add to Cart</Button>    // Lilac bg, white text
<Button variant="secondary">Learn More</Button>   // Charcoal outline
<Button variant="ghost">See All →</Button>        // Text only, lilac on hover
```

### Badges
```jsx
<Badge variant="stage">Stage 2</Badge>            // Lilac bg, white text, pill
<Badge variant="neutral">New</Badge>              // Warm-gray bg, charcoal text
```

### Product Card
```jsx
<ProductCard
  image="/path/to/image.jpg"
  stage={2}
  name="Recovery Jogger"
  price={88}
  href="/products/recovery-jogger"
/>
```

### Section Wrapper
```jsx
<Section bg="white">...</Section>
<Section bg="warm-gray">...</Section>
<Section bg="soft-white">...</Section>
```

### Stage Card
```jsx
<StageCard
  number={1}
  name="Immediate Swap"
  tagline="Get dry. Get warm. Get moving."
  image="/path/to/image.jpg"
  href="/shop/stage-1"
/>
```

---

## IMAGE GUIDELINES

### Photography Style
- 80% of product images: Stone/warm gray studio backgrounds (#C8C2BC to #E2DDD7)
- 20% lifestyle images: Desaturated environments (muted golden hour, gray urban, neutral interiors)
- All images should have cohesive, muted color grading
- Models appear relaxed, in recovery mode (not athletic/action poses)
- Soft, diffused lighting throughout

### Image Specifications
- Product cards: 3:4 aspect ratio
- Hero images: 16:9 aspect ratio
- Product detail: Square (1:1) or 3:4
- Blog thumbnails: 16:9

### Placeholder Images
Use these Unsplash collections or generate with AI:
- Stone/concrete backgrounds with warm gray tones
- Lifestyle shots with desaturated color grading
- Models in comfortable, relaxed poses

---

## RESPONSIVE BREAKPOINTS

```css
/* Mobile first */
sm: 640px
md: 768px
lg: 1024px
xl: 1280px
2xl: 1440px
```

**Key responsive changes:**
- Navigation: Hamburger menu on mobile
- Product grid: 4 → 3 → 2 columns
- Hero text: Reduce font sizes
- Stage sections: Stack vertically on mobile
- Filters: Slide-out drawer on mobile

---

## INTERACTIONS & ANIMATIONS

**Keep it subtle:**
- Button hovers: Background color shift (150ms ease)
- Card hovers: Slight lift + shadow (200ms ease)
- Page transitions: Fade in (300ms)
- Link hovers: Color shift to lilac (150ms)

**Avoid:**
- Bouncy/playful animations
- Complex scroll animations
- Anything that feels "fun" or "energetic"

**The vibe is:** Calm, sophisticated, intentional

---

## ACCESSIBILITY

- WCAG AA contrast ratios (4.5:1 minimum for text)
- All images have descriptive alt text
- Keyboard navigation support
- Focus states visible on all interactive elements
- Form labels properly associated
- Skip-to-content link

---

## SEO CONSIDERATIONS

**Homepage:**
- Title: "TH8TA | Recovery Wear for Endurance Athletes"
- Meta: "Curated recovery gear organized by the 4-Stage Recovery System. Not activewear. Afterwear."

**Product Pages:**
- Title: "[Product Name] | Stage [X] Recovery | TH8TA"
- Meta: Product description + stage information

**The System Page:**
- Title: "The 4-Stage Recovery System | TH8TA"
- Meta: "From the moment you finish to the minute you fall asleep—recovery gear for every phase."

---

## DEPLOYMENT CHECKLIST

Before launch, verify:
- [ ] All pages render correctly on mobile/tablet/desktop
- [ ] Navigation works with dropdowns
- [ ] Product cards link to correct PDPs
- [ ] Stage filtering works on PLPs
- [ ] Forms submit correctly
- [ ] Images are optimized (WebP, lazy loading)
- [ ] Fonts load correctly (DM Sans + Inter)
- [ ] Lilac accent used sparingly and consistently
- [ ] Footer links all work
- [ ] Meta tags on all pages
- [ ] Favicon and social share images

---

## FILES REFERENCE

This prompt works alongside:
1. **TH8TA_Design_System.css** - Full CSS with all variables and component styles
2. **TH8TA_AI_Image_Guidelines.md** - Complete guide for generating consistent product photography
3. **TH8TA_Brand_Design_Guide.md** - Full brand strategy, voice, and positioning

---

## START HERE

**Phase 1:** Build homepage + navigation + footer
**Phase 2:** Build product listing page + product detail page (with placeholder products)
**Phase 3:** Build The System page + Science page
**Phase 4:** Build About + Blog + supporting pages
**Phase 5:** Integrate Shopify Storefront API for real products

---

**The goal:** A clean, sophisticated, minimal e-commerce site where the photography does the heavy lifting and the interface stays out of the way. Every element should feel intentional and calm—like the brand itself.

Let's build.
