import Link from "next/link";
import { Venture } from "@/lib/ventures";
import { VentureIcon } from "@/components/venture-icon";

function StatusBadge({ status }: { status: Venture["status"] }) {
  if (status === "Live") {
    return (
      <span className="status-live">
        <span className="h-1.5 w-1.5 rounded-full bg-clear animate-pulse-dot" />
        Live
      </span>
    );
  }
  if (status === "Beta") {
    return (
      <span className="inline-flex items-center gap-1.5 rounded-full border border-scan/30 bg-scan/10 px-2.5 py-0.5 font-mono text-[10px] text-scan">
        <span className="h-1.5 w-1.5 rounded-full bg-scan" />
        Beta
      </span>
    );
  }
  if (status === "In Development") {
    return (
      <span className="status-dev">
        <span className="h-1.5 w-1.5 rounded-full bg-gold" />
        In Development
      </span>
    );
  }
  return (
    <span className="status-soon">
      <span className="h-1.5 w-1.5 rounded-full bg-muted/50" />
      Coming Soon
    </span>
  );
}

type Props = { venture: Venture };

export function VentureCard({ venture }: Props) {
  return (
    <article className="venture-card">
      {/* Top meta row */}
      <div className="flex items-center justify-between gap-2 mb-5">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-border bg-void text-muted transition-colors group-hover:text-scan">
          <VentureIcon id={venture.id} size={18} />
        </div>
        <StatusBadge status={venture.status} />
      </div>

      {/* Name + tagline */}
      <h3 className="font-display text-base font-semibold text-signal leading-snug">
        {venture.name}
      </h3>
      <p className="mt-1 text-xs text-gold font-mono">{venture.tagline}</p>

      {/* Description — clamped to 3 lines */}
      <p className="mt-3 text-sm leading-relaxed text-muted line-clamp-3 flex-1">
        {venture.description}
      </p>

      {/* Metadata row */}
      <div className="mt-4 flex flex-wrap items-center gap-3 text-[10px] font-mono text-muted/70">
        <span className="flex items-center gap-1">
          <span className="text-border">◆</span>
          {venture.categoryLabel}
        </span>
        <span>·</span>
        <span>{venture.version}</span>
        <span>·</span>
        <span>{venture.platform}</span>
      </div>

      {/* Tech chips */}
      <div className="mt-3 flex flex-wrap gap-1.5">
        {venture.tags.map((tag) => (
          <span key={tag} className="tech-chip">{tag}</span>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-5 pt-4 border-t border-border">
        {venture.href !== "#" ? (
          <a
            href={venture.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-signal transition-all hover:gap-2.5 hover:text-scan"
          >
            {venture.cta}
            <svg className="h-3.5 w-3.5 transition-transform" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M3 11L11 3M11 3H6M11 3V8" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        ) : (
          <span className="inline-flex items-center gap-1.5 text-sm text-muted/60 cursor-default">
            <svg className="h-3.5 w-3.5" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <circle cx="7" cy="7" r="5.5" stroke="currentColor" strokeWidth="1.2" />
              <path d="M7 4.5V7l1.5 1.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
            </svg>
            {venture.cta}
          </span>
        )}
      </div>
    </article>
  );
}
