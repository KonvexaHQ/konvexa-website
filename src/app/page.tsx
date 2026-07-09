import type { Metadata } from "next";
import Link from "next/link";
import { VENTURES } from "@/lib/ventures";

export const metadata: Metadata = {
  title: "Konvexa — Innovating. Securing. Building.",
  description:
    "Konvexa is a multi-venture brand building products across security, QA, fintech, and fashion. One brand. Many things.",
};

const STATUS_STYLE: Record<string, string> = {
  "Live": "text-clear bg-clear/10",
  "In Development": "text-scan bg-scan/10",
  "Coming Soon": "text-muted bg-border",
};

export default function HomePage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden py-28 md:py-40">
        {/* Background grid */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]"
        />
        {/* Glow */}
        <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-scan/5 blur-[120px]" />

        <div className="container-page relative">
          <p className="eyebrow-accent mb-8 animate-fade-in" style={{ animationDelay: "0ms" }}>
            Konvexa · Hyderabad, India
          </p>

          <h1
            className="font-display text-5xl font-semibold leading-[1.08] tracking-tight text-signal animate-fade-up md:text-6xl lg:text-7xl"
            style={{ animationDelay: "80ms" }}
          >
            Innovating.
            <br />
            <span className="text-muted">Securing.</span>
            <br />
            Building.
          </h1>

          <p
            className="mt-8 max-w-md text-base leading-relaxed text-muted animate-fade-up md:text-lg"
            style={{ animationDelay: "180ms" }}
          >
            One brand behind multiple ventures — software tools, security
            platforms, and a clothing label. Different industries, same standard.
          </p>

          <div className="mt-10 flex flex-wrap gap-3 animate-fade-up" style={{ animationDelay: "260ms" }}>
            <Link href="/work" className="btn-primary">
              See what we build
            </Link>
            <Link href="/contact" className="btn-ghost">
              Get in touch
            </Link>
          </div>
        </div>
      </section>

      {/* ── VENTURES ─────────────────────────────────────────────── */}
      <section className="border-t border-border/50 py-24 md:py-32">
        <div className="container-page">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="eyebrow mb-3">Ventures</p>
              <h2 className="font-display text-3xl font-semibold tracking-tight text-signal md:text-4xl">
                What we're building
              </h2>
            </div>
            <Link href="/work" className="hidden text-sm text-muted hover:text-signal transition-colors md:flex items-center gap-1.5">
              All ventures
              <svg className="h-3.5 w-3.5" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {VENTURES.map((venture) => (
              <div key={venture.id} className="venture-card group">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className={`rounded-full px-2.5 py-0.5 font-mono text-[11px] ${venture.categoryColor}`}>
                      {venture.category}
                    </span>
                    <span className={`rounded-full px-2.5 py-0.5 font-mono text-[11px] ${STATUS_STYLE[venture.status]}`}>
                      {venture.status}
                    </span>
                  </div>
                  {venture.href !== "#" && (
                    <a
                      href={venture.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Visit ${venture.name}`}
                      className="shrink-0 rounded-full border border-border p-2 text-muted transition-colors hover:border-signal/30 hover:text-signal"
                    >
                      <svg className="h-3.5 w-3.5" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                        <path d="M3 11L11 3M11 3H6M11 3V8" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </a>
                  )}
                </div>

                <h3 className="mt-5 font-display text-xl font-semibold text-signal">
                  {venture.name}
                </h3>
                <p className="mt-1 text-sm text-muted">{venture.tagline}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted/70">
                  {venture.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {venture.tags.map((tag) => (
                    <span key={tag} className="rounded-md border border-border px-2 py-0.5 font-mono text-[10px] text-muted">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <Link href="/work" className="mt-5 flex items-center gap-1.5 text-sm text-muted hover:text-signal transition-colors md:hidden">
            See all venture details
            <svg className="h-3.5 w-3.5" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </section>

      {/* ── BRAND STATEMENT ──────────────────────────────────────── */}
      <section className="border-t border-border/50 py-24 md:py-32">
        <div className="container-page grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <p className="eyebrow mb-4">The brand</p>
            <h2 className="font-display text-3xl font-semibold leading-snug tracking-tight text-signal md:text-4xl">
              One name.
              <br />
              Many industries.
            </h2>
          </div>
          <div className="space-y-5 text-sm leading-relaxed text-muted">
            <p>
              Konvexa is the single brand behind everything — security tools, QA
              automation, fintech products, and fashion. The industries are
              different. The standard isn't.
            </p>
            <p>
              Everything built under Konvexa shares the same obsession: make
              something real, make it well, and make it matter to the people who
              use it.
            </p>
            <Link href="/about" className="inline-flex items-center gap-1.5 text-signal hover:text-signal/80 transition-colors">
              About the brand
              <svg className="h-3.5 w-3.5" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────── */}
      <section className="border-t border-border/50 py-20">
        <div className="container-page flex flex-col items-center text-center">
          <p className="eyebrow mb-4">Let's talk</p>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-signal md:text-4xl">
            Follow the build.
          </h2>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
            The ventures are in motion. Get in touch to collaborate, invest,
            or just stay in the loop.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/contact" className="btn-primary">Get in touch</Link>
            <a
              href="https://instagram.com/konvexa_official"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
            >
              Follow on Instagram
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
