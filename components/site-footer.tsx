import Link from "next/link";
import { business } from "@/lib/content";

export function SiteFooter() {
  return (
    <footer className="bg-[#263f35] text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr] lg:px-10">
        <div>
          <p className="font-serif text-3xl">Billman&apos;s</p>
          <p className="mt-1 text-[0.65rem] font-bold uppercase tracking-[0.25em] text-[#d6ad74]">
            Catering
          </p>
          <p className="mt-6 max-w-xs text-sm leading-7 text-white/70">
            Professional catering for the gatherings that matter, from our family business to yours.
          </p>
        </div>
        <div>
          <p className="eyebrow text-[#d6ad74]">Explore</p>
          <div className="mt-5 grid gap-3 text-sm text-white/75">
            <Link className="hover:text-white" href="/weddings">Weddings</Link>
            <Link className="hover:text-white" href="/corporate-events">Corporate events</Link>
            <Link className="hover:text-white" href="/celebrations">Celebrations</Link>
            <Link className="hover:text-white" href="/menus">Menus</Link>
            <Link className="hover:text-white" href="/about">About Billman&apos;s</Link>
          </div>
        </div>
        <div>
          <p className="eyebrow text-[#d6ad74]">Let&apos;s plan</p>
          <div className="mt-5 space-y-3 text-sm leading-6 text-white/75">
            <a className="block hover:text-white" href={`tel:${business.phone}`}>{business.phoneDisplay}</a>
            <a className="block hover:text-white" href={`mailto:${business.email}`}>{business.email}</a>
            <p>{business.shortAddress}</p>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 px-6 py-5 text-center text-xs text-white/45">
        Billman&apos;s Catering. Serving Eastern Idaho, Western Montana, and North-West Wyoming.
      </div>
    </footer>
  );
}
