import type { Metadata } from "next";
import Link from "next/link";
import { ArrowIcon } from "@/components/SiteNav";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = { title: "Company" };

const principles = [
  ["Engineering discipline", "Tested, secure, documented systems — not demos. We build software that survives contact with production."],
  ["Product thinking", "Every feature traces back to a business problem. If it doesn't move the metric, it doesn't ship."],
  ["Design restraint", "Institutional, editorial interfaces. We remove before we add, and we never decorate to impress."],
  ["Long-term partnerships", "We evolve products as businesses change. Most of our work is chapter two, not chapter one."],
  ["Industry expertise", "Finance, healthcare, legal, technology — we learn the domain before we touch the code."],
  ["Responsible technology", "AI with human oversight, data with governance, security from the first commit."],
];

export default function CompanyPage() {
  return (
    <>
      <section className="bg-canvas pb-12 pt-32 md:pb-16 md:pt-44">
        <div className="mx-auto max-w-shell px-5 md:px-10">
          <Reveal>
            <p className="eyebrow text-faint">About</p>
            <h1 className="mt-4 max-w-4xl font-display text-5xl leading-[1.02] tracking-tight text-ink md:text-7xl">
              Complex problems deserve better software.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
              We&apos;re a team of builders, engineers and designers with deep expertise in
              finance, healthcare, legal, technology and AI. We partner with ambitious
              organizations to turn complex challenges into scalable, intelligent solutions.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <dl className="mt-12 grid max-w-2xl grid-cols-3 gap-6 border-t border-line pt-8">
              {[["6", "Industries"], ["50+", "Projects delivered"], ["12+", "Countries"]].map(([v, l]) => (
                <div key={l}>
                  <dd className="font-display text-3xl text-ink md:text-4xl">{v}</dd>
                  <dd className="mt-1 text-[13px] text-muted">{l}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      <section className="bg-canvas pb-16 md:pb-24" aria-label="About imagery">
        <div className="mx-auto grid max-w-shell gap-6 px-5 md:grid-cols-2 md:px-10">
          <Reveal>
            <img src="/images/atrium-interior.png" alt="Modern office atrium with glass walkways" loading="lazy" className="h-72 w-full rounded-card object-cover md:h-96" />
          </Reveal>
          <Reveal delay={100}>
            <img src="/images/tower-exterior.png" alt="Glass corporate tower at dusk" loading="lazy" className="h-72 w-full rounded-card object-cover md:h-96" />
          </Reveal>
        </div>
      </section>

      <section className="border-t border-line bg-white" aria-labelledby="principles">
        <div className="mx-auto max-w-shell px-5 py-16 md:px-10 md:py-24">
          <Reveal>
            <h2 id="principles" className="font-display text-4xl tracking-tight text-ink md:text-5xl">
              What we believe.
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-x-10 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
            {principles.map(([title, body], i) => (
              <Reveal key={title} delay={(i % 3) * 60}>
                <div className="border-t-2 border-ink pt-5">
                  <h3 className="text-lg font-semibold text-ink">{title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-muted">{body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink text-white" aria-label="Join us call to action">
        <div className="mx-auto max-w-shell px-5 py-16 md:px-10 md:py-24">
          <Reveal>
            <h2 className="max-w-2xl font-display text-4xl leading-tight tracking-tight md:text-5xl">
              A global partner in digital transformation.
            </h2>
            <Link href="/contact" className="btn-arrow mt-8 inline-flex items-center gap-2 rounded-pill bg-accent px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-deep">
              Our story starts with you <ArrowIcon />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
