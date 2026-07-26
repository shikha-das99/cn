import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-ink-500/50">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(143,174,150,0.14),transparent_55%)]" />
      <div className="pointer-events-none absolute inset-0 bg-grain" />
      <div className="relative mx-auto max-w-7xl px-5 pb-20 pt-16 sm:px-8 sm:pb-28 sm:pt-24">
        <div className="mb-6 flex items-center gap-3 text-xs uppercase tracking-widest2 text-sage-light">
          <span className="h-px w-8 bg-sage-light/60" />
          Everyday Home Care · Direct to Door
        </div>
        <h1 className="max-w-3xl font-display text-4xl leading-[1.08] text-ivory sm:text-6xl">
          The clean your house{" "}
          <span className="italic text-sage-light">actually</span> notices.
        </h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-200 sm:text-lg">
          Floor cleaners, bath essentials and paper care — concentrated,
          dermatologically tested, and delivered straight to your door.
          No middlemen, no markup for a fragrance you won&apos;t remember.
        </p>
        <div className="mt-9 flex flex-wrap items-center gap-4">
          <Link
            href="/products"
            className="group flex items-center gap-2 rounded-full bg-ivory px-6 py-3.5 text-sm font-semibold text-ink-900 transition-colors hover:bg-sage"
          >
            Shop the catalogue
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
          <Link
            href="/products?c=floor-care"
            className="rounded-full border border-ink-500 px-6 py-3.5 text-sm text-ivory transition-colors hover:border-sage/60"
          >
            View Floor Care
          </Link>
        </div>

        <dl className="mt-16 grid max-w-2xl grid-cols-3 gap-8 border-t border-ink-500/50 pt-8">
          {[
            ["8", "Product lines"],
            ["99.9%", "Germ kill, tested"],
            ["48h", "Dispatch, PAN India"],
          ].map(([value, label]) => (
            <div key={label}>
              <dt className="font-display text-3xl text-ivory">{value}</dt>
              <dd className="mt-1 text-xs uppercase tracking-widest2 text-ink-300">
                {label}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
