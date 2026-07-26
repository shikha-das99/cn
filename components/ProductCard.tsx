"use client";

import { useState } from "react";
import Link from "next/link";
import { Product } from "@/lib/types";
import { formatINR } from "@/lib/format";
import { toneColors } from "@/lib/tone";
import { useCart } from "@/store/cart";
import ProductVisual from "./ProductVisual";
import { Check, Plus } from "lucide-react";

export default function ProductCard({ product }: { product: Product }) {
  const [variantId, setVariantId] = useState(product.variants[0].id);
  const [justAdded, setJustAdded] = useState(false);
  const addItem = useCart((s) => s.addItem);
  const openCart = useCart((s) => s.openCart);

  const variant = product.variants.find((v) => v.id === variantId)!;
  const tone = toneColors[product.tone];

  function handleAdd() {
    addItem(product.id, variant.id, 1);
    setJustAdded(true);
    openCart();
    setTimeout(() => setJustAdded(false), 1600);
  }

  return (
    <article className="group relative flex flex-col overflow-hidden rounded-2xl border border-ink-500/60 bg-ink-700/60 transition-colors duration-300 hover:border-sage/40">
      {product.badge && (
        <span className="absolute left-4 top-4 z-10 rounded-full border border-brass/40 bg-ink-900/80 px-3 py-1 text-[10px] uppercase tracking-widest2 text-brass">
          {product.badge}
        </span>
      )}

      <Link
        href={`/products/${product.slug}`}
        className="relative flex aspect-[4/3] items-center justify-center bg-[radial-gradient(circle_at_50%_20%,rgba(143,174,150,0.12),transparent_60%)] px-8 pt-8"
      >
        <ProductVisual
          tone={product.tone}
          category={product.category}
          sku={product.sku}
          className="h-full max-h-[180px] w-auto drop-shadow-[0_18px_30px_rgba(0,0,0,0.45)] transition-transform duration-500 group-hover:-translate-y-1"
        />
      </Link>

      <div className="flex flex-1 flex-col gap-4 border-t border-ink-500/50 p-5">
        <div>
          <div className="mb-1.5 flex items-center gap-2">
            <span
              className="h-2.5 w-2.5 rounded-full ring-1 ring-ivory/20"
              style={{ backgroundColor: tone.base }}
              aria-hidden="true"
            />
            <span className="font-mono text-[11px] uppercase tracking-widest2 text-ink-300">
              {product.sku}
            </span>
          </div>
          <Link href={`/products/${product.slug}`}>
            <h3 className="font-display text-xl leading-snug text-ivory transition-colors group-hover:text-sage-light">
              {product.name}
            </h3>
          </Link>
          <p className="mt-1.5 text-sm leading-relaxed text-ink-200">
            {product.tagline}
          </p>
        </div>

        {/* Size / litre selector */}
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
                  className={`rounded-full border px-3.5 py-1.5 text-xs font-medium transition-all ${
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

        {/* Price + Add to cart */}
        <div className="mt-auto flex items-end justify-between gap-3 pt-1">
          <div>
            <div className="flex items-baseline gap-2">
              <span className="font-display text-2xl text-ivory">
                {formatINR(variant.price)}
              </span>
              {variant.compareAt && (
                <span className="text-sm text-ink-300 line-through">
                  {formatINR(variant.compareAt)}
                </span>
              )}
            </div>
            {variant.unitNote && (
              <span className="text-[11px] text-ink-300">{variant.unitNote}</span>
            )}
          </div>

          <button
            type="button"
            onClick={handleAdd}
            className={`flex items-center gap-1.5 rounded-full px-4 py-2.5 text-sm font-semibold transition-all duration-300 ${
              justAdded
                ? "bg-sage text-ink-900"
                : "bg-ivory text-ink-900 hover:bg-sage hover:text-ink-900"
            }`}
          >
            {justAdded ? (
              <>
                <Check size={16} strokeWidth={2.5} /> Added
              </>
            ) : (
              <>
                <Plus size={16} strokeWidth={2.5} /> Add to cart
              </>
            )}
          </button>
        </div>
      </div>
    </article>
  );
}
