"use client";

import { useState } from "react";
import Link from "next/link";
import { VENTURES, CATEGORIES, ECOSYSTEM, ROADMAP } from "@/lib/ventures";
import { VentureCard } from "../components/venture-card";

export default function HomePage() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filtered = activeFilter === "all"
    ? VENTURES
    : VENTURES.filter((v) => v.category === activeFilter);

  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden py-28 md:py-40">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(200,169,126,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(200,169,126,0.04)_1px,transparent_1px)] bg-[size:64px_64px]"
        />
        <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/5 blur-[120px]" />

        <div className="container-page relative">
          <p className="eyebrow-accent mb-8 animate-fade-in">
            Konvexa · Hyderabad, India
          </p>
          <h1 className="font-display text-5xl font-semibold leading-[1.08] tracking-tight text-signal animate-fade-up md:text-6xl lg:text-7xl" style={{ animationDelay: "80ms" }}>
            Innovating.
            <br />
            <span className="text-muted">Securing.</span>
            <br />
            Building.
          </h1>
          <p className="mt-8 max-w-md text-base leading-relaxed text-muted animate-fade-up md:text-lg" style={{ animationDelay: "160ms" }}>
            One brand behind multiple ventures — software tools, security
            platforms, finance apps, and a clothing label. Different industries,
            same standard.
          </p>
          <div className="mt-10 flex flex-wrap gap-3 animate-fade-up" style={{ animationDelay: "240ms" }}>
            <Link href="/work" className="btn-primary">See what we build</Link>
            <Link href="/contact" className="btn-ghost">Get in touch</Link>
          </div>
        </div>
      </section>

      {/* ── CURRENTLY BUILDING ───────────────────────────────── */}
      <section className="border-t border-border py-10">
        <div className="container-page">
          <div className="flex flex-wrap items-center gap-6">
            <p className="eyebrow shrink-0">Currently building</p>
            <div className="flex flex-wrap gap-3">
              {VENTURES.map((v) => (
                <span
                  key={v.id}
                  className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 font-mono text-[10px] transition-colors ${
                    v.status === "Live"
                      ? "border-clear/30 bg-clear/10 text-clear"
                      : v.status === "In Development"
                      ? "border-gold/30 bg-gold/10 text-scan"
                      : "border-border text-muted"
                  }`}
                >
                  <span className={`h-1.5 w-1.5 rounded-full ${
                    v.status === "Live" ? "bg-clear animate-pulse-dot" :
                    v.status === "In Development" ? "bg-gold" : "bg-muted/40"
                  }`} />
                  {v.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── VENTURES ─────────────────────────────────────────── */}
      <section className="border-t border-border py-24 md:py-32">
        <div className="container-page">
          <div className="flex flex-col gap-6 mb-12 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="eyebrow mb-3">Ventures</p>
              <h2 className="font-display text-3xl font-semibold tracking-tight text-signal md:text-4xl">
                What we&apos;re building
              </h2>
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-2" role="group" aria-label="Filter ventures by category">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveFilter(cat.id)}
                  className={activeFilter === cat.id ? "filter-btn-active" : "filter-btn"}
                  aria-pressed={activeFilter === cat.id}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((venture) => (
              <VentureCard key={venture.id} venture={venture} />
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="flex flex-col items-center py-20 text-center">
              <p className="text-sm text-muted">No ventures in this category yet.</p>
              <button onClick={() => setActiveFilter("all")} className="mt-4 text-sm text-scan hover:underline">
                View all
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ── ECOSYSTEM ────────────────────────────────────────── */}
      <section className="border-t border-border py-24 md:py-32 bg-surface">
        <div className="container-page">
          <p className="eyebrow mb-4 text-center">Ecosystem</p>
          <h2 className="mx-auto max-w-xl text-center font-display text-3xl font-semibold tracking-tight text-signal md:text-4xl">
            Konvexa Ecosystem
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-center text-sm leading-relaxed text-muted">
            Building products across multiple industries under one unified design
            philosophy.
          </p>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {ECOSYSTEM.map((eco) => (
              <div key={eco.category} className="ecosystem-card">
                <div className="flex items-start justify-between gap-4">
                  <p className="font-display text-sm font-semibold text-signal">
                    {eco.category}
                  </p>
                  <span className={`shrink-0 rounded-full px-2 py-0.5 font-mono text-[10px] ${
                    eco.status === "Active"
                      ? "bg-clear/10 text-clear border border-clear/20"
                      : eco.status === "Building"
                      ? "bg-gold/10 text-scan border border-gold/20"
                      : "bg-border text-muted border border-border"
                  }`}>
                    {eco.status}
                  </span>
                </div>
                <p className="mt-2 font-mono text-xs text-muted">
                  {eco.ventures} venture{eco.ventures !== 1 ? "s" : ""}
                </p>
                <p className="mt-3 text-xs leading-relaxed text-muted/70">
                  Coming: {eco.future}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ROADMAP ──────────────────────────────────────────── */}
      <section className="border-t border-border py-24 md:py-32">
        <div className="container-page">
          <p className="eyebrow mb-4 text-center">Roadmap</p>
          <h2 className="mx-auto max-w-xl text-center font-display text-3xl font-semibold tracking-tight text-signal md:text-4xl">
            Company roadmap
          </h2>
          <p className="mx-auto mt-4 max-w-md text-center text-sm leading-relaxed text-muted">
            Where Konvexa has been and where it is going.
          </p>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {ROADMAP.map((phase) => (
              <div
                key={phase.year}
                className={`rounded-2xl border p-7 ${
                  phase.done
                    ? "border-clear/20 bg-clear/5"
                    : phase.year === "Future"
                    ? "border-border bg-surface-raised"
                    : "border-gold/20 bg-gold/5"
                }`}
              >
                <div className="flex items-center justify-between mb-5">
                  <p className="font-display text-xl font-semibold text-signal">
                    {phase.year}
                  </p>
                  {phase.done && (
                    <span className="rounded-full bg-clear/10 border border-clear/20 px-2.5 py-0.5 font-mono text-[10px] text-clear">
                      Complete
                    </span>
                  )}
                  {!phase.done && phase.year !== "Future" && (
                    <span className="rounded-full bg-gold/10 border border-gold/20 px-2.5 py-0.5 font-mono text-[10px] text-scan">
                      In Progress
                    </span>
                  )}
                </div>
                <ul className="space-y-3">
                  {phase.items.map((item) => (
                    <li key={item} className="roadmap-item text-muted">
                      <svg
                        className={`mt-0.5 h-3.5 w-3.5 shrink-0 ${
                          phase.done ? "text-clear" : phase.year === "Future" ? "text-muted/40" : "text-gold"
                        }`}
                        viewBox="0 0 14 14"
                        fill="none"
                        aria-hidden="true"
                      >
                        {phase.done ? (
                          <path d="M2.5 7L5.5 10L11.5 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                        ) : phase.year === "Future" ? (
                          <circle cx="7" cy="7" r="5" stroke="currentColor" strokeWidth="1.2" strokeDasharray="2 2" />
                        ) : (
                          <path d="M7 2v5l3 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                        )}
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BRAND STATEMENT ──────────────────────────────────── */}
      <section className="border-t border-border py-24 md:py-32 bg-surface">
        <div className="container-page grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <p className="eyebrow mb-4">The brand</p>
            <h2 className="font-display text-3xl font-semibold leading-snug tracking-tight text-signal md:text-4xl">
              One name.<br />Many industries.
            </h2>
          </div>
          <div className="space-y-5 text-sm leading-relaxed text-muted">
            <p>
              Konvexa is the single brand behind everything — security tools, QA
              automation, fintech products, and fashion. The industries are
              different. The standard is not.
            </p>
            <p>
              Everything built under Konvexa shares the same obsession: make
              something real, make it well, and make it matter to the people who
              use it.
            </p>
            <Link href="/about" className="inline-flex items-center gap-1.5 text-signal hover:text-scan transition-colors text-sm font-medium">
              About the brand
              <svg className="h-3.5 w-3.5" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="border-t border-border py-20">
        <div className="container-page flex flex-col items-center text-center">
          <p className="eyebrow-accent mb-4">Follow the build</p>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-signal md:text-4xl">
            Konvexa is just getting started.
          </h2>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
            Products in motion, more in planning. Get in touch to collaborate,
            invest, or stay in the loop.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/contact" className="btn-primary">Get in touch</Link>
            <a href="https://instagram.com/konvexa_official" target="_blank" rel="noopener noreferrer" className="btn-ghost">
              Follow on Instagram
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
