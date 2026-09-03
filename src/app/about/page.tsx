import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Monogram } from "@/components/Monogram";
import { Reveal } from "@/components/Reveal";
import { profile } from "@/lib/data/profile";
import { sources } from "@/lib/data/sources";

export const metadata: Metadata = {
  title: "About",
  description: `About ${profile.name} — ${profile.title}.`,
};

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="About" title="From the Front Desk to the Boardroom" />
      <section className="mx-auto max-w-6xl px-6 py-20 sm:px-8">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <Monogram ratio="aspect-[4/5]" label="Portrait — commission before launch" />
          <div className="space-y-6 text-lg leading-relaxed text-taupe">
            {profile.intro.map((p) => (
              <Reveal key={p.slice(0, 24)}>
                <p>{p}</p>
              </Reveal>
            ))}
            <p className="text-sm text-taupe-dim">
              Sourced from{" "}
              {profile.sources
                .map((id) => sources.find((s) => s.id === id)?.label)
                .filter(Boolean)
                .join(", ")}
              .
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
