import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'About Us | TH8TA',
  description: 'The story behind TH8TA - curated recovery gear for endurance athletes.',
};

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
          <Image
            src="/images/power-meter.jpg"
            alt="Athletes sharing post-ride stats in recovery mode"
            fill
            className="object-cover object-center"
            style={{ objectPosition: 'center 30%' }}
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-teal)]/70 to-[var(--color-sage)]/70"></div>
          <div className="relative z-10 text-center px-4 max-w-3xl">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 drop-shadow-lg">
              For the other 22 hours.
            </h1>
          </div>
        </section>

        {/* Opening Statement */}
        <section className="py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-xl md:text-2xl text-[var(--color-charcoal)] leading-relaxed text-center mb-8">
              TH8TA is curated afterwear for endurance athletes.
            </p>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed text-center">
              We're not activewear—you have enough of that. We're not athleisure—we hate that word. We're everything you wear when you're not working out, designed for bodies that do.
            </p>
          </div>
        </section>

        {/* The Problem We Solve */}
        <section className="py-16 md:py-24 bg-[var(--color-cream)]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-5xl font-bold text-[var(--color-charcoal)] mb-8 text-center">
              Nothing Fits Right
            </h2>
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                You know the drill. Standard tees pull across your lats. "Relaxed fit" is still tight in the shoulders. Leggings feel like your training tights—your brain can't relax. You end up in oversized everything because nothing else works.
              </p>
              <p className="text-xl font-medium text-[var(--color-sage)] text-center">
                We fix that.
              </p>
            </div>
          </div>
        </section>

        {/* Our Philosophy */}
        <section className="py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-5xl font-bold text-[var(--color-charcoal)] mb-8 text-center">
              We Do the Work
            </h2>
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                Think of us like Whole Foods did for organic. Instead of scouring every brand, reading every label, wondering if this piece will fit your shoulders—you just shop TH8TA.
              </p>
              <p>
                Every piece passes the test:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 text-gray-700">
                <li>Fits athletic proportions</li>
                <li>Feels like rest, not work</li>
                <li>Celebrates the athletic form</li>
                <li>Worth the price</li>
              </ul>
              <p className="text-xl font-medium text-[var(--color-sage)] text-center">
                If it's here, it works.
              </p>
            </div>
          </div>
        </section>

        {/* Transparency & Values */}
        <section id="values" className="py-16 md:py-24 bg-[var(--color-sage)] text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-5xl font-bold mb-8 text-center">
              Transparency & Values
            </h2>
            <div className="space-y-6 text-lg leading-relaxed">
              <p>
                We can't always avoid microplastics in performance fabrics, but we can be honest
                about it. Every product page discloses fabric content. We prioritize natural fibers
                when possible and always recommend tools like Guppyfriend bags to reduce
                microplastic shedding.
              </p>
              <p>
                We're not perfect, but we're transparent. We believe you deserve to know what
                you're putting on your body and what impact it has. That's why every product
                includes:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Full fabric composition breakdown</li>
                <li>Natural vs. synthetic material disclosure</li>
                <li>Microplastic impact notes when applicable</li>
                <li>Care instructions to maximize garment lifespan</li>
                <li>Honest curator notes on performance</li>
              </ul>
              <p>
                We're endurance athletes too. We know what it's like to push your body to the
                limit and need real recovery solutions. That's why we only curate products we'd
                actually use ourselves.
              </p>
            </div>
          </div>
        </section>

        {/* Our Curators (Optional - Placeholder) */}
        <section className="py-16 md:py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-5xl font-bold text-[var(--color-charcoal)] mb-12 text-center">
              Meet Our Curators
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {curators.map((curator, index) => (
                <div key={curator.name} className="text-center">
                  <div className="w-48 h-48 rounded-full overflow-hidden mx-auto mb-4 relative">
                    <Image
                      src={curator.image}
                      alt={curator.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-[var(--color-charcoal)] mb-2">
                    {curator.name}
                  </h3>
                  <p className="text-[var(--color-sage)] font-medium mb-3">{curator.sport}</p>
                  <p className="text-gray-600">{curator.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-[var(--color-cream)]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-charcoal)] mb-6">
              You didn't spend years building this body to hide it in oversized everything.
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Find afterwear that actually fits your athletic body.
            </p>
            <Link href="/shop/women">
              <Button size="lg">Shop Recovery Gear</Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

// Placeholder curator data
const curators = [
  {
    name: 'Sarah Chen',
    sport: 'Ultra Runner',
    bio: "After 100-milers, Sarah knows recovery isn't optional. She curates Stage 1 & 4 gear.",
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&q=80',
  },
  {
    name: 'Marcus Thompson',
    sport: 'Cyclist & Triathlete',
    bio: '50+ mile weeks mean Marcus lives in recovery mode. He tests everything in Stage 2 & 3.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&q=80',
  },
  {
    name: 'Jamie Rodriguez',
    sport: 'Mountain Athlete',
    bio: 'From trail runs to ski touring, Jamie finds gear that transitions seamlessly through all stages.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&q=80',
  },
];
