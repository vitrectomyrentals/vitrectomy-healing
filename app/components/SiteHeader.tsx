"use client";

import Link from "next/link";
import { useState } from "react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Prices", href: "/prices" },
  { label: "Equipment", href: "/equipment" },
  { label: "Vitrectomy Recovery", href: "/vitrectomy-recovery" },
  { label: "FAQs", href: "/faqs" },
];

function LogoEye() {
  return (
    <svg className="h-9 w-10 sm:h-10 sm:w-12" viewBox="0 0 72 60" aria-hidden="true">
      <path
        d="M8 30c8-11 17-16 28-16s20 5 28 16c-8 11-17 16-28 16S16 41 8 30Z"
        style={{ fill: "none", stroke: "#14b8a6", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 4 }}
      />
      <circle cx="36" cy="30" r="10" style={{ fill: "none", stroke: "#ffffff", strokeWidth: 4 }} />
      <circle cx="36" cy="30" r="4" style={{ fill: "#14b8a6", stroke: "none" }} />
      <path
        d="M18 17c10-8 25-10 38-2M16 43c11 7 26 8 39 1"
        style={{ fill: "none", stroke: "#14b8a6", strokeLinecap: "round", strokeOpacity: 0.55, strokeWidth: 2.5 }}
      />
    </svg>
  );
}

export function SiteHeader({ contactStyle = "filled" }: { contactStyle?: "filled" | "outline" }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-neutral-950 text-white">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
        <Link
          href="/"
          className="flex items-center gap-2 sm:gap-4"
          aria-label="Face Down Recovery Rentals home"
          onClick={() => {
            setMenuOpen(false);
            window.scrollTo({ top: 0, left: 0, behavior: "auto" });
          }}
        >
          <span className="grid place-items-center text-teal-300">
            <LogoEye />
          </span>
          <span className="hidden h-12 w-px bg-white/25 sm:block" />
          <span className="leading-none">
            <span className="block text-base font-black uppercase tracking-[0.14em] text-white sm:text-2xl sm:tracking-[0.18em]">
              Face Down
            </span>
            <span className="mt-1 block text-[0.65rem] font-black uppercase tracking-[0.24em] text-teal-300 sm:text-base sm:tracking-[0.38em]">
              Recovery Rentals
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 text-xs font-bold uppercase tracking-[0.22em] text-white/80 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => {
                if (item.href === "/") {
                  window.scrollTo({ top: 0, left: 0, behavior: "auto" });
                }
              }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          className="flex size-12 items-center justify-center rounded-full border border-white/15 lg:hidden"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? (
            <span className="text-3xl font-light leading-none">{"\u00d7"}</span>
          ) : (
            <span className="flex w-6 flex-col gap-1.5">
              <span className="h-0.5 rounded bg-white" />
              <span className="h-0.5 rounded bg-white" />
              <span className="h-0.5 rounded bg-white" />
            </span>
          )}
        </button>

        {menuOpen ? (
          <div className="fixed bottom-0 right-0 top-20 z-50 w-[68vw] max-w-xs border-l border-white/10 bg-neutral-950 px-9 py-8 shadow-2xl shadow-neutral-950/40 lg:hidden">
            <nav className="flex flex-col gap-6 text-xs font-black uppercase tracking-[0.28em] text-white">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => {
                    setMenuOpen(false);
                    if (item.href === "/") {
                      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
                    }
                  }}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/contact"
                className="mt-2 inline-flex w-fit rounded-full border-2 border-white px-6 py-3 tracking-[0.2em]"
                onClick={() => setMenuOpen(false)}
              >
                Contact
              </Link>
            </nav>
          </div>
        ) : null}

        <Link
          href="/contact"
          className={
            contactStyle === "outline"
              ? "hidden rounded-full border border-white px-5 py-3 text-xs font-black uppercase tracking-[0.18em] text-white transition hover:bg-white hover:text-neutral-950 lg:inline-flex"
              : "hidden rounded-full bg-teal-400 px-5 py-3 text-xs font-black uppercase tracking-[0.18em] text-neutral-950 shadow-sm transition hover:bg-teal-300 lg:inline-flex"
          }
        >
          Contact
        </Link>
      </div>
    </header>
  );
}
