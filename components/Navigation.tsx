'use client';

import React, { useState } from 'react';
import Link from 'next/link';

interface NavItem {
  label: string;
  href?: string;
  dropdown?: { label: string; href: string }[];
}

const navigationItems: NavItem[] = [
  {
    label: 'WOMEN',
    href: '/shop/women',
  },
  {
    label: 'THE SYSTEM',
    dropdown: [
      { label: 'How It Works', href: '/system' },
      { label: 'The Science of Recovery', href: '/science' },
    ],
  },
  {
    label: 'ABOUT',
    dropdown: [
      { label: 'Our Story', href: '/about' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  {
    label: 'BLOG',
    href: '/blog',
  },
];

export const Navigation: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="text-2xl font-bold text-[var(--color-sage)] font-[var(--font-headline)]">
              TH8TA
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navigationItems.map((item) => (
              <div
                key={item.label}
                className="relative group"
                onMouseEnter={() => item.dropdown && setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {item.href ? (
                  <Link
                    href={item.href}
                    className="px-4 py-2 text-sm font-medium text-[var(--color-charcoal)] hover:text-[var(--color-sage)] transition-colors"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <button className="px-4 py-2 text-sm font-medium text-[var(--color-charcoal)] hover:text-[var(--color-sage)] transition-colors flex items-center">
                    {item.label}
                    {item.dropdown && (
                      <svg
                        className="ml-1 h-4 w-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    )}
                  </button>
                )}

                {/* Dropdown Menu */}
                {item.dropdown && activeDropdown === item.label && (
                  <div className="absolute left-0 mt-0 w-56 bg-white rounded-lg shadow-lg py-2 z-50">
                    {item.dropdown.map((dropdownItem) => (
                      <Link
                        key={dropdownItem.href}
                        href={dropdownItem.href}
                        className="block px-4 py-2 text-sm text-[var(--color-charcoal)] hover:bg-[var(--color-cream)] hover:text-[var(--color-sage)] transition-colors"
                      >
                        {dropdownItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right Side - Cart & Search */}
          <div className="hidden lg:flex items-center space-x-4">
            <button
              className="p-2 text-[var(--color-charcoal)] hover:text-[var(--color-sage)] transition-colors"
              aria-label="Search"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
            <button
              className="p-2 text-[var(--color-charcoal)] hover:text-[var(--color-sage)] transition-colors"
              aria-label="Shopping Cart"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-[var(--color-charcoal)]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-4 space-y-2">
            {navigationItems.map((item) => (
              <div key={item.label}>
                {item.href ? (
                  <Link
                    href={item.href}
                    className="block py-2 text-base font-medium text-[var(--color-charcoal)] hover:text-[var(--color-sage)]"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <>
                    <button
                      className="w-full flex justify-between items-center py-2 text-base font-medium text-[var(--color-charcoal)]"
                      onClick={() =>
                        setActiveDropdown(activeDropdown === item.label ? null : item.label)
                      }
                    >
                      {item.label}
                      <svg
                        className={`h-5 w-5 transition-transform ${
                          activeDropdown === item.label ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    {item.dropdown && activeDropdown === item.label && (
                      <div className="pl-4 space-y-1 mt-1">
                        {item.dropdown.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.href}
                            href={dropdownItem.href}
                            className="block py-2 text-sm text-[var(--color-charcoal)] hover:text-[var(--color-sage)]"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {dropdownItem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};
