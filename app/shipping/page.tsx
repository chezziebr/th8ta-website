import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Card } from '@/components/ui/Card';

export const metadata = {
  title: 'Shipping & Returns | TH8TA',
  description: 'Our shipping and return policies.',
};

export default function ShippingPage() {
  return (
    <>
      <Navigation />
      <main>
        <section className="py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-charcoal)] mb-12 text-center">
              Shipping & Returns
            </h1>

            <div className="space-y-8">
              {/* Shipping */}
              <Card>
                <h2 className="text-2xl font-bold text-[var(--color-charcoal)] mb-4">Shipping</h2>
                <div className="space-y-4 text-gray-700">
                  <div>
                    <h3 className="font-semibold text-[var(--color-charcoal)] mb-2">
                      Free Shipping
                    </h3>
                    <p>Free standard shipping on all orders over $75.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[var(--color-charcoal)] mb-2">
                      Standard Shipping
                    </h3>
                    <p>5-7 business days | $8.95 for orders under $75</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[var(--color-charcoal)] mb-2">
                      Express Shipping
                    </h3>
                    <p>2-3 business days | $16.95</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[var(--color-charcoal)] mb-2">
                      Overnight Shipping
                    </h3>
                    <p>1 business day | $29.95</p>
                  </div>
                </div>
              </Card>

              {/* Returns & Exchanges */}
              <Card>
                <h2 className="text-2xl font-bold text-[var(--color-charcoal)] mb-4">
                  Returns & Exchanges
                </h2>
                <div className="space-y-4 text-gray-700">
                  <div>
                    <h3 className="font-semibold text-[var(--color-charcoal)] mb-2">
                      60-Day Return Window
                    </h3>
                    <p>
                      We want you to test your recovery gear through a full training cycle. That's
                      why we offer a generous 60-day return window.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[var(--color-charcoal)] mb-2">
                      Easy Exchanges
                    </h3>
                    <p>
                      Wrong size? Different stage? We make exchanges simple. No restocking fees,
                      no hassle.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[var(--color-charcoal)] mb-2">
                      Worn Once? Still Returnable.
                    </h3>
                    <p>
                      We get it. You need to try recovery gear in real recovery scenarios. Worn
                      once on a recovery day? Still returnable, as long as it's in good condition.
                    </p>
                  </div>
                </div>
              </Card>

              {/* FAQ */}
              <Card>
                <h2 className="text-2xl font-bold text-[var(--color-charcoal)] mb-6">
                  Frequently Asked Questions
                </h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-[var(--color-charcoal)] mb-2">
                      What if it doesn't fit?
                    </h3>
                    <p className="text-gray-700">
                      No problem. Exchange for a different size within 60 days. We'll send you a
                      prepaid return label.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[var(--color-charcoal)] mb-2">
                      Can I exchange for a different recovery stage?
                    </h3>
                    <p className="text-gray-700">
                      Absolutely. If you ordered a Stage 2 item but realize you need Stage 3, we'll
                      swap it out.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[var(--color-charcoal)] mb-2">
                      Do you accept returns on sale items?
                    </h3>
                    <p className="text-gray-700">
                      Yes. All items, including sale items, are eligible for return or exchange
                      within 60 days.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[var(--color-charcoal)] mb-2">
                      How do I initiate a return?
                    </h3>
                    <p className="text-gray-700">
                      Email us at{' '}
                      <a href="mailto:hello@th8ta.com" className="text-[var(--color-sage)] hover:underline">
                        hello@th8ta.com
                      </a>{' '}
                      with your order number and reason for return. We'll send you a prepaid
                      shipping label within 24 hours.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[var(--color-charcoal)] mb-2">
                      When will I get my refund?
                    </h3>
                    <p className="text-gray-700">
                      Once we receive your return, we'll process your refund within 3-5 business
                      days. You'll receive an email confirmation when your refund is issued.
                    </p>
                  </div>
                </div>
              </Card>

              {/* Contact */}
              <div className="text-center pt-8">
                <p className="text-gray-600 mb-4">Still have questions?</p>
                <a
                  href="/contact"
                  className="text-[var(--color-sage)] font-medium hover:underline"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
