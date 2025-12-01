import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'The 4-Stage Recovery System™ | TH8TA',
  description:
    'The 4-Stage Recovery System™ by TH8TA maps your entire post-workout recovery—from the moment you finish to the minute you fall asleep. Science-backed, athlete-tested recovery gear.',
  keywords: [
    'athletic recovery clothing',
    'post-workout gear',
    'recovery wear for athletes',
    'endurance athlete recovery',
    'what to wear after working out',
  ],
};

export default function SystemPage() {
  return (
    <>
      <Navigation />
      <main>
        {/* HERO SECTION */}
        <section className="relative py-20 md:py-32 overflow-hidden">
          <Image
            src="/images/woodland-picnic.jpg"
            alt="Athletes in recovery mode after workout"
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-cream)]/95 to-[var(--color-sage)]/90"></div>
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-[var(--color-charcoal)] mb-6">
              The 4-Stage Recovery System™
            </h1>
            <p className="text-2xl md:text-3xl text-[var(--color-teal)] font-medium mb-8">
              You already know what to wear during your workout.
              <br />
              We mapped everything after.
            </p>
            <p className="text-lg md:text-xl text-[var(--color-charcoal)] opacity-80 mb-8 max-w-3xl mx-auto leading-relaxed">
              Most athletes spend 20+ hours a day recovering—yet have zero intentional gear for
              it. The 4-Stage Recovery System™ organizes every product by the exact moment you need
              it, from the second you finish to the minute you fall asleep.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/shop/women?stage=1">
                <Button size="lg">Start with Stage 1 →</Button>
              </Link>
              <a href="#science">
                <Button variant="outline" size="lg">
                  Skip to the Science ↓
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* SECTION 1: THE RECOVERY REALITY */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-5xl font-bold text-[var(--color-charcoal)] mb-12 text-center">
              Here's What Most Athletes Miss
            </h2>

            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                You spend 1-3 hours training. You spend 21-23 hours recovering.
              </p>
              <p>
                Yet somehow, the entire athletic apparel industry is obsessed with those 2 hours.
                They'll engineer you a lighter running short, a more breathable top, a faster shoe.
                But when you peel off that gear—soaked, exhausted, finally done—what are you
                supposed to put on?
              </p>
              <p>Old workout clothes? Random loungewear? The same leggings you just ran 15 miles in?</p>
              <p className="font-medium text-[var(--color-sage)]">
                That's the gap we built TH8TA to fill.
              </p>
            </div>

            <Card className="bg-[var(--color-teal)] text-white my-12">
              <p className="text-xl leading-relaxed">
                "Recovery isn't passive time. It's when your body adapts, repairs, and gets
                stronger. What you wear during recovery isn't just comfort—it's a signal to your
                brain that it's time to shift gears."
              </p>
            </Card>

            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                Recovery has phases. Your body moves through distinct states—from fight-or-flight
                (sympathetic nervous system) to rest-and-digest (parasympathetic). Each phase has
                different needs.
              </p>
              <p className="font-medium">
                The 4-Stage Recovery System™ maps those needs to specific gear. So you always know:{' '}
                <em>This is what I wear right now.</em>
              </p>
            </div>

            {/* Recovery Cycle Visual */}
            <div className="mt-12 p-8 bg-[var(--color-cream)] rounded-lg">
              <div className="flex flex-col items-center space-y-4">
                <div className="text-center font-bold text-[var(--color-charcoal)]">WORKOUT</div>
                <div className="text-2xl text-gray-400">↓</div>
                <div className="w-full max-w-md space-y-3">
                  <div className="p-4 bg-[var(--color-teal)] text-white rounded-lg text-center font-medium">
                    Stage 1: Immediate Swap
                  </div>
                  <div className="text-2xl text-gray-400 text-center">↓</div>
                  <div className="p-4 bg-[var(--color-sage)] text-white rounded-lg text-center font-medium">
                    Stage 2: Shower & Soothe
                  </div>
                  <div className="text-2xl text-gray-400 text-center">↓</div>
                  <div className="p-4 bg-[var(--color-terracotta)] text-white rounded-lg text-center font-medium">
                    Stage 3: Reintegrate
                  </div>
                  <div className="text-2xl text-gray-400 text-center">↓</div>
                  <div className="p-4 bg-[var(--color-lavender)] text-white rounded-lg text-center font-medium">
                    Stage 4: Reset
                  </div>
                </div>
                <div className="text-2xl text-gray-400">↓</div>
                <div className="text-center font-bold text-[var(--color-charcoal)]">SLEEP</div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: THE 4 STAGES */}
        {/* Stage 1: Immediate Swap */}
        <section className="py-16 md:py-24 bg-[var(--color-teal)] bg-opacity-5">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="aspect-video relative rounded-lg overflow-hidden">
                <Image
                  src="/images/beach-chillax-horizontal.jpg"
                  alt="Athlete changing into recovery gear after workout"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 rounded-full bg-[var(--color-teal)] text-white flex items-center justify-center text-2xl font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-[var(--color-charcoal)]">
                      Immediate Swap
                    </h3>
                    <p className="text-xl italic text-gray-600">Get dry. Get warm. Get moving.</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold text-[var(--color-charcoal)] mb-2">
                      When You're Here
                    </h4>
                    <ul className="space-y-1 text-gray-700">
                      <li>☑ You just finished your workout</li>
                      <li>☑ You're soaked (sweat, rain, or both)</li>
                      <li>☑ You're still in fight-or-flight mode</li>
                      <li>☑ Your car seat is leather and you're dripping</li>
                      <li>☑ You need warmth, NOW</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold text-[var(--color-charcoal)] mb-2">
                      What Your Body Needs
                    </h4>
                    <p className="text-gray-700 leading-relaxed">
                      Your sympathetic nervous system is still dominant—heart rate elevated,
                      breathing fast, muscles twitching. You're not recovering yet. You're
                      transitioning. Stage 1 gear gets you out of wet, restrictive performance
                      fabric and into something dry, warm, and easy.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold text-[var(--color-charcoal)] mb-2">
                      The Right Gear for Stage 1
                    </h4>
                    <ul className="space-y-1 text-gray-700">
                      <li>• Moisture-wicking pullovers</li>
                      <li>• Quick-dry shorts or joggers</li>
                      <li>• Lightweight baselayers</li>
                      <li>• The Rump Wrap™ (car seat protector)</li>
                    </ul>
                  </div>

                  <Card className="bg-[var(--color-cream)]">
                    <p className="italic text-gray-700">
                      "I keep a Stage 1 pullover in my car. The second I finish a long run, I peel
                      off my soaked shirt and put this on. Game changer."
                    </p>
                    <p className="text-sm text-gray-600 mt-2">— Maya, ultra-runner</p>
                  </Card>

                  <Link href="/shop/women?stage=1">
                    <Button className="w-full md:w-auto">Shop Stage 1 Gear →</Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stage 2: Shower & Soothe */}
        <section className="py-16 md:py-24 bg-[var(--color-sage)] bg-opacity-5">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 rounded-full bg-[var(--color-sage)] text-white flex items-center justify-center text-2xl font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-[var(--color-charcoal)]">
                      Shower & Soothe
                    </h3>
                    <p className="text-xl italic text-gray-600">Cashmere after a hot bath.</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold text-[var(--color-charcoal)] mb-2">
                      When You're Here
                    </h4>
                    <ul className="space-y-1 text-gray-700">
                      <li>☑ You've showered, stretched, maybe foam-rolled</li>
                      <li>☑ Your muscles are still warm but starting to relax</li>
                      <li>☑ You want to feel wrapped, held, gently supported</li>
                      <li>☑ This is where you remember what comfort feels like</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold text-[var(--color-charcoal)] mb-2">
                      What Your Body Needs
                    </h4>
                    <p className="text-gray-700 leading-relaxed">
                      This is the golden window. Your parasympathetic nervous system is starting to
                      activate, but it needs encouragement. Soft, plush, skin-friendly fabrics
                      signal safety. Stage 2 gear feels like a hug.
                    </p>
                  </div>

                  <Card className="bg-[var(--color-sage)] text-white">
                    <p className="leading-relaxed">
                      <strong>Science Note:</strong> Soft, non-restrictive fabrics help activate the
                      vagus nerve, which signals your parasympathetic nervous system to take over.
                      Translation: Your body starts actually recovering.
                    </p>
                  </Card>

                  <Card className="bg-[var(--color-cream)]">
                    <p className="italic text-gray-700">
                      "I put on my Stage 2 robe immediately after every cold plunge. The contrast
                      between cold therapy and this softness is *chef's kiss*."
                    </p>
                    <p className="text-sm text-gray-600 mt-2">— Derek, triathlete</p>
                  </Card>

                  <Link href="/shop/women?stage=2">
                    <Button variant="secondary" className="w-full md:w-auto">
                      Shop Stage 2 Gear →
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="aspect-video relative rounded-lg overflow-hidden order-1 md:order-2">
                <Image
                  src="/images/relax-beach.jpg"
                  alt="Athletes relaxing post-workout in comfort"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Stage 3: Reintegrate */}
        <section className="py-16 md:py-24 bg-[var(--color-cream)]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="aspect-video relative rounded-lg overflow-hidden">
                <Image
                  src="/images/power-meter.jpg"
                  alt="Athletes looking put-together while recovering"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 rounded-full bg-[var(--color-terracotta)] text-white flex items-center justify-center text-2xl font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-[var(--color-charcoal)]">Reintegrate</h3>
                    <p className="text-xl italic text-gray-600">Presentable AF. Still recovering.</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold text-[var(--color-charcoal)] mb-2">
                      When You're Here
                    </h4>
                    <ul className="space-y-1 text-gray-700">
                      <li>☑ You need to look like a functional human</li>
                      <li>☑ Second dinner, coffee shop, grocery store</li>
                      <li>☑ You don't want to look like you just ran an ultra</li>
                      <li>☑ But you're still sore, still tired, still recovering</li>
                      <li>☑ You want soft, but elevated</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold text-[var(--color-charcoal)] mb-2">
                      The Look-Good Principle
                    </h4>
                    <p className="text-gray-700 leading-relaxed">
                      Here's the thing: If a garment doesn't have a specific physiological function
                      (like compression or moisture-wicking), it should at least make you look good.
                      Looking good = feeling good = your brain registers "I'm taking care of myself"
                      = faster recovery.
                    </p>
                  </div>

                  <Card className="bg-white">
                    <p className="italic text-gray-700">
                      "I wear my Stage 3 joggers to the brewery after Saturday long runs. No one
                      knows I just did 20 miles. I look like I have a social life."
                    </p>
                    <p className="text-sm text-gray-600 mt-2">— Jake, marathon runner</p>
                  </Card>

                  <Link href="/shop/women?stage=3">
                    <Button className="w-full md:w-auto">Shop Stage 3 Gear →</Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stage 4: Reset */}
        <section className="py-16 md:py-24 bg-[var(--color-lavender)] bg-opacity-10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 rounded-full bg-[var(--color-lavender)] text-white flex items-center justify-center text-2xl font-bold">
                    4
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-[var(--color-charcoal)]">Reset</h3>
                    <p className="text-xl italic text-gray-600">
                      Permission to do absolutely nothing.
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold text-[var(--color-charcoal)] mb-2">
                      When You're Here
                    </h4>
                    <ul className="space-y-1 text-gray-700">
                      <li>☑ The day is done</li>
                      <li>☑ It's time to wind down (or you're already horizontal)</li>
                      <li>☑ Sleep is imminent (or should be)</li>
                      <li>☑ You want maximum softness, zero restriction</li>
                      <li>☑ This is deep recovery mode</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold text-[var(--color-charcoal)] mb-2">
                      What Your Body Needs
                    </h4>
                    <p className="text-gray-700 leading-relaxed">
                      This is where the magic happens. During sleep, your body releases growth
                      hormone, repairs muscle tissue, consolidates memories, and resets your nervous
                      system for tomorrow. Stage 4 gear should feel like you're being held by a
                      cloud.
                    </p>
                  </div>

                  <Card className="bg-[var(--color-lavender)] text-white">
                    <p className="leading-relaxed">
                      <strong>Sleep Science:</strong> Quality sleep is the most powerful recovery
                      tool. Athletes who sleep 8+ hours show improved reaction time, reduced injury
                      risk, and better performance.
                    </p>
                  </Card>

                  <Card className="bg-white">
                    <p className="italic text-gray-700">
                      "My Stage 4 sleep set is like a ritual. I put it on, make tea, and my brain
                      knows: we're done. Time to recover. I fall asleep faster now."
                    </p>
                    <p className="text-sm text-gray-600 mt-2">— Alicia, swimmer</p>
                  </Card>

                  <Link href="/shop/women?stage=4">
                    <Button variant="secondary" className="w-full md:w-auto">
                      Shop Stage 4 Gear →
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="aspect-video relative rounded-lg overflow-hidden order-1 md:order-2">
                <Image
                  src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=800&h=600&fit=crop&q=80"
                  alt="Cozy sleep environment for deep recovery"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: IT'S A CYCLE */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-[var(--color-charcoal)] mb-6">
              It's a Cycle, Not a Checklist
            </h3>
            <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
              <p>
                Recovery isn't linear. Some days you skip Stage 3 and go straight from the shower
                to bed. Other days you're in Stage 3 for hours (coffee shop work session, anyone?).
              </p>
              <p>
                The point isn't to be rigid. The point is to have the right gear for every phase, so
                you're never stuck wearing yesterday's sweaty leggings or wondering "is this
                appropriate for the grocery store?"
              </p>
              <p className="font-medium text-[var(--color-sage)] text-xl">
                You've earned intentional recovery. This system makes it easy.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 4: THE SCIENCE */}
        <section id="science" className="py-16 md:py-24 bg-[var(--color-teal)] text-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-5xl font-bold mb-8 text-center">
              The Science Behind the System
            </h2>
            <p className="text-xl text-center mb-12 text-white/90">
              This isn't just about comfort. It's about helping your body switch from "fight mode"
              to "repair mode" as quickly as possible.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="bg-white/10">
                <h3 className="text-2xl font-bold mb-4">The Problem: Sympathetic Overdrive</h3>
                <p className="mb-4 text-white/90 leading-relaxed">
                  During and after intense exercise, your sympathetic nervous system dominates—your
                  heart rate is up, breathing is fast, muscles are tense. This is normal.
                </p>
                <p className="text-white/90 leading-relaxed">
                  But many athletes stay stuck here for hours after finishing. They throw on the
                  same tight workout clothes, rush to the next thing, eat while stressed.
                </p>
                <p className="font-medium mt-4">
                  Result? Delayed recovery. Your body can't fully repair while it's still on high
                  alert.
                </p>
              </Card>

              <Card className="bg-white/10">
                <h3 className="text-2xl font-bold mb-4">The Solution: Parasympathetic Activation</h3>
                <p className="mb-4 text-white/90 leading-relaxed">
                  Your parasympathetic nervous system is the "rest and digest" system. When it
                  activates, your heart rate slows, digestion improves, muscles relax, and tissue
                  repair accelerates.
                </p>
                <p className="text-white/90 leading-relaxed">
                  Environmental cues help trigger this switch: warmth, soft textures, rituals (like
                  changing into specific clothes), and removing restrictive gear.
                </p>
                <p className="font-medium mt-4">This is where TH8TA gear comes in.</p>
              </Card>
            </div>

            <Card className="bg-white text-[var(--color-charcoal)]">
              <p className="text-xl leading-relaxed">
                When you change from tight workout clothes into soft, purposeful recovery gear,
                you're not just getting comfortable. You're sending a signal to your nervous system:{' '}
                <em className="font-medium">We're done. It's safe to rest.</em>
              </p>
            </Card>

            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <Card className="text-center bg-white/10">
                <div className="text-4xl font-bold mb-2">15-20 min</div>
                <p className="text-sm text-white/80">
                  Time to activate parasympathetic response with intentional cues
                </p>
              </Card>
              <Card className="text-center bg-white/10">
                <div className="text-4xl font-bold mb-2">23+ hours</div>
                <p className="text-sm text-white/80">
                  Time endurance athletes spend recovering vs. 1-3 hours training
                </p>
              </Card>
              <Card className="text-center bg-white/10">
                <div className="text-4xl font-bold mb-2">2-3x faster</div>
                <p className="text-sm text-white/80">
                  Recovery improvement when parasympathetic activation is prioritized
                </p>
              </Card>
            </div>

            <div className="text-center mt-12">
              <Link href="/science">
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-white/10 border-white text-white hover:bg-white hover:text-[var(--color-teal)]"
                >
                  Want the full science breakdown? →
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* SECTION 5: SHOP BY STAGE */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-5xl font-bold text-[var(--color-charcoal)] mb-12 text-center">
              Shop by Stage
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {stages.map((stage) => (
                <Link key={stage.number} href={stage.link}>
                  <Card
                    hover
                    className={`${stage.bgColor} border-4 ${stage.borderColor} cursor-pointer group h-full`}
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className={`w-12 h-12 rounded-full ${stage.badgeColor} text-white flex items-center justify-center text-xl font-bold flex-shrink-0`}
                      >
                        {stage.number}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-[var(--color-charcoal)] mb-2 group-hover:text-[var(--color-sage)] transition-colors">
                          {stage.name}
                        </h3>
                        <p className="text-lg italic text-gray-600 mb-4">{stage.tagline}</p>
                        <div className="aspect-video bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg mb-4"></div>
                        <Button className="w-full">Shop Stage {stage.number} →</Button>
                      </div>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* FOOTER CTA */}
        <section className="py-16 md:py-24 bg-[var(--color-cream)]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-[var(--color-charcoal)] mb-6">
              Ready to Build Your Recovery System?
            </h3>
            <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
              Start with one stage. Build from there. Every athlete's recovery looks different—the
              system just makes it easier to find what you need, when you need it.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/shop/women">
                <Button size="lg">Shop All Gear</Button>
              </Link>
              <Link href="/science">
                <Button variant="outline" size="lg">
                  Read the Full Science →
                </Button>
              </Link>
            </div>
            <p className="text-sm text-gray-600 mt-6">
              Questions? We're athletes too. We get it.{' '}
              <Link href="/contact" className="text-[var(--color-sage)] hover:underline">
                Contact Us
              </Link>
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

const stages = [
  {
    number: 1,
    name: 'Immediate Swap',
    tagline: 'Get dry. Get warm. Get moving.',
    link: '/shop/women?stage=1',
    bgColor: 'bg-[var(--color-teal)] bg-opacity-5',
    borderColor: 'border-[var(--color-teal)]',
    badgeColor: 'bg-[var(--color-teal)]',
  },
  {
    number: 2,
    name: 'Shower & Soothe',
    tagline: 'Cashmere after a hot bath.',
    link: '/shop/women?stage=2',
    bgColor: 'bg-[var(--color-sage)] bg-opacity-5',
    borderColor: 'border-[var(--color-sage)]',
    badgeColor: 'bg-[var(--color-sage)]',
  },
  {
    number: 3,
    name: 'Reintegrate',
    tagline: 'Presentable AF. Still recovering.',
    link: '/shop/women?stage=3',
    bgColor: 'bg-[var(--color-cream)]',
    borderColor: 'border-[var(--color-terracotta)]',
    badgeColor: 'bg-[var(--color-terracotta)]',
  },
  {
    number: 4,
    name: 'Reset',
    tagline: 'Permission to do absolutely nothing.',
    link: '/shop/women?stage=4',
    bgColor: 'bg-[var(--color-lavender)] bg-opacity-10',
    borderColor: 'border-[var(--color-lavender)]',
    badgeColor: 'bg-[var(--color-lavender)]',
  },
];
