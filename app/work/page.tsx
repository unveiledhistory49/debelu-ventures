import type { Metadata } from "next";
import Link from "next/link";
import { ArrowIcon } from "@/components/SiteNav";
import Reveal from "@/components/Reveal";
import { caseStudies } from "@/content/site";

export const metadata: Metadata = { title: "Work" };

export default function WorkPage() {
  return (
    <>
      <section className="bg-ink pb-16 pt-32 text-white md:pb-24 md:pt-44">
        <div className="mx-auto max-w-shell px-5 md:px-10">
          <Reveal>
            <p className="eyebrow text-white/40">Selected work — 01 / 04</p>
            <h1 className="mt-4 max-w-3xl font-display text-5xl leading-[1.02] tracking-tight md:text-7xl">
              Work that carries weight.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/60 md:text-lg">
              Representative engagements across finance, healthcare, legal, and AI.
              Each one shipped to production and still running.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-ink pb-20 text-white md:pb-32" aria-label="Case studies">
        <div className="mx-auto max-w-shell space-y-6 px-5 md:px-10">
          {caseStudies.map((study, i) => (
            <Reveal key={study.slug} delay={(i % 2) * 80}>
              <Link
                href={`/work/${study.slug}`}
                className="lift group grid overflow-hidden rounded-card border border-white/10 bg-graphite md:grid-cols-2"
              >
                <div className="p-8 md:p-12">
                  <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-white/40">
                    {study.sector} — {study.index} / 04
                  </p>
                  <h2 className="mt-4 font-display text-4xl tracking-tight md:text-5xl">{study.name}</h2>
                  <p className="mt-3 text-[15px] text-white/65">{study.tagline}</p>
                  <div className="mt-8 grid grid-cols-3 gap-4 border-t border-white/10 pt-6">
                    {study.stats.map((stat) => (
                      <div key={stat.label}>
                        <p className="font-display text-xl md:text-2xl">{stat.value}</p>
                        <p className="mt-1 text-xs text-white/50">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                  <span className="btn-arrow mt-8 inline-flex items-center gap-2 text-sm font-semibold text-accent">
                    View case study <ArrowIcon />
                  </span>
                </div>
                <div className="relative min-h-[280px] md:min-h-[440px]">
                  <img
                    src={study.desktopImage}
                    alt={study.imageAlt}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover object-top"
                  />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
