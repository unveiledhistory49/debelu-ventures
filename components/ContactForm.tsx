"use client";

import { useState } from "react";
import { projectTypes } from "@/content/site";

type Status = "idle" | "sending" | "done" | "error";

export default function ContactForm() {
  const [types, setTypes] = useState<string[]>([]);
  const [details, setDetails] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  function toggle(type: string) {
    setTypes((prev) => (prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]));
  }

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ types, details, email }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error ?? "Something went wrong.");
      setStatus("done");
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  if (status === "done") {
    return (
      <div className="rounded-card border border-line bg-white p-8 md:p-12" role="status">
        <span aria-hidden="true" className="flex h-12 w-12 items-center justify-center rounded-full bg-positive/10">
          <svg viewBox="0 0 24 24" className="h-6 w-6 text-positive" fill="none" aria-hidden="true">
            <path d="M5 12.5 10 17.5 19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
        <h2 className="mt-6 font-display text-3xl tracking-tight text-ink md:text-4xl">Thank you.</h2>
        <p className="mt-3 max-w-md text-base leading-relaxed text-muted">
          We&apos;ve received your project brief. We&apos;ll review the requirements and get back to you.
        </p>
      </div>
    );
  }

  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  return (
    <form onSubmit={submit} className="rounded-card border border-line bg-white p-8 md:p-12" noValidate>
      <fieldset>
        <legend className="font-display text-2xl tracking-tight text-ink">What are you trying to build?</legend>
        <div className="mt-6 flex flex-wrap gap-3" role="group" aria-label="Project type">
          {projectTypes.map((type) => {
            const selected = types.includes(type);
            return (
              <button
                key={type}
                type="button"
                onClick={() => toggle(type)}
                aria-pressed={selected}
                className={`min-h-[44px] rounded-pill border px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
                  selected
                    ? "border-ink bg-ink text-white"
                    : "border-ink/20 text-ink/70 hover:border-ink hover:text-ink"
                }`}
              >
                {type}
              </button>
            );
          })}
        </div>
      </fieldset>

      <div className="mt-8">
        <label htmlFor="details" className="text-sm font-semibold text-ink">
          Tell us about it.
        </label>
        <textarea
          id="details"
          value={details}
          onChange={(e) => setDetails(e.target.value)}
          rows={5}
          minLength={20}
          required
          placeholder="The problem, the users, the timeline — anything that helps us understand."
          className="mt-2 w-full rounded-card border border-ink/20 bg-canvas p-4 text-[15px] text-ink placeholder:text-faint focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30"
        />
      </div>

      <div className="mt-6">
        <label htmlFor="email" className="text-sm font-semibold text-ink">
          Your email
        </label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          autoComplete="email"
          placeholder="you@company.com"
          className="mt-2 w-full rounded-card border border-ink/20 bg-canvas p-4 text-[15px] text-ink placeholder:text-faint focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30"
        />
      </div>

      {status === "error" && (
        <p role="alert" className="mt-4 rounded-card border border-negative/30 bg-negative/5 p-3 text-sm text-negative">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending" || types.length === 0 || details.trim().length < 20 || !emailValid}
        className="mt-8 inline-flex min-h-[48px] items-center gap-2 rounded-pill bg-accent px-7 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-accent-deep disabled:cursor-not-allowed disabled:opacity-40"
      >
        {status === "sending" ? (
          <>
            <span className="t-shimmer" aria-hidden="true">Sending…</span>
            <span className="sr-only">Sending your brief</span>
          </>
        ) : (
          <>
            Continue
            <svg viewBox="0 0 16 16" fill="none" className="h-4 w-4" aria-hidden="true">
              <path d="M2.5 8h10M9 4.5 12.5 8 9 11.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </>
        )}
      </button>
    </form>
  );
}
