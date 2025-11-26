import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

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
        <section className="relative h-[400px] flex items-center justify-center bg-gradient-to-br from-[var(--color-teal)] to-[var(--color-sage)]">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative z-10 text-center px-4 max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              What Comes After
            </h1>
            <p className="text-xl text-white/90">
              The finish line, the climb, the brutal tempo effort.
            </p>
          </div>
        </section>

        {/* Opening Statement */}
        <section className="py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-xl md:text-2xl text-[var(--color-charcoal)] leading-relaxed text-center">
              TH8TA is what comes after. After the finish line, the climb, the brutal tempo effort.
              We're not here to make your new favorite race-day kit. We're here for everything
              after that—when you're cooling down, peeling off soaked layers, and finally
              remembering what warmth feels like.
            </p>
          </div>
        </section>

        {/* Who We Are */}
        <section className="py-16 md:py-24 bg-[var(--color-cream)]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-5xl font-bold text-[var(--color-charcoal)] mb-8 text-center">
              Who We Are
            </h2>
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                We curate recovery gear for endurance athletes who've already proven themselves.
                Every item we offer is part of a bigger system: from the moment you get off the
                trail to the minute your head hits the pillow.
              </p>
              <p>
                We source from high-performance brands that align with our values—and we design
                original pieces that fill the gaps the big guys forgot about. Think Title Nine's
                curation meets The Feed's authority, with a healthy dose of real talk.
              </p>
              <p>
                Because you've already done the hard part. Now it's time to recover like you mean
                it.
              </p>
            </div>
          </div>
        </section>

        {/* Why We Exist */}
        <section className="py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-5xl font-bold text-[var(--color-charcoal)] mb-8 text-center">
              Why We Exist
            </h2>
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p className="text-center text-xl md:text-2xl font-medium text-[var(--color-sage)]">
                Because the recovery aisle doesn't exist.
              </p>
              <p className="text-center text-xl md:text-2xl font-medium text-[var(--color-sage)]">
                Because most brands stop at the sweat.
              </p>
              <p className="text-center text-xl md:text-2xl font-medium text-[var(--color-sage)]">
                Because you've already done enough.
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
              {curators.map((curator) => (
                <div key={curator.name} className="text-center">
                  <div className="w-48 h-48 rounded-full bg-gradient-to-br from-[var(--color-sage)] to-[var(--color-teal)] mx-auto mb-4"></div>
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
              Ready to Recover Like You Mean It?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Explore the 4-Stage Recovery System and find your perfect post-workout gear.
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
  },
  {
    name: 'Marcus Thompson',
    sport: 'Cyclist & Triathlete',
    bio: '50+ mile weeks mean Marcus lives in recovery mode. He tests everything in Stage 2 & 3.',
  },
  {
    name: 'Jamie Rodriguez',
    sport: 'Mountain Athlete',
    bio: 'From trail runs to ski touring, Jamie finds gear that transitions seamlessly through all stages.',
  },
];
