import Link from "next/link";
import { categories } from "@/lib/products";
import { ArrowUpRight } from "lucide-react";

export default function CategoryStrip() {
  return (
    <section className="border-b border-ink-500/50 bg-ink-800/40">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="mb-10 flex items-end justify-between gap-4">
          <h2 className="font-display text-2xl text-ivory sm:text-3xl">
            Shop by category
          </h2>
          <Link
            href="/products"
            className="hidden text-sm text-sage-light hover:underline sm:block"
          >
            All products →
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((c, i) => (
            <Link
              key={c.id}
              href={`/products?c=${c.id}`}
              className="group flex flex-col justify-between rounded-2xl border border-ink-500/60 bg-ink-700/50 p-6 transition-colors hover:border-sage/50"
            >
              <div className="mb-8 flex items-start justify-between">
                <span className="font-mono text-xs text-ink-300">
                  0{i + 1}
                </span>
                <ArrowUpRight
                  size={16}
                  className="text-ink-300 transition-colors group-hover:text-sage-light"
                />
              </div>
              <div>
                <h3 className="font-display text-lg text-ivory">{c.label}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-300">
                  {c.blurb}
                </p>
                <span className="mt-3 inline-block text-[11px] uppercase tracking-widest2 text-ink-300">
                  {c.count} lines
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
