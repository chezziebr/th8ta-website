'use client';

import React, { useState } from 'react';
import Link from 'next/link';

interface NavItem {
  label: string;
  href?: string;
  dropdown?: { label: string; href: string }[];
}

// Ridge Merino style navigation - clean and minimal
const navigationItems: NavItem[] = [
  {
    label: 'Men',
    href: '/shop/men',
    dropdown: [
      { label: 'Tops', href: '/shop/men/tops' },
      { label: 'Sweaters & Hoodies', href: '/shop/men/sweaters' },
      { label: 'Bottoms', href: '/shop/men/bottoms' },
      { label: 'Outerwear', href: '/shop/men/outerwear' },
      { label: 'Accessories', href: '/shop/men/accessories' },
    ],
  },
  {
    label: 'Women',
    href: '/shop/women',
    dropdown: [
      { label: 'Tops', href: '/shop/women/tops' },
      { label: 'Sweaters & Hoodies', href: '/shop/women/sweaters' },
      { label: 'Bottoms', href: '/shop/women/bottoms' },
      { label: 'Outerwear', href: '/shop/women/outerwear' },
      { label: 'Accessories', href: '/shop/women/accessories' },
    ],
  },
  {
    label: 'The Science',
    href: '/science',
  },
  {
    label: 'The Tribe',
    href: '/tribe',
  },
  {
    label: 'About',
    href: '/about',
  },
];

// RIDGE MERINO STYLE NAVIGATION - Black background, minimal, sticky
export const Navigation: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <nav className="bg-black sticky top-0 z-50">
      <div className="max-w-[1400px] mx-auto px-10">
        <div className="flex justify-between items-center h-[70px]">
          {/* LEFT: Logo */}
          <Link href="/" className="flex items-center">
            <div className="text-white text-[20px] font-semibold tracking-[0.1em]">
              TH8TA
            </div>
          </Link>

          {/* CENTER: Desktop Navigation */}
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
                    className="px-4 py-2 text-[14px] text-white hover:opacity-70 transition-opacity duration-200"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <button className="px-4 py-2 text-[14px] text-white hover:opacity-70 transition-opacity duration-200">
                    {item.label}
                  </button>
                )}

                {/* Simple Dropdown - White background, no images */}
                {item.dropdown && activeDropdown === item.label && (
                  <div className="absolute left-0 mt-0 w-56 bg-white shadow-lg py-2 z-50 animate-fadeIn">
                    {item.dropdown.map((dropdownItem) => (
                      <Link
                        key={dropdownItem.href}
                        href={dropdownItem.href}
                        className="block px-5 py-2 text-[14px] text-black hover:bg-[#F5F5F5] transition-colors duration-200"
                      >
                        {dropdownItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* RIGHT: Icons only (Search, Account, Cart) */}
          <div className="hidden lg:flex items-center space-x-4">
            <button
              className="p-2 text-white hover:opacity-70 transition-opacity"
              aria-label="Search"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
            <button
              className="p-2 text-white hover:opacity-70 transition-opacity"
              aria-label="Account"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </button>
            <button
              className="p-2 text-white hover:opacity-70 transition-opacity relative"
              aria-label="Shopping Cart"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>
              {/* Cart badge - uncomment when cart has items */}
              {/* <span className="absolute top-0 right-0 w-4 h-4 bg-white text-black text-xs flex items-center justify-center rounded-full">2</span> */}
            </button>
          </div>

          {/* MOBILE: Hamburger Menu Button */}
          <button
            className="lg:hidden p-2 text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

      {/* MOBILE MENU: Slides in from right */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-black">
          <div className="flex flex-col h-full">
            {/* Close button */}
            <div className="flex justify-end p-6">
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="text-white p-2"
                aria-label="Close menu"
              >
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Mobile nav items */}
            <div className="px-6 py-4 space-y-4 overflow-y-auto">
              {navigationItems.map((item) => (
                <div key={item.label}>
                  {item.href ? (
                    <Link
                      href={item.href}
                      className="block py-3 text-lg text-white hover:opacity-70"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <>
                      <button
                        className="w-full flex justify-between items-center py-3 text-lg text-white"
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
                        <div className="pl-4 space-y-2 mt-2">
                          {item.dropdown.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.href}
                              href={dropdownItem.href}
                              className="block py-2 text-base text-gray-300 hover:text-white"
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
        </div>
      )}
    </nav>
  );
};
