import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import Link from 'next/link';

// This would typically come from a CMS or database
const getBlogPost = (slug: string) => {
  return {
    title: 'How Does Sitting on the Couch Help Recovery?',
    excerpt:
      "Spoiler: It's not lazy. Your nervous system needs low-stimulus environments to fully activate parasympathetic mode.",
    author: 'Sarah Chen',
    date: '2024-01-15',
    readTime: '5 min read',
    content: `
      <p>After a brutal long run or intense workout, your first instinct might be to collapse on the couch. And guess what? That instinct is scientifically sound.</p>

      <h2>The Parasympathetic Activation Window</h2>
      <p>Your nervous system operates on two modes: sympathetic (fight-or-flight) and parasympathetic (rest-and-digest). During exercise, you're firmly in sympathetic mode. Heart rate elevated, cortisol pumping, muscles primed for action.</p>

      <p>But recovery happens in parasympathetic mode. And here's the catch: your brain doesn't automatically flip the switch just because you stopped moving.</p>

      <h2>Why Low-Stimulus Environments Matter</h2>
      <p>Sitting on the couch—especially in soft, comfortable clothing—creates a low-stimulus environment. No loud noises, no bright lights, no physical demands. This sensory calm signals to your autonomic nervous system that it's safe to downshift into recovery mode.</p>

      <p>Studies show that athletes who spend 30-60 minutes in quiet, comfortable environments post-workout show faster heart rate recovery and lower cortisol levels compared to those who immediately jump into high-stimulus activities.</p>

      <h2>The Ritual Effect</h2>
      <p>When you pair couch time with a consistent ritual—hot chocolate, soft blanket, favorite show—you're creating a neurological pathway. Over time, your brain begins to anticipate the parasympathetic state before you even settle in. This is classical conditioning at work.</p>

      <h2>Not Lazy. Strategic.</h2>
      <p>So no, you're not being lazy when you prioritize couch time after a hard effort. You're being strategic about activating the recovery systems your body needs to adapt and improve.</p>

      <p>Just make sure you're doing it right: soft clothes, minimal stimulation, and intentional rest.</p>
    `,
  };
};

interface Params {
  params: {
    slug: string;
  };
}

export default function BlogPostPage({ params }: Params) {
  const post = getBlogPost(params.slug);

  return (
    <>
      <Navigation />
      <main>
        {/* Hero */}
        <section className="py-16 bg-[var(--color-cream)]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link
              href="/blog"
              className="inline-flex items-center text-[var(--color-sage)] hover:underline mb-8"
            >
              <svg
                className="w-4 h-4 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Back to Blog
            </Link>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--color-charcoal)] mb-6">
              {post.title}
            </h1>
            <div className="flex items-center text-gray-600 mb-8">
              <span className="font-medium">{post.author}</span>
              <span className="mx-3">•</span>
              <span>{post.date}</span>
              <span className="mx-3">•</span>
              <span>{post.readTime}</span>
            </div>
          </div>
        </section>

        {/* Featured Image */}
        <section>
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="aspect-video bg-gradient-to-br from-gray-300 to-gray-400 rounded-lg -mt-12"></div>
          </div>
        </section>

        {/* Content */}
        <article className="py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
        </article>

        {/* Related Products */}
        <section className="py-16 bg-[var(--color-cream)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-[var(--color-charcoal)] mb-8 text-center">
              Mentioned in This Post
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { id: 7, name: 'Cozy Cardigan', stage: 3, price: 88 },
                { id: 4, name: 'Modal Sleep Set', stage: 4, price: 98 },
                { id: 6, name: 'Shower Robe', stage: 2, price: 95 },
              ].map((product) => (
                <Link key={product.id} href={`/product/${product.id}`}>
                  <Card hover padding="none" className="overflow-hidden group cursor-pointer">
                    <div className="aspect-square bg-gray-200 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-gray-300 to-gray-400 group-hover:scale-105 transition-transform duration-300" />
                      <div className="absolute top-3 left-3">
                        <Badge stage={product.stage as 1 | 2 | 3 | 4} size="sm" />
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-[var(--color-charcoal)] mb-1">
                        {product.name}
                      </h3>
                      <p className="font-bold text-[var(--color-charcoal)]">${product.price}</p>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Social Share */}
        <section className="py-12 border-t border-gray-200">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-lg font-bold text-[var(--color-charcoal)] mb-4">
              Share this article
            </h3>
            <div className="flex gap-4">
              <button className="p-3 bg-[var(--color-sage)] text-white rounded-full hover:bg-[var(--color-sage-dark)] transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </button>
              <button className="p-3 bg-[var(--color-teal)] text-white rounded-full hover:bg-[var(--color-teal-dark)] transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
