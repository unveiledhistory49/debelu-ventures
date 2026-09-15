import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowIcon } from "@/components/SiteNav";
import Reveal from "@/components/Reveal";
import { caseStudies } from "@/content/site";

export function generateStaticParams() {
  return caseStudies.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const study = caseStudies.find((s) => s.slug === params.slug);
  return { title: study ? `${study.name} — ${study.sector}` : "Case study" };
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const study = caseStudies.find((s) => s.slug === params.slug);
  if (!study) notFound();

  const next = caseStudies[(caseStudies.indexOf(study) + 1) % caseStudies.length];

  return (
    <>
      {/* Header */}
      <section className="bg-ink pb-14 pt-32 text-white md:pb-20 md:pt-44">
        <div className="mx-auto max-w-shell px-5 md:px-10">
          <Reveal>
            <p className="eyebrow text-white/40">
              Case study — {study.index} / 04 · {study.sector}
            </p>
            <h1 className="mt-4 font-display text-6xl tracking-tight md:text-8xl">{study.name}</h1>
            <p className="mt-4 max-w-xl text-lg text-white/65 md:text-xl">{study.tagline}</p>
          </Reveal>
          <Reveal delay={120}>
            <dl className="mt-10 grid grid-cols-1 gap-6 border-t border-white/10 pt-8 sm:grid-cols-3">
              {study.stats.map((stat) => (
                <div key={stat.label}>
                  <dd className="font-display text-3xl md:text-4xl">{stat.value}</dd>
                  <dd className="mt-1 text-sm text-white/55">{stat.label}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      {/* Hero image */}
      <section className="bg-ink pb-16 md:pb-24" aria-label={`${study.name} product interface`}>
        <div className="mx-auto max-w-shell px-5 md:px-10">
          <Reveal>
            <img
              src={study.desktopImage}
              alt={study.imageAlt}
              className="w-full rounded-card border border-white/10 object-cover object-top shadow-pop"
            />
          </Reveal>
        </div>
      </section>

      {/* Story */}
      <section className="bg-canvas" aria-label={`${study.name} story`}>
        <div className="mx-auto max-w-shell px-5 py-16 md:px-10 md:py-24">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
            <Reveal>
              <div className="lg:sticky lg:top-24">
                <p className="eyebrow text-faint">The story</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {study.capabilities.map((cap) => (
                    <span key={cap} className="rounded-pill border border-ink/15 px-3 py-1.5 text-xs font-medium text-ink/70">
                      {cap}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
            <div className="space-y-12">
              {[
                ["The problem", study.problem],
                ["The system", study.system],
                ["The result", study.result],
              ].map(([title, body], i) => (
                <Reveal key={title} delay={i * 60}>
                  <h2 className="font-display text-3xl tracking-tight text-ink md:text-4xl">{title}</h2>
                  <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted md:text-lg">{body}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mobile moment */}
      {study.mobileImage && (
        <section className="border-t border-line bg-white" aria-label={`${study.name} on mobile`}>
          <div className="mx-auto grid max-w-shell items-center gap-10 px-5 py-16 md:px-10 md:py-24 lg:grid-cols-2">
            <Reveal>
              <h2 className="font-display text-3xl tracking-tight text-ink md:text-4xl">The experience, everywhere.</h2>
              <p className="mt-4 max-w-md text-base leading-relaxed text-muted">
                {study.slug === "atlas"
                  ? "Finance doesn't stop at the desk. Atlas on mobile carries balances, approvals, and activity — with the same ledger underneath."
                  : "Care happens on foot. Meridian on mobile gives clinicians the patient record, schedule, and follow-ups wherever they are."}
              </p>
            </Reveal>
            <Reveal delay={100}>
              <img
                src={study.mobileImage}
                alt={`${study.name} mobile app interface`}
                loading="lazy"
                className="mx-auto w-full max-w-sm rounded-card border border-line object-cover shadow-card"
              />
            </Reveal>
          </div>
        </section>
      )}

      {/* Next */}
      <section className="bg-ink text-white" aria-label="Next case study">
        <div className="mx-auto max-w-shell px-5 py-16 md:px-10 md:py-24">
          <Reveal>
            <p className="eyebrow text-white/40">Next — {next.index} / 04</p>
            <Link href={`/work/${next.slug}`} className="btn-arrow group mt-4 inline-flex items-center gap-4">
              <span className="font-display text-5xl tracking-tight transition-colors group-hover:text-accent md:text-7xl">
                {next.name}
              </span>
              <ArrowIcon className="h-8 w-8 text-accent" />
            </Link>
            <p className="mt-3 text-white/55">{next.tagline}</p>
          </Reveal>
          <Reveal>
            <Link href="/contact" className="btn-arrow mt-12 inline-flex items-center gap-2 rounded-pill bg-accent px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-deep">
              Start your project <ArrowIcon />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
