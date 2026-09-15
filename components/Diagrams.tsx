export default function FintechDiagram() {
  return (
    <div role="img" aria-label="Diagram: transactions flow into payments, reconciliation and analytics, then into business data">
      <svg viewBox="0 0 640 360" className="h-auto w-full" fill="none">
        {/* top node */}
        <g>
          <rect x="250" y="16" width="140" height="44" rx="8" stroke="#2B6BFF" strokeWidth="1.5" />
          <text x="320" y="34" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontFamily="JetBrains Mono, monospace" letterSpacing="2">TRANSACTIONS</text>
          <text x="320" y="50" textAnchor="middle" fill="#2B6BFF" fontSize="13" fontFamily="JetBrains Mono, monospace" className="t-pulse-node">8,421,920</text>
        </g>
        {/* connectors top -> middle */}
        <g stroke="#2B6BFF" strokeWidth="1.5" opacity="0.8">
          <path d="M320 60 C 320 100, 160 100, 140 140" className="t-dash-flow" />
          <path d="M320 60 C 320 100, 320 100, 320 140" className="t-dash-flow" />
          <path d="M320 60 C 320 100, 480 100, 500 140" className="t-dash-flow" />
        </g>
        {/* middle nodes */}
        {[
          { x: 60, label: "PAYMENTS" },
          { x: 250, label: "RECONCILIATION" },
          { x: 440, label: "ANALYTICS" },
        ].map((n) => (
          <g key={n.label}>
            <rect x={n.x} y="140" width="140" height="40" rx="8" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5" />
            <text x={n.x + 70} y="164" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontFamily="JetBrains Mono, monospace" letterSpacing="1.5">{n.label}</text>
          </g>
        ))}
        {/* connectors middle -> bottom */}
        <g stroke="#2B6BFF" strokeWidth="1.5" opacity="0.8">
          <path d="M130 180 C 130 220, 240 220, 300 260" className="t-dash-flow" />
          <path d="M320 180 L 320 260" className="t-dash-flow" />
          <path d="M510 180 C 510 220, 400 220, 340 260" className="t-dash-flow" />
        </g>
        {/* bottom node */}
        <g>
          <rect x="230" y="260" width="180" height="44" rx="8" stroke="#2B6BFF" strokeWidth="1.5" />
          <text x="320" y="287" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontFamily="JetBrains Mono, monospace" letterSpacing="2">BUSINESS DATA</text>
        </g>
        {/* nodes dots */}
        {[
          [320, 60], [140, 140], [320, 140], [500, 140], [320, 260],
        ].map(([cx, cy], i) => (
          <circle key={i} cx={cx} cy={cy} r="3.5" fill="#2B6BFF" className="t-pulse-node" style={{ animationDelay: `${i * 400}ms` }} />
        ))}
      </svg>
      <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {["Payments", "Financial operations", "Reporting", "Reconciliation", "Risk", "Data", "Embedded finance", "Analytics"].map((c) => (
          <div key={c} className="rounded-card border border-white/10 px-4 py-3 text-sm text-white/75">
            {c}
          </div>
        ))}
      </div>
    </div>
  );
}

export function AIWorkflowDiagram() {
  const steps = ["Document", "AI extraction", "Classification", "Business rules", "Human review", "System action"];
  return (
    <div role="img" aria-label="Diagram: document flows through AI extraction, classification, business rules, human review, to system action">
      <ol className="relative space-y-0">
        {steps.map((step, i) => (
          <li key={step} className="relative flex gap-5 pb-7 last:pb-0">
            {i < steps.length - 1 && (
              <span aria-hidden="true" className="absolute left-[15px] top-9 h-[calc(100%-2rem)] w-px bg-ink/15">
                <span className="t-dash-flow block h-full w-px bg-accent" style={{ background: "none", stroke: "#2B6BFF" }} />
              </span>
            )}
            <span
              aria-hidden="true"
              className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border font-mono text-[11px] ${
                i === 4 ? "border-accent bg-accent-soft text-accent-deep" : "border-ink/20 text-muted"
              }`}
            >
              {String(i + 1).padStart(2, "0")}
            </span>
            <div className="pt-1">
              <p className="text-[15px] font-semibold text-ink">{step}</p>
              {i === 0 && <p className="mt-1 text-sm text-muted">Upload contract →</p>}
              {i === 4 && <p className="mt-1 text-sm text-muted">Flags risks → creates tasks → updates CRM</p>}
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
