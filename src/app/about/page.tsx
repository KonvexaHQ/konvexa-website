import type { Metadata } from "next";
import Link from "next/link";
import { VENTURES } from "@/lib/ventures";

export const metadata: Metadata = {
  title: "About",
  description: "The story behind Konvexa — a multi-venture brand built in Hyderabad.",
};

const VALUES = [
  {
    title: "Build things that work",
    body: "Not demos. Not prototypes left in a drawer. Real products that solve real problems and hold up when people actually use them.",
  },
  {
    title: "Cross industries without apology",
    body: "Security tools and clothing brands can share a name if the quality and intent behind them are the same. Konvexa does not pick one lane.",
  },
  {
    title: "Ship, then improve",
    body: "Perfect is the enemy of out. Everything under Konvexa is built to get into people's hands, then made better based on how they use it.",
  },
  {
    title: "Own the stack",
    body: "From code architecture to brand identity to product copy — Konvexa keeps control of the fundamentals rather than outsourcing the parts that matter.",
  },
];

const STATUS_STYLE: Record<string, string> = {
  "Live": "bg-clear/10 text-clear border border-clear/20",
  "In Development": "bg-gold/10 text-scan border border-gold/20",
  "Coming Soon": "bg-border text-muted border border-border",
  "Beta": "bg-scan/10 text-scan border border-scan/20",
};

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden pb-16 pt-20 md:pt-28">
        <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-0 h-[400px] w-[700px] -translate-x-1/2 rounded-full bg-gold/5 blur-[100px]" />
        <div className="container-page">
          <p className="eyebrow-accent mb-4">About</p>
          <h1 className="font-display text-4xl font-semibold tracking-tight text-signal md:text-5xl">
            One brand.<br />Many directions.
          </h1>
        </div>
      </section>

      <section className="pb-24">
        <div className="container-page grid gap-12 md:grid-cols-2 md:items-start">
          <div className="space-y-5 text-sm leading-relaxed text-muted">
            <p>
              Konvexa started as a name for a way of working — building things
              across boundaries, moving between disciplines without losing
              identity. It grew into a brand that holds multiple ventures
              together under a single standard.
            </p>
            <p>
              Based in Hyderabad, India, Konvexa is currently building five
              ventures: a web security platform, a QA automation tool, a smart
              finance app, a browser tools platform, and a clothing brand.
              Different markets, different users — same level of care in what
              gets shipped.
            </p>
            <p>
              The name itself comes from a shape — a curve that turns outward,
              convex, open. It describes the approach: expansive, not narrow.
              Building in multiple directions without losing coherence.
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-surface p-8">
            <p className="eyebrow mb-5">Ventures at a glance</p>
            <div className="space-y-4">
              {VENTURES.map((v) => (
                <div key={v.id} className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-medium text-signal">{v.name}</p>
                    <p className="mt-0.5 text-xs text-muted">{v.categoryLabel}</p>
                  </div>
                  <span className={`mt-0.5 shrink-0 rounded-full px-2 py-0.5 font-mono text-[10px] ${STATUS_STYLE[v.status]}`}>
                    {v.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="curve-rule container-page" />

      <section className="py-24 md:py-32">
        <div className="container-page">
          <p className="eyebrow mb-4">What drives it</p>
          <h2 className="mb-14 font-display text-3xl font-semibold tracking-tight text-signal md:text-4xl">
            How Konvexa builds
          </h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {VALUES.map((v) => (
              <div key={v.title} className="rounded-2xl border border-border bg-surface p-7">
                <h3 className="font-display text-base font-semibold text-signal">{v.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border py-20">
        <div className="container-page flex flex-col items-center text-center">
          <h2 className="font-display text-2xl font-semibold tracking-tight text-signal">
            Want to collaborate, invest, or just follow along?
          </h2>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Link href="/contact" className="btn-primary">Get in touch</Link>
            <a href="https://github.com/KonvexaHQ" target="_blank" rel="noopener noreferrer" className="btn-ghost">GitHub</a>
          </div>
        </div>
      </section>
    </>
  );
}
