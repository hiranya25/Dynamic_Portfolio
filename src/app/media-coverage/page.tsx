import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { MediaCard } from "@/components/MediaCard";
import { mediaCoverage } from "@/lib/data/media";

export const metadata: Metadata = {
  title: "Media Coverage",
  description: "Verified press coverage of Dyuti Parruck across UAE and international outlets.",
};

export default function MediaCoveragePage() {
  return (
    <>
      <PageHero
        eyebrow="In the Public Eye"
        title="Verified Media Coverage"
        lead="Text and an outbound link for every feature. Outlet logos run only once usage rights are confirmed."
      />
      <section className="mx-auto max-w-6xl px-6 py-20 sm:px-8">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {mediaCoverage.map((item) => (
            <MediaCard key={item.url} item={item} />
          ))}
        </div>
      </section>
    </>
  );
}
