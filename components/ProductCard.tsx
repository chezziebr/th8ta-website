'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Product } from '@/lib/types';

interface ProductCardProps {
  product: Product;
}

// Helper function to detect if image likely has white background
// In a real implementation, this could use image analysis APIs
// For now, we'll use naming conventions or image order
function categorizeImages(product: Product) {
  const allImages: string[] = [];
  const productShotImages: string[] = [];
  const modelShotImages: string[] = [];

  // Collect all images from all colors
  product.colors.forEach((color) => {
    color.images.forEach((img) => {
      allImages.push(img);

      // Simple heuristic: images with numbers (like "2.webp", "3.webp") are often model shots
      // Images without numbers or with "1" are often product shots on white background
      const hasNumberGreaterThan1 = /[2-9]\./.test(img);

      if (hasNumberGreaterThan1) {
        modelShotImages.push(img);
      } else {
        productShotImages.push(img);
      }
    });
  });

  return {
    productShot: productShotImages[0] || product.featuredImage,
    modelShot: modelShotImages[0] || productShotImages[1] || productShotImages[0] || product.featuredImage,
  };
}

export function ProductCard({ product }: ProductCardProps) {
  const [selectedColorIndex, setSelectedColorIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const selectedColor = product.colors[selectedColorIndex];
  const images = categorizeImages(product);

  // Get images for selected color
  const defaultImage = selectedColor.images[0] || product.featuredImage;
  const hoverImage = selectedColor.images[1] || selectedColor.images[0] || product.featuredImage;

  const handleColorClick = (index: number) => {
    setSelectedColorIndex(index);
  };

  return (
    <div className="product-card group">
      {/* Image Container */}
      <Link href={`/product/${product.slug}`}>
        <div
          className="product-card-image-container"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Default Image (white background product shot) */}
          <Image
            src={defaultImage}
            alt={product.name}
            fill
            className={`product-card-image transition-opacity duration-300 ${
              isHovered ? 'opacity-0' : 'opacity-100'
            }`}
            style={{ objectFit: 'cover' }}
            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
          />

          {/* Hover Image (model shot) */}
          <Image
            src={hoverImage}
            alt={`${product.name} - ${selectedColor.name}`}
            fill
            className={`product-card-image absolute top-0 left-0 transition-opacity duration-300 ${
              isHovered ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ objectFit: 'cover' }}
            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
          />

          {/* Quick Add Button - appears on hover */}
          <button
            className={`quick-add-button transition-opacity duration-300 ${
              isHovered ? 'opacity-100' : 'opacity-0'
            }`}
            onClick={(e) => {
              e.preventDefault();
              // TODO: Add to cart functionality
              console.log('Quick add:', product.name);
            }}
          >
            Quick Add +
          </button>
        </div>
      </Link>

      {/* Product Info */}
      <div className="product-card-info">
        {/* Color Swatches */}
        {product.colors.length > 1 && (
          <div className="product-card-colors">
            {product.colors.map((color, index) => (
              <button
                key={index}
                className={`color-swatch ${selectedColorIndex === index ? 'selected' : ''}`}
                style={{ backgroundColor: color.hex }}
                onClick={() => handleColorClick(index)}
                title={color.name}
                aria-label={`Select ${color.name}`}
              />
            ))}
          </div>
        )}

        {/* Badge - if product is new or has special status */}
        {product.sustainabilityNotes?.includes('cashmere') && (
          <div className="product-card-badge">PREMIUM</div>
        )}

        {/* Product Title */}
        <h3 className="product-card-title">
          <Link href={`/product/${product.slug}`}>{product.name}</Link>
        </h3>

        {/* Color Name - Dynamic based on selection */}
        <div className="product-card-color-name">{selectedColor.name}</div>

        {/* Price */}
        <div className="product-card-price">${product.retailPrice}</div>
      </div>

      <style jsx>{`
        .product-card {
          background: #ffffff;
          position: relative;
          cursor: pointer;
        }

        .product-card-image-container {
          aspect-ratio: 3 / 4;
          width: 100%;
          overflow: hidden;
          position: relative;
          background: #fafafa;
        }

        .product-card-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .quick-add-button {
          position: absolute;
          bottom: 15px;
          left: 50%;
          transform: translateX(-50%);
          background: #ffffff;
          color: #000000;
          padding: 8px 20px;
          font-size: 12px;
          font-weight: 500;
          border-radius: 4px;
          border: none;
          cursor: pointer;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
          z-index: 10;
        }

        .quick-add-button:hover {
          background: #f5f5f5;
        }

        .product-card-info {
          padding: 12px 10px;
          text-align: left;
        }

        .product-card-colors {
          display: flex;
          gap: 6px;
          margin-bottom: 8px;
        }

        .color-swatch {
          width: 16px;
          height: 16px;
          border-radius: 50%;
          border: 1px solid transparent;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .color-swatch:hover {
          border-color: #000000;
          transform: scale(1.1);
        }

        .color-swatch.selected {
          border-color: #000000;
          border-width: 2px;
        }

        .product-card-badge {
          font-size: 10px;
          font-weight: 600;
          text-transform: uppercase;
          color: #d31334;
          letter-spacing: 0.5px;
          margin-bottom: 4px;
        }

        .product-card-title {
          font-size: 14px;
          font-weight: 400;
          color: #000000;
          line-height: 1.3;
          margin-bottom: 4px;
          font-family: 'Helvetica Neue', Arial, sans-serif;
        }

        .product-card-title a {
          color: inherit;
          text-decoration: none;
        }

        .product-card-title a:hover {
          text-decoration: underline;
        }

        .product-card-color-name {
          font-size: 13px;
          font-weight: 400;
          color: #666666;
          margin-bottom: 4px;
        }

        .product-card-price {
          font-size: 14px;
          font-weight: 600;
          color: #000000;
        }

        /* Mobile Adjustments */
        @media (max-width: 768px) {
          .product-card-info {
            padding: 8px 6px;
          }

          .product-card-title {
            font-size: 12px;
          }

          .product-card-price,
          .product-card-color-name {
            font-size: 12px;
          }

          .color-swatch {
            width: 14px;
            height: 14px;
          }
        }
      `}</style>
    </div>
  );
}
