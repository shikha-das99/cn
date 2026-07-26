import { notFound } from "next/navigation";
import Link from "next/link";
import { products, getProductBySlug } from "@/lib/products";
import { toneColors } from "@/lib/tone";
import ProductVisual from "@/components/ProductVisual";
import ProductPurchasePanel from "@/components/ProductPurchasePanel";
import ProductCard from "@/components/ProductCard";
import { ChevronLeft } from "lucide-react";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const product = getProductBySlug(params.slug);
  if (!product) return {};
  return {
    title: `${product.name} — CleanNest`,
    description: product.tagline,
  };
}

export default function ProductDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const product = getProductBySlug(params.slug);
  if (!product) notFound();

  const tone = toneColors[product.tone];
  const related = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 2);

  return (
    <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8">
      <Link
        href="/products"
        className="mb-8 inline-flex items-center gap-1.5 text-sm text-ink-300 hover:text-ivory"
      >
        <ChevronLeft size={15} /> Back to catalogue
      </Link>

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
        <div className="flex items-center justify-center rounded-3xl border border-ink-500/60 bg-[radial-gradient(circle_at_50%_20%,rgba(143,174,150,0.14),transparent_60%)] p-12">
          <ProductVisual
            tone={product.tone}
            category={product.category}
            sku={product.sku}
            className="h-full max-h-[360px] w-auto drop-shadow-[0_25px_40px_rgba(0,0,0,0.5)]"
          />
        </div>

        <div>
          <div className="mb-3 flex items-center gap-2">
            <span
              className="h-2.5 w-2.5 rounded-full ring-1 ring-ivory/20"
              style={{ backgroundColor: tone.base }}
            />
            <span className="font-mono text-xs uppercase tracking-widest2 text-ink-300">
              {product.sku} · {product.categoryLabel}
            </span>
          </div>

          <h1 className="font-display text-3xl leading-tight text-ivory sm:text-4xl">
            {product.name}
          </h1>
          <p className="mt-3 text-base leading-relaxed text-ink-200">
            {product.tagline}
          </p>

          <div className="my-8 h-px bg-ink-500/50" />

          <ProductPurchasePanel product={product} />

          <div className="mt-10">
            <h2 className="mb-3 font-display text-lg text-ivory">
              About this product
            </h2>
            <p className="text-sm leading-relaxed text-ink-300">
              {product.description}
            </p>
            <ul className="mt-5 flex flex-col gap-2.5">
              {product.bullets.map((b) => (
                <li
                  key={b}
                  className="flex items-start gap-2.5 text-sm text-ink-200"
                >
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-sage-light" />
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <div className="mt-24">
          <h2 className="mb-8 font-display text-2xl text-ivory">
            You may also like
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
