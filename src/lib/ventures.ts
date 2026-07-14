export type VentureStatus = "Live" | "In Development" | "Coming Soon" | "Beta";

export type Venture = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  category: string;
  categoryLabel: string;
  status: VentureStatus;
  version: string;
  platform: string;
  launchYear: string;
  href: string;
  tags: string[];
  icon: string;
  cta: string;
};

export const VENTURES: Venture[] = [
  {
    id: "tools",
    name: "Konvexa Tools",
    tagline: "Professional tools designed for everyday work.",
    description:
      "Fast, private, and beautifully crafted online utilities that work directly in your browser. Image compression, PDF studio, document conversion, background removal — 8 tools, zero server uploads.",
    category: "devtools",
    categoryLabel: "Developer Tools",
    status: "Live",
    version: "v1.0",
    platform: "Web · Browser",
    launchYear: "2025",
    href: "#",
    tags: ["React", "TypeScript", "Browser APIs", "Offline First"],
    icon: "tools",
    cta: "Visit Website",
  },
  {
    id: "vapt",
    name: "Konvexa VAPT",
    tagline: "Know your attack surface before someone else does.",
    description:
      "An AI-powered web vulnerability assessment and penetration testing platform. Automated scanning, OWASP Top 10 coverage, AI-written remediation, and client-ready PDF reports — end to end.",
    category: "security",
    categoryLabel: "Cybersecurity",
    status: "In Development",
    version: "v1.0",
    platform: "Web · SaaS",
    launchYear: "2026",
    href: "#",
    tags: ["OWASP ZAP", "AI", "Security", "SaaS"],
    icon: "vapt",
    cta: "Coming Soon",
  },
  {
    id: "qa",
    name: "KonvexaQA",
    tagline: "Test everything. Ship with confidence.",
    description:
      "A QA automation platform that handles the full testing lifecycle — from writing test cases to running them across environments. Less manual testing, more reliable releases.",
    category: "software",
    categoryLabel: "Software",
    status: "In Development",
    version: "v1.0",
    platform: "Web · SaaS",
    launchYear: "2026",
    href: "#",
    tags: ["Automation", "CI/CD", "Testing", "SaaS"],
    icon: "qa",
    cta: "Coming Soon",
  },
  {
    id: "rupxa",
    name: "Rupxa",
    tagline: "Your money, clearly mapped.",
    description:
      "Personal and business finance app. Expense tracking, P2P debts with interest compounding, rental hub, live sessions, savings goals, and business accounting — all in one clean interface.",
    category: "finance",
    categoryLabel: "Finance",
    status: "In Development",
    version: "v1.0",
    platform: "Web · Mobile",
    launchYear: "2026",
    href: "#",
    tags: ["Finance", "Supabase", "TanStack", "Payments"],
    icon: "rupxa",
    cta: "Coming Soon",
  },
  {
    id: "midnxt",
    name: "Midnxt",
    tagline: "Wear what you are.",
    description:
      "A clothing brand built for people who move between worlds — tech and street, minimal and bold. Midnxt is identity in fabric form. Full custom platform in development.",
    category: "fashion",
    categoryLabel: "Fashion",
    status: "In Development",
    version: "v1.0",
    platform: "Web · Mobile",
    launchYear: "2026",
    href: "#",
    tags: ["Fashion", "Premium", "Streetwear", "Brand"],
    icon: "midnxt",
    cta: "Coming Soon",
  },
];

export const CATEGORIES = [
  { id: "all", label: "All" },
  { id: "software", label: "Software" },
  { id: "security", label: "Cybersecurity" },
  { id: "finance", label: "Finance" },
  { id: "fashion", label: "Fashion" },
  { id: "devtools", label: "Dev Tools" },
];

export const ECOSYSTEM = [
  { category: "Software", ventures: 1, status: "Active", future: "QA Platform, Dev Tools" },
  { category: "Cybersecurity", ventures: 1, status: "Building", future: "Cloud Scanner, Mobile Scanner" },
  { category: "Finance", ventures: 1, status: "Building", future: "Business Finance, Payments" },
  { category: "Fashion", ventures: 1, status: "Building", future: "Custom Platform" },
  { category: "Developer Tools", ventures: 1, status: "Active", future: "CLI, SDK, API" },
  { category: "AI", ventures: 0, status: "Planned", future: "AI Products, LLM Tools" },
];

export const ROADMAP = [
  { year: "2026", items: ["Midnxt (brand)", "Konvexa Tools (v1.0)", "Rupxa (v1.0 alpha)", "Konvexa brand hub"], done: true },
  { year: "2026", items: ["Konvexa VAPT (v1.0)", "KonvexaQA (v1.0)", "Rupxa (full launch)", "Midnxt (custom platform)"], done: false },
  { year: "Future", items: ["Developer Platform", "AI Products", "Enterprise Solutions", "Konvexa SDK / CLI"], done: false },
];
