"use client";

import Link from "next/link";
import { X, Minus, Plus, Trash2 } from "lucide-react";
import { useCart, getCartDetails, getCartTotal } from "@/store/cart";
import { formatINR } from "@/lib/format";
import ProductVisual from "./ProductVisual";

export default function CartDrawer() {
  const isOpen = useCart((s) => s.isOpen);
  const closeCart = useCart((s) => s.closeCart);
  const lines = useCart((s) => s.lines);
  const setQty = useCart((s) => s.setQty);
  const removeItem = useCart((s) => s.removeItem);

  const details = getCartDetails(lines);
  const total = getCartTotal(lines);

  return (
    <>
      <div
        className={`fixed inset-0 z-[60] bg-ink-950/70 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={closeCart}
        aria-hidden="true"
      />
      <aside
        className={`fixed right-0 top-0 z-[70] flex h-full w-full max-w-md flex-col border-l border-ink-500/60 bg-ink-800 shadow-soft transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-label="Shopping cart"
      >
        <div className="flex items-center justify-between border-b border-ink-500/60 px-6 py-5">
          <h2 className="font-display text-xl text-ivory">
            Your bag {details.length > 0 && `(${details.length})`}
          </h2>
          <button
            onClick={closeCart}
            className="rounded-full p-1.5 text-ink-200 hover:bg-ink-700 hover:text-ivory"
            aria-label="Close cart"
          >
            <X size={20} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-5">
          {details.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center gap-3 text-center">
              <p className="text-sm text-ink-300">Your bag is empty.</p>
              <Link
                href="/products"
                onClick={closeCart}
                className="text-sm font-medium text-sage-light underline underline-offset-4"
              >
                Browse the catalogue
              </Link>
            </div>
          ) : (
            <ul className="flex flex-col gap-5">
              {details.map(({ line, product, variant, subtotal }) => (
                <li
                  key={`${line.productId}-${line.variantId}`}
                  className="flex gap-4 border-b border-ink-500/40 pb-5"
                >
                  <div className="h-16 w-16 shrink-0 rounded-lg bg-ink-700 p-1.5">
                    <ProductVisual
                      tone={product.tone}
                      category={product.category}
                      sku={product.sku}
                      className="h-full w-full"
                    />
                  </div>
                  <div className="flex flex-1 flex-col gap-1.5">
                    <div className="flex items-start justify-between gap-2">
                      <p className="text-sm font-medium leading-snug text-ivory">
                        {product.name}
                      </p>
                      <button
                        onClick={() => removeItem(line.productId, line.variantId)}
                        className="text-ink-300 hover:text-brass"
                        aria-label="Remove item"
                      >
                        <Trash2 size={15} />
                      </button>
                    </div>
                    <p className="text-xs text-ink-300">{variant.label}</p>
                    <div className="mt-1 flex items-center justify-between">
                      <div className="flex items-center gap-2 rounded-full border border-ink-500 px-2 py-1">
                        <button
                          onClick={() =>
                            setQty(line.productId, line.variantId, line.qty - 1)
                          }
                          className="text-ink-200 hover:text-ivory"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={13} />
                        </button>
                        <span className="w-4 text-center text-xs text-ivory">
                          {line.qty}
                        </span>
                        <button
                          onClick={() =>
                            setQty(line.productId, line.variantId, line.qty + 1)
                          }
                          className="text-ink-200 hover:text-ivory"
                          aria-label="Increase quantity"
                        >
                          <Plus size={13} />
                        </button>
                      </div>
                      <span className="font-display text-sm text-ivory">
                        {formatINR(subtotal)}
                      </span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {details.length > 0 && (
          <div className="border-t border-ink-500/60 px-6 py-5">
            <div className="mb-4 flex items-center justify-between">
              <span className="text-sm text-ink-200">Subtotal</span>
              <span className="font-display text-xl text-ivory">
                {formatINR(total)}
              </span>
            </div>
            <Link
              href="/cart"
              onClick={closeCart}
              className="block w-full rounded-full bg-ivory py-3.5 text-center text-sm font-semibold text-ink-900 transition-colors hover:bg-sage"
            >
              View bag & checkout
            </Link>
          </div>
        )}
      </aside>
    </>
  );
}
