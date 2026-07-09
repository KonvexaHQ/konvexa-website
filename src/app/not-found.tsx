import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-[72vh] items-center">
      <div className="container-page flex flex-col items-center text-center">
        <p className="font-mono text-6xl font-medium text-border">404</p>
        <h1 className="mt-4 font-display text-2xl font-semibold text-signal">
          Nothing here
        </h1>
        <p className="mt-3 max-w-xs text-sm text-muted">
          This page does not exist or has moved. Head back and find what you were looking for.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href="/" className="btn-primary">Back to home</Link>
          <Link href="/contact" className="btn-ghost">Contact us</Link>
        </div>
      </div>
    </section>
  );
}
