# konvexa-website

The official brand hub for [Konvexa](https://konvexa.com).

Konvexa is a multi-venture brand building across security, QA automation, fintech, and fashion. This site is the parent brand page — each product has its own website.

**Stack:** Next.js 14 (App Router) · TypeScript · Tailwind CSS  
**Fonts:** Space Grotesk · Inter · JetBrains Mono

---

## Pages

| Route | Purpose |
|---|---|
| `/` | Home — hero, venture cards, brand statement, CTA |
| `/work` | Expanded venture listing with detail and status |
| `/about` | Brand story, values, vision |
| `/contact` | Contact form + email + socials |

---

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Adding or editing ventures

All venture data lives in one place:

```
src/lib/ventures.ts
```

Edit the `VENTURES` array to update names, descriptions, status, tags, or external links. Changes automatically reflect on both the home page cards and the `/work` page.

---

## Project structure

```
src/
├── app/
│   ├── layout.tsx        # Root layout, fonts, metadata
│   ├── globals.css       # Tailwind layers + base styles
│   ├── page.tsx          # Home
│   ├── not-found.tsx     # 404
│   ├── work/page.tsx     # Ventures detail
│   ├── about/page.tsx    # Brand story
│   └── contact/page.tsx  # Contact form
├── components/
│   ├── nav.tsx           # Sticky nav with mobile menu
│   ├── footer.tsx        # Footer
│   └── logo.tsx          # SVG K mark + lockup
└── lib/
    ├── utils.ts          # cn() helper
    └── ventures.ts       # Single source of truth for all ventures
```

---

## Deployment

### Vercel (recommended)
```bash
npx vercel
```

Push to the `konvexa-website` repository under the **KonvexaHQ** GitHub organisation and connect to Vercel for automatic deploys on every push to `main`.

---

## Design tokens

| Token | Value | Meaning |
|---|---|---|
| `void` | `#0B0B0F` | Page background |
| `signal` | `#FFFFFF` | Primary text |
| `scan` | `#4F8CFF` | Accent blue |
| `breach` | `#FF7A18` | Accent orange |
| `clear` | `#22C55E` | Success / resolved |
| `surface` | `#13131A` | Card backgrounds |
| `muted` | `#6B6B80` | Secondary text |
| `border` | `#1E1E28` | Borders and dividers |

---

## Contact form

Currently uses client-side state only. To make it functional, add an API route:

```
src/app/api/contact/route.ts
```

Recommended: [Resend](https://resend.com) for email delivery. Add `RESEND_API_KEY` to `.env.local`.
