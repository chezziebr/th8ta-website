import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Card } from '@/components/ui/Card';
import Link from 'next/link';

export const metadata = {
  title: 'The Recovery Journal | TH8TA Blog',
  description: 'Science, stories, and sass from the cool-down.',
};

// Placeholder blog posts
const blogPosts = [
  {
    slug: 'sitting-on-couch-recovery',
    title: 'How Does Sitting on the Couch Help Recovery?',
    excerpt:
      "Spoiler: It's not lazy. Your nervous system needs low-stimulus environments to fully activate parasympathetic mode.",
    image: '/blog/couch.jpg',
    date: '2024-01-15',
    author: 'Sarah Chen',
    readTime: '5 min read',
  },
  {
    slug: 'compression-socks-recovery',
    title: 'Do Compression Socks Really Help You Recover?',
    excerpt:
      'The science behind graduated compression and why timing matters more than you think.',
    image: '/blog/socks.jpg',
    date: '2024-01-10',
    author: 'Marcus Thompson',
    readTime: '7 min read',
  },
  {
    slug: 'hot-vs-cold-recovery',
    title: 'Hot vs. Cold: The Great Recovery Debate',
    excerpt:
      'Ice baths vs. hot tubs—when to use each and why both have a place in your recovery toolkit.',
    image: '/blog/hot-cold.jpg',
    date: '2024-01-05',
    author: 'Jamie Rodriguez',
    readTime: '6 min read',
  },
  {
    slug: 'workout-clothes-sabotage',
    title: 'Why Your Workout Clothes Are Sabotaging Your Recovery',
    excerpt:
      'Staying in compressive gear after training keeps your nervous system in fight-or-flight mode.',
    image: '/blog/clothes.jpg',
    date: '2024-01-01',
    author: 'Sarah Chen',
    readTime: '5 min read',
  },
  {
    slug: 'ritual-effect',
    title: 'The Ritual Effect: How Hot Chocolate Accelerates Recovery',
    excerpt:
      "It's not just the carbs—rituals create neurological pathways that signal safety to your brain.",
    image: '/blog/ritual.jpg',
    date: '2023-12-28',
    author: 'Marcus Thompson',
    readTime: '8 min read',
  },
  {
    slug: 'microplastics-athletic-wear',
    title: 'Microplastics in Athletic Wear: What You Need to Know',
    excerpt:
      'The uncomfortable truth about synthetic fabrics and what you can do to minimize impact.',
    image: '/blog/microplastics.jpg',
    date: '2023-12-20',
    author: 'Jamie Rodriguez',
    readTime: '9 min read',
  },
  {
    slug: 'more-time-recovering',
    title: "You Spend More Time Recovering Than Training—Here's Why That Matters",
    excerpt:
      'The math is simple: 23 hours a day not working out. What you do during that time determines your gains.',
    image: '/blog/time.jpg',
    date: '2023-12-15',
    author: 'Sarah Chen',
    readTime: '6 min read',
  },
  {
    slug: 'soft-fabrics-signal',
    title: "Soft Fabrics Aren't a Luxury, They're a Signal",
    excerpt:
      'How tactile anchors help your autonomic nervous system transition from performance to rest.',
    image: '/blog/fabrics.jpg',
    date: '2023-12-10',
    author: 'Marcus Thompson',
    readTime: '7 min read',
  },
];

export default function BlogPage() {
  return (
    <>
      <Navigation />
      <main>
        {/* Header */}
        <section className="bg-[var(--color-sage)] text-white py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">The Recovery Journal</h1>
            <p className="text-xl text-white/90">Science, stories, and sass from the cool-down.</p>
          </div>
        </section>

        {/* Featured Post */}
        <section className="py-12 bg-[var(--color-cream)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link href={`/blog/${blogPosts[0].slug}`}>
              <Card hover className="overflow-hidden group cursor-pointer">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="aspect-video md:aspect-auto bg-gradient-to-br from-gray-300 to-gray-400 rounded-lg"></div>
                  <div className="flex flex-col justify-center">
                    <div className="text-sm text-[var(--color-sage)] font-medium mb-2">
                      FEATURED POST
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-charcoal)] mb-4 group-hover:text-[var(--color-sage)] transition-colors">
                      {blogPosts[0].title}
                    </h2>
                    <p className="text-gray-600 mb-4">{blogPosts[0].excerpt}</p>
                    <div className="flex items-center text-sm text-gray-500">
                      <span>{blogPosts[0].author}</span>
                      <span className="mx-2">•</span>
                      <span>{blogPosts[0].date}</span>
                      <span className="mx-2">•</span>
                      <span>{blogPosts[0].readTime}</span>
                    </div>
                  </div>
                </div>
              </Card>
            </Link>
          </div>
        </section>

        {/* All Posts */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-[var(--color-charcoal)] mb-8">All Posts</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.slice(1).map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`}>
                  <Card hover padding="none" className="overflow-hidden group cursor-pointer">
                    <div className="aspect-video bg-gradient-to-br from-gray-300 to-gray-400"></div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-[var(--color-charcoal)] mb-3 group-hover:text-[var(--color-sage)] transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 mb-4">{post.excerpt}</p>
                      <div className="flex items-center text-sm text-gray-500">
                        <span>{post.author}</span>
                        <span className="mx-2">•</span>
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </Card>
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
