"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navLinks } from "@/content/site";

export function ArrowIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" fill="none" className={className} aria-hidden="true">
      <path d="M2.5 8h10M9 4.5 12.5 8 9 11.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Wordmark({ dark = false }: { dark?: boolean }) {
  return (
    <Link
      href="/"
      className={`font-display text-[19px] font-medium tracking-tight ${dark ? "text-white" : "text-ink"}`}
      aria-label="Debelu Ventures — home"
    >
      Debelu Ventures
    </Link>
  );
}

export default function SiteNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open ]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
          scrolled && !open ? "bg-ink/90 backdrop-blur-md" : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-16 max-w-shell items-center justify-between px-5 md:px-10">
          <Wordmark dark />
          <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                data-active={pathname === link.href || pathname.startsWith(link.href + "/")}
                className="nav-link text-[13px] font-medium text-white/80 transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="hidden md:block">
            <Link
              href="/contact"
              className="btn-arrow inline-flex items-center gap-2 rounded-pill border border-white/25 px-4 py-2 text-[13px] font-medium text-white transition-colors duration-300 hover:border-white hover:bg-white hover:text-ink"
            >
              Start a conversation <ArrowIcon />
            </Link>
          </div>
          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className="flex h-11 w-11 items-center justify-center rounded-full text-white md:hidden"
          >
            {open ? (
              <svg viewBox="0 0 20 20" className="h-5 w-5" fill="none" aria-hidden="true">
                <path d="M5 5l10 10M15 5L5 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            ) : (
              <svg viewBox="0 0 20 20" className="h-5 w-5" fill="none" aria-hidden="true">
                <path d="M3 6h14M3 10h14M3 14h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            )}
          </button>
        </div>
      </header>

      {/* Mobile menu — dark panel */}
      <div
        className={`fixed inset-0 z-40 bg-ink px-6 pb-10 pt-24 text-white transition-opacity duration-300 md:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden={!open}
      >
        <nav className="flex flex-col gap-2" aria-label="Mobile">
          {navLinks.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              tabIndex={open ? 0 : -1}
              style={{ transitionDelay: open ? `${i * 40}ms` : "0ms" }}
              className={`border-b border-white/10 py-4 font-display text-3xl transition-all duration-300 ${
                open ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/contact"
          tabIndex={open ? 0 : -1}
          className="btn-arrow mt-8 inline-flex items-center gap-2 rounded-pill bg-accent px-6 py-3 text-sm font-semibold text-white"
        >
          Start a conversation <ArrowIcon />
        </Link>
        <p className="mt-10 font-mono text-[11px] uppercase tracking-[0.22em] text-white/40">
          Global software &amp; fintech
        </p>
      </div>
    </>
  );
}
