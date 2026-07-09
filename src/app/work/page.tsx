import type { Metadata } from "next";
import Link from "next/link";
import { VENTURES } from "@/lib/ventures";

export const metadata: Metadata = {
  title: "Work",
  description: "The ventures under the Konvexa brand — security, QA automation, fintech, and fashion.",
};

const STATUS_STYLE: Record<string, string> = {
  "Live": "text-clear bg-clear/10",
  "In Development": "text-scan bg-scan/10",
  "Coming Soon": "text-muted bg-border",
};

export default function WorkPage() {
  return (
    <>
      <section className="relative overflow-hidden pb-16 pt-20 md:pt-28">
        <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-0 h-[400px] w-[700px] -translate-x-1/2 rounded-full bg-scan/5 blur-[100px]" />
        <div className="container-page">
          <p className="eyebrow-accent mb-4">Ventures</p>
          <h1 className="font-display text-4xl font-semibold tracking-tight text-signal md:text-5xl">
            What we build
          </h1>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-muted">
            Four ventures. Security, QA, fintech, and fashion. Each one
            separate — same brand behind all of them.
          </p>
        </div>
      </section>

      <section className="pb-28">
        <div className="container-page space-y-5">
          {VENTURES.map((venture, i) => (
            <div
              key={venture.id}
              className="rounded-2xl border border-border bg-surface p-8 md:p-10"
            >
              <div className="grid gap-10 md:grid-cols-[1fr_1.8fr] md:items-start">
                <div>
                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className={`rounded-full px-2.5 py-0.5 font-mono text-[11px] ${venture.categoryColor}`}>
                      {venture.category}
                    </span>
                    <span className={`rounded-full px-2.5 py-0.5 font-mono text-[11px] ${STATUS_STYLE[venture.status]}`}>
                      {venture.status}
                    </span>
                  </div>

                  <h2 className="font-display text-2xl font-semibold tracking-tight text-signal md:text-3xl">
                    {venture.name}
                  </h2>
                  <p className="mt-2 text-sm text-muted">{venture.tagline}</p>

                  <div className="mt-8">
                    {venture.href !== "#" ? (
                      <a
                        href={venture.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary"
                      >
                        Visit site
                        <svg className="h-3.5 w-3.5" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                          <path d="M3 11L11 3M11 3H6M11 3V8" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </a>
                    ) : (
                      <Link href="/contact" className="btn-ghost text-sm">
                        Express interest
                      </Link>
                    )}
                  </div>
                </div>

                <div>
                  <p className="text-sm leading-relaxed text-muted">
                    {venture.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {venture.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md border border-border px-2.5 py-1 font-mono text-[11px] text-muted"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <p className="mt-8 font-mono text-[10px] text-border select-none">
                    {String(i + 1).padStart(2, "0")} / {String(VENTURES.length).padStart(2, "0")}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-border/50 py-16">
        <div className="container-page flex flex-col items-center text-center">
          <p className="text-sm text-muted">More ventures in the pipeline.</p>
          <Link href="/contact" className="btn-primary mt-5">
            Stay in the loop
          </Link>
        </div>
      </section>
    </>
  );
}
