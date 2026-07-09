import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: {
    default: "Konvexa — Innovating. Securing. Building.",
    template: "%s · Konvexa",
  },
  description:
    "Konvexa is a multi-venture brand building products across security, QA, fintech, and fashion. One brand. Many things.",
  keywords: ["Konvexa", "KonvexaQA", "Konvexa VAPT", "Midnxt", "tech brand", "Hyderabad"],
  authors: [{ name: "Konvexa" }],
  creator: "Konvexa",
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Konvexa",
    title: "Konvexa — Innovating. Securing. Building.",
    description: "One brand. Many things. Building across security, QA, fintech, and fashion.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Konvexa — Innovating. Securing. Building.",
    description: "One brand. Many things.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans antialiased">
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
