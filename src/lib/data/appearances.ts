import type { Appearance } from "./types";

// Only verified appearances live here. Everything else — additional
// interviews, panels, speaking slots — gets added by Dyuti's team via
// the admin panel once it ships (see SCRATCHPAD.md, Phase 4).
export const appearances: Appearance[] = [
  {
    slug: "desi-bling-netflix",
    title: "Desi Bling",
    category: "tv-streaming",
    categoryLabel: "TV & Streaming",
    date: "2026",
    location: "Dubai, UAE",
    role: "Cast member",
    summary:
      "Netflix's Dubai docuseries following the city's ultra-wealthy Indian expat community — Dyuti appears alongside Karan Kundrra, Tejasswi Prakash, and Rizwan Sajan.",
    description: [
      "“Desi Bling” is Netflix's 2026 reality docusoap set among Dubai's ultra-wealthy Indian expatriate community. Dyuti Parruck appears as part of the principal cast, alongside Bollywood names Karan Kundrra and Tejasswi Prakash, and Dubai business figures including Rizwan Sajan.",
      "Coverage of the show has focused heavily on cast members' personal lives — how much of that storyline to reflect here is Dyuti's call, not a default this site makes for him.",
    ],
    externalUrl: "https://www.imdb.com/title/tt39643967/",
    externalLabel: "View on IMDb",
    featured: true,
    sources: [8, 9, 10, 11, 12],
  },
  {
    slug: "decisive-zone-us-launch",
    title: "Decisive Zone Goes to America",
    category: "event",
    categoryLabel: "Business Milestone",
    location: "Sunset Strip, West Hollywood, USA",
    role: "Chief Executive Officer & Partner",
    summary:
      "Decisive Zone's expansion into the US market, marked by signage on the Sunset Strip — the first Dubai-based Golden Visa firm to establish a US presence.",
    description: [
      "Decisive Zone's move into the United States put Dyuti Parruck's name on the Sunset Strip in West Hollywood — a deliberate, hard-to-miss marker for a Dubai-born advisory firm's first push into the American market.",
      "Framed by Arabian Business and Fashion Week Daily as a milestone expansion, not just a marketing moment: the first Dubai-based Golden Visa company to set up shop in the US.",
    ],
    featured: false,
    sources: [2, 7],
  },
];

export function appearanceBySlug(slug: string): Appearance | undefined {
  return appearances.find((a) => a.slug === slug);
}

export const appearanceCategories: { value: string; label: string }[] = [
  { value: "all", label: "All" },
  { value: "tv-streaming", label: "TV & Streaming" },
  { value: "interview", label: "Interviews" },
  { value: "event", label: "Events" },
  { value: "panel", label: "Panels" },
  { value: "speaking", label: "Speaking" },
];
