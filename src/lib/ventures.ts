export type Venture = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  category: string;
  categoryColor: string;
  status: "Live" | "In Development" | "Coming Soon";
  accentColor: string;
  href: string;
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
    accentColor: "#A0522D",
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
    accentColor: "#8B6F47",
    href: "#",
    tags: ["Test Automation", "QA", "CI/CD", "SaaS"],
  },
  {
    id: "rupxa",
    name: "Rupxa",
    tagline: "Your money, clearly mapped.",
    description:
      "Personal and business finance app. Expense tracking, P2P debts with interest compounding, rental hub, live sessions, savings goals, and business accounting — all in one clean interface.",
    category: "Fintech",
    categoryColor: "text-clear bg-clear/10",
    status: "In Development",
    accentColor: "#5C7A5C",
    href: "#",
    tags: ["TanStack", "Supabase", "Finance", "Personal Finance"],
  },
  {
    id: "midnxt",
    name: "Midnxt",
    tagline: "Wear what you are.",
    description:
      "A clothing brand built for people who move between worlds — tech and street, minimal and bold. Midnxt is identity in fabric form.",
    category: "Fashion",
    categoryColor: "text-signal/80 bg-signal/5",
    status: "Live",
    accentColor: "#1F1A17",
    href: "https://midnxt.com",
    tags: ["Clothing", "Streetwear", "Brand", "Shopify"],
  },
];
