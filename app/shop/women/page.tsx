'use client';

import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { ProductCard } from '@/components/ProductCard';
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
  const [showFilters, setShowFilters] = useState(false);

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
      <main className="min-h-screen bg-white">
        {/* Header */}
        <section className="relative bg-[var(--color-sage)] text-white py-16 overflow-hidden">
          <Image
            src="/images/beach-chillax-vert.jpg"
            alt="Women's recovery wear collection"
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-[var(--color-sage)]/80"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">Women's Afterwear</h1>
            <p className="text-lg md:text-xl text-white/95 drop-shadow-md max-w-2xl mx-auto">
              Everything you wear when you're not working out—designed for the body you've built.
            </p>
          </div>
        </section>

        {/* Category Navigation */}
        <section className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex justify-center gap-3 flex-wrap">
              <button
                onClick={() => setSelectedType(null)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedType === null
                    ? 'bg-[var(--color-charcoal)] text-white'
                    : 'bg-white text-[var(--color-charcoal)] border border-gray-300 hover:border-gray-400'
                }`}
              >
                View All
              </button>
              <button
                onClick={() => setSelectedType('tops')}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedType === 'tops'
                    ? 'bg-[var(--color-charcoal)] text-white'
                    : 'bg-white text-[var(--color-charcoal)] border border-gray-300 hover:border-gray-400'
                }`}
              >
                Tops
              </button>
              <button
                onClick={() => setSelectedType('bottoms')}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedType === 'bottoms'
                    ? 'bg-[var(--color-charcoal)] text-white'
                    : 'bg-white text-[var(--color-charcoal)] border border-gray-300 hover:border-gray-400'
                }`}
              >
                Bottoms
              </button>
              <button
                onClick={() => setSelectedType('outerwear')}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedType === 'outerwear'
                    ? 'bg-[var(--color-charcoal)] text-white'
                    : 'bg-white text-[var(--color-charcoal)] border border-gray-300 hover:border-gray-400'
                }`}
              >
                Sweaters & Outerwear
              </button>
              <button
                onClick={() => setSelectedType('accessories')}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedType === 'accessories'
                    ? 'bg-[var(--color-charcoal)] text-white'
                    : 'bg-white text-[var(--color-charcoal)] border border-gray-300 hover:border-gray-400'
                }`}
              >
                Accessories
              </button>
            </div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters Sidebar */}
            {showFilters && (
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
            )}

            {/* Products Grid */}
            <div className="flex-1">
              {/* Lululemon-style Collection Header */}
              <div className="collection-header">
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setShowFilters(!showFilters)}
                    className="sort-button"
                  >
                    {showFilters ? 'Hide Filters' : 'Filters'}
                  </button>
                  <button className="sort-button">
                    Sort by ▼
                  </button>
                </div>
                <div className="product-count">
                  {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''}
                </div>
              </div>

              <style jsx>{`
                .collection-header {
                  display: flex;
                  justify-content: space-between;
                  align-items: center;
                  padding: 20px 0;
                  border-bottom: 1px solid #e5e5e5;
                  margin-bottom: 20px;
                }

                .sort-button {
                  font-size: 14px;
                  color: #000000;
                  background: transparent;
                  border: none;
                  cursor: pointer;
                  font-family: 'Helvetica Neue', Arial, sans-serif;
                  padding: 0;
                }

                .sort-button:hover {
                  text-decoration: underline;
                }

                .product-count {
                  font-size: 14px;
                  color: #666666;
                }
              `}</style>

              {/* Products - Lululemon Style Grid */}
              <div className="products-grid">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>

              <style jsx>{`
                .products-grid {
                  display: grid;
                  grid-template-columns: repeat(4, 1fr);
                  gap: 3px;
                  background: #ffffff;
                  padding: 0;
                  margin: 0;
                }

                @media (max-width: 1199px) {
                  .products-grid {
                    grid-template-columns: repeat(3, 1fr);
                  }
                }

                @media (max-width: 768px) {
                  .products-grid {
                    grid-template-columns: repeat(2, 1fr);
                    gap: 2px;
                  }
                }
              `}</style>

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
