import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { ExpertiseGrid } from "@/components/ExpertiseGrid";
import { Button } from "@/components/Button";
import { expertise } from "@/lib/data/expertise";

export const metadata: Metadata = {
  title: "Expertise",
  description: "UAE business setup, corporate advisory, banking, tax, and Golden Visa expertise.",
};

export default function ExpertisePage() {
  return (
    <>
      <PageHero
        eyebrow="Expertise"
        title="Five Practices, One Advisory Model"
        lead="Built around how and where a client actually intends to trade — not a generic setup checklist."
      />
      <section className="mx-auto max-w-6xl px-6 py-20 sm:px-8">
        <ExpertiseGrid items={expertise} />
        <div className="mt-14 text-center">
          <Button href="/contact">Discuss Your Setup</Button>
        </div>
      </section>
    </>
  );
}
