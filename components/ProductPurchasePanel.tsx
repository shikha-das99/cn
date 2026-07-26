"use client";

import { useState } from "react";
import { Product } from "@/lib/types";
import { formatINR } from "@/lib/format";
import { useCart } from "@/store/cart";
import { Minus, Plus, Check } from "lucide-react";

export default function ProductPurchasePanel({ product }: { product: Product }) {
  const [variantId, setVariantId] = useState(product.variants[0].id);
  const [qty, setQty] = useState(1);
  const [justAdded, setJustAdded] = useState(false);
  const addItem = useCart((s) => s.addItem);
  const openCart = useCart((s) => s.openCart);

  const variant = product.variants.find((v) => v.id === variantId)!;

  function handleAdd() {
    addItem(product.id, variant.id, qty);
    setJustAdded(true);
    openCart();
    setTimeout(() => setJustAdded(false), 1600);
  }

  return (
    <div className="flex flex-col gap-6">
      <div>
        <p className="mb-2 text-[10px] uppercase tracking-widest2 text-ink-300">
          Select size
        </p>
        <div className="flex flex-wrap gap-2">
          {product.variants.map((v) => {
            const active = v.id === variantId;
            return (
              <button
                key={v.id}
                type="button"
                onClick={() => setVariantId(v.id)}
                aria-pressed={active}
                className={`rounded-full border px-4 py-2 text-sm font-medium transition-all ${
                  active
                    ? "border-sage bg-sage/15 text-sage-light shadow-glow"
                    : "border-ink-500 text-ink-200 hover:border-sage/50 hover:text-ivory"
                }`}
              >
                {v.label}
              </button>
            );
          })}
        </div>
      </div>

      <div className="flex items-baseline gap-3">
        <span className="font-display text-3xl text-ivory">
          {formatINR(variant.price)}
        </span>
        {variant.compareAt && (
          <span className="text-base text-ink-300 line-through">
            {formatINR(variant.compareAt)}
          </span>
        )}
        {variant.unitNote && (
          <span className="text-xs text-ink-300">({variant.unitNote})</span>
        )}
      </div>

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-3 rounded-full border border-ink-500 px-3 py-2">
          <button
            onClick={() => setQty((q) => Math.max(1, q - 1))}
            className="text-ink-200 hover:text-ivory"
            aria-label="Decrease quantity"
          >
            <Minus size={15} />
          </button>
          <span className="w-5 text-center text-sm text-ivory">{qty}</span>
          <button
            onClick={() => setQty((q) => q + 1)}
            className="text-ink-200 hover:text-ivory"
            aria-label="Increase quantity"
          >
            <Plus size={15} />
          </button>
        </div>

        <button
          type="button"
          onClick={handleAdd}
          className={`flex flex-1 items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition-all duration-300 ${
            justAdded
              ? "bg-sage text-ink-900"
              : "bg-ivory text-ink-900 hover:bg-sage"
          }`}
        >
          {justAdded ? (
            <>
              <Check size={16} strokeWidth={2.5} /> Added to cart
            </>
          ) : (
            `Add to cart — ${formatINR(variant.price * qty)}`
          )}
        </button>
      </div>
    </div>
  );
}
