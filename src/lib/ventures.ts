export type Venture = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  category: string;
  categoryColor: string;
  status: "Live" | "In Development" | "Coming Soon";
  accentColor: string;
  href: string; // external site when live
  tags: string[];
};

export const VENTURES: Venture[] = [
  {
    id: "vapt",
    name: "Konvexa VAPT",
    tagline: "Know your attack surface before someone else does.",
    description:
      "An AI-powered web vulnerability assessment and penetration testing platform. Automated scanning, OWASP coverage, AI-written remediation, and client-ready reports — end to end.",
    category: "Security",
    categoryColor: "text-breach bg-breach/10",
    status: "In Development",
    accentColor: "#FF7A18",
    href: "#",
    tags: ["OWASP ZAP", "AI Analysis", "VAPT", "SaaS"],
  },
  {
    id: "qa",
    name: "KonvexaQA",
    tagline: "Test everything. Ship with confidence.",
    description:
      "A QA automation platform that handles the full testing lifecycle — from writing test cases to running them across environments. Less manual testing, more reliable releases.",
    category: "Dev Tools",
    categoryColor: "text-scan bg-scan/10",
    status: "In Development",
    accentColor: "#4F8CFF",
    href: "#",
    tags: ["Test Automation", "QA", "CI/CD", "SaaS"],
  },
  {
    id: "expense",
    name: "Konvexa Expense Tracker",
    tagline: "Your money, clearly mapped.",
    description:
      "A smart expense tracker built with more than budgets in mind. Designed to give individuals and teams a clear, actionable picture of where money goes.",
    category: "Fintech",
    categoryColor: "text-clear bg-clear/10",
    status: "In Development",
    accentColor: "#22C55E",
    href: "#",
    tags: ["Finance", "Expense Tracking", "Personal Finance"],
  },
  {
    id: "midnxt",
    name: "Midnxt",
    tagline: "Wear what you are.",
    description:
      "A clothing brand built for people who move between worlds — tech and street, minimal and bold. Midnxt is identity in fabric form.",
    category: "Fashion",
    categoryColor: "text-signal bg-signal/5",
    status: "Coming Soon",
    accentColor: "#FFFFFF",
    href: "#",
    tags: ["Clothing", "Streetwear", "Brand"],
  },
];
