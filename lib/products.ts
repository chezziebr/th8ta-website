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
