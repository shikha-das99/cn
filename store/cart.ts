"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";
import { CartLine } from "@/lib/types";
import { products } from "@/lib/products";

interface CartState {
  lines: CartLine[];
  isOpen: boolean;
  lastAdded: number; // timestamp, used to trigger toast
  addItem: (productId: string, variantId: string, qty?: number) => void;
  removeItem: (productId: string, variantId: string) => void;
  setQty: (productId: string, variantId: string, qty: number) => void;
  clear: () => void;
  openCart: () => void;
  closeCart: () => void;
}

export const useCart = create<CartState>()(
  persist(
    (set, get) => ({
      lines: [],
      isOpen: false,
      lastAdded: 0,
      addItem: (productId, variantId, qty = 1) => {
        const lines = [...get().lines];
        const idx = lines.findIndex(
          (l) => l.productId === productId && l.variantId === variantId
        );
        if (idx > -1) {
          lines[idx] = { ...lines[idx], qty: lines[idx].qty + qty };
        } else {
          lines.push({ productId, variantId, qty });
        }
        set({ lines, lastAdded: Date.now() });
      },
      removeItem: (productId, variantId) => {
        set({
          lines: get().lines.filter(
            (l) => !(l.productId === productId && l.variantId === variantId)
          ),
        });
      },
      setQty: (productId, variantId, qty) => {
        if (qty <= 0) {
          get().removeItem(productId, variantId);
          return;
        }
        set({
          lines: get().lines.map((l) =>
            l.productId === productId && l.variantId === variantId
              ? { ...l, qty }
              : l
          ),
        });
      },
      clear: () => set({ lines: [] }),
      openCart: () => set({ isOpen: true }),
      closeCart: () => set({ isOpen: false }),
    }),
    { name: "cleannest-cart" }
  )
);

export function getCartDetails(lines: CartLine[]) {
  return lines
    .map((line) => {
      const product = products.find((p) => p.id === line.productId);
      const variant = product?.variants.find((v) => v.id === line.variantId);
      if (!product || !variant) return null;
      return { line, product, variant, subtotal: variant.price * line.qty };
    })
    .filter(Boolean) as {
    line: CartLine;
    product: (typeof products)[number];
    variant: (typeof products)[number]["variants"][number];
    subtotal: number;
  }[];
}

export function getCartCount(lines: CartLine[]) {
  return lines.reduce((sum, l) => sum + l.qty, 0);
}

export function getCartTotal(lines: CartLine[]) {
  return getCartDetails(lines).reduce((sum, d) => sum + d.subtotal, 0);
}
