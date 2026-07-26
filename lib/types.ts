export type Category =
  | "floor-care"
  | "bath-body"
  | "paper-care"
  | "more";

export type ScentTone = "lavender" | "lemon" | "rose" | "neutral" | "citrus" | "pine";

export interface Variant {
  id: string;
  label: string; // e.g. "500 ml", "1 Litre", "5 Litre", "Pack of 3"
  price: number; // INR
  compareAt?: number; // optional strike-through price
  unitNote?: string; // e.g. "₹198 / L"
}

export interface Product {
  id: string;
  sku: string; // e.g. CN-FC-01
  slug: string;
  name: string;
  scent: string; // display scent/variant name, e.g. "Lavender"
  tone: ScentTone;
  category: Category;
  categoryLabel: string;
  tagline: string; // short line under product name
  description: string; // longer detail page copy
  bullets: string[];
  variants: Variant[];
  badge?: string; // e.g. "Bestseller", "New"
}

export interface CartLine {
  productId: string;
  variantId: string;
  qty: number;
}
