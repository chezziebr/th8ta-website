import { Product, MatchedSet } from './types';

// PRODUCT DATABASE
// This is the source of truth for all TH8TA products

export const products: Product[] = [
  // ===== EXAMPLE PRODUCT 1: Fitted Tank (400532) =====
  {
    id: '400532',
    slug: 'fitted-tank',
    name: 'Fitted Tank',
    brand: 'Beyond Yoga',
    retailPrice: 38,
    colors: [
      {
        name: 'Cloud White',
        hex: '#F5F5F5',
        images: [
          '/products/400532 - white.webp',
          '/products/400532 - white 2.webp',
        ],
      },
      {
        name: 'Pink',
        hex: '#F4C2C2',
        images: ['/products/400532 - pink.webp'],
      },
      {
        name: 'Navy',
        hex: '#2C3E50',
        images: ['/products/400532 - navy.webp'],
      },
    ],
    featuredImage: '/products/400532 - white.webp',
    category: 'tops',
    recoveryStage: 3,
    matchedSetId: '400556',
    shortDescription: 'Buttery soft, lightweight tank perfect for layering or solo wear',
    ourDescription:
      "Wear it as a layer in the winter or show off the uppers in the summer. Buttery soft, lightweight, stretchy non-lycra fabric feels so well deserved. Best seller. By Beyond Yoga.",
    inRecovery:
      "Science has shown that putting on clothing that signals off-duty increases endorphins and sets in a state of relaxation. Telling the brain's fight or flight response to shut down allows the body to enter repair mode sooner. Consider wearing this tank to be the on switch for recovery.",
    wearIt: 'Layering or solo - perfect for any recovery stage',
    fabric: {
      composition: '94% Polyester, 6% Spandex',
      feel: 'Featherweight Spacedye fabric - ultra soft, lightweight, moisture-wicking',
      type: 'synthetic',
      microplasticLevel: 'medium',
      careInstructions: [
        'Machine wash cold with like colors',
        'Tumble dry low',
        'Do not bleach',
        'Do not iron',
        'Use Guppyfriend bag to reduce microplastic shedding',
      ],
    },
    fit: {
      description: 'Fitted core with slightly halter-style shoulders. Elastic shirring at side seams adapts to your unique shape.',
      showsOff: 'Shoulders, core, arms',
    },
    pairItWith: [
      {
        productId: '400533',
        productName: 'Every Day Short',
        reason: 'The fitted tank balances perfectly with these relaxed shorts',
      },
      {
        productId: '400536',
        productName: 'Not for Jogging',
        reason: 'Create an elevated casual look with loose bottoms and fitted top',
      },
    ],
    supplyChain: 'Beyond Yoga manufacturing',
    sustainabilityNotes:
      'This tank contains synthetic materials. While not natural fiber, the lightweight construction means less material overall. We recommend using a Guppyfriend washing bag to catch microplastic fibers.',
    brandLink:
      'https://beyondyoga.com/products/featherweight-your-fit-shirred-tank-cloud-white-lwsd4697',
    inStock: true,
    sizes: ['XXS', 'XS', 'S', 'M', 'L', 'XL', 'XXL'],
  },

  // ===== EXAMPLE PRODUCT 2: Not for Jogging (400536) =====
  {
    id: '400536',
    slug: 'not-for-jogging',
    name: 'Not for Jogging',
    brand: 'Vuori',
    retailPrice: 94,
    colors: [
      {
        name: 'Pale Grey Heather',
        hex: '#D3D3D3',
        images: [
          '/products/400536 - heather gray.webp',
          '/products/400536 - heather gray 2.webp',
        ],
      },
      {
        name: 'Midnight Heather',
        hex: '#2F4F4F',
        images: [
          '/products/400536 - midnight.webp',
          '/products/400536 - midnight 2.webp',
        ],
      },
      {
        name: 'Spring Heather',
        hex: '#87CEEB',
        images: [
          '/products/400536 - heather blue.webp',
          '/products/400536 - heather blue 2.webp',
          '/products/400536 - heather blue 3.webp',
        ],
      },
    ],
    featuredImage: '/products/400536 - heather gray.webp',
    category: 'bottoms',
    recoveryStage: 2,
    shortDescription:
      'The oh-so-good loose yet fitted pants perfect for post-compression recovery',
    ourDescription:
      'While someone named these "joggers" once upon a time, we know you are not running in these unless it\'s after a dog or a kid (and let\'s be honest you won\'t break a real sweat doing that). These are the oh feel so good loose yet fitted pants you will want after every workout once the need for compression has passed. Has the benefit of draping just perfectly off well-rounded glutes, giving you the right amount of attention.',
    inRecovery:
      "Post-compression it is good to let your legs breathe a bit without the tight confines of leggings. These pants are the perfect signal to the brain that you're ready for the next phase of recovery. The super soft fabric feels just right - clearly we are not going to the office, but we are also not going to bed yet. Paired with a fitted tank these can go the off-duty distance on errands, long walks or lounging on the couch.",
    wearIt: 'With a cropped and/or tight top to offset the loose bottoms',
    fabric: {
      composition: '89% Recycled Polyester, 11% Elastane',
      feel: 'DreamKnit™ premium stretch fabric - supremely soft with performance stretch',
      type: 'synthetic',
      microplasticLevel: 'medium',
      careInstructions: [
        'Machine wash cold',
        'Tumble dry low',
        'Do not bleach',
        'Cool iron if needed',
        'Recommend Guppyfriend bag to reduce microplastic shedding',
      ],
    },
    fit: {
      description:
        'Slim but relaxed silhouette with slightly cropped leg length. Loose upper thigh, somewhat tight calf cuff. Signature drawstring closure.',
      showsOff: 'Calves, glutes',
    },
    pairItWith: [
      {
        productId: '400532',
        productName: 'Fitted Tank',
        reason: 'Classic fitted top + loose bottom combo',
      },
      {
        productId: '400544',
        productName: 'Halter Crop Tank',
        reason: 'Show off shoulders while keeping legs cozy',
      },
    ],
    supplyChain: 'Vuori sustainable manufacturing',
    sustainabilityNotes:
      '89% Recycled Polyester reduces environmental impact. DreamKnit fabric is designed for durability. Contains synthetic materials - use Guppyfriend bag when washing.',
    brandLink:
      'https://vuoriclothing.com/products/womens-performance-jogger-spring-heather',
    inStock: true,
    sizes: ['XXS', 'XS', 'S', 'M', 'L', 'XL', 'XXL'],
  },

  // ===== EXAMPLE PRODUCT 3: Every Day Short (400533) =====
  {
    id: '400533',
    slug: 'every-day-short',
    name: 'Every Day Short',
    brand: 'Vuori',
    retailPrice: 64,
    colors: [
      {
        name: 'Black',
        hex: '#1a1a1a',
        images: [
          '/products/400533 - black.webp',
          '/products/400533 - black 2.webp',
        ],
      },
      {
        name: 'Magenta',
        hex: '#D946A6',
        images: [
          '/products/400533 - magenta.webp',
          '/products/400533 - magenta 2.webp',
          '/products/400533 - magenta 3.webp',
        ],
      },
    ],
    featuredImage: '/products/400533 - black.webp',
    category: 'bottoms',
    recoveryStage: 3,
    matchedSetId: '400550',
    shortDescription:
      'Breathable, lightweight shorts with just the right amount of compression',
    ourDescription:
      "These breathable, lightweight shorts support without gym-tightness. Supremely soft and innovative fabric gives you performance stretch knit that moves with you. So soft you may even want to sleep in them.",
    inRecovery:
      "These shorts provide just the right amount of compression to the upper thigh and lower core, supporting you just a little after a long workout. Their super soft feel let's your brain relax and know that work time is over, but if you had to chase a dog or a kid in these, they'd go the miles.",
    wearIt:
      'Solo with a tank, sweatshirt or tee - these shorts go with everything. They even work for bed!',
    fabric: {
      composition: '75% Recycled Polyamide, 25% Elastane',
      feel: 'AllTheFeels fabric - supremely soft with stretch',
      type: 'synthetic',
      microplasticLevel: 'medium',
      careInstructions: [
        'Machine wash cold',
        'Tumble dry low',
        'Do not bleach',
        'Do not iron',
        'Use Guppyfriend bag to reduce microplastic shedding',
      ],
    },
    fit: {
      description: 'Tight, stretch fit with 4" inseam',
      showsOff: 'Quads, calves',
    },
    pairItWith: [
      {
        productId: '400532',
        productName: 'Fitted Tank',
        reason: 'Perfect matched set for Stage 3 recovery',
      },
      {
        productId: '400535',
        productName: 'Cropped Corset Fleece',
        reason: 'Add warmth without losing the athletic silhouette',
      },
    ],
    sustainabilityNotes:
      '75% Recycled Polyamide reduces waste. Durable construction means longer garment life. Synthetic material - use Guppyfriend bag.',
    brandLink: 'https://vuoriclothing.com/products/womens-vuori-allthefeels-short-4-magenta',
    inStock: true,
    sizes: ['XXS', 'XS', 'S', 'M', 'L', 'XL'],
  },

  // ===== EXAMPLE PRODUCT 4: Light Compression Leggings (400537) =====
  {
    id: '400537',
    slug: 'light-compression-leggings-extremesoft',
    name: 'Light Compression Leggings - ExtremeSoft',
    brand: 'Beyond Yoga',
    retailPrice: 88,
    colors: [
      {
        name: 'Blue Gem Heather',
        hex: '#5B9BD5',
        images: [
          '/products/400537 - blue gem.webp',
          '/products/400537 - blue gem 2.webp',
        ],
      },
      {
        name: 'Powder Blue Heather',
        hex: '#B0D4E3',
        images: [
          '/products/400537 - powder blue.webp',
          '/products/400537 - powder blue 2.webp',
        ],
      },
    ],
    featuredImage: '/products/400537 - blue gem.webp',
    category: 'bottoms',
    recoveryStage: 2,
    matchedSetId: '400545',
    shortDescription:
      'Extremely soft leggings with light compression for gentle post-workout recovery',
    ourDescription:
      'These leggings are extremely soft with just the right amount of compression. The high waist makes them less "gym" and more "every day" non-workout.',
    inRecovery:
      'Compression is well known as beneficial for legs after long or hard workouts as it returns blood flow through the body. These compression leggings are a level 1 - light compression, for when you just need a little bit of tightness on the legs post-workout. Supersoft, buttery fabric means you aren\'t working out in these but instead relaxing.',
    wearIt:
      'With a loose Cropped Tee, Fitted Tank; if chilly, add the Cropped Corset Fleece Jacket',
    fabric: {
      composition: '87% Polyester, 13% Elastane',
      feel: 'Spacedye fabric - extremely soft, buttery feel with light compression',
      type: 'synthetic',
      microplasticLevel: 'high',
      careInstructions: [
        'Machine wash cold',
        'Tumble dry low',
        'Do not bleach',
        'Do not iron',
        'ALWAYS use Guppyfriend bag to reduce microplastic shedding',
      ],
    },
    fit: {
      description: 'Tight throughout legs, high-waisted. Midi length (7/8).',
      showsOff: 'Glutes, quads, hamstrings, calves',
    },
    pairItWith: [
      {
        productId: '400534',
        productName: 'Boxy Cropped Tee',
        reason: 'Loose top balances tight leggings perfectly',
      },
      {
        productId: '400535',
        productName: 'Cropped Corset Fleece',
        reason: 'Add warmth and structure to your recovery look',
      },
    ],
    sustainabilityNotes:
      'Contains synthetic materials with higher microplastic shedding potential. ALWAYS use Guppyfriend washing bag. High-quality construction ensures long garment life.',
    brandLink:
      'https://beyondyoga.com/products/spacedye-caught-in-the-midi-high-waisted-legging-blue-gem-heather-sd3243',
    inStock: true,
    sizes: ['XXS', 'XS', 'S', 'M', 'L', 'XL', 'XXL'],
  },

  // ===== EXAMPLE PRODUCT 5: Cropped Puffer (400543) =====
  {
    id: '400543',
    slug: 'cropped-puffer',
    name: 'Cropped Puffer',
    brand: 'Alo',
    retailPrice: 198,
    colors: [
      {
        name: 'Navy',
        hex: '#1F3A5F',
        images: ['/products/400543 - navy.webp'],
      },
      {
        name: 'Blue',
        hex: '#4A90E2',
        images: [
          '/products/400543 - blue.webp',
          '/products/400543 - blue 2.webp',
        ],
      },
      {
        name: 'Black',
        hex: '#1a1a1a',
        images: ['/products/400543 - black.webp'],
      },
    ],
    featuredImage: '/products/400543 - navy.webp',
    category: 'outerwear',
    recoveryStage: 3,
    shortDescription:
      'Sleek cropped puffer that screams off-duty in the best way',
    ourDescription:
      "Nothing says off duty more than a sleek cropped puffer! No chance you're working out in this gem, but it sure will keep you warm.",
    inRecovery:
      "Since there is no way you are working out in this, your brain knows you're off duty and looking good. Keep warm when your body does its post-workout chill down.",
    wearIt:
      'We suggest a warm underlayer for the core. The best part is this jacket looks amazing with shorts, leggings or even sweatpants.',
    fabric: {
      composition: '100% Polyester shell with down alternative fill',
      feel: 'Lightweight, water-resistant outer with cozy insulation',
      type: 'synthetic',
      microplasticLevel: 'medium',
      careInstructions: [
        'Machine wash cold on gentle cycle',
        'Tumble dry low',
        'Do not bleach',
        'Cool iron if needed',
        'Recommend Guppyfriend bag',
      ],
    },
    fit: {
      description: 'Loose, cropped silhouette. Hits at natural waist.',
      showsOff: 'Core (when worn open)',
    },
    pairItWith: [
      {
        productId: '400537',
        productName: 'Light Compression Leggings',
        reason: 'Keep legs warm with compression, core cozy with puffer',
      },
      {
        productId: '400533',
        productName: 'Every Day Short',
        reason: 'Cropped jacket + shorts = surprisingly chic recovery look',
      },
    ],
    sustainabilityNotes:
      'Synthetic insulation (not down) is more ethical and easier to wash. Water-resistant coating may shed microplastics - use Guppyfriend bag.',
    brandLink: 'https://www.aloyoga.com/products/w4380r-gold-rush-puffer-espresso',
    inStock: true,
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
  },

  // ===== PRODUCT 6: Boxy Cropped Tee (400534) =====
  {
    id: '400534',
    slug: 'boxy-cropped-tee',
    name: 'Boxy Cropped Tee',
    brand: 'Vuori',
    retailPrice: 58,
    colors: [
      {
        name: 'White',
        hex: '#FFFFFF',
        images: ['/products/400534 - white.webp'],
      },
      {
        name: 'Sea Spray Heather',
        hex: '#A8DADC',
        images: ['/products/400534 - sea spray.webp'],
      },
    ],
    featuredImage: '/products/400534 - white.webp',
    category: 'tops',
    recoveryStage: 2,
    shortDescription:
      'Loose shoulders, cropped fit - perfect for swimmers and upper body athletes',
    ourDescription:
      "Sometimes it is hard to find a T-shirt that looks cute, but allows room for the big shoulders and lots of swimmers and upper body endurance athletes. This cute cropped tee shows off the abs without a tight fit up top; loose shoulders and armpits for the swimmers.",
    inRecovery:
      "Loose and airy with soft fabric is perfect after you've worked hard in tight, performance upperware.",
    wearIt: 'Wear it with leggings or shorts',
    fabric: {
      composition: '96% Polyester, 4% Elastane',
      feel: 'Ultra-soft stretch jersey with moisture-wicking and UPF 30+ protection',
      type: 'synthetic',
      microplasticLevel: 'medium',
      careInstructions: [
        'Machine wash cold',
        'Tumble dry low',
        'Do not bleach',
        'Cool iron if needed',
        'Use Guppyfriend bag to reduce microplastic shedding',
      ],
    },
    fit: {
      description: 'Loose in shoulders, cropped for average height',
      showsOff: 'Core',
    },
    pairItWith: [
      {
        productId: '400533',
        productName: 'Every Day Short',
        reason: 'Loose top + fitted shorts create perfect balance',
      },
      {
        productId: '400537',
        productName: 'Light Compression Leggings',
        reason: 'Loose boxy tee balances tight leggings perfectly',
      },
    ],
    sustainabilityNotes:
      'Contains synthetic materials. Use Guppyfriend bag when washing to reduce microplastic shedding.',
    brandLink: 'https://vuoriclothing.com/products/womens-energy-tee-white',
    inStock: true,
    sizes: ['XXS', 'XS', 'S', 'M', 'L', 'XL'],
  },

  // ===== PRODUCT 7: Cropped Corset Fleece (400535) =====
  {
    id: '400535',
    slug: 'cropped-corset-fleece',
    name: 'Cropped Corset Fleece',
    brand: 'Alo',
    retailPrice: 188,
    colors: [
      {
        name: 'Navy',
        hex: '#1F3A5F',
        images: ['/products/400535 - navy.webp'],
      },
      {
        name: 'Black',
        hex: '#1a1a1a',
        images: ['/products/400535 - black.webp'],
      },
    ],
    featuredImage: '/products/400535 - navy.webp',
    category: 'outerwear',
    recoveryStage: 3,
    shortDescription:
      'Show off a little with boxy shoulders and snug abs - cozy meets athletic',
    ourDescription:
      "For the babes out there who want to show off a little but not be hemmed in by tightness. Perfect to wear to the outdoor pool winter workouts, around town. Boxy shoulders combined with tight abs gives you the perfect balance of athletic form without the pretense and overall tightness.",
    inRecovery:
      "You'll want to wear this after you've rested a bit and are ready to hit the world; the cozy snug on the abs combined with the room up top lets you still feel and move like an athlete without the tight, performance fabrics you need on the long haul workouts. Pairs really well with a loose garment underneath and still has room for the big shoulders",
    wearIt: 'With leggings, shorts',
    fabric: {
      composition: '100% Polyester',
      feel: 'Polar fleece - ultra soft and warm',
      type: 'synthetic',
      microplasticLevel: 'medium',
      careInstructions: [
        'Machine wash cold',
        'Tumble dry low',
        'Do not bleach',
        'Cool iron if needed',
        'Recommend Guppyfriend bag',
      ],
    },
    fit: {
      description: 'Cropped corset, big in shoulders',
      showsOff: 'Core',
    },
    pairItWith: [
      {
        productId: '400533',
        productName: 'Every Day Short',
        reason: 'Add warmth without losing the athletic silhouette',
      },
      {
        productId: '400532',
        productName: 'Fitted Tank',
        reason: 'Perfect layering combo for warmth and style',
      },
    ],
    sustainabilityNotes:
      'Fleece fabric sheds microplastics. Always use Guppyfriend bag when washing.',
    brandLink: 'https://www.aloyoga.com/products/w4556r-polar-fleece-cropped-wintry-mix-jacket-ivory',
    inStock: true,
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
  },

  // ===== PRODUCT 8: Halter Crop Tank (400544) =====
  {
    id: '400544',
    slug: 'halter-crop-tank',
    name: 'Halter Crop Tank',
    brand: 'Free People',
    retailPrice: 30,
    colors: [
      {
        name: 'White',
        hex: '#FFFFFF',
        images: [
          '/products/400544 - white 1.png',
          '/products/400544 - white 2.png',
          '/products/400544 - white 3.png',
          '/products/400544 - white 4.png',
        ],
      },
      {
        name: 'Purple',
        hex: '#9187AA',
        images: [
          '/products/400544 purple.webp',
          '/products/400544 purple 2.webp',
        ],
      },
    ],
    featuredImage: '/products/400544 - white 1.png',
    category: 'tops',
    recoveryStage: 3,
    shortDescription:
      'Super shoulders alert! Show off lats and shoulders with lined bra support',
    ourDescription:
      "Super shoulders alert! Show off the lats and shoulders with this halter tank. Also gives a peek of a toned core. Lined bra.",
    inRecovery:
      "This is for the athlete who really needs to feel like they are still at it even when they are not; this athletic fit, stretchy tank is classy but really shows off the toned work you have put in. Even with its athletic cut, your brain will know it is not workout fabric and the recovery and rest can begin while you still look amazing. Relax it down with a pair of Not for Jogging pants.",
    wearIt: 'Layering or solo; perfect with loose pants or shorts',
    fabric: {
      composition: '92% Nylon, 8% Spandex',
      feel: 'Stretchy, supportive athletic knit',
      type: 'synthetic',
      microplasticLevel: 'high',
      careInstructions: [
        'Machine wash cold',
        'Tumble dry low',
        'Do not bleach',
        'Do not iron',
        'ALWAYS use Guppyfriend bag to reduce microplastic shedding',
      ],
    },
    fit: {
      description: 'Tight; halter, high neck, cropped',
      showsOff: 'Shoulders (big time), core, arms',
    },
    pairItWith: [
      {
        productId: '400536',
        productName: 'Not for Jogging',
        reason: 'Show off shoulders while keeping legs cozy',
      },
    ],
    sustainabilityNotes:
      'High nylon content sheds microplastics. ALWAYS use Guppyfriend washing bag.',
    brandLink: 'https://www.nordstrom.com/s/clean-lines-crop-tank/7183685',
    inStock: true,
    sizes: ['XXS', 'XS', 'S', 'M', 'L', 'XL'],
  },

  // ===== PRODUCT 9: High Crop Halter Tank (400550) =====
  {
    id: '400550',
    slug: 'high-crop-halter-tank',
    name: 'High Crop Halter Tank',
    brand: 'Quince',
    retailPrice: 38,
    colors: [
      {
        name: 'Sea Spray Green',
        hex: '#7FB5A0',
        images: [
          '/products/400550 - Sea Spray Green.png',
          '/products/400550 - Sea Spray Green 2.png',
          '/products/400550 - Sea Spray Green 3.png',
        ],
      },
      {
        name: 'Deep Navy',
        hex: '#1F3A5F',
        images: [
          '/products/400550 - navy.png',
          '/products/400550 - navy 2.png',
          '/products/400550 - navy 3.png',
        ],
      },
      {
        name: 'Black',
        hex: '#1a1a1a',
        images: ['/products/400550 - black.png'],
      },
    ],
    featuredImage: '/products/400550 - Sea Spray Green.png',
    category: 'tops',
    recoveryStage: 3,
    matchedSetId: '400556',
    shortDescription:
      'Calling super shoulders and toned abs - ultra-form athletic tank',
    ourDescription:
      "Calling super shoulders and toned abs! Show off the lats and shoulders with this halter tank. Also gives a peek of a toned core. Lined bra.",
    inRecovery:
      "This is for the athlete who really needs to feel like they are still at it even when they are not; this athletic fit, super soft tank is classy but really shows off the toned work you have put in. Even with its athletic cut, your brain will know it is not workout fabric and the recovery and rest can begin while you still look amazing. Relax it down with a pair of Not for Jogging pants. High crop, so it also goes well with highwaisted sweatpants",
    wearIt: 'With high waisted leggings for an athletic style, or sweatpants for a more relaxed look',
    fabric: {
      composition: '78% Nylon, 22% Spandex',
      feel: 'Quick-drying, moisture-wicking with anti-microbial and 4-way stretch',
      type: 'synthetic',
      microplasticLevel: 'medium',
      careInstructions: [
        'Machine wash cold',
        'Tumble dry low',
        'Do not bleach',
        'Use Guppyfriend bag to reduce microplastic shedding',
      ],
    },
    fit: {
      description: 'Tight; halter, high neck, high cropped',
      showsOff: 'Shoulders, core, arms',
    },
    pairItWith: [
      {
        productId: '400536',
        productName: 'Not for Jogging',
        reason: 'Athletic top with relaxed bottoms',
      },
    ],
    sustainabilityNotes:
      'OEKO-TEX certified fabric. Synthetic material - use Guppyfriend bag when washing.',
    brandLink: 'https://www.quince.com/women/ultra-form-high-neck-cropped-tank',
    inStock: true,
    sizes: ['XXS', 'XS', 'S', 'M', 'L', 'XL', 'XXL'],
  },

  // ===== PRODUCT 10: Fitted Tee (400545) =====
  {
    id: '400545',
    slug: 'fitted-tee',
    name: 'Fitted Tee',
    brand: 'Beyond Yoga',
    retailPrice: 66,
    colors: [
      {
        name: 'White',
        hex: '#FFFFFF',
        images: ['/products/400545 - white.webp'],
      },
      {
        name: 'Blue Gem',
        hex: '#5B9BD5',
        images: ['/products/400545 - blue gem.webp'],
      },
    ],
    featuredImage: '/products/400545 - white.webp',
    category: 'tops',
    recoveryStage: 2,
    matchedSetId: '400537',
    shortDescription:
      'Fitted but not snug - perfect for smaller shoulders or a relaxed tee',
    ourDescription:
      "For those who have smaller shoulders or want a slightly more fitted tee but one that doesn't look like a box, this is your go-to. Super soft fabric makes it clear this is not for performance, it is for relaxation.",
    inRecovery:
      "Get your recovery started with a super soft T-shirt that is fitted but not snug. Easy to move in but also easy to relax in, the fit and fabric of the tee let your brain know it's time to rest.",
    wearIt: 'This fitted tee is perfect with Not for Jogging pants, leggings and shorts',
    fabric: {
      composition: '94% Polyester, 6% Spandex',
      feel: 'Featherweight Spacedye - lightweight, ultra-soft with 4-way stretch and UV protection',
      type: 'synthetic',
      microplasticLevel: 'medium',
      careInstructions: [
        'Machine wash cold',
        'Tumble dry low',
        'Do not bleach',
        'Do not iron',
        'Use Guppyfriend bag to reduce microplastic shedding',
      ],
    },
    fit: {
      description: 'Fitted but not tight, slightly longer length',
      showsOff: 'Core',
    },
    pairItWith: [
      {
        productId: '400537',
        productName: 'Light Compression Leggings',
        reason: 'Complete matched set in coordinating colors',
      },
    ],
    sustainabilityNotes:
      'Lightweight construction uses less material. Synthetic fabric - use Guppyfriend bag.',
    brandLink: 'https://beyondyoga.com/products/featherweight-on-the-down-low-tee-blue-gem-heather-lwsd7670',
    inStock: true,
    sizes: ['XXS', 'XS', 'S', 'M', 'L', 'XL', 'XXL'],
  },

  // ===== PRODUCT 11: Light Compression Leggings - Quince (400556) =====
  {
    id: '400556',
    slug: 'light-compression-leggings-quince',
    name: 'Light Compression Leggings',
    brand: 'Quince',
    retailPrice: 38,
    colors: [
      {
        name: 'Sea Spray Green',
        hex: '#7FB5A0',
        images: [
          '/products/400556 - Sea Spray Green.png',
          '/products/400556 - Sea Spray Green 2.png',
          '/products/400556 - Sea Spray Green 3.png',
          '/products/400556 - Sea Spray Green 4.png',
        ],
      },
      {
        name: 'Deep Navy',
        hex: '#1F3A5F',
        images: ['/products/400556 - deep navy.png'],
      },
      {
        name: 'Black',
        hex: '#1a1a1a',
        images: ['/products/400556 - black.png'],
      },
    ],
    featuredImage: '/products/400556 - Sea Spray Green.png',
    category: 'bottoms',
    recoveryStage: 2,
    matchedSetId: '400550',
    shortDescription:
      'Extremely soft leggings with light compression - less gym, more everyday',
    ourDescription:
      "These leggings are extremely soft with just the right amount of compression. The high waist makes them less 'gym' and more 'every day' non-workout.",
    inRecovery:
      "Compression is well known as beneficial for legs after long or hard workouts as it returns blood flow through the body. These compression leggings are a level 1 - light compression, for when you just need a little bit of tightness on the legs post-workout. Supersoft, buttery fabric means you aren't working out in these but instead relaxing.",
    wearIt: 'Match it with the High Crop halter tank and a cardigan',
    fabric: {
      composition: '78% Nylon, 22% Spandex',
      feel: 'Quick-drying, moisture-wicking, anti-microbial with 4-way stretch',
      type: 'synthetic',
      microplasticLevel: 'medium',
      careInstructions: [
        'Machine wash cold',
        'Air dry recommended',
        'Do not bleach',
        'Use Guppyfriend bag to reduce microplastic shedding',
      ],
    },
    fit: {
      description: 'Tight throughout legs, high-waisted, 28" inseam',
      showsOff: 'Glutes, quads, hamstrings, calves',
    },
    pairItWith: [
      {
        productId: '400550',
        productName: 'High Crop Halter Tank',
        reason: 'Complete matched set in Sea Spray Green',
      },
    ],
    sustainabilityNotes:
      'OEKO-TEX certified. Low-impact design for yoga and everyday wear. Use Guppyfriend bag.',
    brandLink: 'https://www.quince.com/women/ultra-form-high-rise-legging-28',
    inStock: true,
    sizes: ['XXS', 'XS', 'S', 'M', 'L', 'XL', 'XXL'],
  },

  // ===== PRODUCT 12: Pleated Skirt (400557) =====
  {
    id: '400557',
    slug: 'pleated-midi-skirt',
    name: 'Pleated Skirt',
    brand: 'Nordstrom',
    retailPrice: 65,
    colors: [
      {
        name: 'Sky Blue',
        hex: '#87CEEB',
        images: [
          '/products/400557 1.png',
          '/products/400557 2.png',
          '/products/400557 3.png',
        ],
      },
    ],
    featuredImage: '/products/400557 1.png',
    category: 'bottoms',
    recoveryStage: 3,
    shortDescription:
      'Flowy pleated skirt that goes from fancy to athletic - feminine flow for strong bodies',
    ourDescription:
      "Super stylish skirt goes from fancy to just barely toning down your athletic wear when paired with tight tank. Show off the upper body but add some feminine flow to the bottom.",
    inRecovery:
      "No way you're working out in this skirt, but it's flowy and loose enough to pair a set of cropped leggings underneath if you need the compression. This is for the athlete who wants to feel feminine and put-together while still honoring their athletic build. The loose, flowing fabric signals to your brain that you're off-duty and relaxing.",
    wearIt: 'With a cropped tank or bra and loose cardigan if chilly',
    fabric: {
      composition: '100% Polyester',
      feel: 'Lightweight pleated fabric with smooth, flowy drape',
      type: 'synthetic',
      microplasticLevel: 'medium',
      careInstructions: [
        'Machine wash cold',
        'Tumble dry low or hang to dry',
        'Do not bleach',
        'Cool iron if needed',
        'Use Guppyfriend bag to reduce microplastic shedding',
      ],
    },
    fit: {
      description: 'Loose and flowy, midi length, high-waisted',
      showsOff: 'Calves, glutes',
    },
    pairItWith: [
      {
        productId: '400556',
        productName: 'Light Compression Leggings',
        reason: 'Layer leggings underneath for compression while keeping the feminine skirt flow',
      },
      {
        productId: '400544',
        productName: 'Halter Crop Tank',
        reason: 'Show off shoulders and core while adding flow to the bottom',
      },
      {
        productId: '400534',
        productName: 'Boxy Cropped Tee',
        reason: 'Loose top with flowy skirt creates a relaxed, feminine look',
      },
      {
        productId: '400550',
        productName: 'High Crop Halter Tank',
        reason: 'Athletic top meets feminine skirt - perfect balance',
      },
    ],
    sustainabilityNotes:
      'Synthetic pleated fabric. Use Guppyfriend bag when washing to reduce microplastic shedding.',
    brandLink: 'https://www.nordstromrack.com/s/nordstrom-pleated-midi-skirt/7747846',
    inStock: true,
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
  },

  // ===== PRODUCT 13: Puffer Booties (400548) =====
  {
    id: '400548',
    slug: 'puffer-booties',
    name: 'Puffer Booties',
    brand: 'Outdoor Research',
    retailPrice: 99,
    colors: [
      {
        name: 'Champagne',
        hex: '#F7E7CE',
        images: [
          '/products/400548  - champagne.avif',
          '/products/400548 - champagne 2.jpg',
          '/products/400548 - champagne 3.jpg',
          '/products/400548 - champagne 4.jpg',
        ],
      },
    ],
    featuredImage: '/products/400548  - champagne.avif',
    category: 'accessories',
    recoveryStage: 1,
    shortDescription:
      'Boots so cozy there is no way you are doing anything but recovering',
    ourDescription:
      'These amazing boots feel so good you will crave them every day. Gold technologies and a rugged rubber sole to create the ultimate cold weather footwear, perfect for cabins, camping, and après ski.',
    inRecovery:
      'Boots so cozy there is no way you are doing anything but recovering; soles so tough you can wear them out and about.',
    wearIt: 'Anytime',
    fabric: {
      composition:
        'bluesign® approved Pertex® Quantum Eco 100% Polyester (53% Recycled) 30D Double Rip Stop Shell Upper, 100% Tricot Lining, 100% Polyester Primaloft® Gold Insulation With Cross Core Technology 200 G/M², EVA Foam and Memory Foam Insole',
      feel: 'Ultra cozy insulated boots with rugged rubber sole',
      type: 'synthetic',
      microplasticLevel: 'low',
      careInstructions: [
        'Spot clean as needed',
        'Air dry away from direct heat',
        'Do not machine wash',
      ],
    },
    fit: {
      description: 'Standard bootie fit',
      showsOff: 'Nothing - pure comfort',
    },
    pairItWith: [
      {
        productId: '400533',
        productName: 'Every Day Short',
        reason: 'Cozy feet with athletic shorts',
      },
      {
        productId: '400543',
        productName: 'Cropped Puffer',
        reason: 'Complete cold-weather recovery outfit',
      },
      {
        productId: '400535',
        productName: 'Cropped Corset Fleece',
        reason: 'Stay warm from head to toe',
      },
    ],
    sustainabilityNotes:
      'Made with 53% recycled polyester and bluesign® approved materials. PrimaLoft Gold insulation is sustainable and ethical alternative to down.',
    brandLink: 'https://www.outdoorresearch.com/products/womens-tundra-trax-booties-300563',
    inStock: true,
    sizes: ['6', '7', '8', '9', '10', '11'],
  },

  // ===== PRODUCT 14: Recovery Sweatshirt (400542) =====
  {
    id: '400542',
    slug: 'recovery-sweatshirt',
    name: 'Recovery Sweatshirt',
    brand: 'Vuori',
    retailPrice: 118,
    colors: [
      {
        name: 'Gray',
        hex: '#808080',
        images: [
          '/products/400542 - gray.png',
          '/products/400542 - gray 2.png',
        ],
      },
    ],
    featuredImage: '/products/400542 - gray.png',
    category: 'tops',
    recoveryStage: 2,
    shortDescription:
      'So cozy and thick - warm for cool days over a tank or tee',
    ourDescription:
      'So cozy and thick, you will be glad you did! Warm for the cool days, and great to wear over a tank or tee',
    inRecovery:
      'Perfect for removing the chill post workout, and so thick and luxurious you for sure are not working out in it.',
    wearIt: 'Over a tank, tee and with leggings',
    fabric: {
      composition: '66% Organic Cotton, 34% Polyester',
      feel: 'Ultra-soft fleece with substantial warmth',
      type: 'blend',
      microplasticLevel: 'medium',
      careInstructions: [
        'Machine wash cold',
        'Tumble dry low',
        'Do not bleach',
        'Use Guppyfriend bag to reduce microplastic shedding',
      ],
    },
    fit: {
      description: 'Relaxed fit, half-zip design',
      showsOff: 'Nothing - pure comfort',
    },
    pairItWith: [
      {
        productId: '400536',
        productName: 'Not for Jogging',
        reason: 'Complete cozy recovery outfit',
      },
      {
        productId: '400537',
        productName: 'Light Compression Leggings',
        reason: 'Warm top with supportive bottoms',
      },
    ],
    sustainabilityNotes:
      '66% organic cotton reduces environmental impact. Contains some synthetic materials - use Guppyfriend bag.',
    brandLink: 'https://www.nordstrom.com/s/vuori-restore-half-zip-hoodie/7528947',
    inStock: true,
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
  },

  // ===== PRODUCT 15: Rump Wrap (400558) =====
  {
    id: '400558',
    slug: 'rump-wrap',
    name: 'Rump Wrap',
    brand: 'TH8TA',
    retailPrice: 48,
    colors: [
      {
        name: 'Black',
        hex: '#1a1a1a',
        images: ['/products/placeholder.svg'],
      },
    ],
    featuredImage: '/products/placeholder.svg',
    category: 'accessories',
    recoveryStage: 1,
    shortDescription:
      'Keep your car seat protected after workout - winter and summer weight options',
    ourDescription:
      'To keep your car seat protected after your workout. Comes in winter weight to also hold in warmth after those chilly workouts and summer weight when its all about the sweat.',
    inRecovery:
      'Recovery starts the moment your workout ends. This rump wrap protects your car seat while helping maintain body temperature in the critical post-workout period.',
    wearIt: 'In your car immediately after workout',
    fabric: {
      composition: 'Quick-dry absorbent fabric (varies by season)',
      feel: 'Absorbent and protective',
      type: 'synthetic',
      microplasticLevel: 'low',
      careInstructions: [
        'Machine wash cold',
        'Tumble dry low',
        'Wash frequently',
      ],
    },
    fit: {
      description: 'Universal car seat fit',
      showsOff: 'Nothing - functional accessory',
    },
    pairItWith: [],
    sustainabilityNotes:
      'Designed for durability and frequent washing. Protects car seats and extends their life.',
    brandLink: '#',
    inStock: true,
    sizes: ['One Size'],
  },

  // ===== PRODUCT 16: Washable Puffer (400546) =====
  {
    id: '400546',
    slug: 'warm-down-puffer',
    name: 'Warm Down Puffer',
    brand: 'Kuhl',
    retailPrice: 395,
    colors: [
      {
        name: 'Powder Blue',
        hex: '#B0D4E3',
        images: ['/products/400546 - powder blue.png'],
      },
    ],
    featuredImage: '/products/400546 - powder blue.png',
    category: 'outerwear',
    recoveryStage: 1,
    shortDescription:
      'Washable puffer for warmth right after your workout - packable and sweat-ready',
    ourDescription:
      'This washable puffer is meant for warmth right after you finish your workout. Since you should still be generating heat (but want to prevent yourself from losing it), this puffer is medium weight and packable so you can always bring it with you. Despite the name, there is no down in there so it is easily washable and can handle your sweat!',
    inRecovery:
      'After your chilly workouts the post-workout chill really can set in, and set in fast. Once your core temperature has dropped it is hard to get it back up. Throw on this puffer immediately, before you cool down, to keep that temperature regulated. Recovery starts before your workout ends, so keeping yourself warm throughout only hastens the process. All your calories and efforts go to recovery and not to teeth chattering or warming up a chilled body.',
    wearIt: 'Over your workout clothes or for after',
    fabric: {
      composition: '100% Polyester with synthetic insulation',
      feel: 'Medium weight, packable, water-resistant',
      type: 'synthetic',
      microplasticLevel: 'medium',
      careInstructions: [
        'Machine washable',
        'Tumble dry low',
        'Do not bleach',
        'Use Guppyfriend bag',
      ],
    },
    fit: {
      description: 'Medium density, loose fit, long to cover more',
      showsOff: 'Nothing',
    },
    pairItWith: [
      {
        productId: '400537',
        productName: 'Light Compression Leggings',
        reason: 'Stay warm during critical post-workout recovery',
      },
    ],
    sustainabilityNotes:
      'Synthetic insulation is washable and ethical alternative to down. Packable design reduces shipping impact.',
    brandLink: 'https://www.kuhl.com/kuhl/womens/outerwear/ws-firestorm-down-hoody/',
    inStock: true,
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
  },

  // ===== PRODUCT 17: Just in Case Jacket (400547) =====
  {
    id: '400547',
    slug: 'just-in-case-jacket',
    name: 'Just in Case Jacket',
    brand: 'Patagonia',
    retailPrice: 108,
    colors: [
      {
        name: 'Salmon',
        hex: '#FA8072',
        images: [
          '/products/400547 - salmon 1.jpeg',
          '/products/400547 - salmon 2.jpeg',
          '/products/400547 - Salmon 3.jpeg',
        ],
      },
    ],
    featuredImage: '/products/400547 - salmon 1.jpeg',
    category: 'outerwear',
    recoveryStage: 1,
    shortDescription:
      'Lightweight, packable jacket for when recovery needs to start on the trail',
    ourDescription:
      'This is the jacket that is light enough and slim enough but also warm enough that you want to bring with you on any work out that is not summer or a warm climate. You never know when you might need to walk, and then anything but a summer climb at the body temperature could plummet rapidly. Lightweight, packable, and heat trapping.',
    inRecovery:
      'If recovery has to start on the trail, or perhaps before the work out is over for one reason or another, this is the jacket you want with you. Specifically designed to be lightweight, it traps body heat when you need it most. Best to not work out in it, but save it for immediately after or maybe for the last few miles. One of the only hybrid workout/recovery items we sell.',
    wearIt: 'If you need it, or after a light session and you need to cut the chill a bit',
    fabric: {
      composition: '100% Nylon ripstop',
      feel: 'Ultra-lightweight, windproof, packable',
      type: 'synthetic',
      microplasticLevel: 'medium',
      careInstructions: [
        'Machine wash cold',
        'Line dry or tumble dry low',
        'Do not bleach',
        'Use Guppyfriend bag',
      ],
    },
    fit: {
      description: 'Slim fit, packable',
      showsOff: 'Nothing - functional layer',
    },
    pairItWith: [],
    sustainabilityNotes:
      'Patagonia Fair Trade Certified. Durable ripstop construction for long garment life.',
    brandLink: 'https://www.rei.com/product/144128/patagonia-houdini-jacket-womens',
    inStock: true,
    sizes: ['XXS', 'XS', 'S', 'M', 'L', 'XL'],
  },

  // ===== PRODUCT 18: Full Sweatpants (400549) =====
  {
    id: '400549',
    slug: 'full-sweatpants',
    name: 'Full Sweatpants',
    brand: 'Vuori',
    retailPrice: 118,
    colors: [
      {
        name: 'Light Gray',
        hex: '#D3D3D3',
        images: [
          '/products/400549 - gray 1.png',
          '/products/400549 - gray 2.png',
        ],
      },
      {
        name: 'Black',
        hex: '#1a1a1a',
        images: ['/products/400549 - black.png'],
      },
    ],
    featuredImage: '/products/400549 - gray 1.png',
    category: 'bottoms',
    recoveryStage: 2,
    shortDescription:
      'Full length, thick sweatpants for when you really need warmth and cozy',
    ourDescription:
      'Full length, thick sweatpants in great fabric.',
    inRecovery:
      'For the days after a long, cold session and you really need to feel warm and cozy, these sweatpants leave no doubt that your body is in recovery and on its way to cozy warmth.',
    wearIt: 'With a cropped top and if needing more, a cropped outer layer',
    fabric: {
      composition: '66% Organic Cotton, 34% Polyester',
      feel: 'Ultra-soft fleece, substantial and warm',
      type: 'blend',
      microplasticLevel: 'medium',
      careInstructions: [
        'Machine wash cold',
        'Tumble dry low',
        'Do not bleach',
        'Use Guppyfriend bag',
      ],
    },
    fit: {
      description: 'Tailored but not tight',
      showsOff: 'Nothing - pure comfort',
    },
    pairItWith: [
      {
        productId: '400532',
        productName: 'Fitted Tank',
        reason: 'Loose bottoms with fitted top',
      },
      {
        productId: '400545',
        productName: 'Fitted Tee',
        reason: 'Complete cozy recovery outfit',
      },
    ],
    sustainabilityNotes:
      '66% organic cotton. Contains some synthetic materials - use Guppyfriend bag.',
    brandLink: 'https://www.nordstrom.com/s/restore-classis-sweatpants/8466165',
    inStock: true,
    sizes: ['XXS', 'XS', 'S', 'M', 'L', 'XL'],
  },

  // ===== PRODUCT 19: Relax Cashmere Cardigan (400551) =====
  {
    id: '400551',
    slug: 'relax-cashmere-cardigan',
    name: 'Relax Cashmere Cardigan',
    brand: 'Quince',
    retailPrice: 118,
    colors: [
      {
        name: 'Heather Cloud Beige',
        hex: '#E8DDD0',
        images: [
          '/products/400551 - beige.png',
          '/products/400551 - beige 2.png',
          '/products/400551 - beige 3.png',
        ],
      },
    ],
    featuredImage: '/products/400551 - beige.png',
    category: 'outerwear',
    recoveryStage: 3,
    shortDescription:
      'Oh-so-amazing cashmere with quarter-zip - nothing says recovery like cashmere',
    ourDescription:
      'This cardigan is oh-so amazing in cashmere with a classy look and front zip. Pairs with anything from your jeans to leggings or even shorts.',
    inRecovery:
      'Nothing says recovery like cashmere. For when the post-workout chill sets in a bit, you can reach for this number to keep you cozy.',
    wearIt: 'With your leggings or shorts for added warmth; cozy over a tank',
    fabric: {
      composition: '100% Grade-A Mongolian Cashmere',
      feel: 'Luxuriously soft cashmere - ultimate comfort',
      type: 'natural',
      microplasticLevel: 'none',
      careInstructions: [
        'Hand wash or dry clean',
        'Lay flat to dry',
        'Do not wring',
        'Store folded, not hanging',
      ],
    },
    fit: {
      description: 'Loose, relaxed fit',
      showsOff: 'Nothing - pure luxury',
    },
    pairItWith: [
      {
        productId: '400556',
        productName: 'Light Compression Leggings',
        reason: 'Luxurious warmth over athletic leggings',
      },
      {
        productId: '400533',
        productName: 'Every Day Short',
        reason: 'Cashmere meets athletic shorts - ultimate recovery',
      },
    ],
    sustainabilityNotes:
      'Natural cashmere fiber, no microplastics. Ethically sourced Grade-A Mongolian cashmere. Long-lasting luxury garment.',
    brandLink: 'https://www.quince.com/women/mongolian-cashmere-fisherman-quarter-zip-sweater',
    inStock: true,
    sizes: ['XXS', 'XS', 'S', 'M', 'L', 'XL'],
  },

  // ===== PRODUCT 20: Buttoned Up Cardigan (400559) =====
  {
    id: '400559',
    slug: 'buttoned-up-cardigan',
    name: 'Buttoned Up Cardigan',
    brand: 'Quince',
    retailPrice: 130,
    colors: [
      {
        name: 'Faded Denim',
        hex: '#7892A8',
        images: [
          '/products/400559 blue.png',
          '/products/400559 blue 2.png',
          '/products/400559 blue 3.png',
        ],
      },
    ],
    featuredImage: '/products/400559 blue.png',
    category: 'outerwear',
    recoveryStage: 3,
    shortDescription:
      'Button up cashmere sweater - perfect over athletic wear',
    ourDescription:
      'This button up sweater is perfect for throwing over your athletic fit clothes such as our leggings and tank, but reminds you that you are done with the endurance work for the day! So soft and classy, you will wear it all the time.',
    inRecovery:
      'No one works out in cashmere, so enough said.',
    wearIt: 'With your favorite matched set leggings and tank or bra top',
    fabric: {
      composition: '100% Cashmere',
      feel: 'Brushed cashmere - ultra soft and warm',
      type: 'natural',
      microplasticLevel: 'none',
      careInstructions: [
        'Hand wash or dry clean',
        'Lay flat to dry',
        'Do not wring',
        'Store folded, not hanging',
      ],
    },
    fit: {
      description: 'Cropped, button-up style',
      showsOff: 'Nothing - elegant comfort',
    },
    pairItWith: [
      {
        productId: '400537',
        productName: 'Light Compression Leggings - ExtremeSoft',
        reason: 'Powder blue leggings match faded denim cardigan',
      },
      {
        productId: '400532',
        productName: 'Fitted Tank',
        reason: 'White tank under denim cardigan - classic look',
      },
    ],
    sustainabilityNotes:
      'Natural cashmere fiber, no microplastics. Long-lasting luxury garment designed for years of wear.',
    brandLink: 'https://www.quince.com/women/brushed-cashmere-cropped-crewneck-cardigan',
    inStock: true,
    sizes: ['XXS', 'XS', 'S', 'M', 'L', 'XL'],
  },

  // ===== PRODUCT 21: Cozy Knit Zip-Up Cardigan (400552) =====
  {
    id: '400552',
    slug: 'cozy-knit-zip-up-cardigan',
    name: 'Cozy Knit Zip-Up Cardigan',
    brand: 'Zella',
    retailPrice: 88,
    colors: [
      {
        name: 'Gray Mist',
        hex: '#B8B8B8',
        images: [
          '/products/400552 - gray mist.png',
          '/products/400552 - gray mist 2.png',
          '/products/400552 - gray mist 3.png',
        ],
      },
    ],
    featuredImage: '/products/400552 - gray mist.png',
    category: 'outerwear',
    recoveryStage: 1,
    shortDescription:
      'Cozy and cute post-workout cardigan - washable and versatile',
    ourDescription:
      'Cozy and cute, but with fabric just right to hit the wash as often as you need it.',
    inRecovery:
      'As soon as your workout is over, especially after a good functional strength session, you need something warm and light to throw on. This cardigan is meant for post-workout wear, and is cute enough you might also get a second one for after the shower recovery too.',
    wearIt: 'Over your gym clothes when you are done, or over your leggings and tank combo',
    fabric: {
      composition: 'Polyester blend (washable)',
      feel: 'Cozy knit - soft and warm',
      type: 'synthetic',
      microplasticLevel: 'medium',
      careInstructions: [
        'Machine wash cold',
        'Tumble dry low',
        'Do not bleach',
        'Use Guppyfriend bag',
      ],
    },
    fit: {
      description: 'Relaxed fit, full zip',
      showsOff: 'Nothing - comfort first',
    },
    pairItWith: [
      {
        productId: '400532',
        productName: 'Fitted Tank',
        reason: 'Perfect post-workout layering',
      },
      {
        productId: '400550',
        productName: 'High Crop Halter Tank',
        reason: 'Add warmth without bulk',
      },
      {
        productId: '400537',
        productName: 'Light Compression Leggings',
        reason: 'Complete recovery outfit',
      },
      {
        productId: '400556',
        productName: 'Light Compression Leggings',
        reason: 'Versatile pairing for any leggings',
      },
      {
        productId: '400533',
        productName: 'Every Day Short',
        reason: 'Warm cardigan with shorts',
      },
    ],
    sustainabilityNotes:
      'Machine washable for frequent use. Contains synthetic materials - use Guppyfriend bag.',
    brandLink: 'https://www.nordstrom.com/s/zella-cozy-knit-zip-up-cardigan/7921515',
    inStock: true,
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
  },

  // ===== PRODUCT 22: Cropped Zipper Cardigan (400538) =====
  {
    id: '400538',
    slug: 'cropped-zipper-cardigan',
    name: 'Cropped Zipper Cardigan',
    brand: 'Alo',
    retailPrice: 188,
    colors: [
      {
        name: 'Athletic Heather Grey',
        hex: '#A8A8A8',
        images: ['/products/400538 - gray.webp'],
      },
    ],
    featuredImage: '/products/400538 - gray.webp',
    category: 'outerwear',
    recoveryStage: 3,
    shortDescription:
      'Roomy shoulders, corset waist, cropped - structured athletic style',
    ourDescription:
      'Roomy in shoulders with corset waist and cropped length - perfect for showing off your athletic build while staying cozy.',
    inRecovery:
      'This cardigan combines athletic structure with recovery comfort. The roomy shoulders accommodate your strong upper body while the corset waist creates definition.',
    wearIt: 'With baggy pants or high-waisted leggings; fitted crop tank underneath',
    fabric: {
      composition: '90% Cotton, 9% Nylon, 1% Elastane',
      feel: 'Structured knit with slight stretch',
      type: 'blend',
      microplasticLevel: 'low',
      careInstructions: [
        'Machine wash cold',
        'Tumble dry low',
        'Do not bleach',
        'Cool iron if needed',
      ],
    },
    fit: {
      description: 'Roomy in shoulders, corset waist, cropped',
      showsOff: 'Core, shoulders',
    },
    pairItWith: [
      {
        productId: '400544',
        productName: 'Halter Crop Tank',
        reason: 'Show off shoulders under structured cardigan',
      },
      {
        productId: '400550',
        productName: 'High Crop Halter Tank',
        reason: 'Athletic tank meets athletic cardigan',
      },
      {
        productId: '400536',
        productName: 'Not for Jogging',
        reason: 'Structured top with relaxed bottoms',
      },
      {
        productId: '400537',
        productName: 'Light Compression Leggings',
        reason: 'High-waisted leggings with cropped cardigan',
      },
      {
        productId: '400556',
        productName: 'Light Compression Leggings',
        reason: 'Perfect with high-waisted leggings',
      },
      {
        productId: '400533',
        productName: 'Every Day Short',
        reason: 'Cardigan with athletic shorts',
      },
    ],
    sustainabilityNotes:
      '90% cotton with minimal synthetic content. Long-lasting structured garment.',
    brandLink: 'https://www.aloyoga.com/products/w4601r-scholar-knit-cropped-full-zip-jacket-athletic-heather-grey',
    inStock: true,
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
  },

  // ===== PRODUCT 23: Relaxation Long Sleeve Tee (400553) =====
  {
    id: '400553',
    slug: 'relaxation-long-sleeve-tee',
    name: 'Relaxation Long Sleeve Tee',
    brand: 'Vuori',
    retailPrice: 68,
    colors: [
      {
        name: 'Spearmint Heather',
        hex: '#A8DADC',
        images: ['/products/placeholder.svg'],
      },
      {
        name: 'Purple',
        hex: '#9187AA',
        images: ['/products/placeholder.svg'],
      },
      {
        name: 'White',
        hex: '#FFFFFF',
        images: [
          '/products/400553 - white.png',
          '/products/400553 - white 2.png',
        ],
      },
    ],
    featuredImage: '/products/400553 - white.png',
    category: 'tops',
    recoveryStage: 3,
    shortDescription:
      'Loose but fitted long sleeve with sateen shine - fancy yet comfortable',
    ourDescription:
      'Loose but fitted and not too long, this super soft long sleeved tee is perfect with jeans, leggings, skirts and shorts. Pretty much any outfit! Works as a nice overlayer for a slight chill in the air. It has a slight sateen shine which makes it fancier than a typical tee, so you will want to wear it again and again.',
    inRecovery:
      'Just a bit too nice to wear to your workouts and gives the loose vibes you want after a long workout, but does not have the boxy, unfitted fit of a cotton tee shirt from the swag bag. You will know its chill time wearing this - whether at home or during the rest of your non-training life. A go to favorite.',
    wearIt: 'With jeans, leggings, and shorts',
    fabric: {
      composition: 'Polyester blend with sateen finish',
      feel: 'Super soft with subtle sheen',
      type: 'synthetic',
      microplasticLevel: 'medium',
      careInstructions: [
        'Machine wash cold',
        'Tumble dry low',
        'Do not bleach',
        'Cool iron if needed',
        'Use Guppyfriend bag',
      ],
    },
    fit: {
      description: 'Loose but not boxy; not cropped but not long',
      showsOff: 'Nothing - elegant casual',
    },
    pairItWith: [
      {
        productId: '400537',
        productName: 'Light Compression Leggings',
        reason: 'Elegant top with athletic bottoms',
      },
      {
        productId: '400533',
        productName: 'Every Day Short',
        reason: 'Long sleeve with shorts - versatile look',
      },
      {
        productId: '400532',
        productName: 'Fitted Tank',
        reason: 'Layer long sleeve over tank',
      },
      {
        productId: '400544',
        productName: 'Halter Crop Tank',
        reason: 'Stylish layering option',
      },
      {
        productId: '400550',
        productName: 'High Crop Halter Tank',
        reason: 'Layer over athletic tank',
      },
    ],
    sustainabilityNotes:
      'Durable construction for long wear. Contains synthetic materials - use Guppyfriend bag.',
    brandLink: 'https://www.nordstrom.com/s/daydream-crew-t-shirt/5315950',
    inStock: true,
    sizes: ['XXS', 'XS', 'S', 'M', 'L', 'XL'],
  },

  // ===== PRODUCT 24: Cropped Sweatshirt (400554) =====
  {
    id: '400554',
    slug: 'cropped-sweatshirt',
    name: 'Cropped Sweatshirt',
    brand: 'Zella',
    retailPrice: 69,
    colors: [
      {
        name: 'Dusty Rose',
        hex: '#D4A5A5',
        images: [
          '/products/400554 - dusty rose.png',
          '/products/400554 - dusty rose 2.png',
        ],
      },
    ],
    featuredImage: '/products/400554 - dusty rose.png',
    category: 'tops',
    recoveryStage: 2,
    shortDescription:
      'Perfect fit cropped sweatshirt - cozy without the bulk',
    ourDescription:
      'The perfect fit, cropped sweatshirt removes the bulk but still provides the warmth you need. Ultracozy and ultra versatile it is perfect for all the life in between the workouts.',
    inRecovery:
      'Perfect for removing the chill post workout, and so thick and luxurious you for sure are not working out in it. The cropped look also gives your body some freedom to move without being overwhelmed by the bulk of fabric. Especially a favorite of petite athletes.',
    wearIt: 'With jeans, leggings, shorts or joggers over a cropped tank',
    fabric: {
      composition: '96% Cotton, 4% Spandex',
      feel: 'Ultra-soft fleece with slight stretch',
      type: 'blend',
      microplasticLevel: 'low',
      careInstructions: [
        'Machine wash cold',
        'Tumble dry low',
        'Do not bleach',
      ],
    },
    fit: {
      description: 'Loose, cropped',
      showsOff: 'Nothing - comfort focused',
    },
    pairItWith: [
      {
        productId: '400536',
        productName: 'Not for Jogging',
        reason: 'Cropped sweatshirt with joggers',
      },
      {
        productId: '400537',
        productName: 'Light Compression Leggings',
        reason: 'Cozy top with leggings',
      },
      {
        productId: '400533',
        productName: 'Every Day Short',
        reason: 'Cropped sweatshirt shows off shorts',
      },
    ],
    sustainabilityNotes:
      '96% cotton with minimal synthetic content. Long-lasting comfort garment.',
    brandLink: 'https://www.nordstrom.com/s/swoop-full-zip-hoodie/8116029',
    inStock: true,
    sizes: ['XXS', 'XS', 'S', 'M', 'L', 'XL'],
  },

  // ===== PRODUCT 25: Cross Drape Bra Tank (400555) =====
  {
    id: '400555',
    slug: 'cross-drape-bra-tank',
    name: 'Cross Drape Bra Tank',
    brand: 'Berlook',
    retailPrice: 38,
    colors: [
      {
        name: 'Navy',
        hex: '#1F3A5F',
        images: [
          '/products/400555 - navy .webp',
          '/products/400555 - navy 2.webp',
        ],
      },
      {
        name: 'Blue',
        hex: '#4A90E2',
        images: [
          '/products/400555 - blue.webp',
          '/products/400555 - blue 2.webp',
          '/products/400555 - blue 3.webp',
        ],
      },
      {
        name: 'Black',
        hex: '#1a1a1a',
        images: [
          '/products/400555 - black.webp',
          '/products/400555 - black 2.webp',
        ],
      },
    ],
    featuredImage: '/products/400555 - navy .webp',
    category: 'tops',
    recoveryStage: 3,
    shortDescription:
      'Stylish super cropped bra tank with draping crossover and mesh detail',
    ourDescription:
      'This stylish (and let\'s be honest, amazing looking) tank is super cropped and yet super classy thanks to the draping crossover pattern and mesh detail. Supportive yet playful, this bra tank is great solo or under an open cardigan.',
    inRecovery:
      'This is for the athlete who always wants to be on the go, but is forced to take recovery time by the forces of nature and being human. This bra tank keeps you deeply connected to that workout vibe with its support, structure and high crop, yet is too dreamy to be sweating in.',
    wearIt: 'With not for jogging, sweatpants or high waisted leggings',
    fabric: {
      composition: 'Fabric: 75% Nylon, 25% Spandex; Fabric 2: 95% Nylon, 5% Spandex; Lining: 88% Nylon, 12% Spandex',
      feel: 'Supportive stretch with mesh detail',
      type: 'synthetic',
      microplasticLevel: 'high',
      careInstructions: [
        'Machine wash cold',
        'Hang dry',
        'Do not bleach',
        'Do not iron',
        'ALWAYS use Guppyfriend bag',
      ],
    },
    fit: {
      description: 'Tight, supported bra, cropped',
      showsOff: 'Core, shoulders, arms',
    },
    pairItWith: [
      {
        productId: '400543',
        productName: 'Cropped Puffer',
        reason: 'Bra tank under open puffer',
      },
      {
        productId: '400535',
        productName: 'Cropped Corset Fleece',
        reason: 'Athletic tank under fleece',
      },
      {
        productId: '400536',
        productName: 'Not for Jogging',
        reason: 'Cropped tank with relaxed joggers',
      },
      {
        productId: '400549',
        productName: 'Full Sweatpants',
        reason: 'Athletic top with cozy bottoms',
      },
      {
        productId: '400556',
        productName: 'Light Compression Leggings',
        reason: 'High-waisted leggings with cropped bra tank',
      },
      {
        productId: '400538',
        productName: 'Cropped Zipper Cardigan',
        reason: 'Wear under open cardigan',
      },
    ],
    sustainabilityNotes:
      'High nylon content sheds microplastics. ALWAYS use Guppyfriend washing bag.',
    brandLink: 'https://www.berlook.com/products/black-mesh-cross-front-tank-top-light-support',
    inStock: true,
    sizes: ['XXS', 'XS', 'S', 'M', 'L', 'XL'],
  },
];

// ===== MATCHED SETS =====
export const matchedSets: MatchedSet[] = [
  {
    id: '400550',
    name: 'Stage 3 Athletic Set',
    description:
      'Fitted tank + Every Day Short combo for when you need to look presentable AF but still feel like an athlete',
    products: ['400532', '400533'],
    stage: 3,
    price: 102, // Combined price (might offer discount)
  },
  {
    id: '400556',
    name: 'Sea Spray Recovery Set',
    description:
      'Complete matched set in Sea Spray Green - High Crop Halter Tank + Light Compression Leggings',
    products: ['400550', '400556'], // Note: These are different product IDs from the CSV
    stage: 3,
    price: 76,
  },
  {
    id: '400545',
    name: 'Blue Gem Comfort Set',
    description:
      'Fitted Tee + Light Compression Leggings in coordinating blue tones for maximum post-workout comfort',
    products: ['400545', '400537'],
    stage: 2,
    price: 154,
  },
];

// Helper functions
export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByStage(stage: number): Product[] {
  return products.filter((p) => p.recoveryStage === stage);
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter((p) => p.category === category);
}

export function getMatchedSet(id: string): MatchedSet | undefined {
  return matchedSets.find((s) => s.id === id);
}
