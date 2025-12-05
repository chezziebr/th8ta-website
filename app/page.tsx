import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { HeroSlider } from '@/components/HeroSlider';
import { products } from '@/lib/products';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        {/* HERO SLIDER - Full-width carousel */}
        <HeroSlider />

        {/* SHOP BY CATEGORY - 5 cards in row */}
        <section className="py-20 bg-white">
          <div className="max-w-[1400px] mx-auto px-10">
            <h2 className="text-4xl font-bold text-center mb-12 text-[var(--color-text-primary)]">
              Shop by Category
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {categories.map((category) => (
                <Link
                  key={category.id}
                  href={category.link}
                  className="group"
                >
                  <div className="relative aspect-square bg-gray-200 overflow-hidden mb-3">
                    {/* Category Image */}
                    <Image
                      src={category.image}
                      alt={category.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />

                    {/* "SHOP" button overlay on hover */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="px-6 py-3 bg-white text-black text-sm font-semibold tracking-wide">
                        SHOP
                      </span>
                    </div>
                  </div>
                  <h3 className="text-center text-base font-medium text-[var(--color-text-primary)]">
                    {category.name}
                  </h3>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* 4-STAGE RECOVERY SYSTEM */}
        <section className="py-20 bg-[var(--color-gray-light)]">
          <div className="max-w-[1200px] mx-auto px-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[var(--color-text-primary)]">
                The 4-Stage Recovery System
              </h2>
              <p className="text-lg text-[var(--color-text-secondary)] max-w-2xl mx-auto">
                Science-backed recovery starts the moment your workout ends
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              {stages.map((stage) => (
                <div key={stage.number} className="text-center">
                  <div className="text-6xl font-bold text-[var(--color-gray-dark)] mb-4">
                    {stage.number}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-[var(--color-text-primary)]">
                    {stage.name}
                  </h3>
                  <p className="text-sm leading-relaxed text-[var(--color-text-secondary)]">
                    {stage.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Link
                href="/science"
                className="inline-block px-8 py-4 bg-black text-white text-sm font-semibold tracking-wide hover:bg-gray-800 transition-colors"
              >
                LEARN MORE ABOUT THE SCIENCE
              </Link>
            </div>
          </div>
        </section>

        {/* FEATURED PRODUCTS */}
        <section className="py-20 bg-white">
          <div className="max-w-[1400px] mx-auto px-10">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 text-[var(--color-text-primary)]">
                Everything You Need for Recovery
              </h2>
              <p className="text-lg text-[var(--color-text-secondary)]">
                Recovery wear for when you're not working out
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {products.slice(0, 8).map((product) => (
                <Link
                  key={product.id}
                  href={`/product/${product.slug}`}
                  className="group"
                >
                  <div className="bg-white border border-[var(--color-gray-medium)] hover:shadow-lg transition-shadow">
                    {/* Product Image */}
                    <div className="aspect-square bg-gray-200 relative overflow-hidden">
                      <Image
                        src={product.featuredImage}
                        alt={product.name}
                        fill
                        className="object-cover"
                      />

                      {/* Quick Buy button on hover */}
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="px-6 py-3 bg-white text-black text-sm font-semibold tracking-wide">
                          QUICK BUY
                        </span>
                      </div>
                    </div>

                    {/* Product Info */}
                    <div className="p-4">
                      <h3 className="text-base font-medium mb-1 text-[var(--color-text-primary)]">
                        {product.name}
                      </h3>
                      <p className="text-base font-bold mb-3 text-[var(--color-text-primary)]">
                        ${product.retailPrice}
                      </p>

                      {/* Color swatches */}
                      <div className="flex gap-2">
                        {product.colors.slice(0, 3).map((color, idx) => (
                          <div
                            key={idx}
                            className="w-6 h-6 rounded-full border border-gray-300"
                            style={{ backgroundColor: color.hex }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* TRIBE SECTION - Split Hero: Image + Text */}
        <section className="py-20 bg-white">
          <div className="max-w-[1400px] mx-auto px-10">
            <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* LEFT: Image */}
              <div className="relative aspect-[4/5] bg-gray-300 rounded-lg overflow-hidden">
                {/* Placeholder - Replace with actual recognition moment photo */}
                <div className="w-full h-full bg-gradient-to-br from-gray-400 to-gray-500 flex items-center justify-center">
                  <span className="text-white text-center px-8">
                    [Image: Athletes at coffee shop spotting each other's TH8TA gear, making eye contact, moment of recognition]
                  </span>
                </div>
              </div>

              {/* RIGHT: Text Content */}
              <div className="space-y-6">
                {/* Eyebrow */}
                <p className="text-xs uppercase tracking-[0.2em] text-gray-500 font-medium">
                  THE TRIBE
                </p>

                {/* Headline */}
                <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-text-primary)] leading-tight">
                  Built for Recognition
                </h2>

                {/* Body Copy */}
                <div className="space-y-4 text-lg leading-relaxed text-[var(--color-text-secondary)] max-w-[500px]">
                  <p>
                    Runners, cyclists, triathletes, climbers—different sports, same reality.
                    You train hard. You earn your rest.
                  </p>

                  <p>
                    At the coffee shop. The grocery store. The airport gate. You spot the gear.
                    They spot yours. No words needed. You both know.
                  </p>

                  <p>
                    Every piece in our collection will carry <strong>the mark</strong>—a subtle
                    signature that says: I'm not just working out, I'm training. Skip the small talk.
                    Jump straight to race stats, wattage, and heart rates.
                  </p>

                  <p className="font-semibold text-[var(--color-text-primary)] text-xl">
                    Finding your people shouldn't be left to chance.
                  </p>
                </div>

                {/* CTAs */}
                <div className="flex gap-4 pt-4">
                  <Link
                    href="/tribe"
                    className="inline-block px-10 py-4 bg-[#F7B500] text-black text-sm font-semibold tracking-wide hover:bg-[#E5A800] transition-colors uppercase"
                  >
                    THE TRIBE MARK
                  </Link>
                  <Link
                    href="/about"
                    className="inline-block px-10 py-4 border-2 border-black text-black text-sm font-semibold tracking-wide hover:bg-black hover:text-white transition-colors uppercase"
                  >
                    OUR STORY
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PRESS SECTION - What Athletes Are Saying */}
        <section className="py-20 bg-white">
          <div className="max-w-[1200px] mx-auto px-10">
            <h2 className="text-4xl font-bold text-center mb-12 text-[var(--color-text-primary)]">
              What Athletes Are Saying
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="bg-white border border-[var(--color-gray-medium)] p-8"
                >
                  <p className="text-lg italic mb-6 text-[var(--color-text-primary)]">
                    "{testimonial.quote}"
                  </p>
                  <p className="text-sm font-medium text-[var(--color-text-secondary)]">
                    {testimonial.author}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* NEW ARRIVALS - Final Product Grid */}
        <section className="py-20 bg-[var(--color-gray-light)]">
          <div className="max-w-[1400px] mx-auto px-10">
            <h2 className="text-4xl font-bold text-center mb-12 text-[var(--color-text-primary)]">
              New Arrivals
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {products.slice(8, 16).map((product) => (
                <Link
                  key={product.id}
                  href={`/product/${product.slug}`}
                  className="group"
                >
                  <div className="bg-white border border-[var(--color-gray-medium)] hover:shadow-lg transition-shadow">
                    <div className="aspect-square bg-gray-200 relative overflow-hidden">
                      <Image
                        src={product.featuredImage}
                        alt={product.name}
                        fill
                        className="object-cover"
                      />

                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="px-6 py-3 bg-white text-black text-sm font-semibold tracking-wide">
                          QUICK BUY
                        </span>
                      </div>
                    </div>

                    <div className="p-4">
                      <h3 className="text-base font-medium mb-1 text-[var(--color-text-primary)]">
                        {product.name}
                      </h3>
                      <p className="text-base font-bold mb-3 text-[var(--color-text-primary)]">
                        ${product.retailPrice}
                      </p>

                      <div className="flex gap-2">
                        {product.colors.slice(0, 3).map((color, idx) => (
                          <div
                            key={idx}
                            className="w-6 h-6 rounded-full border border-gray-300"
                            style={{ backgroundColor: color.hex }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

// DATA

const categories = [
  { id: 1, name: 'TOPS', link: '/shop/women/tops', image: '/images/categories/tops.webp' },
  { id: 2, name: 'SWEATERS & HOODIES', link: '/shop/women/sweaters', image: '/images/categories/sweaters.png' },
  { id: 3, name: 'BOTTOMS', link: '/shop/women/bottoms', image: '/images/categories/bottoms.webp' },
  { id: 4, name: 'OUTERWEAR', link: '/shop/women/outerwear', image: '/images/categories/outerwear.webp' },
  { id: 5, name: 'ACCESSORIES', link: '/shop/women/accessories', image: '/images/categories/accessories.jpg' },
];

const stages = [
  {
    number: 1,
    name: 'Immediate Swap',
    description: 'Get out of your kit. Your body is still hot, your nervous system is still firing. Change into something that signals: workout over.',
  },
  {
    number: 2,
    name: 'Shower & Soothe',
    description: 'Post-shower comfort. Warm, soft, ready to decompress. Your body is cooling down, heart rate normalizing.',
  },
  {
    number: 3,
    name: 'Reintegrate',
    description: 'Back to life. Comfortable enough for the couch, presentable enough for the coffee shop. This is where you spend most of your recovery time.',
  },
  {
    number: 4,
    name: 'Reset',
    description: 'Sleep and deep rest. Your body does the real work of rebuilding while you\'re horizontal.',
  },
];

const testimonials = [
  {
    id: 1,
    quote: 'Finally, joggers that fit my quads without looking like parachutes.',
    author: 'Sarah M., Marathon Runner',
  },
  {
    id: 2,
    quote: 'The 4-stage system changed how I think about recovery. This isn\'t just loungewear.',
    author: 'Mike T., Triathlete',
  },
  {
    id: 3,
    quote: 'I\'ve been looking for recovery gear that actually fits an athletic body. This is it.',
    author: 'Jessica L., Cyclist',
  },
];
