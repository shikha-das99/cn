"use client";

import Link from "next/link";
import { useCart, getCartDetails, getCartTotal } from "@/store/cart";
import { formatINR } from "@/lib/format";
import ProductVisual from "@/components/ProductVisual";
import { Minus, Plus, Trash2, ArrowRight, ShoppingBag } from "lucide-react";

const FREE_SHIPPING_THRESHOLD = 799;
const SHIPPING_FEE = 49;

export default function CartPage() {
  const lines = useCart((s) => s.lines);
  const setQty = useCart((s) => s.setQty);
  const removeItem = useCart((s) => s.removeItem);

  const details = getCartDetails(lines);
  const subtotal = getCartTotal(lines);
  const shipping = subtotal === 0 || subtotal >= FREE_SHIPPING_THRESHOLD ? 0 : SHIPPING_FEE;
  const total = subtotal + shipping;
  const remainingForFreeShip = Math.max(0, FREE_SHIPPING_THRESHOLD - subtotal);

  if (details.length === 0) {
    return (
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 px-5 py-32 text-center">
        <ShoppingBag size={40} className="text-ink-300" />
        <h1 className="font-display text-2xl text-ivory">Your bag is empty</h1>
        <p className="max-w-sm text-sm text-ink-300">
          Nothing in your cart yet. Browse the catalogue and add a few
          essentials — they&apos;ll show up here.
        </p>
        <Link
          href="/products"
          className="mt-2 flex items-center gap-2 rounded-full bg-ivory px-6 py-3.5 text-sm font-semibold text-ink-900 transition-colors hover:bg-sage"
        >
          Shop the catalogue <ArrowRight size={16} />
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8">
      <h1 className="font-display text-3xl text-ivory sm:text-4xl">Your bag</h1>
      <p className="mt-2 text-sm text-ink-300">
        {details.length} item{details.length > 1 ? "s" : ""} ready for checkout
      </p>

      <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-3">
        {/* Line items */}
        <div className="lg:col-span-2">
          <ul className="flex flex-col divide-y divide-ink-500/40 border-y border-ink-500/50">
            {details.map(({ line, product, variant, subtotal: lineTotal }) => (
              <li
                key={`${line.productId}-${line.variantId}`}
                className="flex flex-col gap-4 py-6 sm:flex-row sm:items-center"
              >
                <Link
                  href={`/products/${product.slug}`}
                  className="h-24 w-24 shrink-0 rounded-xl bg-ink-700 p-3"
                >
                  <ProductVisual
                    tone={product.tone}
                    category={product.category}
                    sku={product.sku}
                    className="h-full w-full"
                  />
                </Link>

                <div className="flex flex-1 flex-col gap-1">
                  <Link
                    href={`/products/${product.slug}`}
                    className="font-display text-lg text-ivory hover:text-sage-light"
                  >
                    {product.name}
                  </Link>
                  <span className="text-xs uppercase tracking-widest2 text-ink-300">
                    {variant.label}
                  </span>
                  <span className="text-sm text-ink-300">
                    {formatINR(variant.price)} / unit
                  </span>
                </div>

                <div className="flex items-center justify-between gap-6 sm:flex-col sm:items-end sm:justify-center">
                  <div className="flex items-center gap-3 rounded-full border border-ink-500 px-3 py-2">
                    <button
                      onClick={() => setQty(line.productId, line.variantId, line.qty - 1)}
                      className="text-ink-200 hover:text-ivory"
                      aria-label="Decrease quantity"
                    >
                      <Minus size={14} />
                    </button>
                    <span className="w-5 text-center text-sm text-ivory">
                      {line.qty}
                    </span>
                    <button
                      onClick={() => setQty(line.productId, line.variantId, line.qty + 1)}
                      className="text-ink-200 hover:text-ivory"
                      aria-label="Increase quantity"
                    >
                      <Plus size={14} />
                    </button>
                  </div>

                  <div className="flex items-center gap-4">
                    <span className="font-display text-lg text-ivory">
                      {formatINR(lineTotal)}
                    </span>
                    <button
                      onClick={() => removeItem(line.productId, line.variantId)}
                      className="text-ink-300 hover:text-brass"
                      aria-label="Remove item"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          <Link
            href="/products"
            className="mt-6 inline-flex items-center gap-1.5 text-sm text-sage-light hover:underline"
          >
            ← Continue shopping
          </Link>
        </div>

        {/* Order summary */}
        <aside className="h-fit rounded-2xl border border-ink-500/60 bg-ink-700/50 p-6">
          <h2 className="font-display text-lg text-ivory">Order summary</h2>

          {remainingForFreeShip > 0 ? (
            <p className="mt-3 rounded-lg bg-ink-800/70 px-3 py-2.5 text-xs text-sage-light">
              Add {formatINR(remainingForFreeShip)} more for free shipping.
            </p>
          ) : (
            <p className="mt-3 rounded-lg bg-sage/10 px-3 py-2.5 text-xs text-sage-light">
              You&apos;ve unlocked free shipping.
            </p>
          )}

          <dl className="mt-5 flex flex-col gap-3 text-sm">
            <div className="flex justify-between">
              <dt className="text-ink-300">Subtotal</dt>
              <dd className="text-ivory">{formatINR(subtotal)}</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-ink-300">Shipping</dt>
              <dd className="text-ivory">
                {shipping === 0 ? "Free" : formatINR(shipping)}
              </dd>
            </div>
            <div className="flex justify-between border-t border-ink-500/50 pt-3 text-base">
              <dt className="font-medium text-ivory">Total</dt>
              <dd className="font-display text-xl text-ivory">
                {formatINR(total)}
              </dd>
            </div>
          </dl>

          <Link
            href="/checkout"
            className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-ivory py-3.5 text-sm font-semibold text-ink-900 transition-colors hover:bg-sage"
          >
            Proceed to checkout <ArrowRight size={16} />
          </Link>
          <p className="mt-3 text-center text-[11px] text-ink-300">
            Taxes calculated at checkout · Secure payment
          </p>
        </aside>
      </div>
    </div>
  );
}
