import Link from "next/link";
import { ArrowIcon } from "@/components/SiteNav";
import Reveal from "@/components/Reveal";
import IndustryExplorer from "@/components/IndustryExplorer";
import FintechDiagram, { AIWorkflowDiagram } from "@/components/Diagrams";
import { capabilityGroups, caseStudies, processSteps } from "@/content/site";

function Eyebrow({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return <p className={`eyebrow ${dark ? "text-white/40" : "text-faint"}`}>{children}</p>;
}

export default function HomePage() {
  return (
    <>
      {/* 1. HERO */}
      <section className="relative overflow-hidden bg-ink text-white" aria-label="Introduction">
        <div className="absolute inset-0" aria-hidden="true">
          <img
            src="/images/hero-globe.png"
            alt=""
            className="h-full w-full object-cover object-right opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/70 to-ink/10" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/60" />
        </div>
        <div className="relative mx-auto max-w-shell px-5 pb-16 pt-32 md:px-10 md:pb-24 md:pt-44">
          <Reveal>
            <Eyebrow dark>Global software &amp; fintech</Eyebrow>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-6 max-w-3xl font-display text-[44px] font-medium leading-[1.02] tracking-tight md:text-[84px]">
              Software for businesses that refuse to operate normally.
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/70 md:text-lg">
              Debelu Ventures designs and builds software, financial technology, intelligent
              systems, and digital infrastructure for organizations operating across complex industries.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="btn-arrow inline-flex items-center gap-2 rounded-pill bg-accent px-6 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:bg-accent-deep"
              >
                Start a conversation <ArrowIcon />
              </Link>
              <Link
                href="/capabilities"
                className="btn-arrow inline-flex items-center gap-2 px-2 py-3 text-sm font-semibold text-white/85 transition-colors hover:text-white"
              >
                Explore capabilities
                <svg viewBox="0 0 16 16" className="h-4 w-4" fill="none" aria-hidden="true">
                  <path d="M8 2.5v10M4.5 9 8 12.5 11.5 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
          </Reveal>
          <Reveal delay={320}>
            <dl className="mt-16 grid max-w-2xl grid-cols-3 gap-6 border-t border-white/15 pt-8 md:mt-24">
              {[
                ["6", "Industries"],
                ["50+", "Projects delivered"],
                ["12+", "Countries"],
              ].map(([value, label]) => (
                <div key={label}>
                  <dt className="sr-only">{label}</dt>
                  <dd className="font-display text-3xl md:text-4xl">{value}</dd>
                  <dd className="mt-1 text-[13px] text-white/55">{label}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      {/* 2. POSITIONING STRIP */}
      <section className="border-b border-line bg-canvas" aria-label="What we do">
        <div className="mx-auto max-w-shell px-5 py-8 md:px-10">
          <Reveal>
            <p className="flex flex-wrap gap-x-8 gap-y-2 font-mono text-xs uppercase tracking-[0.22em] text-muted">
              <span>Software</span>
              <span className="text-faint">·</span>
              <span>Fintech</span>
              <span className="text-faint">·</span>
              <span>AI</span>
              <span className="text-faint">·</span>
              <span>Infrastructure</span>
            </p>
          </Reveal>
        </div>
      </section>

      {/* 3. WHAT WE BUILD */}
      <section className="bg-canvas" aria-labelledby="what-we-build">
        <div className="mx-auto max-w-shell px-5 py-20 md:px-10 md:py-32">
          <Reveal>
            <Eyebrow>Capabilities</Eyebrow>
            <h2 id="what-we-build" className="mt-4 max-w-2xl font-display text-4xl leading-[1.05] tracking-tight text-ink md:text-6xl">
              Built for what&apos;s next.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted md:text-lg">
              We combine deep technical expertise with industry knowledge to build secure,
              scalable and intelligent systems.
            </p>
          </Reveal>
          <div className="mt-14 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-5">
            {capabilityGroups.map((group, i) => (
              <Reveal key={group.name} delay={i * 60}>
                <h3 className="border-t-2 border-ink pt-4 text-[15px] font-semibold text-ink">{group.name}</h3>
                <ul className="mt-4 space-y-2">
                  {group.items.map((item) => (
                    <li key={item} className="text-sm leading-relaxed text-muted">
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <Link href="/capabilities" className="btn-arrow mt-12 inline-flex items-center gap-2 text-sm font-semibold text-accent">
              Our approach <ArrowIcon />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* 4. FEATURED WORK */}
      <section className="bg-ink text-white" aria-labelledby="featured-work">
        <div className="mx-auto max-w-shell px-5 py-20 md:px-10 md:py-32">
          <Reveal>
            <Eyebrow dark>Our work</Eyebrow>
            <h2 id="featured-work" className="mt-4 max-w-2xl font-display text-4xl leading-[1.05] tracking-tight md:text-6xl">
              Products that perform in the real world.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/60 md:text-lg">
              We build high-quality software, financial infrastructure and intelligent systems
              that solve complex problems and create lasting value.
            </p>
          </Reveal>
          <div className="mt-14 space-y-6">
            {caseStudies.slice(0, 2).map((study, i) => (
              <Reveal key={study.slug} delay={i * 80}>
                <Link
                  href={`/work/${study.slug}`}
                  className="lift group grid overflow-hidden rounded-card border border-white/10 bg-graphite md:grid-cols-2"
                >
                  <div className="p-8 md:p-12">
                    <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-white/40">
                      {study.sector} — {study.index} / 04
                    </p>
                    <h3 className="mt-4 font-display text-4xl tracking-tight md:text-5xl">{study.name}</h3>
                    <p className="mt-3 text-[15px] text-white/65">{study.tagline}</p>
                    <dl className="mt-8 space-y-5">
                      <div>
                        <dt className="font-mono text-[11px] uppercase tracking-[0.18em] text-white/40">Challenge</dt>
                        <dd className="mt-1 text-sm text-white/80">{study.challenge}</dd>
                      </div>
                      <div>
                        <dt className="font-mono text-[11px] uppercase tracking-[0.18em] text-white/40">Solution</dt>
                        <dd className="mt-1 text-sm text-white/80">{study.solution}</dd>
                      </div>
                    </dl>
                    <span className="btn-arrow mt-8 inline-flex items-center gap-2 text-sm font-semibold text-accent">
                      View full case study <ArrowIcon />
                    </span>
                  </div>
                  <div className="relative min-h-[280px] md:min-h-[420px]">
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
          <Reveal>
            <Link href="/work" className="btn-arrow mt-10 inline-flex items-center gap-2 text-sm font-semibold text-accent">
              View all case studies <ArrowIcon />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* 5. FINTECH */}
      <section className="bg-ink text-white" aria-labelledby="fintech">
        <div className="mx-auto max-w-shell border-t border-white/10 px-5 py-20 md:px-10 md:py-32">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
            <div>
              <Reveal>
                <Eyebrow dark>Financial technology</Eyebrow>
                <h2 id="fintech" className="mt-4 font-display text-4xl leading-[1.05] tracking-tight md:text-5xl">
                  Financial systems, engineered for scale.
                </h2>
                <p className="mt-5 text-base leading-relaxed text-white/60">
                  Every transaction enters once, flows through payments, reconciliation and
                  analytics, and lands as business data you can trust. This is the architecture
                  behind every financial system we ship.
                </p>
              </Reveal>
              <Reveal delay={120}>
                <div className="mt-8 grid grid-cols-3 gap-6 border-t border-white/10 pt-6">
                  {[["8.4M", "daily volume"], ["99.98%", "reconciliation"], ["<120ms", "authorization"]].map(([v, l]) => (
                    <div key={l}>
                      <p className="font-display text-2xl text-white md:text-3xl">{v}</p>
                      <p className="mt-1 text-xs text-white/50">{l}</p>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
            <Reveal delay={100}>
              <FintechDiagram />
            </Reveal>
          </div>
        </div>
      </section>

      {/* 6. INDUSTRIES */}
      <section className="bg-canvas" aria-labelledby="industries">
        <div className="mx-auto max-w-shell px-5 py-20 md:px-10 md:py-32">
          <Reveal>
            <Eyebrow>Industries</Eyebrow>
            <h2 id="industries" className="mt-4 max-w-xl font-display text-4xl leading-[1.05] tracking-tight text-ink md:text-6xl">
              Different industries. Same mission.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted">
              We build tailored solutions for the world&apos;s most complex industries. Select an
              industry to explore how we help organizations operate, grow and innovate.
            </p>
          </Reveal>
          <div className="mt-12">
            <IndustryExplorer />
          </div>
        </div>
      </section>

      {/* 7. AI WORKFLOW */}
      <section className="border-y border-line bg-white" aria-labelledby="ai-workflows">
        <div className="mx-auto grid max-w-shell gap-12 px-5 py-20 md:px-10 md:py-32 lg:grid-cols-2 lg:gap-20">
          <div>
            <Reveal>
              <Eyebrow>AI &amp; automation</Eyebrow>
              <h2 id="ai-workflows" className="mt-4 font-display text-4xl leading-[1.05] tracking-tight text-ink md:text-5xl">
                AI that shows its work.
              </h2>
              <p className="mt-5 max-w-md text-base leading-relaxed text-muted">
                No black boxes. Every document moves through extraction, classification and
                business rules — then waits for a human before anything irreversible happens.
              </p>
            </Reveal>
            <Reveal delay={100}>
              <div className="mt-8 rounded-card border border-line bg-canvas p-6">
                <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-faint">Live pattern</p>
                <p className="mt-3 text-[15px] leading-relaxed text-ink">
                  Upload contract → AI extracts obligations → flags risks → creates tasks → updates CRM.
                </p>
              </div>
            </Reveal>
          </div>
          <Reveal delay={120}>
            <AIWorkflowDiagram />
          </Reveal>
        </div>
      </section>

      {/* 8. HOW WE WORK */}
      <section className="bg-canvas" aria-labelledby="how-we-work">
        <div className="mx-auto max-w-shell px-5 py-20 md:px-10 md:py-32">
          <Reveal>
            <Eyebrow>How we work</Eyebrow>
            <h2 id="how-we-work" className="mt-4 max-w-2xl font-display text-4xl leading-[1.05] tracking-tight text-ink md:text-6xl">
              From problem to production.
            </h2>
          </Reveal>
          <ol className="mt-14 grid gap-px overflow-hidden rounded-card border border-line bg-line md:grid-cols-4">
            {processSteps.map((step, i) => (
              <Reveal key={step.index} delay={i * 70} className="bg-canvas">
                <li className="h-full p-8">
                  <p className="font-mono text-xs text-accent">{step.index}</p>
                  <h3 className="mt-4 font-display text-2xl text-ink">{step.name}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{step.description}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* 9. GLOBAL */}
      <section className="relative overflow-hidden bg-ink text-white" aria-labelledby="global">
        <div className="absolute inset-0" aria-hidden="true">
          <img src="/images/global-network.png" alt="" loading="lazy" className="h-full w-full object-cover opacity-50" />
          <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink/60 to-ink" />
        </div>
        <div className="relative mx-auto max-w-shell px-5 py-20 md:px-10 md:py-32">
          <Reveal>
            <Eyebrow dark>Global presence</Eyebrow>
            <h2 id="global" className="mt-4 max-w-2xl font-display text-4xl leading-[1.05] tracking-tight md:text-6xl">
              Built for organizations without borders.
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <div className="mt-10 grid max-w-3xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {["Global delivery", "Distributed engineering", "Cross-border products", "Multi-region systems"].map((item) => (
                <p key={item} className="border-t border-white/15 pt-4 text-[15px] text-white/75">{item}</p>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* 10. CONTACT CTA */}
      <section className="relative overflow-hidden bg-ink text-white" aria-labelledby="contact-cta">
        <div className="absolute inset-0" aria-hidden="true">
          <img src="/images/tower-exterior.png" alt="" loading="lazy" className="h-full w-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/80 to-ink/30" />
        </div>
        <div className="relative mx-auto max-w-shell px-5 py-20 md:px-10 md:py-32">
          <Reveal>
            <h2 id="contact-cta" className="max-w-2xl font-display text-4xl leading-[1.05] tracking-tight md:text-6xl">
              The right software for a more ambitious future.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/65 md:text-lg">
              Let&apos;s talk about your goals. We&apos;ll help you find the right solution — or build it together.
            </p>
            <Link
              href="/contact"
              className="btn-arrow mt-9 inline-flex items-center gap-2 rounded-pill bg-accent px-7 py-3.5 text-sm font-semibold text-white transition-colors duration-300 hover:bg-accent-deep"
            >
              Start a conversation <ArrowIcon />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
