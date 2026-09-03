import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { appearances } from "@/lib/data/appearances";
import { PublicFigureArchive } from "./PublicFigureArchive";

export const metadata: Metadata = {
  title: "Public Figure",
  description: "Netflix's Desi Bling, press features, and Decisive Zone's US expansion.",
};

export default function PublicFigurePage() {
  return (
    <>
      <PageHero
        eyebrow="Beyond Business"
        title="A Presence Beyond the Boardroom"
        lead="Every entry here is a verified, sourced appearance — not a placeholder."
      />
      <section className="mx-auto max-w-6xl px-6 py-20 sm:px-8">
        <PublicFigureArchive appearances={appearances} />
      </section>
    </>
  );
}
