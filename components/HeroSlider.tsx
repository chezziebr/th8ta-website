'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface Slide {
  id: number;
  image: string;
  headline: string;
  subtext: string;
  ctaText: string;
  ctaLink: string;
}

const slides: Slide[] = [
  {
    id: 1,
    image: '/images/hero/relax-beach.jpg',
    headline: 'Where endurance athletes come for recovery wear',
    subtext: 'Join the tribe and shop our gear now',
    ctaText: 'SHOP NOW',
    ctaLink: '/shop/women',
  },
  {
    id: 2,
    image: '/images/hero/beach-vertical.jpg',
    headline: 'The 4-Stage Recovery System',
    subtext: 'Immediate Swap → Shower & Soothe → Reintegrate → Reset',
    ctaText: 'Learn The Science',
    ctaLink: '/science',
  },
  {
    id: 3,
    image: '/images/hero/power-meter.jpg',
    headline: 'Fits Bodies That Move',
    subtext: 'Room in the quads. Tapered at the ankle. Finally.',
    ctaText: 'Shop Women',
    ctaLink: '/shop/women',
  },
];

export const HeroSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-advance slides every 5 seconds
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    // Resume autoplay after 10 seconds
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <div className="relative w-full h-[600px] md:h-[700px] overflow-hidden group">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-700 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src={slide.image}
              alt={slide.headline}
              fill
              className="object-cover object-center"
              style={{ objectPosition: 'center 20%' }}
              priority={index === 0}
            />
          </div>

          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-black/30" />

          {/* Text overlay - Bottom left corner */}
          <div className="absolute bottom-16 left-10 md:left-20 max-w-2xl text-white z-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
              {slide.headline}
            </h1>
            <p className="text-lg md:text-xl mb-6 opacity-95">
              {slide.subtext}
            </p>
            <Link
              href={slide.ctaLink}
              className="inline-block px-8 py-4 bg-white text-black text-sm font-semibold tracking-wide hover:bg-gray-200 transition-colors"
            >
              {slide.ctaText}
            </Link>
          </div>
        </div>
      ))}

      {/* Left Arrow - visible on hover */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-20"
        aria-label="Previous slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Right Arrow - visible on hover */}
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-20"
        aria-label="Next slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots navigation - bottom center */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide
                ? 'bg-white w-8'
                : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};
