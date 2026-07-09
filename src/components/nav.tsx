"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Logo } from "@/components/logo";
import { cn } from "@/lib/utils";

const LINKS = [
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const path = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-border/50 bg-void/80 backdrop-blur-xl">
      <div className="container-page flex h-16 items-center justify-between">
        <Link href="/" onClick={() => setOpen(false)}>
          <Logo />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm transition-colors",
                path === link.href ? "text-signal" : "text-muted hover:text-signal"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link href="/contact" className="btn-primary hidden px-5 py-2.5 text-sm md:inline-flex">
          Get in touch
        </Link>

        <button
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-border md:hidden"
        >
          <span className="relative block h-3 w-4">
            <span className={`absolute left-0 top-0 h-px w-4 bg-signal transition-transform ${open ? "translate-y-1.5 rotate-45" : ""}`} />
            <span className={`absolute left-0 top-1.5 h-px w-4 bg-signal transition-opacity ${open ? "opacity-0" : "opacity-100"}`} />
            <span className={`absolute left-0 top-3 h-px w-4 bg-signal transition-transform ${open ? "-translate-y-1.5 -rotate-45" : ""}`} />
          </span>
        </button>
      </div>

      {open && (
        <div className="border-t border-border/50 px-6 pb-6 md:hidden">
          <nav className="flex flex-col gap-4 pt-4">
            {LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-base text-muted hover:text-signal"
              >
                {link.label}
              </Link>
            ))}
            <Link href="/contact" onClick={() => setOpen(false)} className="btn-primary mt-2 justify-center">
              Get in touch
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
