# Dyuti Parruck — Luxury Portfolio: Implementation Scratchpad

Working doc against `Dyuti_Parruck_Luxury_Portfolio_Implementation_Plan.pdf` and the revised,
fact-checked plan ("Beyond the Boardroom"). **Phases 1–3 are built** (Next.js frontend, live
locally, verified in-browser — see §6). Phases 4–6 (CMS, motion polish, production hardening)
are not yet started.

## 0. Verified vs. still-needed input

Everything content-wise on the site right now is sourced to a live public record (career
history, press, the Netflix credit) — see `src/lib/data/sources.ts`. What's left needing input
from Dyuti's team, not code:

- [ ] **Netflix appearance narrative** — confirmed as Netflix's "Desi Bling" (2026). Open
      decision: how much of the marriage/separation storyline the press covers to reflect on the
      appearance detail page (currently defaults to professional framing only).
- [ ] **Career Journey wording** — dates cross-checked against a public professional profile;
      confirm exact wording/spelling with Dyuti before publish.
- [ ] **Media Coverage logos** — currently text + outbound link only; add outlet logos once usage
      rights are confirmed per publication.
- [ ] **First 5 LinkedIn/Instagram posts** — Insights page ships as an honest empty state (real
      profile links + follower count) since no live sync exists on either platform; needs the
      admin panel (Phase 4) to seed real curated posts.
- [ ] **Photography/video** — hero portrait, Dubai skyline, appearance cover images are all
      placeholder monogram treatments (`Monogram` component) by design, not stock photos standing
      in for a real person. Swap for commissioned photography before launch.
- [ ] **Supabase project + custom domain** — no backend is wired up yet; the entire site is
      static/typed data in `src/lib/data/`. Needs real Supabase credentials + DNS before Phase 4/6.
- [ ] **Business contact email** — Contact page currently only links to verified LinkedIn/Instagram
      profiles; no email exists to publish yet.

## 1. Content entities (Supabase / Postgres)

- `profile` — singleton: name, headline, bio, portrait, social links
- `expertise` — title, description, icon, order
- `experience` — role, org, start/end date, description, order (Career Journey)
- `public_appearance` — title, category (tv/interview/event/panel/speaking), date, location,
  description, cover_image, gallery[], video_url, external_url, featured bool, published bool,
  slug (drives `/public-figure/[slug]`)
- `media_coverage` — publication, headline, excerpt, date, article_url, logo (optional), published
- `linkedin_post` — title/excerpt, image, date, post_url, featured bool, order
- `gallery_image` — appearance_id FK, image_url, caption, order
- `testimonial` (optional) — name, role, quote, photo

## 2. Routes

- `/` (Hero → Intro → Expertise → Career Journey → Public Figure → Media → LinkedIn → Dubai → Contact)
- `/about`
- `/expertise`
- `/career-journey`
- `/public-figure` (archive w/ filters: TV & Streaming, Interviews, Events, Panels, Speaking)
- `/public-figure/[slug]` (dynamic appearance detail)
- `/media-coverage`
- `/insights` (LinkedIn)
- `/contact`
- `/admin/*` (unlisted, not in public nav — login, dashboard, editors per entity)

## 3. Stack

Next.js + TypeScript, Tailwind, Framer Motion, Lucide icons, Supabase (Postgres + Storage + Auth).

## 4. Phase checklist

- [x] **Phase 1 — Brand foundation**: color tokens (obsidian/charcoal/ivory/champagne gold/
      bronze) in `src/app/globals.css` `@theme`, Cormorant Garamond / Manrope / IBM Plex Mono via
      `next/font`, base components (`Button`, `GoldRule`, `SectionHeading`, `Monogram`)
- [x] **Phase 2 — Core pages**: Navbar (+ mobile menu), Hero, About, Expertise, Career Journey,
      Public Figure, Dubai section, Contact, Footer — all built and rendering
- [x] **Phase 3 — Public Figure & Media**: appearance archive with category filter, dynamic
      `/public-figure/[slug]` detail pages, media coverage grid, Insights honest-empty-state.
      (Featured-post LinkedIn layout deferred to Phase 4 — no real posts to feature yet.)
- [ ] **Phase 4 — CMS**: Supabase project provisioning, Auth admin login at `/admin` (unlisted,
      `robots.txt`-disallowed), editors per entity, image upload, featured/publish toggles —
      **not started, needs Supabase credentials first**
- [ ] **Phase 5 — Motion & polish**: scroll reveals and count-up stats are done (Framer Motion,
      `prefers-reduced-motion`-aware); still open — cinematic page transitions, desktop-only
      magnetic buttons, real hero video/photography once assets exist
- [ ] **Phase 6 — Production**: metadata/OG/Person JSON-LD/sitemap.xml/robots.txt are done;
      still open — real domain, analytics, image optimization once real photos replace
      monograms, Lighthouse pass, cross-device QA beyond the one mobile viewport already checked

## 5. What's actually in the repo right now

- `src/lib/data/` — typed content layer (profile, expertise, experience, appearances, media,
  social, sources). This is the seam where Supabase queries replace static imports in Phase 4 —
  every page already reads through this layer, not inline content.
- `src/components/` — Navbar, Footer, Hero pieces, `Reveal` (scroll motion), `Counter` (count-up
  stats), `Timeline`, `Monogram` (honest placeholder imagery), `AppearanceCard`, `MediaCard`.
- Routes: `/`, `/about`, `/expertise`, `/career-journey`, `/public-figure` (+ `/[slug]`),
  `/media-coverage`, `/insights`, `/contact`, plus `sitemap.ts`, `robots.ts`, `not-found.tsx`.
- `npm run build` and `npm run lint` are clean. Verified in a headless browser across all routes
  and one mobile viewport, zero console errors.

## 6. Open design flags (not blockers, just worth deciding early)

- Admin should be an **unlisted route**, not a public nav item, despite being listed in the
  plan's "Website Architecture."
- Full-bleed video hero vs. Lighthouse 90+ performance target — plan for poster image + deferred
  video load from the start, not as a Phase 6 afterthought.
- Decide now whether media-coverage entries without confirmed rights show a logo/screenshot or
  text-only — affects the CMS field design (`logo` optional vs. required).
