import React from 'react';
import Link from 'next/link';

// RIDGE MERINO STYLE FOOTER - Black background, 4 columns, minimal
export const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-[1400px] mx-auto px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Column 1: Shop */}
          <div>
            <h4 className="text-[14px] font-semibold mb-6 tracking-wide">
              SHOP
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="/shop/men/tops" className="text-[14px] text-gray-300 hover:text-white transition-colors">
                  Tops
                </Link>
              </li>
              <li>
                <Link href="/shop/men/sweaters" className="text-[14px] text-gray-300 hover:text-white transition-colors">
                  Sweaters & Hoodies
                </Link>
              </li>
              <li>
                <Link href="/shop/men/bottoms" className="text-[14px] text-gray-300 hover:text-white transition-colors">
                  Bottoms
                </Link>
              </li>
              <li>
                <Link href="/shop/men/outerwear" className="text-[14px] text-gray-300 hover:text-white transition-colors">
                  Outerwear
                </Link>
              </li>
              <li>
                <Link href="/shop/men/accessories" className="text-[14px] text-gray-300 hover:text-white transition-colors">
                  Accessories
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Learn */}
          <div>
            <h4 className="text-[14px] font-semibold mb-6 tracking-wide">
              LEARN
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="/science" className="text-[14px] text-gray-300 hover:text-white transition-colors">
                  The Science
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-[14px] text-gray-300 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/size-guide" className="text-[14px] text-gray-300 hover:text-white transition-colors">
                  Size Guide
                </Link>
              </li>
              <li>
                <Link href="/microplastic-impact" className="text-[14px] text-gray-300 hover:text-white transition-colors">
                  Microplastic Impact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Support */}
          <div>
            <h4 className="text-[14px] font-semibold mb-6 tracking-wide">
              SUPPORT
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="/contact" className="text-[14px] text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/returns" className="text-[14px] text-gray-300 hover:text-white transition-colors">
                  Returns
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="text-[14px] text-gray-300 hover:text-white transition-colors">
                  Shipping
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-[14px] text-gray-300 hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h4 className="text-[14px] font-semibold mb-6 tracking-wide">
              NEWSLETTER
            </h4>
            <p className="text-[14px] text-gray-300 mb-4">
              Join the recovery tribe
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-3 text-[14px] bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-white transition-colors"
              />
              <button
                type="submit"
                className="w-full px-4 py-3 text-[14px] font-medium bg-white text-black hover:bg-gray-200 transition-colors tracking-wide"
              >
                SUBSCRIBE
              </button>
            </form>
          </div>
        </div>

        {/* Bottom section - Copyright */}
        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-[14px] text-gray-400 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} TH8TA. All rights reserved.
          </p>

          {/* Social Icons */}
          <div className="flex space-x-5">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Instagram"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Facebook"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
