export type Stat = {
  value: number;
  suffix?: string;
  label: string;
};

export type ExpertiseArea = {
  slug: string;
  title: string;
  description: string;
};

export type ExperienceEntry = {
  period: string;
  role: string;
  org: string;
  note?: string;
};

export type AppearanceCategory =
  | "tv-streaming"
  | "interview"
  | "event"
  | "panel"
  | "speaking";

export type Appearance = {
  slug: string;
  title: string;
  category: AppearanceCategory;
  categoryLabel: string;
  date?: string;
  location?: string;
  role?: string;
  summary: string;
  description: string[];
  externalUrl?: string;
  externalLabel?: string;
  featured?: boolean;
  sources: number[];
};

export type MediaItem = {
  outlet: string;
  headline: string;
  excerpt: string;
  date?: string;
  url: string;
  sourceId: number;
};

export type SocialChannel = {
  platform: "Instagram" | "LinkedIn";
  handle: string;
  url: string;
  followers?: number;
  note: string;
};

export type Source = {
  id: number;
  label: string;
  url: string;
};
