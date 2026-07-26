"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Leaf, FlaskConical, Home } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

export default function AboutView() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-ink-500/50">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(143,174,150,0.14),transparent_55%)]" />
        <div className="pointer-events-none absolute inset-0 bg-grain" />
        <div className="relative mx-auto max-w-4xl px-5 pb-20 pt-16 sm:px-8 sm:pb-28 sm:pt-24">
          <motion.div
            initial="hidden"
            animate="show"
            variants={stagger}
            className="text-center"
          >
            <motion.div
              variants={fadeUp}
              className="mb-6 flex items-center justify-center gap-3 text-xs uppercase tracking-widest2 text-sage-light"
            >
              <span className="h-px w-8 bg-sage-light/60" />
              About CleanNest
              <span className="h-px w-8 bg-sage-light/60" />
            </motion.div>
            <motion.h1
              variants={fadeUp}
              className="font-display text-4xl leading-[1.1] text-ivory sm:text-5xl"
            >
              We make the everyday clean{" "}
              <span className="italic text-sage-light">worth noticing.</span>
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-ink-200 sm:text-lg"
            >
              CleanNest formulates and ships housekeeping essentials direct to
              your door — no distributor markup, no filler fragrance, just
              concentrates that work and pricing that rewards buying smart.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="mx-auto max-w-4xl px-5 py-20 sm:px-8">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="grid grid-cols-1 gap-10 sm:grid-cols-2"
        >
          <motion.div variants={fadeUp}>
            <span className="text-xs uppercase tracking-widest2 text-sage-light">
              Why we started
            </span>
            <h2 className="mt-3 font-display text-2xl text-ivory">
              Supply houses had it right. Homes deserved the same.
            </h2>
          </motion.div>
          <motion.p variants={fadeUp} className="text-sm leading-relaxed text-ink-300">
            Hospitality brands have run on concentrated, dilution-rated
            cleaning supply for decades — pay for the formula, not the water.
            Retail shelves rarely offer households the same deal. CleanNest
            was built to bring that same discipline home: fewer, better
            products, priced honestly per litre, delivered on your schedule
            instead of the supermarket&apos;s.
          </motion.p>
        </motion.div>
      </section>

      {/* Pillars */}
      <section className="border-y border-ink-500/50 bg-ink-800/40">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
          <motion.h2
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            className="mb-12 font-display text-2xl text-ivory sm:text-3xl"
          >
            What we stand for
          </motion.h2>
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="grid grid-cols-1 gap-8 sm:grid-cols-3"
          >
            {[
              {
                icon: FlaskConical,
                title: "Formulated, not filled",
                body: "Every SKU starts as a concentrate brief — how little water can we ship you without losing performance.",
              },
              {
                icon: Leaf,
                title: "Naturally derived where it matters",
                body: "Plant-based and pine-extract bases wherever they can match performance, without pretending fragrance is the same as efficacy.",
              },
              {
                icon: Home,
                title: "Built for real households",
                body: "Sizes that make sense for a flat or a family — not just a hotel back-of-house, not just a single-use bottle.",
              },
            ].map(({ icon: Icon, title, body }) => (
              <motion.div key={title} variants={fadeUp} className="flex flex-col gap-3">
                <Icon size={22} className="text-sage-light" />
                <h3 className="font-display text-lg text-ivory">{title}</h3>
                <p className="text-sm leading-relaxed text-ink-300">{body}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="mx-auto max-w-4xl px-5 py-20 sm:px-8">
        <motion.dl
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="grid grid-cols-2 gap-8 sm:grid-cols-4"
        >
          {[
            ["8", "Product lines"],
            ["99.9%", "Germ kill, tested"],
            ["48h", "Dispatch, PAN India"],
            ["0", "Distributor markups"],
          ].map(([value, label]) => (
            <motion.div key={label} variants={fadeUp}>
              <dt className="font-display text-3xl text-ivory">{value}</dt>
              <dd className="mt-1 text-xs uppercase tracking-widest2 text-ink-300">
                {label}
              </dd>
            </motion.div>
          ))}
        </motion.dl>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-5 pb-20 sm:px-8">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          className="flex flex-col items-start justify-between gap-6 rounded-3xl border border-ink-500/60 bg-[radial-gradient(circle_at_20%_20%,rgba(143,174,150,0.12),transparent_60%)] p-10 sm:flex-row sm:items-center sm:p-14"
        >
          <div>
            <h2 className="max-w-md font-display text-2xl text-ivory sm:text-3xl">
              See the catalogue for yourself.
            </h2>
            <p className="mt-3 max-w-md text-sm text-ink-300">
              Eight lines, honest pricing, one cart.
            </p>
          </div>
          <Link
            href="/products"
            className="flex shrink-0 items-center gap-2 rounded-full bg-ivory px-6 py-3.5 text-sm font-semibold text-ink-900 transition-colors hover:bg-sage"
          >
            Shop all products <ArrowRight size={16} />
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
