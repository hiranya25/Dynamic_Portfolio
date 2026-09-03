import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { socialChannels } from "@/lib/data/social";

export const metadata: Metadata = {
  title: "Insights",
  description: "Dyuti Parruck's LinkedIn and Instagram — curated, not scraped.",
};

export default function InsightsPage() {
  return (
    <>
      <PageHero
        eyebrow="Insights"
        title="Where He Actually Publishes"
        lead="Neither platform offers a public API for a personal profile's posts, so nothing here is auto-synced — it's curated by Dyuti's team through the admin panel and kept current by hand."
      />
      <section className="mx-auto max-w-6xl px-6 py-20 sm:px-8">
        <div className="grid gap-6 sm:grid-cols-2">
          {socialChannels.map((channel) => (
            <a
              key={channel.platform}
              href={channel.url}
              target="_blank"
              rel="noreferrer noopener"
              className="group flex flex-col justify-between border border-rule bg-panel p-8 transition-colors hover:border-gold-line"
            >
              <div>
                <div className="font-mono text-[11px] uppercase tracking-[0.1em] text-gold">
                  {channel.platform}
                </div>
                <div className="mt-3 font-serif text-3xl text-ivory">{channel.handle}</div>
                {channel.followers && (
                  <div className="mt-2 font-mono text-sm text-taupe-dim">
                    {channel.followers.toLocaleString()} followers
                  </div>
                )}
                <p className="mt-4 text-sm text-taupe">{channel.note}</p>
              </div>
              <div className="mt-6 flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.08em] text-taupe-dim group-hover:text-gold-bright">
                Visit profile <ArrowUpRight size={13} />
              </div>
            </a>
          ))}
        </div>

        <div className="mt-14 border border-dashed border-gold-line p-10 text-center">
          <p className="text-taupe">
            The first five curated posts land here once seeded through{" "}
            <code className="text-taupe-dim">/admin</code> — see the build plan for the
            featured-post + four-post layout this section will take.
          </p>
        </div>
      </section>
    </>
  );
}
