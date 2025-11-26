'use client';

import { useState, use } from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { getProductBySlug, getProductById } from '@/lib/products';
import { Badge, Button, Card } from '@/components/ui';

// Expandable Section Component
function ExpandableSection({
  title,
  children,
  defaultOpen = false,
}: {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-gray-200">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left hover:bg-gray-50 transition-colors px-6"
      >
        <h3 className="text-lg font-[var(--font-headline)] font-semibold text-[var(--color-charcoal)]">
          {title}
        </h3>
        <svg
          className={`w-5 h-5 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && (
        <div className="px-6 pb-6 text-[var(--color-charcoal)] leading-relaxed">
          {children}
        </div>
      )}
    </div>
  );
}

export default function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const [selectedColorIndex, setSelectedColorIndex] = useState(0);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  const currentColor = product.colors[selectedColorIndex];
  const currentImage = currentColor.images[selectedImageIndex];

  // Get "Pair It With" products
  const pairedProducts = product.pairItWith
    .map((pair) => getProductById(pair.productId))
    .filter(Boolean);

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <Link href="/" className="hover:text-[var(--color-terracotta)]">
            Home
          </Link>
          <span>/</span>
          <Link href="/shop/women" className="hover:text-[var(--color-terracotta)]">
            Shop Women
          </Link>
          <span>/</span>
          <span className="text-[var(--color-charcoal)]">{product.name}</span>
        </div>
      </div>

      {/* Main Product Section */}
      <div className="container mx-auto px-4 pb-16">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          {/* Left: Images */}
          <div>
            {/* Main Image */}
            <div className="relative aspect-[3/4] bg-[var(--color-cream)] rounded-lg overflow-hidden mb-4">
              <Image
                src={currentImage}
                alt={`${product.name} - ${currentColor.name}`}
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Thumbnail Gallery */}
            {currentColor.images.length > 1 && (
              <div className="grid grid-cols-4 gap-2">
                {currentColor.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImageIndex(idx)}
                    className={`relative aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                      selectedImageIndex === idx
                        ? 'border-[var(--color-charcoal)]'
                        : 'border-transparent hover:border-gray-300'
                    }`}
                  >
                    <Image src={img} alt={`View ${idx + 1}`} fill className="object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right: Product Info */}
          <div>
            {/* Product Header */}
            <div className="mb-6">
              <h1 className="text-3xl font-[var(--font-headline)] font-semibold text-[var(--color-charcoal)] mb-3">
                {product.name}
              </h1>

              {/* Reviews */}
              <div className="flex items-center gap-2 mb-6">
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      className="w-4 h-4 text-[var(--color-charcoal)] fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <button className="text-sm text-[var(--color-charcoal)] hover:underline border-b border-[var(--color-charcoal)]">
                  {Math.floor(Math.random() * 1000) + 500}
                </button>
              </div>

              <p className="text-3xl font-semibold text-[var(--color-charcoal)] mb-4">
                ${product.retailPrice}
              </p>
            </div>

            {/* Color Selector - MOVED UP */}
            {product.colors.length > 1 && (
              <div className="mb-6">
                <p className="text-sm font-medium mb-3">
                  Color: <span className="font-semibold">{currentColor.name}</span>
                </p>
                <div className="flex gap-3">
                  {product.colors.map((color, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        setSelectedColorIndex(idx);
                        setSelectedImageIndex(0);
                      }}
                      className={`w-12 h-12 rounded-full border-2 transition-all ${
                        selectedColorIndex === idx
                          ? 'border-[var(--color-charcoal)] ring-2 ring-[var(--color-charcoal)] ring-offset-2'
                          : 'border-gray-300 hover:border-gray-400'
                      }`}
                      style={{ backgroundColor: color.hex || '#cccccc' }}
                      title={color.name}
                      aria-label={color.name}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Size Selector - Smaller boxes */}
            {product.sizes && product.sizes.length > 0 && (
              <div className="mb-6">
                <div className="flex items-center justify-between mb-3">
                  <p className="text-sm font-medium">Size</p>
                  <div className="flex items-center gap-4">
                    <button className="text-sm text-[var(--color-charcoal)] hover:underline">
                      Find My Size
                    </button>
                    <button className="text-sm text-[var(--color-charcoal)] hover:underline">
                      Size Chart
                    </button>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`py-2 px-4 border rounded transition-all min-w-[80px] text-center ${
                        selectedSize === size
                          ? 'border-[var(--color-charcoal)] bg-[var(--color-charcoal)] text-white'
                          : 'border-gray-300 hover:border-[var(--color-charcoal)] text-[var(--color-charcoal)]'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Add to Cart */}
            <div className="mb-8">
              <Button
                variant="primary"
                size="lg"
                className="w-full mb-3"
                disabled={product.sizes && product.sizes.length > 0 && !selectedSize}
              >
                {product.inStock ? 'Add to Cart' : 'Notify When Available'}
              </Button>
              <Button variant="outline" size="lg" className="w-full">
                Add to Wishlist
              </Button>
            </div>

            {/* Quick Info Callouts */}
            <div className="grid grid-cols-2 gap-4 mb-8 p-6 bg-[var(--color-cream)] bg-opacity-30 rounded-lg">
              <div className="text-center">
                <p className="text-sm text-gray-600 mb-1">Free Shipping</p>
                <p className="font-semibold text-[var(--color-charcoal)]">Orders $75+</p>
              </div>
              <div className="text-center">
                <p className="text-sm text-gray-600 mb-1">Easy Returns</p>
                <p className="font-semibold text-[var(--color-charcoal)]">60 Days</p>
              </div>
            </div>

            {/* Expandable Sections */}
            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <ExpandableSection title="How to Wear It" defaultOpen>
                <p className="mb-4">{product.wearIt}</p>
                {product.fit && (
                  <div className="mt-4 p-4 bg-[var(--color-cream)] bg-opacity-20 rounded">
                    <p className="text-sm font-medium mb-2">Fit & Feel:</p>
                    <p className="text-sm">{product.fit.description}</p>
                    <p className="text-sm mt-2">
                      <span className="font-medium">Shows off:</span> {product.fit.showsOff}
                    </p>
                  </div>
                )}
              </ExpandableSection>

              <ExpandableSection title="Why We Love It" defaultOpen>
                <p>{product.ourDescription}</p>
              </ExpandableSection>

              <ExpandableSection title="In Recovery">
                <p>{product.inRecovery}</p>
              </ExpandableSection>

              <ExpandableSection title="Fabric & Care">
                <div className="space-y-4">
                  <div>
                    <p className="font-medium mb-2">Composition:</p>
                    <p className="text-sm">{product.fabric.composition}</p>
                  </div>
                  <div>
                    <p className="font-medium mb-2">Feel:</p>
                    <p className="text-sm">{product.fabric.feel}</p>
                  </div>
                  <div>
                    <p className="font-medium mb-2">Care Instructions:</p>
                    <ul className="text-sm space-y-1">
                      {product.fabric.careInstructions.map((instruction, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-[var(--color-terracotta)] mt-1">•</span>
                          <span>{instruction}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  {product.fabric.microplasticLevel !== 'none' && (
                    <div className="p-4 bg-blue-50 rounded">
                      <p className="text-sm font-medium mb-1">Microplastic Transparency</p>
                      <p className="text-sm text-gray-700">
                        This garment contains synthetic materials (microplastic level:{' '}
                        {product.fabric.microplasticLevel}). We recommend using a Guppyfriend
                        washing bag to reduce microplastic shedding.
                      </p>
                    </div>
                  )}
                  {product.sustainabilityNotes && (
                    <div className="p-4 bg-green-50 rounded">
                      <p className="text-sm font-medium mb-1">Sustainability Notes</p>
                      <p className="text-sm text-gray-700">{product.sustainabilityNotes}</p>
                    </div>
                  )}
                </div>
              </ExpandableSection>

              {product.supplyChain && (
                <ExpandableSection title="Supply Chain">
                  <p className="text-sm">{product.supplyChain}</p>
                </ExpandableSection>
              )}
            </div>
          </div>
        </div>

        {/* Pair It With Section */}
        {pairedProducts.length > 0 && (
          <div className="mt-20">
            <h2 className="text-3xl font-[var(--font-headline)] font-bold text-[var(--color-charcoal)] mb-4">
              Pair It With
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Complete your recovery look with these perfectly matched pieces
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              {product.pairItWith.map((pair, idx) => {
                const pairedProduct = pairedProducts[idx];
                if (!pairedProduct) return null;

                return (
                  <Link key={pair.productId} href={`/product/${pairedProduct.slug}`}>
                    <Card hover padding="none" className="h-full">
                      <div className="relative aspect-[3/4] bg-[var(--color-cream)] rounded-t-lg overflow-hidden">
                        <Image
                          src={pairedProduct.featuredImage}
                          alt={pairedProduct.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="p-6">
                        <p className="text-sm text-gray-600 mb-1">{pairedProduct.brand}</p>
                        <h3 className="font-[var(--font-headline)] font-semibold text-lg mb-2">
                          {pairedProduct.name}
                        </h3>
                        {pair.reason && (
                          <p className="text-sm text-gray-600 mb-3 italic">{pair.reason}</p>
                        )}
                        <p className="font-bold text-[var(--color-terracotta)]">
                          ${pairedProduct.retailPrice}
                        </p>
                      </div>
                    </Card>
                  </Link>
                );
              })}
            </div>
          </div>
        )}

        {/* Brand Link */}
        {product.brandLink && (
          <div className="mt-12 text-center">
            <a
              href={product.brandLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-600 hover:text-[var(--color-terracotta)] underline"
            >
              View on {product.brand}&apos;s website →
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
