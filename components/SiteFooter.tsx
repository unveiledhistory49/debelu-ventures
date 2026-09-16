import Link from "next/link";
import { ArrowIcon, Wordmark } from "./SiteNav";
import EmailLink from "./EmailLink";

const columns = [
  {
    title: "Industries",
    links: ["Financial Services", "Healthcare", "Legal", "Technology", "AI & Automation", "Enterprise"],
    href: "/industries",
  },
  {
    title: "Capabilities",
    links: ["Product Engineering", "Financial Technology", "AI & Automation", "Digital Infrastructure", "Product Design"],
    href: "/capabilities",
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/company" },
      { label: "Work", href: "/work" },
      { label: "Contact", href: "/contact" },
    ],
    href: "/company",
  },
];

export default function SiteFooter() {
  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto max-w-shell px-5 py-14 md:px-10 md:py-20">
        <div className="grid gap-12 md:grid-cols-[1.2fr_2fr]">
          <div>
            <Wordmark dark />
            <p className="mt-4 max-w-xs text-[15px] leading-relaxed text-white/60">
              Software infrastructure for ambitious businesses.
            </p>
            <Link
              href="/contact"
              className="btn-arrow mt-8 inline-flex items-center gap-2 rounded-pill bg-accent px-5 py-2.5 text-sm font-semibold text-white transition-colors duration-300 hover:bg-accent-deep"
            >
              Start a conversation <ArrowIcon />
            </Link>
            <p className="mt-4 text-sm text-white/50">
              Prefer email?{" "}
              <EmailLink className="font-medium text-white/80 transition-colors hover:text-white" />
            </p>
            <div className="mt-8 flex items-center gap-5 text-white/50">
              <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" aria-label="Debelu Ventures on LinkedIn" className="transition-colors hover:text-white">
                <svg viewBox="0 0 16 16" className="h-4 w-4" fill="currentColor" aria-hidden="true"><path d="M3.5 2.2a1.3 1.3 0 1 1 0 2.6 1.3 1.3 0 0 1 0-2.6ZM2.4 6h2.2v7.6H2.4V6Zm4 0h2.1v1h.1c.3-.6 1-1.2 2.1-1.2 2.2 0 2.7 1.5 2.7 3.4v4.4h-2.2V9.9c0-.9 0-2-1.2-2s-1.4.9-1.4 1.9v3.8H6.4V6Z"/></svg>
              </a>
              <a href="https://x.com" target="_blank" rel="noreferrer" aria-label="Debelu Ventures on X" className="transition-colors hover:text-white">
                <svg viewBox="0 0 16 16" className="h-4 w-4" fill="currentColor" aria-hidden="true"><path d="M9.3 7 13.5 2h-1L8.9 6 6 2H2.5l4.4 6.3L2.5 14H3.5l3.9-4.4 3.1 4.4H14L9.3 7Zm-1.4 1.5-.4-.6L4 3h1.5l2.8 4 .4.6 3.7 5.2h-1.5l-3-4.3Z"/></svg>
              </a>
              <a href="https://www.youtube.com" target="_blank" rel="noreferrer" aria-label="Debelu Ventures on YouTube" className="transition-colors hover:text-white">
                <svg viewBox="0 0 16 16" className="h-4 w-4" fill="currentColor" aria-hidden="true"><path d="M15 5.4s-.1-1-.5-1.4c-.5-.5-1-.5-1.2-.6C11.6 3.2 8 3.2 8 3.2s-3.6 0-5.3.2c-.2.1-.7.1-1.2.6C1.1 4.4 1 5.4 1 5.4S.9 6.6.9 7.8v1.1c0 1.1.1 2.3.1 2.3s.1 1 .5 1.4c.5.5 1.1.5 1.4.6 1 .1 5.1.2 5.1.2s3.6 0 5.3-.3c.2-.1.7-.1 1.2-.6.4-.4.5-1.4.5-1.4s.1-1.2.1-2.3V7.8c0-1.2-.1-2.4-.1-2.4ZM6.4 10.3V6.1l4.2 2.1-4.2 2.1Z"/></svg>
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {columns.map((col) => (
              <div key={col.title}>
                <h3 className="font-mono text-[11px] uppercase tracking-[0.22em] text-white/40">{col.title}</h3>
                <ul className="mt-4 space-y-2.5">
                  {col.links.map((link) =>
                    typeof link === "string" ? (
                      <li key={link}>
                        <Link href={col.href} className="text-sm text-white/70 transition-colors hover:text-white">
                          {link}
                        </Link>
                      </li>
                    ) : (
                      <li key={link.label}>
                        <Link href={link.href} className="text-sm text-white/70 transition-colors hover:text-white">
                          {link.label}
                        </Link>
                      </li>
                    )
                  )}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-6 text-[13px] text-white/40 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Debelu Ventures. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/company" className="transition-colors hover:text-white">Privacy</Link>
            <Link href="/company" className="transition-colors hover:text-white">Terms</Link>
            <Link href="/company" className="transition-colors hover:text-white">Imprint</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
