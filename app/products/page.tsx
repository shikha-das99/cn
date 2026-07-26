import Link from "next/link";
import { products, categories } from "@/lib/products";
import ProductCard from "@/components/ProductCard";
import { Category } from "@/lib/types";

export const metadata = {
  title: "Shop All Products — CleanNest",
};

export default function ProductsPage({
  searchParams,
}: {
  searchParams: { c?: string };
}) {
  const activeCategory = searchParams.c as Category | undefined;
  const list = activeCategory
    ? products.filter((p) => p.category === activeCategory)
    : products;

  return (
    <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
      <div className="mb-10">
        <span className="text-xs uppercase tracking-widest2 text-sage-light">
          Catalogue
        </span>
        <h1 className="mt-2 font-display text-3xl text-ivory sm:text-4xl">
          The full shelf.
        </h1>
        <p className="mt-3 max-w-lg text-sm text-ink-300">
          {products.length} lines across floor care, bath &amp; body, paper
          care and more — each priced per litre so bigger always means
          better value.
        </p>
      </div>

      {/* Category tabs */}
      <div className="mb-10 flex flex-wrap gap-2 border-b border-ink-500/50 pb-6">
        <Link
          href="/products"
          className={`rounded-full border px-4 py-2 text-sm transition-colors ${
            !activeCategory
              ? "border-sage bg-sage/15 text-sage-light"
              : "border-ink-500 text-ink-200 hover:border-sage/50 hover:text-ivory"
          }`}
        >
          All ({products.length})
        </Link>
        {categories.map((c) => (
          <Link
            key={c.id}
            href={`/products?c=${c.id}`}
            className={`rounded-full border px-4 py-2 text-sm transition-colors ${
              activeCategory === c.id
                ? "border-sage bg-sage/15 text-sage-light"
                : "border-ink-500 text-ink-200 hover:border-sage/50 hover:text-ivory"
            }`}
          >
            {c.label} ({c.count})
          </Link>
        ))}
      </div>

      {list.length === 0 ? (
        <p className="py-20 text-center text-sm text-ink-300">
          No products in this category yet.
        </p>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      )}
    </div>
  );
}
