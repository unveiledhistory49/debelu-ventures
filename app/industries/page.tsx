import type { Metadata } from "next";
import Link from "next/link";
import { ArrowIcon } from "@/components/SiteNav";
import Reveal from "@/components/Reveal";
import IndustryExplorer from "@/components/IndustryExplorer";
import { industries } from "@/content/site";

export const metadata: Metadata = { title: "Industries" };

export default function IndustriesPage() {
  return (
    <>
      <section className="bg-canvas pb-12 pt-32 md:pb-16 md:pt-44">
        <div className="mx-auto max-w-shell px-5 md:px-10">
          <Reveal>
            <p className="eyebrow text-faint">01 — 06</p>
            <h1 className="mt-4 max-w-3xl font-display text-5xl leading-[1.02] tracking-tight text-ink md:text-7xl">
              Explore our industries
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted md:text-lg">
              We build technology for complex industries. Select an industry to see how we
              help organizations operate, grow and innovate.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-canvas pb-20 md:pb-28" aria-label="Industry explorer">
        <div className="mx-auto max-w-shell px-5 md:px-10">
          <IndustryExplorer />
        </div>
      </section>

      <section className="border-t border-line bg-white" aria-label="All industries">
        <div className="mx-auto max-w-shell px-5 py-16 md:px-10 md:py-24">
          <div className="grid gap-px overflow-hidden rounded-card border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry, i) => (
              <Reveal key={industry.slug} delay={(i % 3) * 60} className="bg-white">
                <Link href={`/industries/${industry.slug}`} className="lift group block h-full p-8">
                  <p className="font-mono text-xs text-accent">{industry.index}</p>
                  <h2 className="mt-3 font-display text-2xl text-ink">{industry.name}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{industry.tagline}</p>
                  <span className="btn-arrow mt-5 inline-flex items-center gap-2 text-sm font-semibold text-accent">
                    Explore <ArrowIcon />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
