"use client";

import Link from "next/link";
import { useState } from "react";
import { business } from "@/lib/content";

const links = [
  { label: "Weddings", href: "/weddings" },
  { label: "Corporate", href: "/corporate-events" },
  { label: "Celebrations", href: "/celebrations" },
  { label: "Menus", href: "/menus" },
  { label: "About", href: "/about" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-30 text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
        <Link
          href="/"
          aria-label="Billman's Catering home"
          className="focus-ring group flex items-center gap-3 rounded-sm"
          onClick={() => setOpen(false)}
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/50 font-serif text-lg">
            B
          </span>
          <span>
            <span className="block font-serif text-xl leading-none">Billman&apos;s</span>
            <span className="mt-1 block text-[0.58rem] font-bold uppercase tracking-[0.22em] text-white/75">
              Catering
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary navigation">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="focus-ring rounded-sm text-sm font-semibold text-white/90 transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="focus-ring rounded-full bg-[#b78649] px-5 py-3 text-xs font-bold uppercase tracking-[0.12em] text-white transition-colors hover:bg-[#c9985a]"
          >
            Request a quote
          </Link>
        </nav>

        <button
          type="button"
          aria-expanded={open}
          aria-controls="mobile-navigation"
          className="focus-ring rounded-sm p-2 lg:hidden"
          onClick={() => setOpen((current) => !current)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <span className="block h-0.5 w-6 bg-white" />
          <span className="mt-1.5 block h-0.5 w-6 bg-white" />
          <span className="mt-1.5 block h-0.5 w-6 bg-white" />
        </button>
      </div>

      {open && (
        <nav
          id="mobile-navigation"
          className="border-t border-white/15 bg-[#263f35] px-6 py-5 lg:hidden"
          aria-label="Mobile navigation"
        >
          <div className="flex flex-col gap-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="focus-ring rounded px-3 py-3 text-sm font-semibold"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="mt-3 rounded-full bg-[#b78649] px-5 py-3 text-center text-xs font-bold uppercase tracking-[0.12em]"
              onClick={() => setOpen(false)}
            >
              Request a quote
            </Link>
            <a
              href={`tel:${business.phone}`}
              className="focus-ring mt-2 rounded px-3 py-3 text-center text-sm text-white/75"
            >
              Call {business.phoneDisplay}
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
