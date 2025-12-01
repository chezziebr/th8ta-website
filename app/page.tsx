import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="relative h-[600px] md:h-[700px] flex items-center justify-center overflow-hidden">
          <Image
            src="/images/hero-beach.jpg"
            alt="Athlete in recovery wear on the beach at sunset"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-sage)]/60 to-[var(--color-teal)]/60"></div>
          <div className="relative z-10 text-center px-4 max-w-4xl">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 drop-shadow-lg">
              For bodies that train. For hours that don't.
            </h1>
            <p className="text-lg md:text-xl text-white/95 mb-8 max-w-2xl mx-auto drop-shadow-md">
              Curated afterwear for endurance athletes. Everything you wear when you're not working out—designed for the body you've built.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/shop/women">
                <Button size="lg">Shop the Collection</Button>
              </Link>
              <Link href="/about">
                <Button variant="outline" size="lg" className="bg-white/10 border-white text-white hover:bg-white hover:text-[var(--color-sage)]">
                  Why Fit Matters →
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* The Fit Problem Section */}
        <section className="py-16 md:py-24 bg-[var(--color-cream)]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-charcoal)] mb-8">
              The Fit Problem Nobody Talks About
            </h2>
            <p className="text-lg md:text-xl text-[var(--color-charcoal)] leading-relaxed mb-6">
              You've spent years building this body. The shoulders, the lats, the legs that carried you across finish lines.
            </p>
            <p className="text-2xl md:text-3xl font-bold text-[var(--color-charcoal)] mb-6">
              And nothing fits.
            </p>
            <p className="text-lg md:text-xl text-[var(--color-charcoal)] leading-relaxed">
              Fashion brands design for average bodies. Athletic brands design for the workout. Nobody designs for the other 22 hours—when you're living in a body that trains, but you're not training.{' '}
              <strong className="text-[var(--color-sage)]">
                That's what we're for.
              </strong>
            </p>
          </div>
        </section>

        {/* Value Prop Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold text-[var(--color-charcoal)] mb-6">
                We do the work so you don't have to.
              </h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                Think Whole Foods for athletic afterwear. Instead of scouring brands, reading reviews, wondering if this cardigan will pull across your shoulders—just shop here. If it's on TH8TA, it passed the test.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[var(--color-sage)]/10 flex items-center justify-center">
                  <svg className="w-8 h-8 text-[var(--color-sage)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[var(--color-charcoal)] mb-3">
                  Fits Athletic Bodies
                </h3>
                <p className="text-gray-600">
                  Room in the shoulders. Space in the lats. Length in the torso. Every piece is tested on athletes.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[var(--color-teal)]/10 flex items-center justify-center">
                  <svg className="w-8 h-8 text-[var(--color-teal)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[var(--color-charcoal)] mb-3">
                  Feels Like Rest
                </h3>
                <p className="text-gray-600">
                  Buttery soft, not performance-tight. Your brain knows the difference. These signal: you're off duty.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[var(--color-terracotta)]/10 flex items-center justify-center">
                  <svg className="w-8 h-8 text-[var(--color-terracotta)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[var(--color-charcoal)] mb-3">
                  Celebrates the Form
                </h3>
                <p className="text-gray-600">
                  No hiding under oversized everything. Your athletic body, accentuated—not compressed or disguised.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* The 4 Stages Section */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold text-[var(--color-charcoal)] mb-4">
                Shop by Recovery Stage
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                From the moment you finish to the minute you fall asleep—organized so you can find exactly what you need.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Stage 1 */}
              <Link href="/shop/women?stage=1">
                <Card hover className="h-full cursor-pointer group">
                  <div className="mb-4">
                    <Badge stage={1} />
                  </div>
                  <h3 className="text-xl font-bold text-[var(--color-charcoal)] mb-2 group-hover:text-[var(--color-teal)] transition-colors">
                    Immediate Swap
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Soaked, frozen, or just finished. First thing you reach for when the workout
                    ends.
                  </p>
                </Card>
              </Link>

              {/* Stage 2 */}
              <Link href="/shop/women?stage=2">
                <Card hover className="h-full cursor-pointer group">
                  <div className="mb-4">
                    <Badge stage={2} />
                  </div>
                  <h3 className="text-xl font-bold text-[var(--color-charcoal)] mb-2 group-hover:text-[var(--color-sage)] transition-colors">
                    Shower & Soothe
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Clean, warm, gently held. Post-shower comfort that tells your body it's safe to
                    recover.
                  </p>
                </Card>
              </Link>

              {/* Stage 3 */}
              <Link href="/shop/women?stage=3">
                <Card hover className="h-full cursor-pointer group">
                  <div className="mb-4">
                    <Badge stage={3} />
                  </div>
                  <h3 className="text-xl font-bold text-[var(--color-charcoal)] mb-2 group-hover:text-[var(--color-terracotta)] transition-colors">
                    Reintegrate
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Presentable AF, still recovering. Coffee shop, errands, or couch—you're ready
                    for anything.
                  </p>
                </Card>
              </Link>

              {/* Stage 4 */}
              <Link href="/shop/women?stage=4">
                <Card hover className="h-full cursor-pointer group">
                  <div className="mb-4">
                    <Badge stage={4} />
                  </div>
                  <h3 className="text-xl font-bold text-[var(--color-charcoal)] mb-2 group-hover:text-[var(--color-lavender)] transition-colors">
                    Reset
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Wind-down mode, deep calm. Sleep kits and rituals that prime your body for full
                    recovery.
                  </p>
                </Card>
              </Link>
            </div>
          </div>
        </section>

        {/* Why Recovery Clothes Matter */}
        <section className="py-16 md:py-24 bg-[var(--color-sage)] text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-5xl font-bold mb-8 text-center">
              Why Recovery Clothes Matter
            </h2>
            <p className="text-lg md:text-xl leading-relaxed text-center mb-8">
              You spend 23 hours a day NOT working out. Your tight leggings and compressive gear
              served you well during the run. Now your body craves the opposite: soft, loose,
              purposeful comfort that tells your brain it's safe to recover.
            </p>
            <p className="text-lg leading-relaxed text-center mb-8">
              Science backs it up. We curate it. You wear it.
            </p>
            <div className="text-center">
              <Link href="/science">
                <Button variant="outline" size="lg" className="bg-white/10 border-white text-white hover:bg-white hover:text-[var(--color-sage)]">
                  Read the Science
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Curated by Athletes */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden">
                <Image
                  src="/images/relax-beach.jpg"
                  alt="Endurance athletes relaxing at the beach after training"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h2 className="text-3xl md:text-5xl font-bold text-[var(--color-charcoal)] mb-6">
                  Curated by Athletes, For Athletes
                </h2>
                <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-6">
                  Like The Feed, but for recovery. You can buy these products anywhere, but we've
                  tested them after 50-mile weeks, hill repeats, and ice baths.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  We're endurance athletes who know what works—and more importantly, we know <em>when</em> it works.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="py-16 md:py-24 bg-[var(--color-cream)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-5xl font-bold text-[var(--color-charcoal)] mb-4 text-center">
              Tested on Athletes
            </h2>
            <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              Every piece passes our fit test. These are selling fast.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredProducts.map((product) => (
                <Link key={product.id} href={`/product/${product.id}`}>
                  <Card hover padding="none" className="overflow-hidden group cursor-pointer">
                    <div className="aspect-square bg-gray-200 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-gray-300 to-gray-400 group-hover:scale-105 transition-transform duration-300" />
                      <div className="absolute top-3 left-3">
                        <Badge stage={product.stage} size="sm" />
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-[var(--color-charcoal)] mb-1 group-hover:text-[var(--color-sage)] transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-gray-600 text-sm mb-2">{product.description}</p>
                      <p className="font-bold text-[var(--color-charcoal)]">${product.price}</p>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link href="/shop/women">
                <Button size="lg">Shop All Products</Button>
              </Link>
            </div>
          </div>
        </section>

        {/* The Science Teaser */}
        <section className="py-16 md:py-24 bg-[var(--color-teal)] text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Why Soft Fabric Actually Matters</h2>
            <p className="text-lg md:text-xl leading-relaxed mb-8">
              Your training tights are engineered for performance. Your brain associates that feel with work. Our fabrics are intentionally different—so your nervous system knows you're done for the day.
            </p>
            <Link href="/science">
              <Button variant="outline" size="lg" className="bg-white/10 border-white text-white hover:bg-white hover:text-[var(--color-teal)]">
                The Science of Afterwear →
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

// Placeholder featured products data
const featuredProducts = [
  {
    id: 1,
    name: 'Recovery Jogger',
    description: 'Ultra-soft, gentle compression',
    price: 78,
    stage: 3 as const,
  },
  {
    id: 2,
    name: 'Soft Drape Pullover',
    description: 'Moisture-wicking softness',
    price: 68,
    stage: 2 as const,
  },
  {
    id: 3,
    name: 'Compression Legging',
    description: 'Recovery compression',
    price: 85,
    stage: 1 as const,
  },
  {
    id: 4,
    name: 'Modal Sleep Set',
    description: 'Deep rest essentials',
    price: 98,
    stage: 4 as const,
  },
  {
    id: 5,
    name: 'Rump Wrap™',
    description: 'Immediate warmth',
    price: 45,
    stage: 1 as const,
  },
  {
    id: 6,
    name: 'Cashmere Sock Bundle',
    description: 'Ultimate comfort',
    price: 56,
    stage: 4 as const,
  },
  {
    id: 7,
    name: 'Cozy Cardigan',
    description: 'Layer over anything',
    price: 88,
    stage: 3 as const,
  },
  {
    id: 8,
    name: 'Shower Robe',
    description: 'Post-shower essential',
    price: 95,
    stage: 2 as const,
  },
];
