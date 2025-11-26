import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'The Science of Recovery | TH8TA',
  description: 'Why your brain needs permission to stop being an athlete - the neuroscience behind recovery clothing.',
};

export default function SciencePage() {
  return (
    <>
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1920&h=800&fit=crop&q=80"
            alt="Athlete in deep rest and recovery"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-teal)]/75 to-[var(--color-lavender)]/75"></div>
          <div className="relative z-10 text-center px-4 max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
              Your Brain Needs Permission to Stop Being an Athlete
            </h1>
            <p className="text-xl text-white/95 drop-shadow-md">
              The neuroscience of recovery clothing, rituals, and why soft fabrics aren't a luxury.
            </p>
          </div>
        </section>

        {/* The Sympathetic-Parasympathetic Switch */}
        <section className="py-16 md:py-24">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-5xl font-bold text-[var(--color-charcoal)] mb-8 text-center">
              The Sympathetic-Parasympathetic Switch
            </h2>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="bg-red-50">
                <h3 className="text-2xl font-bold text-red-900 mb-4">
                  Sympathetic Nervous System
                </h3>
                <p className="text-red-800 font-medium mb-3">Fight or Flight</p>
                <ul className="space-y-2 text-gray-700">
                  <li>• Elevated heart rate</li>
                  <li>• Increased cortisol</li>
                  <li>• Muscle tension</li>
                  <li>• Heightened alertness</li>
                  <li>• Energy mobilization</li>
                </ul>
                <p className="mt-4 text-sm text-gray-600 italic">
                  Great for workouts. Terrible for recovery.
                </p>
              </Card>

              <Card className="bg-green-50">
                <h3 className="text-2xl font-bold text-green-900 mb-4">
                  Parasympathetic Nervous System
                </h3>
                <p className="text-green-800 font-medium mb-3">Rest & Digest</p>
                <ul className="space-y-2 text-gray-700">
                  <li>• Lowered heart rate</li>
                  <li>• Decreased cortisol</li>
                  <li>• Muscle relaxation</li>
                  <li>• Mental calm</li>
                  <li>• Tissue repair activation</li>
                </ul>
                <p className="mt-4 text-sm text-gray-600 italic">
                  Where actual recovery happens.
                </p>
              </Card>
            </div>

            <div className="prose prose-lg max-w-none">
              <h3 className="text-2xl font-bold text-[var(--color-charcoal)] mb-4">
                The Problem: Athletes Stay in Sympathetic Mode
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                During exercise, your sympathetic nervous system dominates. Heart rate spikes,
                cortisol floods your system, muscles tense, and your brain enters high-alert mode.
                This is exactly what you need to perform.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                But here's the issue: <strong className="text-[var(--color-sage)]">most athletes stay in sympathetic
                mode long after the workout ends.</strong> Your brain doesn't automatically flip the
                switch to parasympathetic (rest-and-digest) mode just because you stopped moving.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Delayed parasympathetic activation means delayed recovery. Your body can't fully
                repair tissue, absorb nutrients, or lower inflammation until it feels safe enough
                to exit fight-or-flight mode.
              </p>
            </div>
          </div>
        </section>

        {/* The Role of Rituals */}
        <section id="why-clothing-matters" className="py-16 md:py-24 bg-[var(--color-cream)]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-5xl font-bold text-[var(--color-charcoal)] mb-8 text-center">
              The Role of Rituals & Tactile Anchors
            </h2>
            <div className="prose prose-lg max-w-none space-y-6 text-gray-700">
              <p className="text-xl leading-relaxed">
                Your brain learns through patterns. When you repeatedly pair specific sensory
                experiences with recovery states, those experiences become <strong>tactile
                anchors</strong>—signals that tell your nervous system it's safe to relax.
              </p>

              <div className="bg-white p-6 rounded-lg my-8">
                <h3 className="text-2xl font-bold text-[var(--color-sage)] mb-4">
                  How Soft Fabrics Signal Safety
                </h3>
                <p className="mb-4">
                  Compression gear, tight leggings, and structured activewear create constant
                  low-level pressure on your skin. Your brain interprets this as a need to stay
                  alert and ready.
                </p>
                <p className="mb-4">
                  When you swap into <strong>soft, loose, non-restrictive fabrics</strong>, the
                  sensation changes dramatically. This tactile shift sends a clear message to your
                  autonomic nervous system:
                </p>
                <p className="text-lg font-medium text-[var(--color-sage)] italic">
                  "The hard part is over. You can stop being an athlete now."
                </p>
              </div>

              <h3 className="text-2xl font-bold text-[var(--color-charcoal)] mb-4">
                Why Rituals Work
              </h3>
              <p>
                Rituals aren't just about comfort—they're neurological switches. When you
                consistently follow the same post-workout sequence (e.g., hot shower → soft robe →
                hot chocolate → cozy socks), your brain begins to anticipate the parasympathetic
                state before you even finish the ritual.
              </p>
              <p>
                This is called <strong>classical conditioning</strong>, and it's the same mechanism
                that makes your mouth water when you smell coffee. Over time, the ritual itself
                becomes a recovery tool.
              </p>
            </div>
          </div>
        </section>

        {/* Why Recovery Clothing Matters */}
        <section className="py-16 md:py-24">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-5xl font-bold text-[var(--color-charcoal)] mb-8 text-center">
              Why Recovery Clothing Matters
            </h2>
            <div className="prose prose-lg max-w-none space-y-6 text-gray-700">
              <div className="bg-[var(--color-sage)] text-white p-8 rounded-lg my-8">
                <h3 className="text-2xl font-bold mb-4">The Compression Contradiction</h3>
                <p className="text-lg">
                  You spend hours in tight workout clothes because they improve performance. But
                  post-workout, your nervous system needs the opposite: softness, looseness, and
                  tactile comfort.
                </p>
                <p className="text-lg mt-4">
                  Staying in compressive gear tells your brain you're still in performance mode.
                  Recovery clothing tells your brain it's safe to rest.
                </p>
              </div>

              <h3 className="text-2xl font-bold text-[var(--color-charcoal)] mb-4">
                Looking Good = Feeling Good = Recovery Signal
              </h3>
              <p>
                There's science behind why putting on a great outfit makes you feel better. When
                you wear something that makes you feel put-together and comfortable, it reduces
                cortisol and increases confidence.
              </p>
              <p>
                Recovery gear that looks good (not just functional) amplifies this effect. You're
                not just lounging—you're actively supporting your nervous system's transition to
                rest mode.
              </p>

              <div className="grid md:grid-cols-3 gap-6 my-8">
                <Card className="text-center">
                  <div className="text-4xl font-bold text-[var(--color-teal)] mb-2">23</div>
                  <p className="text-sm text-gray-600">
                    Hours a day you're NOT working out
                  </p>
                </Card>
                <Card className="text-center">
                  <div className="text-4xl font-bold text-[var(--color-sage)] mb-2">168</div>
                  <p className="text-sm text-gray-600">
                    Hours in a week (maybe 10 spent training)
                  </p>
                </Card>
                <Card className="text-center">
                  <div className="text-4xl font-bold text-[var(--color-terracotta)] mb-2">158</div>
                  <p className="text-sm text-gray-600">
                    Hours you spend recovering
                  </p>
                </Card>
              </div>

              <p className="text-xl font-medium text-[var(--color-sage)] text-center my-8">
                You spend more time recovering than training. What you wear during those hours
                matters.
              </p>
            </div>
          </div>
        </section>

        {/* Beyond Nutrition */}
        <section className="py-16 md:py-24 bg-[var(--color-teal)] text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-5xl font-bold mb-8 text-center">
              Beyond Nutrition
            </h2>
            <p className="text-lg md:text-xl leading-relaxed text-center mb-6">
              Everyone knows post-workout carbs and protein matter. But most athletes ignore the
              mental recovery switch. That switch determines how well your body absorbs those
              nutrients, repairs tissue, and adapts.
            </p>
            <p className="text-xl font-medium text-center">
              TH8TA helps flip that switch.
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-charcoal)] mb-6">
              Ready to Activate Your Parasympathetic System?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Explore the 4-Stage Recovery System designed to help your brain and body transition
              from performance mode to rest mode.
            </p>
            <Link href="/shop/women">
              <Button size="lg">Shop the System</Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
