"use client";

import { useState } from "react";
import Link from "next/link";
import { industries } from "@/content/site";
import { ArrowIcon } from "./SiteNav";
import Reveal from "./Reveal";

export default function IndustryExplorer({ dark = false }: { dark?: boolean }) {
  const [active, setActive] = useState(industries[0]);

  return (
    <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
      <div role="tablist" aria-label="Industries">
        {industries.map((industry) => {
          const selected = industry.slug === active.slug;
          return (
            <button
              key={industry.slug}
              role="tab"
              aria-selected={selected}
              onClick={() => setActive(industry)}
              className={`group flex w-full items-baseline gap-5 border-b py-4 text-left transition-colors duration-300 ${
                dark ? "border-white/10" : "border-ink/10"
              }`}
            >
              <span
                className={`font-mono text-xs transition-colors ${
                  selected ? "text-accent" : dark ? "text-white/40" : "text-faint"
                }`}
              >
                {industry.index}
              </span>
              <span
                className={`flex-1 text-[15px] font-medium transition-all duration-300 ${
                  selected
                    ? dark
                      ? "translate-x-1 text-white"
                      : "translate-x-1 text-ink"
                    : dark
                      ? "text-white/55 group-hover:text-white"
                      : "text-muted group-hover:text-ink"
                }`}
              >
                {industry.name}
              </span>
              <span
                aria-hidden="true"
                className={`h-px flex-1 transition-all duration-300 ${
                  selected ? "bg-accent opacity-100" : "opacity-0"
                }`}
              />
            </button>
          );
        })}
      </div>

      <div key={active.slug} role="tabpanel" aria-label={active.name}>
        <p className={`eyebrow ${dark ? "text-white/40" : "text-faint"}`}>{active.name}</p>
        <p className={`mt-4 font-display text-2xl leading-snug md:text-[28px] ${dark ? "text-white" : "text-ink"}`}>
          {active.tagline.split("·")[0]}
          {active.tagline.includes("·") && (
            <span className={dark ? "text-white/50" : "text-muted"}>
              {" "}·{active.tagline.split("·").slice(1).join("·")}
            </span>
          )}
        </p>
        <p className={`mt-4 max-w-md text-[15px] leading-relaxed ${dark ? "text-white/60" : "text-muted"}`}>
          {active.description}
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          {active.capabilities.map((cap) => (
            <span
              key={cap}
              className={`rounded-pill border px-3 py-1.5 text-xs font-medium ${
                dark ? "border-white/15 text-white/70" : "border-ink/15 text-ink/70"
              }`}
            >
              {cap}
            </span>
          ))}
        </div>
        <Link
          href={`/industries/${active.slug}`}
          className="btn-arrow mt-8 inline-flex items-center gap-2 text-sm font-semibold text-accent"
        >
          Explore this industry <ArrowIcon />
        </Link>
      </div>
    </div>
  );
}

export function IndustriesTeaser() {
  return (
    <Reveal>
      <div className="flex items-end justify-between">
        <p className="eyebrow text-faint">Industries</p>
        <Link href="/industries" className="btn-arrow hidden items-center gap-2 text-sm font-semibold text-accent sm:inline-flex">
          All industries <ArrowIcon />
        </Link>
      </div>
      <h2 className="mt-4 max-w-xl font-display text-4xl leading-[1.05] tracking-tight text-ink md:text-6xl">
        Different industries. Same mission.
      </h2>
    </Reveal>
  );
}
