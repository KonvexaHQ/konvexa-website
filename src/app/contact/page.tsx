"use client";

import { useState } from "react";

const REASONS = [
  "Collaborate on a venture",
  "Invest or partner",
  "Early access to a product",
  "Press or media",
  "General enquiry",
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    reason: REASONS[0],
    message: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      <section className="relative overflow-hidden pb-16 pt-20 md:pt-28">
        <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-0 h-[400px] w-[700px] -translate-x-1/2 rounded-full bg-scan/5 blur-[100px]" />
        <div className="container-page">
          <p className="eyebrow-accent mb-4">Contact</p>
          <h1 className="font-display text-4xl font-semibold tracking-tight text-signal md:text-5xl">
            Get in touch
          </h1>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
            Collaboration, investment, early access, or just saying hello — we read everything.
          </p>
        </div>
      </section>

      <section className="pb-28">
        <div className="container-page grid gap-14 md:grid-cols-[1fr_1.8fr] md:items-start">
          <div className="space-y-8">
            <div>
              <p className="eyebrow mb-3">Email</p>
              <a href="mailto:hello.konvexa@gmail.com" className="font-mono text-sm text-signal hover:text-scan transition-colors">
                hello.konvexa@gmail.com
              </a>
            </div>
            <div>
              <p className="eyebrow mb-3">Social</p>
              <div className="flex flex-col gap-2.5">
                <a href="https://instagram.com/konvexa_official" target="_blank" rel="noopener noreferrer" className="text-sm text-muted hover:text-signal transition-colors">Instagram — @konvexa_official</a>
                <a href="https://linkedin.com/company/konvexa" target="_blank" rel="noopener noreferrer" className="text-sm text-muted hover:text-signal transition-colors">LinkedIn — Konvexa HQ</a>
                <a href="https://github.com/KonvexaHQ" target="_blank" rel="noopener noreferrer" className="text-sm text-muted hover:text-signal transition-colors">GitHub — KonvexaHQ</a>
              </div>
            </div>
            <div>
              <p className="eyebrow mb-3">Location</p>
              <p className="text-sm text-muted">Hyderabad, Telangana, India</p>
            </div>
          </div>

          {submitted ? (
            <div className="rounded-2xl border border-clear/20 bg-clear/5 p-12 text-center">
              <svg className="mx-auto mb-4 h-10 w-10 text-clear" viewBox="0 0 40 40" fill="none">
                <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="1.5" />
                <path d="M13 20.5L17.5 25L27 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <p className="font-display text-lg font-semibold text-signal">Message received</p>
              <p className="mt-2 text-sm text-muted">We will reply to {form.email} within 2 business days.</p>
            </div>
          ) : (
            <div className="rounded-2xl border border-border bg-surface p-8 space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-2 block font-mono text-xs text-muted">Your name</label>
                  <input id="name" name="name" type="text" required value={form.name} onChange={handleChange} placeholder="Arjun Sharma"
                    className="w-full rounded-xl border border-border bg-void px-4 py-3 text-sm text-signal placeholder:text-muted/30 focus:border-scan/60 focus:outline-none transition-colors" />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block font-mono text-xs text-muted">Email</label>
                  <input id="email" name="email" type="email" required value={form.email} onChange={handleChange} placeholder="you@company.com"
                    className="w-full rounded-xl border border-border bg-void px-4 py-3 text-sm text-signal placeholder:text-muted/30 focus:border-scan/60 focus:outline-none transition-colors" />
                </div>
              </div>
              <div>
                <label htmlFor="reason" className="mb-2 block font-mono text-xs text-muted">Reason</label>
                <select id="reason" name="reason" value={form.reason} onChange={handleChange}
                  className="w-full rounded-xl border border-border bg-void px-4 py-3 text-sm text-signal focus:border-scan/60 focus:outline-none transition-colors">
                  {REASONS.map((r) => <option key={r}>{r}</option>)}
                </select>
              </div>
              <div>
                <label htmlFor="message" className="mb-2 block font-mono text-xs text-muted">Message</label>
                <textarea id="message" name="message" required rows={5} value={form.message} onChange={handleChange} placeholder="What is on your mind?"
                  className="w-full resize-none rounded-xl border border-border bg-void px-4 py-3 text-sm text-signal placeholder:text-muted/30 focus:border-scan/60 focus:outline-none transition-colors" />
              </div>
              <button onClick={handleSubmit} disabled={!form.name || !form.email || !form.message}
                className="btn-primary w-full justify-center disabled:cursor-not-allowed disabled:opacity-40">
                Send message
              </button>
              <p className="text-center font-mono text-[11px] text-muted">We reply within 2 business days. No spam.</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
