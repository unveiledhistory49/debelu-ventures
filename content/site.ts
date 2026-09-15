export type Industry = {
  slug: string;
  index: string;
  name: string;
  tagline: string;
  capabilities: string[];
  description: string;
};

export const industries: Industry[] = [
  {
    slug: "financial-services",
    index: "01",
    name: "Financial Services",
    tagline: "Digital banking · Payments · Financial operations · Risk systems · Investment platforms",
    capabilities: ["Digital banking", "Payments", "Financial operations", "Risk systems", "Investment platforms"],
    description:
      "We build the transaction rails, reconciliation engines, and reporting layers that let financial businesses move money accurately at scale — from payment initiation to settled, explainable business data.",
  },
  {
    slug: "healthcare",
    index: "02",
    name: "Healthcare",
    tagline: "Patient platforms · Clinical workflows · Health data · Practice management",
    capabilities: ["Patient platforms", "Clinical workflows", "Health data", "Practice management"],
    description:
      "We design clinical and patient systems around the way care actually happens — connecting fragmented records, scheduling, and follow-up into one coherent operational picture.",
  },
  {
    slug: "legal",
    index: "03",
    name: "Legal",
    tagline: "Case management · Document workflows · Legal intelligence · Client portals",
    capabilities: ["Case management", "Document workflows", "Legal intelligence", "Client portals"],
    description:
      "We turn document-heavy legal work into structured, searchable, intelligent workflows — from matter management to AI-assisted review with human oversight.",
  },
  {
    slug: "technology",
    index: "04",
    name: "Technology",
    tagline: "SaaS platforms · Internal systems · Developer infrastructure · APIs",
    capabilities: ["SaaS platforms", "Internal systems", "Developer infrastructure", "APIs"],
    description:
      "We help technology companies ship the platforms their customers depend on — multi-tenant SaaS, internal tooling, and the APIs and infrastructure underneath them.",
  },
  {
    slug: "ai-automation",
    index: "05",
    name: "AI & Automation",
    tagline: "Intelligent workflows · Document intelligence · AI agents · Business automation",
    capabilities: ["Intelligent workflows", "Document intelligence", "AI agents", "Business automation"],
    description:
      "We embed AI where it earns its place: extracting obligations from contracts, classifying documents, drafting actions for human review — always with an audit trail.",
  },
  {
    slug: "enterprise",
    index: "06",
    name: "Enterprise",
    tagline: "Operations platforms · Systems integration · Data modernization · Governance",
    capabilities: ["Operations platforms", "Systems integration", "Data modernization", "Governance"],
    description:
      "We connect distributed teams and legacy systems into modern operations platforms — unifying data, enforcing governance, and replacing spreadsheet chaos with real systems.",
  },
];

export type CapabilityGroup = {
  name: string;
  items: string[];
};

export const capabilityGroups: CapabilityGroup[] = [
  {
    name: "Product Engineering",
    items: ["Web applications", "Mobile applications", "SaaS platforms", "Enterprise systems", "APIs"],
  },
  {
    name: "Financial Technology",
    items: ["Payment systems", "Financial platforms", "Transaction infrastructure", "Financial dashboards", "Reconciliation systems"],
  },
  {
    name: "AI & Automation",
    items: ["AI-powered workflows", "Intelligent document processing", "Agents", "Data extraction", "Business automation"],
  },
  {
    name: "Digital Infrastructure",
    items: ["Cloud systems", "Integrations", "Data platforms", "Security architecture", "System modernization"],
  },
  {
    name: "Product Design",
    items: ["UX strategy", "UI design", "Design systems", "Prototyping", "Product engineering"],
  },
];

export type CaseStudy = {
  slug: string;
  index: string;
  name: string;
  sector: string;
  tagline: string;
  stats: { value: string; label: string }[];
  challenge: string;
  solution: string;
  capabilities: string[];
  problem: string;
  system: string;
  result: string;
  desktopImage: string;
  mobileImage?: string;
  imageAlt: string;
  dark?: boolean;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "atlas",
    index: "01",
    name: "Atlas",
    sector: "Financial infrastructure",
    tagline: "Financial operations, without the operational friction.",
    stats: [
      { value: "$18.4M", label: "processed monthly" },
      { value: "42%", label: "faster reconciliation" },
      { value: "3.2M", label: "transactions settled" },
    ],
    challenge: "Fragmented financial operations across multiple systems.",
    solution: "Unified financial operations platform.",
    capabilities: ["Payments", "Reporting", "Reconciliation", "Analytics"],
    problem:
      "A growing services business ran payments through one provider, invoicing through another, and reconciliation through spreadsheets. Month-end took eleven days, nobody trusted the numbers, and every new entity multiplied the chaos.",
    system:
      "Atlas ingests transactions from every source into a single ledger, reconciles them against bank feeds automatically, and surfaces exceptions — not spreadsheets — for human review. Payments, reporting, reconciliation, and analytics share one data model.",
    result:
      "Month-end close fell from eleven days to three. Reconciliation runs continuously instead of quarterly, and finance finally operates from numbers the whole company can trust.",
    desktopImage: "/images/atlas-desktop.png",
    mobileImage: "/images/atlas-mobile.png",
    imageAlt: "Atlas financial operations dashboard with balance chart and transaction list",
    dark: true,
  },
  {
    slug: "meridian",
    index: "02",
    name: "Meridian",
    sector: "Healthcare",
    tagline: "Better systems. Healthier outcomes.",
    stats: [
      { value: "68%", label: "fewer no-shows" },
      { value: "31k", label: "patient records unified" },
      { value: "4.9", label: "clinician satisfaction" },
    ],
    challenge: "Disconnected patient data and inefficient clinical workflows.",
    solution: "A unified platform for patient and clinical operations.",
    capabilities: ["Patient platforms", "Clinical workflows", "Health data", "Practice management"],
    problem:
      "A multi-site practice kept patient records across three systems, scheduling in a fourth, and follow-ups in clinicians' heads. Patients fell through the cracks; staff re-entered the same data three times.",
    system:
      "Meridian unifies records, scheduling, visits, and follow-up into one clinical workspace. Appointments, vitals, and care plans draw from the same patient record — on desktop for staff, on mobile for clinicians on the move.",
    result:
      "No-shows fell by more than two-thirds through automated follow-up. Clinicians get their documentation time back, and every site finally sees the same patient.",
    desktopImage: "/images/meridian-desktop.png",
    mobileImage: "/images/meridian-mobile.png",
    imageAlt: "Meridian clinical operations dashboard with patient overview and appointments",
  },
  {
    slug: "counsel",
    index: "03",
    name: "Counsel",
    sector: "Legal",
    tagline: "Legal work, minus the document archaeology.",
    stats: [
      { value: "12hrs", label: "saved per matter" },
      { value: "94%", label: "clause recall" },
      { value: "6x", label: "faster review cycles" },
    ],
    challenge: "Review cycles buried in unstructured documents.",
    solution: "A legal workflow and document intelligence platform.",
    capabilities: ["Case management", "Document workflows", "Legal intelligence", "Client portals"],
    problem:
      "A corporate legal team reviewed hundreds of contracts per quarter by hand. Risky clauses hid in amendments, institutional knowledge lived in senior lawyers' inboxes, and clients had no visibility into matter progress.",
    system:
      "Counsel extracts obligations, dates, and risk flags from every document on ingest, links them to matters on a shared timeline, and routes anything ambiguous to a lawyer — with the reasoning attached. Clients follow progress through a dedicated portal.",
    result:
      "Routine review cycles run six times faster with higher recall on risky clauses. Lawyers spend their hours on judgment, not archaeology.",
    desktopImage: "/images/counsel-board.png",
    imageAlt: "Counsel legal workflow interface with document review and matter timeline",
    dark: true,
  },
  {
    slug: "vector",
    index: "04",
    name: "Vector",
    sector: "AI & Automation",
    tagline: "Enterprise automation with a human in the loop.",
    stats: [
      { value: "38k", label: "workflows executed daily" },
      { value: "99.2%", label: "extraction accuracy" },
      { value: "5min", label: "median review-to-action" },
    ],
    challenge: "Manual operations that couldn't scale with the business.",
    solution: "An enterprise AI workflow platform.",
    capabilities: ["Intelligent workflows", "Document intelligence", "AI agents", "Business automation"],
    problem:
      "An operations team processed thousands of documents a month — invoices, contracts, compliance forms — entirely by hand. Hiring scaled linearly with volume, errors compounded, and nobody could say where any document stood.",
    system:
      "Vector models each operation as a pipeline: ingest, AI extraction, classification, business rules, human review, system action. Every step is observable, every AI decision carries a confidence score, and low-confidence items wait for a human instead of failing silently.",
    result:
      "The team handles triple the volume at the same headcount. Median time from document arrival to system action is under five minutes — with a full audit trail.",
    desktopImage: "/images/vector-console.png",
    imageAlt: "Vector AI workflow console with automation pipeline graph and run metrics",
    dark: true,
  },
];

export const processSteps = [
  {
    index: "01",
    name: "Understand",
    description: "We identify the business problem, constraints, and users before a single screen is drawn.",
  },
  {
    index: "02",
    name: "Design",
    description: "We turn complex requirements into clear product experiences and validated prototypes.",
  },
  {
    index: "03",
    name: "Build",
    description: "Engineering teams translate the system into production software — tested, secure, documented.",
  },
  {
    index: "04",
    name: "Evolve",
    description: "We continue improving the product as the business changes, measuring what matters.",
  },
];

export const navLinks = [
  { href: "/work", label: "Work" },
  { href: "/capabilities", label: "Capabilities" },
  { href: "/industries", label: "Industries" },
  { href: "/company", label: "Company" },
];

export const projectTypes = [
  "New product",
  "Modernize an existing one",
  "Automate a workflow",
  "Build financial software",
  "Explore an AI solution",
  "Something else",
];
