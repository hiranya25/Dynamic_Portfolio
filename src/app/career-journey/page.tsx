import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Timeline } from "@/components/Timeline";
import { experience, signatureStory } from "@/lib/data/experience";
import { sources } from "@/lib/data/sources";

export const metadata: Metadata = {
  title: "Career Journey",
  description: "From The Westin Dubai to CEO & Partner of Decisive Zone — a fourteen-year timeline.",
};

export default function CareerJourneyPage() {
  return (
    <>
      <PageHero
        eyebrow="Career Journey"
        title={signatureStory.headline}
        lead={signatureStory.progression.join(" → ")}
      />
      <section className="mx-auto max-w-3xl px-6 py-20 sm:px-8">
        <Timeline entries={experience} />
        <p className="mt-10 border-t border-rule pt-6 text-sm text-taupe-dim">
          Dates cross-checked against{" "}
          <a
            href={sources.find((s) => s.id === 14)?.url}
            target="_blank"
            rel="noreferrer noopener"
            className="text-taupe underline decoration-gold-line underline-offset-2 hover:text-gold-bright"
          >
            public professional profiles
          </a>
          . Confirm exact wording with Dyuti before publish.
        </p>
      </section>
    </>
  );
}
