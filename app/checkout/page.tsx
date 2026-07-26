"use client";

import Link from "next/link";
import type { FormEvent } from "react";
import { useCart, getCartDetails, getCartTotal } from "@/store/cart";
import { formatINR } from "@/lib/format";
import { Lock } from "lucide-react";

export default function CheckoutPage() {
  const lines = useCart((s) => s.lines);
  const details = getCartDetails(lines);
  const total = getCartTotal(lines);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    alert(
      "This is a UI demo — wire this form to Razorpay / Stripe and your order API to go live."
    );
  }

  if (details.length === 0) {
    return (
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 px-5 py-32 text-center">
        <h1 className="font-display text-2xl text-ivory">Nothing to check out</h1>
        <p className="text-sm text-ink-300">Your bag is empty right now.</p>
        <Link
          href="/products"
          className="mt-2 rounded-full bg-ivory px-6 py-3.5 text-sm font-semibold text-ink-900 hover:bg-sage"
        >
          Shop the catalogue
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8">
      <h1 className="font-display text-3xl text-ivory sm:text-4xl">Checkout</h1>

      <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-3">
        <form onSubmit={handleSubmit} className="flex flex-col gap-8 lg:col-span-2">
          <fieldset className="flex flex-col gap-4">
            <legend className="mb-1 font-display text-lg text-ivory">
              Shipping details
            </legend>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <input required placeholder="Full name" className="input" />
              <input required type="tel" placeholder="Phone number" className="input" />
            </div>
            <input required placeholder="Address line" className="input" />
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <input required placeholder="City" className="input" />
              <input required placeholder="State" className="input" />
              <input required placeholder="PIN code" className="input" />
            </div>
          </fieldset>

          <fieldset className="flex flex-col gap-4">
            <legend className="mb-1 font-display text-lg text-ivory">Payment</legend>
            <div className="rounded-xl border border-ink-500/60 bg-ink-700/40 p-4 text-sm text-ink-300">
              Card, UPI and net banking are handled by your payment gateway
              (e.g. Razorpay or Stripe) at integration time. This screen is a
              structural placeholder.
            </div>
          </fieldset>

          <button
            type="submit"
            className="flex items-center justify-center gap-2 rounded-full bg-ivory py-4 text-sm font-semibold text-ink-900 transition-colors hover:bg-sage"
          >
            <Lock size={15} /> Place order — {formatINR(total)}
          </button>
        </form>

        <aside className="h-fit rounded-2xl border border-ink-500/60 bg-ink-700/50 p-6">
          <h2 className="font-display text-lg text-ivory">Order summary</h2>
          <ul className="mt-4 flex flex-col gap-3">
            {details.map(({ line, product, variant, subtotal }) => (
              <li
                key={`${line.productId}-${line.variantId}`}
                className="flex justify-between text-sm"
              >
                <span className="text-ink-200">
                  {product.name}{" "}
                  <span className="text-ink-300">
                    ({variant.label} × {line.qty})
                  </span>
                </span>
                <span className="text-ivory">{formatINR(subtotal)}</span>
              </li>
            ))}
          </ul>
          <div className="mt-5 flex justify-between border-t border-ink-500/50 pt-4 text-base">
            <span className="font-medium text-ivory">Total</span>
            <span className="font-display text-xl text-ivory">
              {formatINR(total)}
            </span>
          </div>
        </aside>
      </div>
    </div>
  );
}
