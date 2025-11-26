import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Card } from '@/components/ui/Card';

export const metadata = {
  title: 'Privacy Policy | TH8TA',
  description: 'Our privacy policy and data practices.',
};

export default function PrivacyPage() {
  return (
    <>
      <Navigation />
      <main>
        <section className="py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-charcoal)] mb-6 text-center">
              Privacy Policy
            </h1>
            <p className="text-center text-gray-600 mb-12">Last Updated: January 2024</p>

            <div className="prose prose-lg max-w-none space-y-8">
              <Card>
                <h2 className="text-2xl font-bold text-[var(--color-charcoal)] mb-4">
                  Introduction
                </h2>
                <p className="text-gray-700">
                  At TH8TA, we respect your privacy and are committed to protecting your personal
                  data. This privacy policy explains how we collect, use, and safeguard your
                  information when you visit our website or make a purchase.
                </p>
              </Card>

              <Card>
                <h2 className="text-2xl font-bold text-[var(--color-charcoal)] mb-4">
                  Information We Collect
                </h2>
                <div className="space-y-4 text-gray-700">
                  <div>
                    <h3 className="font-semibold text-[var(--color-charcoal)] mb-2">
                      Personal Information
                    </h3>
                    <p>When you make a purchase, we collect:</p>
                    <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                      <li>Name</li>
                      <li>Email address</li>
                      <li>Shipping address</li>
                      <li>Billing address</li>
                      <li>Payment information (processed securely through our payment provider)</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[var(--color-charcoal)] mb-2">
                      Automatically Collected Information
                    </h3>
                    <p>When you visit our website, we may collect:</p>
                    <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                      <li>IP address</li>
                      <li>Browser type and version</li>
                      <li>Pages visited and time spent on pages</li>
                      <li>Referring website</li>
                      <li>Device information</li>
                    </ul>
                  </div>
                </div>
              </Card>

              <Card>
                <h2 className="text-2xl font-bold text-[var(--color-charcoal)] mb-4">
                  How We Use Your Information
                </h2>
                <div className="text-gray-700 space-y-2">
                  <p>We use the information we collect to:</p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>Process and fulfill your orders</li>
                    <li>Communicate with you about your order</li>
                    <li>Send you marketing emails (if you've opted in)</li>
                    <li>Improve our website and customer experience</li>
                    <li>Prevent fraud and ensure security</li>
                    <li>Comply with legal obligations</li>
                  </ul>
                </div>
              </Card>

              <Card>
                <h2 className="text-2xl font-bold text-[var(--color-charcoal)] mb-4">
                  Cookie Usage
                </h2>
                <div className="text-gray-700 space-y-4">
                  <p>
                    We use cookies and similar tracking technologies to improve your browsing
                    experience, analyze website traffic, and personalize content.
                  </p>
                  <div>
                    <h3 className="font-semibold text-[var(--color-charcoal)] mb-2">
                      Types of Cookies We Use:
                    </h3>
                    <ul className="list-disc list-inside ml-4 space-y-1">
                      <li>
                        <strong>Essential Cookies:</strong> Required for the website to function
                        properly
                      </li>
                      <li>
                        <strong>Analytics Cookies:</strong> Help us understand how visitors use our
                        site
                      </li>
                      <li>
                        <strong>Marketing Cookies:</strong> Used to deliver relevant advertisements
                      </li>
                    </ul>
                  </div>
                  <p className="text-sm">
                    You can control cookies through your browser settings. Note that disabling
                    cookies may affect website functionality.
                  </p>
                </div>
              </Card>

              <Card>
                <h2 className="text-2xl font-bold text-[var(--color-charcoal)] mb-4">
                  Third-Party Integrations
                </h2>
                <div className="text-gray-700 space-y-2">
                  <p>We work with trusted third-party services:</p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>Payment processors (e.g., Stripe, PayPal) for secure transactions</li>
                    <li>Shipping providers for order fulfillment</li>
                    <li>Analytics tools (e.g., Google Analytics) to improve our website</li>
                    <li>Email marketing platforms (if you've opted in)</li>
                  </ul>
                  <p className="mt-4">
                    These third parties have their own privacy policies and are responsible for
                    their data practices.
                  </p>
                </div>
              </Card>

              <Card>
                <h2 className="text-2xl font-bold text-[var(--color-charcoal)] mb-4">
                  Your Rights
                </h2>
                <div className="text-gray-700 space-y-2">
                  <p>You have the right to:</p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>Access the personal data we hold about you</li>
                    <li>Request correction of inaccurate data</li>
                    <li>Request deletion of your data</li>
                    <li>Opt out of marketing communications</li>
                    <li>Object to processing of your data</li>
                    <li>Request a copy of your data in a portable format</li>
                  </ul>
                  <p className="mt-4">
                    To exercise any of these rights, contact us at{' '}
                    <a
                      href="mailto:hello@th8ta.com"
                      className="text-[var(--color-sage)] hover:underline"
                    >
                      hello@th8ta.com
                    </a>
                    .
                  </p>
                </div>
              </Card>

              <Card>
                <h2 className="text-2xl font-bold text-[var(--color-charcoal)] mb-4">
                  Data Security
                </h2>
                <p className="text-gray-700">
                  We implement appropriate technical and organizational measures to protect your
                  personal data against unauthorized access, alteration, disclosure, or
                  destruction. However, no method of transmission over the internet is 100% secure.
                </p>
              </Card>

              <Card>
                <h2 className="text-2xl font-bold text-[var(--color-charcoal)] mb-4">
                  Data Retention
                </h2>
                <p className="text-gray-700">
                  We retain your personal data only as long as necessary to fulfill the purposes
                  outlined in this privacy policy, comply with legal obligations, resolve disputes,
                  and enforce our agreements.
                </p>
              </Card>

              <Card>
                <h2 className="text-2xl font-bold text-[var(--color-charcoal)] mb-4">
                  Children's Privacy
                </h2>
                <p className="text-gray-700">
                  Our website is not intended for children under 13. We do not knowingly collect
                  personal information from children under 13. If you believe we have collected
                  information from a child under 13, please contact us immediately.
                </p>
              </Card>

              <Card>
                <h2 className="text-2xl font-bold text-[var(--color-charcoal)] mb-4">
                  Changes to This Policy
                </h2>
                <p className="text-gray-700">
                  We may update this privacy policy from time to time. We will notify you of any
                  significant changes by posting the new policy on this page and updating the "Last
                  Updated" date.
                </p>
              </Card>

              <Card>
                <h2 className="text-2xl font-bold text-[var(--color-charcoal)] mb-4">
                  Contact Us
                </h2>
                <p className="text-gray-700 mb-4">
                  If you have questions about this privacy policy or our data practices, please
                  contact us:
                </p>
                <div className="text-gray-700">
                  <p>Email: <a href="mailto:hello@th8ta.com" className="text-[var(--color-sage)] hover:underline">hello@th8ta.com</a></p>
                </div>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
