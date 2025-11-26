# TH8TA Product System Guide

**Created:** November 23, 2024
**Status:** MVP Complete - 5 Products Live
**Next Step:** Scale to all 30+ products

---

## What We Built

A complete product catalog system with:
- **Product Detail Pages (PDP)** with expandable sections
- **Shop page** with real product data and working filters
- **Product database** with TypeScript types
- **5 example products** fully populated with fabric/care data from brand websites

---

## File Structure

```
th8ta-website/
├── lib/
│   ├── types.ts              # TypeScript interfaces for Product, MatchedSet
│   └── products.ts            # Product database (single source of truth)
├── app/
│   ├── product/[slug]/
│   │   └── page.tsx           # Dynamic Product Detail Page template
│   └── shop/women/
│       └── page.tsx           # Product listing with filters
├── public/products/           # 80+ product images
└── TH8TA wholesale - UPDATED with fabric care data.csv  # Updated CSV
```

---

## How the System Works

### 1. Product Data Structure (`lib/types.ts`)

Complete TypeScript interface with all fields:

```typescript
export interface Product {
  // Basic Info
  id: string;              // Internal SKU (e.g., "400532")
  slug: string;            // URL-friendly (e.g., "fitted-tank")
  name: string;            // Display name
  brand: string;

  // Pricing
  retailPrice: number;

  // Images & Colors
  colors: ColorOption[];   // Array of {name, images[]}
  featuredImage: string;   // Default image

  // Product Details
  category: ProductCategory;
  recoveryStage?: RecoveryStage;  // 1-4
  matchedSetId?: string;

  // Descriptions (from CSV)
  shortDescription: string;  // One-liner
  ourDescription: string;    // "Our Item Description"
  inRecovery: string;        // "In Recovery" explanation
  wearIt: string;            // "Wear It" styling guidance

  // Technical Details (fetched from brand websites)
  fabric: {
    composition: string;      // "94% Polyester, 6% Spandex"
    feel: string;             // "Buttery soft, lightweight"
    type: FabricType;         // 'natural' | 'synthetic' | 'blend'
    microplasticLevel: MicroplasticLevel;  // 'none' | 'low' | 'medium' | 'high'
    careInstructions: string[];  // Array of care steps
  };

  fit: {
    description: string;       // "Fitted core with halter shoulders"
    showsOff: string;          // "Shoulders, core, arms"
  };

  // Recommendations
  pairItWith: OutfitPairing[];  // Other product suggestions

  // Supply Chain & Transparency
  supplyChain?: string;
  sustainabilityNotes?: string;

  // External
  brandLink?: string;

  // Inventory
  inStock?: boolean;
  sizes?: string[];
}
```

### 2. Product Database (`lib/products.ts`)

Single source of truth for all product data:

```typescript
export const products: Product[] = [
  {
    id: '400532',
    slug: 'fitted-tank',
    name: 'Fitted Tank',
    brand: 'Beyond Yoga',
    retailPrice: 38,
    colors: [
      { name: 'Cloud White', images: ['/products/400532 - white.webp'] },
      { name: 'Pink', images: ['/products/400532 - pink.webp'] },
    ],
    // ... all other fields
  },
  // ... more products
];

// Helper functions
export function getProductById(id: string): Product | undefined;
export function getProductBySlug(slug: string): Product | undefined;
export function getProductsByStage(stage: number): Product[];
export function getProductsByCategory(category: string): Product[];
```

### 3. Product Detail Page (`app/product/[slug]/page.tsx`)

Dynamic route that loads any product by slug:

**Key Features:**
- Image gallery with color selection
- Expandable sections (accordion UI):
  - "How to Wear It" (wearIt + fit details) - **DEFAULT OPEN**
  - "Why We Love It" (ourDescription) - **DEFAULT OPEN**
  - "In Recovery" (inRecovery)
  - "Fabric & Care" (composition, feel, care instructions, microplastic notes)
  - "Supply Chain" (if available)
- "Pair It With" section showing full outfit suggestions
- Size selector
- Add to Cart button
- Breadcrumb navigation
- Brand link

**Example URL:**
- `/product/fitted-tank` → loads product with slug "fitted-tank"
- `/product/not-for-jogging` → loads product with slug "not-for-jogging"

### 4. Shop Page (`app/shop/women/page.tsx`)

Product listing with working filters:

**Filters:**
- Recovery Stage (1-4) - radio buttons
- Product Type (tops, bottoms, outerwear, accessories) - radio buttons
- Fabric Type (natural, synthetic, blend) - radio buttons
- Price range slider ($0-$200)

**Features:**
- Sort options (newest, price low-high, price high-low)
- Results count display
- Product cards with real images
- Links to product detail pages
- Mobile responsive grid

---

## 5 Example Products (Complete)

### ✅ 400532 - Fitted Tank
- **Brand:** Beyond Yoga
- **Price:** $38
- **Stage:** 3 (Reintegrate)
- **Fabric:** 94% Polyester, 6% Spandex
- **Care:** Machine wash cold, tumble dry low, use Guppyfriend bag
- **Images:** 5 photos (white, pink, navy)

### ✅ 400536 - Not for Jogging
- **Brand:** Vuori
- **Price:** $94
- **Stage:** 2 (Shower & Soothe)
- **Fabric:** 89% Recycled Polyester, 11% Elastane (DreamKnit™)
- **Care:** Machine wash cold, tumble dry low, recommend Guppyfriend bag
- **Images:** 6 photos (3 colors)

### ✅ 400533 - Every Day Short
- **Brand:** Vuori
- **Price:** $64
- **Stage:** 3 (Reintegrate)
- **Fabric:** 75% Recycled Polyamide, 25% Elastane (AllTheFeels)
- **Care:** Machine wash cold, do not iron, use Guppyfriend bag
- **Images:** 5 photos (black, magenta)

### ✅ 400537 - Light Compression Leggings
- **Brand:** Beyond Yoga
- **Price:** $88
- **Stage:** 2 (Shower & Soothe)
- **Fabric:** 87% Polyester, 13% Elastane (Spacedye)
- **Microplastic Level:** HIGH - always use Guppyfriend bag
- **Images:** 4 photos (blue gem, powder blue)

### ✅ 400543 - Cropped Puffer
- **Brand:** Alo
- **Price:** $198
- **Stage:** 3 (Reintegrate)
- **Fabric:** 100% Polyester shell with down alternative fill
- **Care:** Machine wash cold gentle, tumble dry low
- **Images:** 4 photos (navy, blue, black)

---

## How to Add New Products

### Step 1: Gather Data

From CSV + brand website, collect:

**From CSV:**
- Internal SKU
- Brand name
- Retail price
- Colors offered
- "Wear It" text
- "Our Item Name"
- "Our description"
- "In Recovery" text
- Suggested outfit pairings (product IDs)
- Fit description
- What it shows off
- Recovery step (1-4)
- Match set ID (if applicable)

**From Brand Website (WebFetch tool):**
- Fabric composition (exact percentages)
- Fabric technology name (e.g., "DreamKnit™", "AllTheFeels")
- Care instructions (line by line)
- Sustainability features

**From Photo Directory:**
- All image filenames for the product
- Organize by color

### Step 2: Create Product Entry

Add to `lib/products.ts`:

```typescript
{
  id: '400XXX',
  slug: 'product-url-slug',  // Use kebab-case
  name: 'Product Display Name',
  brand: 'Brand Name',
  retailPrice: 00,
  colors: [
    {
      name: 'Color Name',
      images: [
        '/products/400XXX - color.webp',
        '/products/400XXX - color 2.webp',
      ],
    },
  ],
  featuredImage: '/products/400XXX - color.webp',  // First/best image
  category: 'tops' | 'bottoms' | 'outerwear' | 'accessories',
  recoveryStage: 1 | 2 | 3 | 4,
  matchedSetId: '400YYY',  // If part of a matched set
  shortDescription: 'One-line teaser',
  ourDescription: 'From CSV - may edit',
  inRecovery: 'From CSV - may edit',
  wearIt: 'From CSV - may edit',
  fabric: {
    composition: 'XX% Material, YY% Material',
    feel: 'Fabric technology name + description',
    type: 'natural' | 'synthetic' | 'blend',
    microplasticLevel: 'none' | 'low' | 'medium' | 'high',
    careInstructions: [
      'Machine wash cold',
      'Tumble dry low',
      'Do not bleach',
      'Use Guppyfriend bag to reduce microplastic shedding',
    ],
  },
  fit: {
    description: 'Fit details from CSV',
    showsOff: 'Body parts from CSV',
  },
  pairItWith: [
    {
      productId: '400AAA',
      productName: 'Other Product Name',
      reason: 'Why this pairing works',
    },
  ],
  supplyChain: 'Brand manufacturing info (optional)',
  sustainabilityNotes: 'Recycled materials, care tips, etc.',
  brandLink: 'https://brand.com/product-url',
  inStock: true,
  sizes: ['XXS', 'XS', 'S', 'M', 'L', 'XL', 'XXL'],
},
```

### Step 3: Test the Product

1. **View on shop page:** Visit `/shop/women` and verify:
   - Product card displays correctly
   - Image loads
   - Price, name, brand correct
   - Stage badge shows correct color
   - Clicking goes to product detail page

2. **View product detail page:** Visit `/product/your-slug` and verify:
   - All images load
   - Color selector works (if multiple colors)
   - All expandable sections have content
   - "Pair It With" shows related products
   - Size selector works
   - No console errors

3. **Test filters:** On shop page, verify:
   - Stage filter shows/hides product correctly
   - Category filter works
   - Fabric filter works
   - Price range includes product

---

## Process for Fetching Fabric/Care Data

Use the **WebFetch** tool to scrape brand websites:

### Example: Beyond Yoga Product

```typescript
WebFetch({
  url: 'https://beyondyoga.com/products/featherweight-your-fit-shirred-tank-cloud-white-lwsd4697',
  prompt: 'Extract the fabric composition, care instructions, and any fabric technology names'
})
```

**What to look for:**
- Fabric composition (percentages)
- Fabric technology names (e.g., "Spacedye", "Featherweight")
- Care instructions (wash, dry, iron, special notes)
- Sustainability features (recycled materials, certifications)

### Example: Vuori Product

```typescript
WebFetch({
  url: 'https://vuoriclothing.com/products/womens-performance-jogger-spring-heather',
  prompt: 'Get the fabric content, care instructions, and any special fabric technologies'
})
```

**Vuori-specific:**
- Look for fabric technology names (DreamKnit™, AllTheFeels, etc.)
- Recycled content percentages
- Care instructions

---

## Microplastic Level Guidelines

Assign based on fabric composition:

**High:**
- 85%+ polyester or nylon
- Fleece fabrics
- High-performance synthetic knits

**Medium:**
- 50-84% synthetic materials
- Synthetic blends with natural fibers

**Low:**
- <50% synthetic materials
- Tightly woven synthetics
- Synthetic outerwear shells

**None:**
- 100% natural fibers (cotton, wool, silk, cashmere)
- No synthetic content

**Care Note:** Always recommend Guppyfriend bag for any synthetic content.

---

## Matched Sets

Create matched set entries in `lib/products.ts`:

```typescript
export const matchedSets: MatchedSet[] = [
  {
    id: '400550',
    name: 'Stage 3 Athletic Set',
    description: 'Fitted tank + Every Day Short combo...',
    products: ['400532', '400533'],  // Product IDs
    stage: 3,
    price: 102,  // Combined price (may offer discount)
  },
];
```

---

## Updated CSV Format

New columns added to `TH8TA wholesale - UPDATED with fabric care data.csv`:

1. **Materials Detailed** - Full fabric composition with percentages
2. **Fabric Feel** - Technology name + description
3. **Care Instructions Detailed** - Line-by-line care steps
4. **Sustainability Notes** - Recycled materials, environmental notes

**Status:**
- ✅ 5 products complete
- ⏳ 25+ products need fabric/care data fetched
- 📋 Process documented for scaling

---

## Development Commands

```bash
# Start dev server
npm run dev

# Build for production
npm run build

# View specific product
# Visit: http://localhost:3000/product/fitted-tank

# View shop page
# Visit: http://localhost:3000/shop/women
```

---

## Next Steps to Complete All Products

### Phase 1: Fetch Remaining Data (20-25 products)

For each product in CSV:
1. Use WebFetch to get fabric/care data from brand link
2. Add entry to `lib/products.ts`
3. Verify images exist in `/public/products/`
4. Test product detail page

**Estimated Time:** 2-3 hours (5-10 minutes per product)

### Phase 2: Create Category Landing Pages

Build pages for:
- Matched Sets (`/sets`)
- Shop by Recovery Stage (`/stage/1`, `/stage/2`, etc.)
- Men's shop (`/shop/men`)

### Phase 3: Advanced Features

- Shopping cart state management
- Checkout flow
- User accounts
- Product reviews
- Search functionality

---

## Troubleshooting

### Product Not Showing on Shop Page

**Check:**
1. Product exists in `products` array in `lib/products.ts`
2. `featuredImage` path is correct
3. Image file exists in `/public/products/`
4. Product matches current filters (stage, category, price range)

### Product Detail Page 404

**Check:**
1. URL slug matches product `slug` field exactly
2. Product exists in database
3. No typos in slug (use kebab-case)

### Images Not Loading

**Check:**
1. Image paths start with `/products/` (not `/public/products/`)
2. File names match exactly (case-sensitive)
3. Images are in WebP format
4. Files exist in public directory

### TypeScript Errors

**Common issues:**
- ProductCategory type mismatch - use: 'tops' | 'bottoms' | 'outerwear' | 'accessories'
- FabricType mismatch - use: 'natural' | 'synthetic' | 'blend'
- RecoveryStage must be: 1 | 2 | 3 | 4 (not string)

---

## Success Metrics

**MVP Complete When:**
- ✅ 5 products live with full data
- ✅ Product detail pages work
- ✅ Shop page filters work
- ✅ Images display correctly
- ✅ Build succeeds with no errors

**V1 Complete When:**
- [ ] All 30+ products in database
- [ ] All matched sets defined
- [ ] Category landing pages built
- [ ] Men's shop page created
- [ ] All images optimized

**V2 Complete When:**
- [ ] Shopping cart functional
- [ ] Checkout flow complete
- [ ] User accounts working
- [ ] Search functionality live

---

## File Locations Quick Reference

```
📁 Product Data:
   lib/types.ts - TypeScript interfaces
   lib/products.ts - Product database

📁 Product Pages:
   app/product/[slug]/page.tsx - Product detail template
   app/shop/women/page.tsx - Women's shop listing

📁 Images:
   public/products/ - All product photos

📁 CSV Data:
   TH8TA wholesale - for Claude code.csv - Original
   TH8TA wholesale - UPDATED with fabric care data.csv - Updated with fabric/care data

📁 Documentation:
   PRODUCT_SYSTEM_GUIDE.md - This file
   NEXT_STEPS.md - New developer guide
   DEVELOPMENT_LOG.md - Project status
   SESSION_SUMMARY.md - Build session summary
```

---

## Questions? Issues?

Contact: [Insert contact info]

**Last Updated:** November 23, 2024
**System Version:** MVP 1.0
**Products Live:** 5 of 30+
