import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="relative h-[600px] md:h-[700px] flex items-center justify-center bg-gradient-to-br from-[var(--color-sage)] to-[var(--color-teal)]">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative z-10 text-center px-4 max-w-4xl">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              You earned this layer.
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Not activewear. Afterwear. Curated recovery gear for endurance athletes who know
              that what you wear after matters just as much.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/system">
                <Button size="lg">Shop the 4-Stage System</Button>
              </Link>
              <Link href="/science">
                <Button variant="outline" size="lg" className="bg-white/10 border-white text-white hover:bg-white hover:text-[var(--color-sage)]">
                  Learn the Science
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* The Problem Section */}
        <section className="py-16 md:py-24 bg-[var(--color-cream)]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-lg md:text-xl text-[var(--color-charcoal)] leading-relaxed">
              There were so many cute clothes out there, but we hit saturation. Another puffer—when
              do I wear it? Is it for working out? The gym-to-office crossover wasn't for us.{' '}
              <strong className="text-[var(--color-sage)]">
                Every piece of TH8TA gear has a purpose. A stage. A moment in your recovery when
                it's the exact right thing.
              </strong>
            </p>
          </div>
        </section>

        {/* The 4 Stages Section */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold text-[var(--color-charcoal)] mb-4">
                The 4-Stage Recovery System
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Every product fits into one of four recovery stages, designed to support your body
                from the finish line to deep rest.
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
        <section className="py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-[var(--color-charcoal)] mb-6">
              Curated by Athletes, For Athletes
            </h2>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8">
              Like The Feed, but for recovery. You can buy these products anywhere, but we've
              tested them after 50-mile weeks, hill repeats, and ice baths. We're endurance
              athletes who know what works.
            </p>
          </div>
        </section>

        {/* Featured Products */}
        <section className="py-16 md:py-24 bg-[var(--color-cream)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-5xl font-bold text-[var(--color-charcoal)] mb-12 text-center">
              Featured Products
            </h2>

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
            <h2 className="text-3xl md:text-5xl font-bold mb-6">The Science of Recovery</h2>
            <p className="text-lg md:text-xl leading-relaxed mb-8">
              Your brain needs permission to stop being an athlete. Here's how soft fabrics,
              rituals, and purposeful gear activate parasympathetic recovery.
            </p>
            <Link href="/science">
              <Button variant="outline" size="lg" className="bg-white/10 border-white text-white hover:bg-white hover:text-[var(--color-teal)]">
                Explore the Science
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
