'use client';

import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { ProductCard } from '@/components/ProductCard';
import Image from 'next/image';
import { useState, useMemo } from 'react';
import { products } from '@/lib/products';

export default function WomenTopsPage() {
  const categoryProducts = products.filter(p => p.category === 'tops');

  return (
    <>
      <Navigation />
      <main>
        {/* Category Hero */}
        <section className="relative h-[400px] flex items-center justify-center bg-gray-300">
          <div className="absolute inset-0 bg-gradient-to-r from-gray-400 to-gray-500" />
          <div className="absolute inset-0 bg-black/30" />
          <div className="relative z-10 text-white max-w-4xl mx-auto px-10">
            <h1 className="text-5xl font-bold mb-4">Women's Tops</h1>
            <p className="text-xl">Recovery gear for when the workout ends</p>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Lululemon-style Collection Header */}
            <div className="collection-header">
              <div className="flex items-center gap-4">
                <button className="sort-button">
                  Sort by ▼
                </button>
              </div>
              <div className="product-count">
                {categoryProducts.length} product{categoryProducts.length !== 1 ? 's' : ''}
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
              {categoryProducts.map((product) => (
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

            {categoryProducts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-600 text-lg">No products found in this category.</p>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
