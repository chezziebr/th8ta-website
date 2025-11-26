// Product Types for TH8TA

export type RecoveryStage = 1 | 2 | 3 | 4;

export type ProductCategory =
  | 'tops'
  | 'bottoms'
  | 'outerwear'
  | 'accessories'
  | 'sets';

export type FabricType = 'natural' | 'synthetic' | 'blend';

export type MicroplasticLevel = 'none' | 'low' | 'medium' | 'high';

export interface ColorOption {
  name: string;
  hex?: string; // Hex color code for color swatch display
  images: string[]; // Array of image paths for this color
}

export interface ProductFabric {
  composition: string; // e.g., "94% Polyester, 6% Spandex"
  feel: string; // e.g., "Buttery soft, lightweight"
  type: FabricType;
  microplasticLevel: MicroplasticLevel;
  careInstructions: string[];
}

export interface ProductFit {
  description: string; // e.g., "Fitted core; slightly halter-style shoulders"
  showsOff: string; // e.g., "Shoulders, core, arms"
}

export interface OutfitPairing {
  productId: string;
  productName: string;
  reason?: string; // Why this pairing works
}

export interface Product {
  // Basic Info
  id: string; // Internal SKU (e.g., "400532")
  slug: string; // URL-friendly (e.g., "fitted-tank")
  name: string; // Display name (e.g., "Fitted Tank")
  brand: string;

  // Pricing
  retailPrice: number;
  ourPrice?: number; // If different from retail

  // Images & Colors
  colors: ColorOption[];
  featuredImage: string; // Default/primary image

  // Product Details
  category: ProductCategory;
  recoveryStage?: RecoveryStage;
  matchedSetId?: string; // If part of a matched set

  // Descriptions
  shortDescription: string; // One-liner
  ourDescription: string; // "Our Item Description" from CSV
  inRecovery: string; // "In Recovery" explanation from CSV
  wearIt: string; // "Wear It" styling guidance from CSV

  // Technical Details
  fabric: ProductFabric;
  fit: ProductFit;

  // Recommendations
  pairItWith: OutfitPairing[]; // Complete outfit suggestions

  // Supply Chain & Transparency
  supplyChain?: string;
  sustainabilityNotes?: string;

  // External
  brandLink?: string; // Link to brand's product page

  // Inventory (for future)
  inStock?: boolean;
  sizes?: string[];
}

export interface MatchedSet {
  id: string;
  name: string;
  description: string;
  products: string[]; // Array of product IDs
  stage: RecoveryStage;
  price: number; // Total price
}
