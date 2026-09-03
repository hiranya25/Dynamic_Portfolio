import type { Source } from "./types";

// Every fact used on this site traces back to one of these. Add the
// citation id (`sourceId` / `sources: [...]`) wherever a claim is used
// elsewhere in the data layer.
export const sources: Source[] = [
  {
    id: 1,
    label: "Arabian Business — \"Mr Golden Visa\" and the Dubai 2040 Vision",
    url: "https://www.arabianbusiness.com/business/dyuti-parruck-mr-golden-visa-and-decisive-zone-ceo-plays-crucial-role-in-realising-the-dubai-2040-vision",
  },
  {
    id: 2,
    label: "Arabian Business — Decisive Zone takes Dubai to the US",
    url: "https://www.arabianbusiness.com/business/mr-golden-visa-decisive-zones-dyuti-parruck-breaks-new-ground-as-he-takes-dubai-to-the-us",
  },
  {
    id: 3,
    label: "Entrepreneur ME — The 100: Dyuti Parruck",
    url: "https://mena.entrepreneur.com/leadership/the-100-dyuti-parruck-co-founder-and-ceo-decisive-zone/484779",
  },
  {
    id: 4,
    label: "Entrepreneur ME — Indian Visionaries 2025",
    url: "https://mena.entrepreneur.com/leadership/indian-visionaries-2025-dyuti-parruck-co-founder-and-ceo/488110",
  },
  {
    id: 5,
    label: "Gulf Business — Top 100 Indians 2025",
    url: "https://gulfbusiness.com/en/2025/lists/top-100-indians-2025/dyuti-parruck/",
  },
  {
    id: 6,
    label: "Yahoo Finance — Dubai's \"Mr. Golden Visa\"",
    url: "https://finance.yahoo.com/news/dyuti-parruck-dubais-mr-golden-090000888.html",
  },
  {
    id: 7,
    label: "Fashion Week Daily — first Dubai-based visa company in the US",
    url: "https://fashionweekdaily.com/dyuti-parruck-decisive-zone-ceo-and-mr-golden-visa-breaks-new-ground-as-he-brings-the-first-dubai-based-visa-company-in-the-us/",
  },
  {
    id: 8,
    label: "Cosmopolitan Middle East — Who Is Dyuti Parruck?",
    url: "https://www.cosmopolitanme.com/film-and-tv/who-is-dyuti-parruck",
  },
  {
    id: 9,
    label: "Khaleej Times — Who's in Desi Bling",
    url: "https://www.khaleejtimes.com/entertainment/who-is-in-desi-bling-netflix-dubai",
  },
  {
    id: 10,
    label: "Variety — Desi Bling producer interview",
    url: "https://variety.com/2026/film/global/desi-bling-netflix-reality-wealthy-indian-expats-dubai-1236770124/",
  },
  {
    id: 11,
    label: "Gulf News — Desi Bling coverage",
    url: "https://gulfnews.com/entertainment/he-buys-me-three-kilos-of-gold-every-month-netflixs-desi-bling-teases-ultra-rich-indian-lives-in-dubai-1.500431176",
  },
  {
    id: 12,
    label: "IMDb — Desi Bling (2026)",
    url: "https://www.imdb.com/title/tt39643967/",
  },
  {
    id: 13,
    label: "IMDb — Dyuti Parruck",
    url: "https://www.imdb.com/name/nm16494390/",
  },
  {
    id: 14,
    label: "Bayt.com — professional profile / career history",
    url: "https://people.bayt.com/dyutiparruck/",
  },
];

export function sourceById(id: number): Source | undefined {
  return sources.find((s) => s.id === id);
}
