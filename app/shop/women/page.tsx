'use client';

import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useMemo } from 'react';
import { products } from '@/lib/products';
import { Product, ProductCategory, FabricType } from '@/lib/types';

export default function WomenShopPage() {
  const [selectedStage, setSelectedStage] = useState<number | null>(null);
  const [selectedType, setSelectedType] = useState<ProductCategory | null>(null);
  const [selectedFabric, setSelectedFabric] = useState<FabricType | null>(null);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 200]);
  const [sortBy, setSortBy] = useState<string>('newest');

  // Filter products
  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    if (selectedStage) {
      filtered = filtered.filter((p) => p.recoveryStage === selectedStage);
    }
    if (selectedType) {
      filtered = filtered.filter((p) => p.category === selectedType);
    }
    if (selectedFabric) {
      filtered = filtered.filter((p) => p.fabric.type === selectedFabric);
    }
    filtered = filtered.filter((p) => p.retailPrice >= priceRange[0] && p.retailPrice <= priceRange[1]);

    // Sort
    if (sortBy === 'price-low') {
      filtered.sort((a, b) => a.retailPrice - b.retailPrice);
    } else if (sortBy === 'price-high') {
      filtered.sort((a, b) => b.retailPrice - a.retailPrice);
    }

    return filtered;
  }, [selectedStage, selectedType, selectedFabric, priceRange, sortBy]);

  const clearFilters = () => {
    setSelectedStage(null);
    setSelectedType(null);
    setSelectedFabric(null);
    setPriceRange([0, 200]);
  };

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-gray-50">
        {/* Header */}
        <section className="relative bg-[var(--color-sage)] text-white py-16 overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1518611012118-696072aa579a?w=1920&h=600&fit=crop&q=80"
            alt="Women's recovery wear collection"
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-[var(--color-sage)]/80"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">Women's Recovery Gear</h1>
            <p className="text-lg text-white/95 drop-shadow-md">
              Curated pieces organized by the 4-Stage Recovery System
            </p>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters Sidebar */}
            <aside className="lg:w-64 flex-shrink-0">
              <div className="bg-white rounded-lg p-6 sticky top-24">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-lg font-bold text-[var(--color-charcoal)]">Filters</h2>
                  <button
                    onClick={clearFilters}
                    className="text-sm text-[var(--color-sage)] hover:underline"
                  >
                    Clear All
                  </button>
                </div>

                {/* Recovery Stage Filter */}
                <div className="mb-6">
                  <h3 className="font-semibold text-[var(--color-charcoal)] mb-3">
                    Recovery Stage
                  </h3>
                  <div className="space-y-2">
                    {[1, 2, 3, 4].map((stage) => (
                      <label key={stage} className="flex items-center cursor-pointer">
                        <input
                          type="radio"
                          name="stage"
                          checked={selectedStage === stage}
                          onChange={() =>
                            setSelectedStage(selectedStage === stage ? null : stage)
                          }
                          className="mr-2"
                        />
                        <span className="text-sm">Stage {stage}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Product Type Filter */}
                <div className="mb-6">
                  <h3 className="font-semibold text-[var(--color-charcoal)] mb-3">Product Type</h3>
                  <div className="space-y-2">
                    {(['tops', 'bottoms', 'outerwear', 'accessories'] as ProductCategory[]).map((type) => (
                      <label key={type} className="flex items-center cursor-pointer">
                        <input
                          type="radio"
                          name="type"
                          checked={selectedType === type}
                          onChange={() => setSelectedType(selectedType === type ? null : type)}
                          className="mr-2"
                        />
                        <span className="text-sm capitalize">{type}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Fabric Filter */}
                <div className="mb-6">
                  <h3 className="font-semibold text-[var(--color-charcoal)] mb-3">Fabric</h3>
                  <div className="space-y-2">
                    {(['natural', 'synthetic', 'blend'] as FabricType[]).map((fabric) => (
                      <label key={fabric} className="flex items-center cursor-pointer">
                        <input
                          type="radio"
                          name="fabric"
                          checked={selectedFabric === fabric}
                          onChange={() =>
                            setSelectedFabric(selectedFabric === fabric ? null : fabric)
                          }
                          className="mr-2"
                        />
                        <span className="text-sm capitalize">{fabric}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Price Range */}
                <div>
                  <h3 className="font-semibold text-[var(--color-charcoal)] mb-3">Price Range</h3>
                  <div className="text-sm text-gray-600 mb-2">
                    ${priceRange[0]} - ${priceRange[1]}
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="200"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
                    className="w-full"
                  />
                </div>
              </div>
            </aside>

            {/* Products Grid */}
            <div className="flex-1">
              {/* Sort & Results Count */}
              <div className="flex justify-between items-center mb-6">
                <p className="text-gray-600">
                  {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''}
                </p>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="border border-gray-300 rounded px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-sage)]"
                >
                  <option value="newest">Newest</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                </select>
              </div>

              {/* Products */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <Link key={product.id} href={`/product/${product.slug}`} className="h-full">
                    <Card hover padding="none" className="overflow-hidden group cursor-pointer h-full flex flex-col">
                      <div className="aspect-[3/4] bg-gray-200 relative overflow-hidden flex-shrink-0">
                        <Image
                          src={product.featuredImage}
                          alt={product.name}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        {product.recoveryStage && (
                          <div className="absolute top-3 left-3">
                            <Badge stage={product.recoveryStage} size="sm" />
                          </div>
                        )}
                      </div>
                      <div className="p-4 flex-1 flex flex-col">
                        <p className="text-xs text-gray-600 mb-1">{product.brand}</p>
                        <h3 className="font-semibold text-[var(--color-charcoal)] mb-1 group-hover:text-[var(--color-sage)] transition-colors line-clamp-2">
                          {product.name}
                        </h3>
                        <p className="text-gray-600 text-sm mb-2 line-clamp-2 flex-1">{product.shortDescription}</p>
                        <p className="font-bold text-[var(--color-charcoal)] mt-auto">${product.retailPrice}</p>
                      </div>
                    </Card>
                  </Link>
                ))}
              </div>

              {filteredProducts.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-gray-600 text-lg">No products match your filters.</p>
                  <button
                    onClick={clearFilters}
                    className="mt-4 text-[var(--color-sage)] hover:underline"
                  >
                    Clear all filters
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
