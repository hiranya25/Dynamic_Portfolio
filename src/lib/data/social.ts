import type { SocialChannel } from "./types";

// No live sync exists for either platform (see SCRATCHPAD.md, §01). This
// site links out to the real profiles now; the curated post grid ships
// once Dyuti's team seeds it through the admin panel (Phase 4).
export const socialChannels: SocialChannel[] = [
  {
    platform: "Instagram",
    handle: "@mrgoldenvisa",
    url: "https://www.instagram.com/mrgoldenvisa/",
    followers: 308000,
    note: "His primary public-figure channel — 308K followers.",
  },
  {
    platform: "LinkedIn",
    handle: "Dyuti Parruck",
    url: "https://www.linkedin.com/in/dyuti-parruck-16a2b814/",
    note: "Professional updates, direct from Decisive Zone.",
  },
];
