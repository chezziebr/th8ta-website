import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import Image from 'next/image';

export default function TribePage() {
  return (
    <>
      <Navigation />
      <main>
        {/* HERO SECTION */}
        <section className="relative h-[70vh] flex items-center justify-center bg-black">
          {/* Background Image - replace with actual tribal/community image */}
          <div className="absolute inset-0 bg-gray-700">
            <div className="w-full h-full bg-gradient-to-br from-gray-800 to-black" />
          </div>

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/50" />

          {/* Hero Text */}
          <div className="relative z-10 max-w-4xl mx-auto px-10 text-center text-white">
            <h1 className="text-5xl md:text-7xl font-bold mb-6" style={{ color: '#FFD700' }}>
              The Tribe Mark
            </h1>
            <p className="text-2xl md:text-3xl leading-relaxed">
              Built to Connect. Designed to Be Recognized.
            </p>
          </div>
        </section>

        {/* THE PROBLEM */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-10">
            <h2 className="text-4xl font-bold mb-8 text-[var(--color-text-primary)]">
              You've Been There
            </h2>
            <div className="prose prose-lg max-w-none text-[var(--color-text-secondary)]">
              <p className="text-xl mb-6">
                You're at the coffee shop. Someone walks in wearing running shoes that look <em>too</em> worn
                to be casual. Their calves have that definition. You think: "They run. Like, really run."
              </p>
              <p className="text-xl mb-6">
                Or you're at the grocery store and spot someone with that unmistakable cyclist build—
                quads that don't lie, tan lines that tell stories. You wonder what they're training for.
              </p>
              <p className="text-xl mb-6">
                But you don't say anything. Because starting with "So... do you work out?" feels weird.
                And you might be wrong. So you both just grab your groceries and leave.
              </p>
              <p className="text-xl font-semibold text-[var(--color-text-primary)]">
                What if you didn't have to guess?
              </p>
            </div>
          </div>
        </section>

        {/* THE SOLUTION */}
        <section className="py-20 bg-[var(--color-gray-light)]">
          <div className="max-w-6xl mx-auto px-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[var(--color-text-primary)]">
                The Mark Changes Everything
              </h2>
              <p className="text-xl text-[var(--color-text-secondary)] max-w-3xl mx-auto">
                Every piece of TH8TA carries a subtle signature. Not a billboard. Not a badge.
                A mark that says: <strong>I'm tribe.</strong>
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
              {/* Image placeholder */}
              <div className="aspect-square bg-gray-300 flex items-center justify-center">
                <span className="text-gray-500">[Image: Close-up of TH8TA mark on clothing]</span>
              </div>

              <div>
                <h3 className="text-3xl font-bold mb-6 text-[var(--color-text-primary)]">
                  Subtle. Distinctive. Unmistakable.
                </h3>
                <div className="space-y-4 text-lg text-[var(--color-text-secondary)]">
                  <p>
                    The TH8TA mark isn't loud. It doesn't scream. But when you see it, you <em>know</em>.
                  </p>
                  <p>
                    It's designed to be recognized by those who know—and invisible to those who don't.
                    Understated enough to wear anywhere. Distinctive enough to spot across a room.
                  </p>
                  <p className="font-semibold text-[var(--color-text-primary)]">
                    When you see the mark, you've found your people.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-10">
            <h2 className="text-4xl font-bold text-center mb-16 text-[var(--color-text-primary)]">
              Skip the Small Talk
            </h2>

            <div className="grid md:grid-cols-3 gap-12">
              <div className="text-center">
                <div className="text-6xl mb-6">👀</div>
                <h3 className="text-2xl font-bold mb-4 text-[var(--color-text-primary)]">
                  Spot the Mark
                </h3>
                <p className="text-base text-[var(--color-text-secondary)]">
                  You see someone wearing TH8TA. Could be a hoodie, joggers, a tee. The mark is there.
                  Small. Subtle. But you recognize it.
                </p>
              </div>

              <div className="text-center">
                <div className="text-6xl mb-6">💬</div>
                <h3 className="text-2xl font-bold mb-4 text-[var(--color-text-primary)]">
                  Make Contact
                </h3>
                <p className="text-base text-[var(--color-text-secondary)]">
                  No awkward opener needed. "What are you training for?" That's it. Because you both know
                  you're not talking about a New Year's resolution.
                </p>
              </div>

              <div className="text-center">
                <div className="text-6xl mb-6">🔥</div>
                <h3 className="text-2xl font-bold mb-4 text-[var(--color-text-primary)]">
                  Connect
                </h3>
                <p className="text-base text-[var(--color-text-secondary)]">
                  Race stats. Training blocks. FTP. Vo2 max. Recovery protocols. The good stuff.
                  You've found someone who gets it.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* THE TRIBE */}
        <section className="py-20 bg-black text-white">
          <div className="max-w-4xl mx-auto px-10 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8" style={{ color: '#FFD700' }}>
              This Is Your Tribe
            </h2>
            <div className="space-y-6 text-lg">
              <p>
                You didn't just start running because your doctor told you to. You're not cycling
                because it's trendy. You're not doing triathlons for Instagram.
              </p>
              <p>
                You do this because it matters. Because you respect the process. Because you know
                that training hard means recovering smart.
              </p>
              <p className="text-xl font-semibold" style={{ color: '#FFD700' }}>
                You're not just working out. You're an endurance athlete.
              </p>
              <p>
                And when you see the mark, you know you've found someone who gets it. Someone who
                understands that the work doesn't stop when the workout ends. Someone who knows
                recovery isn't lazy—it's strategic.
              </p>
              <p className="text-2xl font-bold mt-8">
                Welcome to the tribe.
              </p>
            </div>
          </div>
        </section>

        {/* WEAR THE MARK */}
        <section className="py-20 bg-[var(--color-gray-light)]">
          <div className="max-w-4xl mx-auto px-10 text-center">
            <h2 className="text-4xl font-bold mb-6 text-[var(--color-text-primary)]">
              Wear the Mark. Find Your People.
            </h2>
            <p className="text-xl mb-12 text-[var(--color-text-secondary)]">
              Every piece of TH8TA recovery wear carries the signature. Every piece connects you to the tribe.
            </p>
            <div className="flex gap-6 justify-center flex-wrap">
              <a
                href="/shop/women/sweaters"
                className="inline-block px-10 py-5 bg-black text-white text-sm font-semibold tracking-wide hover:bg-gray-800 transition-colors"
              >
                SHOP SWEATERS & HOODIES
              </a>
              <a
                href="/shop/women/tops"
                className="inline-block px-10 py-5 bg-black text-white text-sm font-semibold tracking-wide hover:bg-gray-800 transition-colors"
              >
                SHOP TOPS
              </a>
              <a
                href="/shop/women/bottoms"
                className="inline-block px-10 py-5 bg-black text-white text-sm font-semibold tracking-wide hover:bg-gray-800 transition-colors"
              >
                SHOP BOTTOMS
              </a>
            </div>
          </div>
        </section>

        {/* FINAL STATEMENT */}
        <section className="py-16 bg-black">
          <div className="max-w-3xl mx-auto px-10 text-center">
            <p className="text-2xl md:text-3xl italic text-white">
              "Nothing is more fun than bumping into a fellow endurance athlete.
              Now you'll know exactly who they are."
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
