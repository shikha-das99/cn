# CleanNest — D2C Housekeeping E‑commerce (Next.js)

A production-ready storefront starter for **CleanNest**, built with Next.js 14
(App Router) + TypeScript + Tailwind CSS, in a dark, editorial "quiet luxury"
theme. Includes catalogue, product detail, cart, and checkout scaffolding.

## Stack

| Layer          | Choice                          | Why |
|----------------|----------------------------------|-----|
| Framework      | Next.js 14 (App Router)          | File-based routing, RSC, image/font optimization, first-class Vercel deploy |
| Language       | TypeScript                       | Type-safe product/cart models, fewer runtime bugs |
| Styling        | Tailwind CSS + custom design tokens | Fast to theme, consistent spacing/scale, easy dark-mode palette |
| State (cart)   | Zustand + `persist` (localStorage) | Tiny, no boilerplate, cart survives refresh without a backend yet |
| Icons          | lucide-react                     | Lightweight, tree-shakeable |
| Fonts          | `next/font` — Fraunces (display) + Inter (body) | Self-hosted, zero layout shift |
| Hosting        | Vercel                           | Zero-config Next.js deploys, previews per PR |

No backend/database is wired up yet — cart state lives in the browser. This
is intentional for a fast v1; see **"Next steps to go live"** below for how to
add real persistence, payments and orders.

## Folder structure

```
app/
  layout.tsx            → root layout: fonts, Navbar, Footer, CartDrawer
  page.tsx               → homepage (hero, categories, featured products)
  globals.css             → Tailwind + base styles + .input component
  products/
    page.tsx              → catalogue grid with category filter tabs (?c=)
    [slug]/page.tsx        → product detail page (SSG via generateStaticParams)
  cart/page.tsx            → full cart review page
  checkout/page.tsx        → checkout form + order summary (UI only)
  about/page.tsx           → brand story page (framer-motion scroll reveals)
  contact/page.tsx         → contact form + info page
components/
  Navbar.tsx               → sticky header, live cart count
  CartDrawer.tsx            → slide-in cart, opens automatically on "Add to cart"
  Hero.tsx / CategoryStrip.tsx / Footer.tsx
  ProductCard.tsx            → catalogue/home card: size selector + price + Add to cart
  ProductPurchasePanel.tsx    → same purchase logic, used on the detail page
  ProductVisual.tsx            → signature generative SVG "bottle" artwork per product
  AboutView.tsx                 → About page content (framer-motion)
  ContactView.tsx                → Contact page layout (framer-motion)
  ContactForm.tsx                 → controlled contact form with simulated submit state
lib/
  types.ts                     → Product / Variant / CartLine types
  products.ts                  → product catalog data (edit this to add products)
  tone.ts                       → scent → color mapping used by ProductVisual
  format.ts                      → INR currency formatter
store/
  cart.ts                        → Zustand cart store (add/remove/setQty, persisted)
```

## Design direction

Reference analyzed: **dwoing.com** (B2B hospitality supply, dark editorial,
numbered "specimen" catalogue, restrained serif/sans pairing, SKU codes as a
structural device). CleanNest borrows the same disciplined, premium tone but
is warmed up for a residential D2C audience:

- **Palette** — near-black ink (`#0D1210`) base, soft sage green
  (`#8FAE96`) as the primary action/accent color, brass/gold (`#C9A34E`)
  for badges and highlights, warm ivory (`#F3F1EA`) text. Each scent
  (lavender, lemon, rose, citrus…) gets its own accent color used
  consistently across the swatch dot, the SVG bottle artwork and labels —
  so the shelf is scannable at a glance.
- **Type** — Fraunces (display serif, used for headings/prices only) paired
  with Inter (body/UI). Wide letter-spacing on eyebrows/labels (`0.28em`)
  echoes the reference site's small-caps rhythm without copying it.
- **Signature element** — instead of stock photography (which would need
  real product shoots), every product renders a generated SVG "bottle"
  silhouette tinted to its scent, with an inline label plate showing the
  SKU. It's consistent, fast, license-free, and reinforces the SKU-driven
  catalogue structure from the reference brief.
- **SKU codes** (`CN-FC-01`, `CN-BB-02`…) are real structure, not
  decoration — they encode category (`FC` floor care, `BB` bath & body,
  `PC` paper care, `MO` more) and are stable identifiers you can reuse in
  inventory/ERP later.

## Product / cart model

```ts
Product {
  id, sku, slug, name, scent, tone, category, categoryLabel,
  tagline, description, bullets[], badge?,
  variants: [{ id, label, price, compareAt?, unitNote? }]
}
CartLine { productId, variantId, qty }
```

A product's **variants** array is what powers the size/litre selector
pills (500 ml / 1 L / 5 L for floor cleaner, pack sizes for soap/tissue,
etc.). Add a new size to any product by adding an entry to its `variants`
array in `lib/products.ts` — the UI updates automatically.

## The 2 requested product cards

`lib/products.ts` contains the two floor cleaner SKUs exactly as specified:

- **Floor Cleaner — Lavender** (`CN-FC-01`)
- **Floor Cleaner — Lemon** (`CN-FC-02`)

Both share the tagline: *"Deep-cleans and deodorizes with natural pine
extract. Safe on all hard floors."* and expose 500 ml / 1 Litre / 5 Litre
size CTAs with per-size pricing and an **Add to cart** button. They're
pulled onto the homepage via `getFeaturedProducts()` and also live in the
full catalogue at `/products?c=floor-care`.

## Cart & checkout flow

1. **Add to cart** on any product card or the product detail page → item is
   pushed into the Zustand store, persisted to `localStorage`, and the
   **CartDrawer** slides in automatically for instant confirmation.
2. **Cart page** (`/cart`) — full line-item review: quantity stepper,
   remove, free-shipping threshold nudge, subtotal/shipping/total.
3. **Checkout page** (`/checkout`) — shipping form + order summary. The
   "Place order" button is a **UI placeholder** (shows an alert) — see next
   steps to wire it to a real payment gateway and order API.

## About & Contact

`/about` tells the CleanNest story with scroll-triggered `framer-motion`
reveals (fade-up on entry, staggered by section). `/contact` pairs the same
motion treatment with a controlled form (`ContactForm.tsx`) — submitting it
simulates a send and shows a success state, but **no email is actually
delivered yet**. Wire it to Resend/Postmark or a server route
(`app/api/contact/route.ts`) before relying on it.

## Running locally

```bash
npm install
npm run dev
# open http://localhost:3000
```

## Deploying on Vercel

1. Push this repo to GitHub/GitLab/Bitbucket.
2. In Vercel: **Add New Project** → import the repo → framework preset
   `Next.js` is auto-detected → **Deploy**. No env vars are required for
   this v1 (no backend yet).
3. Every push to `main` redeploys production; every PR gets a preview URL.

## Next steps to go live (recommended order)

1. **Real product photography / assets** — swap `ProductVisual` for
   `next/image` once you have shot photos; keep the SKU label plate as an
   optional overlay for continuity, or drop it.
2. **Backend for products & inventory** — move `lib/products.ts` into a
   headless CMS (Sanity/Contentful) or a database (Postgres via Prisma,
   or Supabase) behind a small API layer, so non-devs can edit copy/price
   without a deploy.
3. **Payments** — integrate Razorpay (best for India/UPI) or Stripe into
   `/checkout`; create a server route (`app/api/checkout/route.ts`) that
   creates the order/payment session server-side, never trust client-set
   prices.
4. **Orders & auth** — add user accounts (NextAuth/Clerk) and an orders
   table so customers can see order history; send order-confirmation email
   (Resend/Postmark).
5. **Search & filtering** — if the catalogue grows past ~30–40 SKUs, add
   full-text/faceted search (Algolia or Meilisearch) instead of the simple
   category tabs used here.
6. **Analytics & SEO** — Vercel Analytics + `next-sitemap` +
   structured data (`Product` / `Offer` JSON-LD) per product page for
   Google Shopping rich results.
7. **Reviews & trust** — star ratings and review count on `ProductCard`
   once you have real review data — currently omitted rather than faked.

## A few UX additions made beyond the brief

- **Free-shipping progress nudge** on the cart page (`₹799` threshold) —
  a proven conversion lever for D2C carts.
- **Auto-opening cart drawer** on every "Add to cart" so the user gets
  instant confirmation without leaving the page they're browsing.
- **Compare-at (strikethrough) pricing + per-litre unit price** on bulk
  sizes, so the value of buying the 5 L can over 500 ml is legible at a
  glance, not just "5x the price."
- **Category-coded SKU prefixes** (`FC`/`BB`/`PC`/`MO`) so the catalogue
  stays organized as it grows past the initial 4 categories.
- **Accessible focus states, `aria-pressed` on size pills, and
  `prefers-reduced-motion` support** baked into the base styles.
