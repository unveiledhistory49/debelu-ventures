import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowIcon } from "@/components/SiteNav";
import Reveal from "@/components/Reveal";
import { industries, caseStudies } from "@/content/site";

export function generateStaticParams() {
  return industries.map((i) => ({ slug: i.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const industry = industries.find((i) => i.slug === params.slug);
  return { title: industry ? `Industries — ${industry.name}` : "Industry" };
}

const relatedWork: Record<string, string[]> = {
  "financial-services": ["atlas"],
  healthcare: ["meridian"],
  legal: ["counsel"],
  technology: ["vector"],
  "ai-automation": ["vector", "counsel"],
  enterprise: ["atlas", "meridian"],
};

export default function IndustryPage({ params }: { params: { slug: string } }) {
  const industry = industries.find((i) => i.slug === params.slug);
  if (!industry) notFound();

  const related = (relatedWork[industry.slug] ?? [])
    .map((slug) => caseStudies.find((s) => s.slug === slug))
    .filter(Boolean);

  return (
    <>
      <section className="bg-canvas pb-12 pt-32 md:pb-16 md:pt-44">
        <div className="mx-auto max-w-shell px-5 md:px-10">
          <Reveal>
            <p className="eyebrow text-faint">
              Industries — {industry.index} / 06
            </p>
            <h1 className="mt-4 font-display text-5xl tracking-tight text-ink md:text-7xl">{industry.name}</h1>
            <p className="mt-5 max-w-2xl font-display text-xl leading-snug text-ink/80 md:text-2xl">{industry.tagline}</p>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted md:text-lg">{industry.description}</p>
          </Reveal>
          <Reveal delay={100}>
            <div className="mt-8 flex flex-wrap gap-2">
              {industry.capabilities.map((cap) => (
                <span key={cap} className="rounded-pill border border-ink/15 px-3 py-1.5 text-xs font-medium text-ink/70">
                  {cap}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-line bg-white" aria-label="Related work">
        <div className="mx-auto max-w-shell px-5 py-16 md:px-10 md:py-24">
          <Reveal>
            <h2 className="font-display text-3xl tracking-tight text-ink md:text-4xl">Related work</h2>
          </Reveal>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {related.map((study, i) => (
              <Reveal key={study!.slug} delay={i * 80}>
                <Link
                  href={`/work/${study!.slug}`}
                  className="lift group block overflow-hidden rounded-card border border-line"
                >
                  <img src={study!.desktopImage} alt={study!.imageAlt} loading="lazy" className="h-56 w-full object-cover object-top md:h-64" />
                  <div className="p-6 md:p-8">
                    <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-faint">{study!.sector}</p>
                    <h3 className="mt-2 font-display text-3xl text-ink">{study!.name}</h3>
                    <p className="mt-1 text-sm text-muted">{study!.tagline}</p>
                    <span className="btn-arrow mt-4 inline-flex items-center gap-2 text-sm font-semibold text-accent">
                      View case study <ArrowIcon />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <Link href="/contact" className="btn-arrow mt-12 inline-flex items-center gap-2 rounded-pill bg-accent px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-deep">
              Discuss your project <ArrowIcon />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
