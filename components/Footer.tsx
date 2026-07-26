import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-ink-500/50 bg-ink-900">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <span className="font-display text-2xl text-ivory">CleanNest</span>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-ink-300">
              Everyday home care, formulated to a higher standard and sent
              straight to your door.
            </p>
          </div>
          <div>
            <h4 className="mb-4 text-xs uppercase tracking-widest2 text-ink-300">
              Catalogue
            </h4>
            <ul className="flex flex-col gap-2.5 text-sm text-ink-200">
              <li><Link href="/products?c=floor-care" className="hover:text-ivory">Floor Care</Link></li>
              <li><Link href="/products?c=bath-body" className="hover:text-ivory">Bath &amp; Body</Link></li>
              <li><Link href="/products?c=paper-care" className="hover:text-ivory">Paper Care</Link></li>
              <li><Link href="/products" className="hover:text-ivory">All products</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-xs uppercase tracking-widest2 text-ink-300">
              Company
            </h4>
            <ul className="flex flex-col gap-2.5 text-sm text-ink-200">
              <li><Link href="/cart" className="hover:text-ivory">Your bag</Link></li>
              <li><Link href="/about" className="hover:text-ivory">About CleanNest</Link></li>
              <li><Link href="/contact" className="hover:text-ivory">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-xs uppercase tracking-widest2 text-ink-300">
              Enquiries
            </h4>
            <p className="text-sm text-ink-200">hello@cleannest.in</p>
            <p className="mt-1 text-sm text-ink-200">Guwahati, Assam, India</p>
          </div>
        </div>
        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-ink-500/50 pt-6 text-xs text-ink-300 sm:flex-row">
          <span>© {new Date().getFullYear()} CleanNest. All rights reserved.</span>
          <span>Formulated for houses that notice details.</span>
        </div>
      </div>
    </footer>
  );
}
