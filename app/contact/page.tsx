import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import EmailLink from "@/components/EmailLink";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <section className="bg-canvas pb-20 pt-32 md:pb-28 md:pt-44" aria-labelledby="contact-heading">
      <div className="mx-auto max-w-shell px-5 md:px-10">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
          <Reveal>
            <div className="lg:sticky lg:top-24">
              <p className="eyebrow text-faint">Contact</p>
              <h1 id="contact-heading" className="mt-4 font-display text-5xl leading-[1.02] tracking-tight text-ink md:text-6xl">
                Let&apos;s build something useful.
              </h1>
              <p className="mt-5 max-w-sm text-base leading-relaxed text-muted">
                Tell us what you&apos;re trying to build. We&apos;ll review the requirements
                and get back to you — no generic sales call, no obligation.
              </p>
              <dl className="mt-10 space-y-4 border-t border-line pt-8 text-sm">
                <div className="flex justify-between gap-6">
                  <dt className="text-muted">Response time</dt>
                  <dd className="font-medium text-ink">Within 2 business days</dd>
                </div>
                <div className="flex justify-between gap-6">
                  <dt className="text-muted">Engagements</dt>
                  <dd className="font-medium text-ink">Worldwide, remote-first</dd>
                </div>
                <div className="flex justify-between gap-6">
                  <dt className="text-muted">Prefer email</dt>
                  <dd className="font-medium text-ink">
                    <EmailLink className="text-accent transition-colors hover:text-accent-deep" />
                  </dd>
                </div>
              </dl>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
