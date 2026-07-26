import Hero from "@/components/Hero";
import CategoryStrip from "@/components/CategoryStrip";
import ProductCard from "@/components/ProductCard";
import { getFeaturedProducts } from "@/lib/products";
import Link from "next/link";
import { ArrowRight, Droplets, Leaf, Truck } from "lucide-react";

export default function HomePage() {
  const featured = getFeaturedProducts();

  return (
    <>
      <Hero />
      <CategoryStrip />

      {/* Featured products */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <div className="mb-10 flex items-end justify-between gap-4">
          <div>
            <span className="text-xs uppercase tracking-widest2 text-sage-light">
              Featured
            </span>
            <h2 className="mt-2 font-display text-2xl text-ivory sm:text-3xl">
              Floor Cleaner, in two scents.
            </h2>
          </div>
          <Link
            href="/products?c=floor-care"
            className="hidden items-center gap-1.5 text-sm text-sage-light hover:underline sm:flex"
          >
            View floor care <ArrowRight size={14} />
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {featured.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      {/* Trust / standard section */}
      <section className="border-y border-ink-500/50 bg-ink-800/40">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-5 py-16 sm:px-8 md:grid-cols-3">
          {[
            {
              icon: Leaf,
              title: "Naturally derived",
              body: "Pine-extract and plant-based formulas across the range — effective without a harsh chemical edge.",
            },
            {
              icon: Droplets,
              title: "Concentrated, not diluted",
              body: "Every bottle is priced per litre so buying bigger always costs less, not just more of the same.",
            },
            {
              icon: Truck,
              title: "48-hour dispatch",
              body: "Packed and shipped within two days, tracked door-to-door, anywhere in India.",
            },
          ].map(({ icon: Icon, title, body }) => (
            <div key={title} className="flex flex-col gap-3">
              <Icon size={22} className="text-sage-light" />
              <h3 className="font-display text-lg text-ivory">{title}</h3>
              <p className="text-sm leading-relaxed text-ink-300">{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA banner */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <div className="flex flex-col items-start justify-between gap-6 rounded-3xl border border-ink-500/60 bg-[radial-gradient(circle_at_20%_20%,rgba(143,174,150,0.12),transparent_60%)] p-10 sm:flex-row sm:items-center sm:p-14">
          <div>
            <h2 className="max-w-md font-display text-2xl text-ivory sm:text-3xl">
              Restock the essentials before the bottle runs dry.
            </h2>
            <p className="mt-3 max-w-md text-sm text-ink-300">
              Browse the full catalogue — floor, bath and paper care in one
              cart, one delivery.
            </p>
          </div>
          <Link
            href="/products"
            className="flex shrink-0 items-center gap-2 rounded-full bg-ivory px-6 py-3.5 text-sm font-semibold text-ink-900 transition-colors hover:bg-sage"
          >
            Shop all products <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
