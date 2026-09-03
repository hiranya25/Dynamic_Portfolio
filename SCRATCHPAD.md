# Dyuti Parruck — Luxury Portfolio: Implementation Scratchpad

Working doc against `Dyuti_Parruck_Luxury_Portfolio_Implementation_Plan.pdf`. Repo is currently
empty (no scaffold yet) — this is the pre-build tracker.

## 0. Blockers needing input before those sections can ship for real

These are not code problems — nothing below can be built correctly without someone supplying
the underlying facts/assets. Everything else in the plan is buildable now.

- [ ] **Netflix appearance** — exact show title, episode, role. No embed is possible either way
      (DRM/no public API) — only an outbound link or a YouTube clip if one exists.
- [ ] **Career Journey dates/titles** — confirm the 2010–2024 timeline against current source
      (LinkedIn or CV), including exact company names/spellings.
- [ ] **Media Coverage items** — for each: publication name, article URL, date, and whether we
      have rights to show the publication's logo/a screenshot (default to text + link only if
      unconfirmed).
- [ ] **First 5 LinkedIn posts** — since there's no live sync, need the actual 5 posts (text +
      image + link) to seed the CMS at launch, plus a plan for who re-enters new ones going
      forward.
- [ ] **Photography/video** — executive portrait, Dubai skyline/cinematic hero footage, event
      photos for the Public Figure archive. Stock placeholders can stand in during build but the
      "premium editorial" feel depends on real assets before launch.
- [ ] **Supabase project + custom domain** — need an actual Supabase project (URL + anon/service
      keys) and domain/DNS access before Phase 4/6 can go live for real.
- [ ] Legal/reputational sign-off on any public-figure claim before publish (per plan's own "only
      verifiable claims" rule).

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

- [ ] **Phase 1 — Brand foundation**: color tokens (obsidian/charcoal/ivory/champagne
      gold/bronze), type scale (serif display + sans body), spacing/grid, base components
- [ ] **Phase 2 — Core pages**: Navbar, Hero, About, Expertise, Career Journey, Public Figure,
      Dubai section, Contact, Footer
- [ ] **Phase 3 — LinkedIn & Media**: featured post + 4-post grid, media archive, appearance
      gallery + detail pages
- [ ] **Phase 4 — CMS**: Supabase Auth admin login, editors for each entity above, image upload,
      featured/publish toggles
- [ ] **Phase 5 — Motion & polish**: scroll reveals, gold divider animation, counters, timeline,
      hover states, cinematic transitions, desktop-only magnetic buttons
- [ ] **Phase 6 — Production**: SEO (title/meta/OG/Person+Organization JSON-LD), sitemap.xml,
      robots.txt, canonical URLs, image optimization (WebP/AVIF via next/image), analytics,
      domain + SSL, 404 page, cross-device QA

## 5. Open design flags (not blockers, just worth deciding early)

- Admin should be an **unlisted route**, not a public nav item, despite being listed in the
  plan's "Website Architecture."
- Full-bleed video hero vs. Lighthouse 90+ performance target — plan for poster image + deferred
  video load from the start, not as a Phase 6 afterthought.
- Decide now whether media-coverage entries without confirmed rights show a logo/screenshot or
  text-only — affects the CMS field design (`logo` optional vs. required).
