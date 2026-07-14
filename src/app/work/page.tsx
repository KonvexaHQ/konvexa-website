import type { Metadata } from "next";
import Link from "next/link";
import { VENTURES } from "@/lib/ventures";
import { VentureCard } from "@/components/venture-card";

export const metadata: Metadata = {
  title: "Work",
  description: "The ventures under the Konvexa brand — security, QA automation, fintech, and fashion.",
};

export default function WorkPage() {
  return (
    <>
      <section className="relative overflow-hidden pb-16 pt-20 md:pt-28">
        <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-0 h-[400px] w-[700px] -translate-x-1/2 rounded-full bg-gold/5 blur-[100px]" />
        <div className="container-page">
          <p className="eyebrow-accent mb-4">Ventures</p>
          <h1 className="font-display text-4xl font-semibold tracking-tight text-signal md:text-5xl">
            What we build
          </h1>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-muted">
            Five ventures across security, QA, fintech, fashion, and developer
            tools. Each one separate — same brand, same standard.
          </p>
        </div>
      </section>

      <section className="pb-28">
        <div className="container-page">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {VENTURES.map((venture) => (
              <VentureCard key={venture.id} venture={venture} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border py-16">
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
