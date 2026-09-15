import type { Metadata } from "next";
import Link from "next/link";
import { ArrowIcon } from "@/components/SiteNav";
import Reveal from "@/components/Reveal";
import { capabilityGroups, processSteps } from "@/content/site";

export const metadata: Metadata = { title: "Capabilities" };

export default function CapabilitiesPage() {
  return (
    <>
      <section className="bg-canvas pb-14 pt-32 md:pb-20 md:pt-44">
        <div className="mx-auto max-w-shell px-5 md:px-10">
          <Reveal>
            <p className="eyebrow text-faint">Capabilities</p>
            <h1 className="mt-4 max-w-3xl font-display text-5xl leading-[1.02] tracking-tight text-ink md:text-7xl">
              Built for what&apos;s next.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted md:text-lg">
              End-to-end capabilities across product, finance, AI and infrastructure —
              designed to help you move faster, operate smarter and scale sustainably.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-canvas pb-20 md:pb-28" aria-label="Capability groups">
        <div className="mx-auto max-w-shell px-5 md:px-10">
          <div className="overflow-hidden rounded-card border border-line bg-white">
            {capabilityGroups.map((group, gi) => (
              <Reveal key={group.name} delay={gi * 40}>
                <div className={`grid gap-6 p-8 md:grid-cols-[1fr_2fr] md:p-12 ${gi > 0 ? "border-t border-line" : ""}`}>
                  <div>
                    <p className="font-mono text-xs text-accent">0{gi + 1}</p>
                    <h2 className="mt-3 font-display text-3xl tracking-tight text-ink md:text-4xl">{group.name}</h2>
                  </div>
                  <ul className="grid gap-x-8 gap-y-4 sm:grid-cols-2">
                    {group.items.map((item) => (
                      <li key={item} className="border-t border-line pt-4 text-[15px] font-medium text-ink">
                        {item}
                        <span className="mt-1 block text-sm font-normal text-muted">
                          {descriptions[group.name]?.[item] ?? ""}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <p className="mt-8 max-w-xl text-[15px] leading-relaxed text-muted">
              Technology should solve real business problems. Every engagement draws from
              several of these groups — rarely just one.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-line bg-white" aria-labelledby="approach">
        <div className="mx-auto max-w-shell px-5 py-16 md:px-10 md:py-24">
          <Reveal>
            <p className="eyebrow text-faint">Our approach</p>
            <h2 id="approach" className="mt-4 font-display text-4xl tracking-tight text-ink md:text-5xl">
              Understand → Design → Build → Evolve.
            </h2>
          </Reveal>
          <ol className="mt-10 grid gap-8 md:grid-cols-4">
            {processSteps.map((step, i) => (
              <Reveal key={step.index} delay={i * 60}>
                <li className="border-t-2 border-ink pt-5">
                  <p className="font-mono text-xs text-accent">{step.index}</p>
                  <h3 className="mt-2 font-display text-2xl text-ink">{step.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{step.description}</p>
                </li>
              </Reveal>
            ))}
          </ol>
          <Reveal>
            <Link href="/contact" className="btn-arrow mt-12 inline-flex items-center gap-2 rounded-pill bg-accent px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-deep">
              Start a conversation <ArrowIcon />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}

const descriptions: Record<string, Record<string, string>> = {
  "Product Engineering": {
    "Web applications": "Complex, data-dense web products built for daily use.",
    "Mobile applications": "Native-quality iOS and Android from one codebase.",
    "SaaS platforms": "Multi-tenant systems with billing, roles, and scale.",
    "Enterprise systems": "Internal platforms that replace spreadsheet chaos.",
    APIs: "Versioned, documented interfaces other teams enjoy.",
  },
  "Financial Technology": {
    "Payment systems": "Initiation, authorization, and settlement rails.",
    "Financial platforms": "Ledgers, wallets, and account infrastructure.",
    "Transaction infrastructure": "Idempotent pipelines that never lose money.",
    "Financial dashboards": "Real-time positions, flows, and exposure.",
    "Reconciliation systems": "Continuous matching with human-review exceptions.",
  },
  "AI & Automation": {
    "AI-powered workflows": "Pipelines with confidence scores and audit trails.",
    "Intelligent document processing": "Extraction from contracts, invoices, forms.",
    Agents: "Scoped agents that draft, never execute irreversibly.",
    "Data extraction": "Structured data from unstructured sources.",
    "Business automation": "Removing manual steps across the operation.",
  },
  "Digital Infrastructure": {
    "Cloud systems": "Multi-region architectures designed for failure.",
    Integrations: "Connecting legacy systems to modern platforms.",
    "Data platforms": "Warehouses, pipelines, and governed access.",
    "Security architecture": "Threat modeling, encryption, least privilege.",
    "System modernization": "Strangling monoliths without stopping the business.",
  },
  "Product Design": {
    "UX strategy": "Research, journeys, and information architecture.",
    "UI design": "Editorial, institutional interfaces — never generic.",
    "Design systems": "Tokens, components, and rules that scale.",
    Prototyping: "Clickable proof before expensive engineering.",
    "Product engineering": "Design and build in one tight loop.",
  },
};
