import Link from "next/link";
import { Logo } from "@/components/logo";

export function Footer() {
  return (
    <footer className="border-t border-border/50">
      <div className="container-page flex flex-col gap-8 py-12 md:flex-row md:items-center md:justify-between">
        <div>
          <Logo />
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted">
            Innovating. Securing. Building.
          </p>
        </div>

        <div className="flex flex-wrap gap-8">
          <div>
            <p className="eyebrow mb-3">Pages</p>
            <div className="flex flex-col gap-2">
              {[
                { href: "/work", label: "Work" },
                { href: "/about", label: "About" },
                { href: "/contact", label: "Contact" },
              ].map((l) => (
                <Link key={l.href} href={l.href} className="text-sm text-muted hover:text-signal transition-colors">
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="eyebrow mb-3">Elsewhere</p>
            <div className="flex flex-col gap-2">
              {[
                { href: "https://github.com/KonvexaHQ", label: "GitHub" },
                { href: "https://instagram.com/konvexa_official", label: "Instagram" },
              ].map((l) => (
                <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer"
                  className="text-sm text-muted hover:text-signal transition-colors">
                  {l.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="eyebrow mb-3">Contact</p>
            <a href="mailto:hello.konvexa@gmail.com"
              className="text-sm text-muted hover:text-signal transition-colors">
              hello.konvexa@gmail.com
            </a>
          </div>
        </div>
      </div>

      <div className="container-page border-t border-border/50 py-5">
        <p className="text-xs text-muted">
          © {new Date().getFullYear()} Konvexa · Hyderabad, India
        </p>
      </div>
    </footer>
  );
}
