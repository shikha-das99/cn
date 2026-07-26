"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, ShoppingBag } from "lucide-react";
import { useCart, getCartCount } from "@/store/cart";

const links = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Shop" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/cart", label: "Cart" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const lines = useCart((s) => s.lines);
  const count = getCartCount(lines);

  return (
    <header className="sticky top-0 z-50 border-b border-ink-500/60 bg-ink-900/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        <Link href="/" className="flex items-baseline gap-2">
          <span className="font-display text-2xl tracking-tight text-ivory">
            CleanNest
          </span>
          <span className="hidden text-[10px] uppercase tracking-widest2 text-sage-light sm:inline">
            Everyday Home Care
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.filter((l) => l.label !== "Cart").map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm text-ink-200 transition-colors hover:text-ivory"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/cart"
            className="relative flex items-center gap-2 rounded-full border border-ink-500 px-4 py-2 text-sm text-ivory transition-colors hover:border-sage/60"
          >
            <ShoppingBag size={16} />
            <span className="hidden sm:inline">Cart</span>
            {count > 0 && (
              <span className="absolute -right-2 -top-2 flex h-5 min-w-5 items-center justify-center rounded-full bg-brass px-1 text-[11px] font-bold text-ink-900">
                {count}
              </span>
            )}
          </Link>
          <button
            className="rounded-full border border-ink-500 p-2 text-ivory md:hidden"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-ink-500/60 bg-ink-900 px-5 py-3 md:hidden">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2.5 text-sm text-ink-200 hover:bg-ink-700 hover:text-ivory"
            >
              {l.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
