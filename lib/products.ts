import { Product } from "./types";

export const products: Product[] = [
  {
    id: "floor-cleaner-lavender",
    sku: "CN-FC-01",
    slug: "floor-cleaner-lavender",
    name: "Floor Cleaner — Lavender",
    scent: "Lavender",
    tone: "lavender",
    category: "floor-care",
    categoryLabel: "Floor Care",
    tagline:
      "Deep-cleans and deodorizes with natural pine extract. Safe on all hard floors.",
    description:
      "A concentrated everyday floor cleaner finished with calming lavender. Cuts through grime and lifts everyday dirt while leaving a quiet, soap-free shine on tile, marble, vinyl and sealed wood.",
    bullets: [
      "Natural pine extract formula",
      "Safe on all hard floors",
      "Low-foam, no-rinse concentrate",
      "Dermatologically tested fragrance",
    ],
    badge: "Bestseller",
    variants: [
      { id: "500ml", label: "500 ml", price: 149, unitNote: "₹298 / L" },
      { id: "1l", label: "1 Litre", price: 259, compareAt: 298, unitNote: "₹259 / L" },
      { id: "5l", label: "5 Litre", price: 999, compareAt: 1295, unitNote: "₹200 / L" },
    ],
  },
  {
    id: "floor-cleaner-lemon",
    sku: "CN-FC-02",
    slug: "floor-cleaner-lemon",
    name: "Floor Cleaner — Lemon",
    scent: "Lemon",
    tone: "lemon",
    category: "floor-care",
    categoryLabel: "Floor Care",
    tagline:
      "Deep-cleans and deodorizes with natural pine extract. Safe on all hard floors.",
    description:
      "A concentrated everyday floor cleaner finished with a sharp, fresh lemon cut. Cuts through grime and lifts everyday dirt while leaving a quiet, soap-free shine on tile, marble, vinyl and sealed wood.",
    bullets: [
      "Natural pine extract formula",
      "Safe on all hard floors",
      "Low-foam, no-rinse concentrate",
      "Dermatologically tested fragrance",
    ],
    badge: "New",
    variants: [
      { id: "500ml", label: "500 ml", price: 149, unitNote: "₹298 / L" },
      { id: "1l", label: "1 Litre", price: 259, compareAt: 298, unitNote: "₹259 / L" },
      { id: "5l", label: "5 Litre", price: 999, compareAt: 1295, unitNote: "₹200 / L" },
    ],
  },
  {
    id: "shower-gel-rose",
    sku: "CN-BB-01",
    slug: "shower-gel-rose",
    name: "Shower Gel — Rose",
    scent: "Rose",
    tone: "rose",
    category: "bath-body",
    categoryLabel: "Bath & Body",
    tagline: "A soft, sulphate-light lather that rinses clean without stripping skin.",
    description:
      "Everyday shower gel built around a gentle surfactant base, finished with true rose. Leaves skin soft, not tight — built for daily use across the whole family.",
    bullets: ["Sulphate-light base", "pH balanced for skin", "Rinses fully, no residue"],
    variants: [
      { id: "250ml", label: "250 ml", price: 179, unitNote: "₹716 / L" },
      { id: "500ml", label: "500 ml", price: 319, compareAt: 358, unitNote: "₹638 / L" },
    ],
  },
  {
    id: "shower-gel-citrus",
    sku: "CN-BB-02",
    slug: "shower-gel-citrus",
    name: "Shower Gel — Citrus",
    scent: "Citrus",
    tone: "citrus",
    category: "bath-body",
    categoryLabel: "Bath & Body",
    tagline: "A brighter, wake-up lather for mornings that need a head start.",
    description:
      "The same gentle, pH-balanced base as our Rose gel, finished with a bright citrus accord. A brisk everyday wash for mornings.",
    bullets: ["Sulphate-light base", "pH balanced for skin", "Rinses fully, no residue"],
    variants: [
      { id: "250ml", label: "250 ml", price: 179, unitNote: "₹716 / L" },
      { id: "500ml", label: "500 ml", price: 319, compareAt: 358, unitNote: "₹638 / L" },
    ],
  },
  {
    id: "soap-bar-orange",
    sku: "CN-BB-03",
    slug: "soap-bar-orange",
    name: "Soap Bar — Sweet Orange",
    scent: "Sweet Orange",
    tone: "citrus",
    category: "bath-body",
    categoryLabel: "Bath & Body",
    tagline: "A firm, long-wear bar that holds its shape wash after wash.",
    description:
      "A vegetable-oil based bar milled for a firm, long-wearing lather, finished with sweet orange. Doesn't turn to mush in the dish.",
    bullets: ["Long-wear milled bar", "Vegetable oil base", "Flow-wrapped, travel-ready"],
    variants: [
      { id: "single", label: "Single Bar (100 g)", price: 59 },
      { id: "pack3", label: "Pack of 3", price: 159, compareAt: 177, unitNote: "₹53 / bar" },
    ],
  },
  {
    id: "tissue-paper-classic",
    sku: "CN-PC-01",
    slug: "tissue-paper-classic",
    name: "Tissue Paper — Classic 2-Ply",
    scent: "Unscented",
    tone: "neutral",
    category: "paper-care",
    categoryLabel: "Paper Care",
    tagline: "Soft, strong 2-ply facial tissue for everyday counters and cars.",
    description:
      "A soft 2-ply facial tissue in a flip-top box, sized for kitchen counters, bathrooms and cars. Strong wet-strength so it holds up to real use.",
    bullets: ["2-ply, soft strength", "Flip-top box", "Unscented, dye-free"],
    variants: [
      { id: "pack4", label: "Pack of 4 Boxes", price: 199, unitNote: "₹50 / box" },
      { id: "pack12", label: "Pack of 12 Boxes", price: 549, compareAt: 597, unitNote: "₹46 / box" },
    ],
  },
  {
    id: "dishwash-liquid-lemon",
    sku: "CN-MO-01",
    slug: "dishwash-liquid-lemon",
    name: "Dishwash Liquid — Lemon",
    scent: "Lemon",
    tone: "lemon",
    category: "more",
    categoryLabel: "More",
    tagline: "Cuts grease fast, rinses clear, kind to hands with everyday use.",
    description:
      "A concentrated dishwash liquid that cuts through grease in a few drops and rinses clear, so nothing lingers on the plate.",
    bullets: ["Grease-cutting concentrate", "Rinses fully clear", "Gentle on hands"],
    variants: [
      { id: "500ml", label: "500 ml", price: 99 },
      { id: "1l", label: "1 Litre", price: 179, compareAt: 198 },
    ],
  },
  {
    id: "glass-cleaner-fresh",
    sku: "CN-MO-02",
    slug: "glass-cleaner-fresh",
    name: "Glass & Household Cleaner",
    scent: "Fresh",
    tone: "neutral",
    category: "more",
    categoryLabel: "More",
    tagline: "Streak-free on glass, mirrors and hard surfaces around the house.",
    description:
      "A fast-drying trigger-spray cleaner for glass, mirrors, switches and hard surfaces — streak-free with no heavy chemical smell.",
    bullets: ["Streak-free finish", "Fast-drying", "Ready-to-use trigger spray"],
    variants: [
      { id: "500ml", label: "500 ml Trigger", price: 129 },
      { id: "refill1l", label: "1 Litre Refill", price: 199, compareAt: 229 },
    ],
  },
];

export function getProductBySlug(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function getFeaturedProducts() {
  return products.filter((p) =>
    ["floor-cleaner-lavender", "floor-cleaner-lemon"].includes(p.id)
  );
}

export const categories: { id: Product["category"]; label: string; blurb: string; count: number }[] = [
  {
    id: "floor-care",
    label: "Floor Care",
    blurb: "Concentrated cleaners for every hard floor in the house.",
    count: products.filter((p) => p.category === "floor-care").length,
  },
  {
    id: "bath-body",
    label: "Bath & Body",
    blurb: "Gentle, everyday washes for the whole family.",
    count: products.filter((p) => p.category === "bath-body").length,
  },
  {
    id: "paper-care",
    label: "Paper Care",
    blurb: "Soft, strong tissue for counters, cars and bathrooms.",
    count: products.filter((p) => p.category === "paper-care").length,
  },
  {
    id: "more",
    label: "More",
    blurb: "The rest of the everyday clean — dish, glass and beyond.",
    count: products.filter((p) => p.category === "more").length,
  },
];
