# Dyuti Parruck — Executive Portfolio

Luxury personal-brand site for Dyuti Parruck ("Mr. Golden Visa"), CEO & Partner of Decisive Zone.
Next.js (App Router) + TypeScript + Tailwind CSS v4 + Framer Motion.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build
npm run lint    # eslint
```

## What's here

- `src/lib/data/` — the entire content layer (profile, expertise, career history, public
  appearances, media coverage, social channels, source citations). Every fact on the site traces
  back to a source in `src/lib/data/sources.ts`. This is a static, typed stand-in for the
  Supabase-backed CMS described in `SCRATCHPAD.md` — swap the imports for Supabase queries there
  without touching the pages.
- `src/components/` — shared UI: `Navbar`, `Footer`, `Reveal` (scroll-triggered motion), `Counter`
  (count-up stats), `Timeline`, `Monogram` (an intentional placeholder treatment standing in for
  commissioned photography — not a stock photo pretending to be a real person), `AppearanceCard`,
  `MediaCard`.
- `src/app/` — routes: `/`, `/about`, `/expertise`, `/career-journey`, `/public-figure` (+
  `/public-figure/[slug]`), `/media-coverage`, `/insights`, `/contact`, plus `sitemap.ts`,
  `robots.ts`, and `not-found.tsx`.

See `SCRATCHPAD.md` for the phase-by-phase build status, what's left before this can ship for
real (photography, a Supabase project, admin CMS), and the open editorial decisions only Dyuti's
team can make.
