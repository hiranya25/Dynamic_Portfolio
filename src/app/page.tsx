import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { GoldRule } from "@/components/GoldRule";
import { SectionHeading } from "@/components/SectionHeading";
import { StatGrid } from "@/components/StatGrid";
import { ExpertiseGrid } from "@/components/ExpertiseGrid";
import { Timeline } from "@/components/Timeline";
import { AppearanceCard } from "@/components/AppearanceCard";
import { MediaCard } from "@/components/MediaCard";
import { Monogram } from "@/components/Monogram";
import { Button } from "@/components/Button";
import { profile, stats } from "@/lib/data/profile";
import { expertise } from "@/lib/data/expertise";
import { experience, signatureStory } from "@/lib/data/experience";
import { appearances } from "@/lib/data/appearances";
import { mediaCoverage } from "@/lib/data/media";
import { socialChannels } from "@/lib/data/social";

export default function Home() {
  const instagram = socialChannels.find((s) => s.platform === "Instagram")!;

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-rule">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 900px 500px at 82% -10%, rgba(201,162,92,0.10), transparent 60%)",
          }}
        />
        <div className="mx-auto grid max-w-6xl gap-14 px-6 py-24 sm:px-8 sm:py-32 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <div className="mb-7 font-mono text-xs uppercase tracking-[0.18em] text-taupe-dim">
              {profile.location} · <span className="text-gold">{profile.alias}</span>
            </div>
            <h1 className="text-5xl leading-[1.02] sm:text-6xl lg:text-7xl">
              {profile.name}
            </h1>
            <GoldRule className="my-7" />
            <p className="max-w-xl text-xl text-ivory">{profile.headline}</p>
            <p className="mt-4 max-w-xl text-taupe">{profile.title}</p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Button href="/expertise">Explore Expertise</Button>
              <Button href="/contact" variant="ghost">Connect With Me</Button>
            </div>
          </div>
          <Monogram ratio="aspect-[4/5]" label="Executive Portrait — commission before launch" />
        </div>
        <div className="mx-auto max-w-6xl px-6 pb-16 sm:px-8">
          <StatGrid stats={stats} />
        </div>
      </section>

      {/* Introduction */}
      <section className="mx-auto max-w-6xl px-6 py-24 sm:px-8">
        <SectionHeading num="01" eyebrow="Introduction" title="Who Dyuti Is" />
        <div className="mt-8 max-w-2xl space-y-5 text-lg leading-relaxed text-taupe">
          {profile.intro.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
        </div>
      </section>

      {/* Expertise */}
      <section className="border-t border-rule bg-panel/40">
        <div className="mx-auto max-w-6xl px-6 py-24 sm:px-8">
          <SectionHeading
            num="02"
            eyebrow="Expertise"
            title="Where the Work Happens"
            lead="Five practices under one advisory model, built around a client's actual move into the UAE."
          />
          <ExpertiseGrid items={expertise} />
        </div>
      </section>

      {/* Career Journey */}
      <section className="mx-auto max-w-6xl px-6 py-24 sm:px-8">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHeading
              num="03"
              eyebrow="Career Journey"
              title={signatureStory.headline}
              lead="Fourteen years, six roles, one throughline."
            />
            <div className="mt-8 flex flex-wrap gap-x-2 gap-y-3 font-mono text-xs uppercase tracking-[0.06em] text-taupe-dim">
              {signatureStory.progression.map((step, i) => (
                <span key={step} className="flex items-center gap-2">
                  <span className={i === signatureStory.progression.length - 1 ? "text-gold-bright" : ""}>
                    {step}
                  </span>
                  {i < signatureStory.progression.length - 1 && <span className="text-gold-dim">→</span>}
                </span>
              ))}
            </div>
            <Button href="/career-journey" variant="ghost">
              <span className="flex items-center gap-2">
                Full timeline <ArrowUpRight size={13} />
              </span>
            </Button>
          </div>
          <Timeline entries={experience} />
        </div>
      </section>

      {/* Public Figure */}
      <section className="border-t border-rule bg-panel/40">
        <div className="mx-auto max-w-6xl px-6 py-24 sm:px-8">
          <SectionHeading
            num="04"
            eyebrow="Beyond Business"
            title="A Presence Beyond the Boardroom"
            lead="Netflix, the press, and a US expansion that put his name on the Sunset Strip."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {appearances.map((a) => (
              <Reveal key={a.slug}>
                <AppearanceCard appearance={a} />
              </Reveal>
            ))}
          </div>
          <Button href="/public-figure" variant="ghost">
            <span className="flex items-center gap-2">
              View the archive <ArrowUpRight size={13} />
            </span>
          </Button>
        </div>
      </section>

      {/* Media Coverage */}
      <section className="mx-auto max-w-6xl px-6 py-24 sm:px-8">
        <SectionHeading
          num="05"
          eyebrow="In the Public Eye"
          title="Verified Media Coverage"
          lead="Every feature here is a live, checkable link — no claim on this site outruns its source."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {mediaCoverage.slice(0, 6).map((item) => (
            <MediaCard key={item.url} item={item} />
          ))}
        </div>
        <Button href="/media-coverage" variant="ghost">
          <span className="flex items-center gap-2">
            All coverage <ArrowUpRight size={13} />
          </span>
        </Button>
      </section>

      {/* Insights teaser */}
      <section className="border-t border-rule bg-panel/40">
        <div className="mx-auto max-w-6xl px-6 py-24 sm:px-8">
          <SectionHeading
            num="06"
            eyebrow="Insights"
            title="Where He Actually Publishes"
            lead={`${instagram.followers?.toLocaleString()} followers on Instagram — the real audience, curated here rather than embedded.`}
          />
          <Button href="/insights" variant="ghost">
            <span className="flex items-center gap-2">
              See Insights <ArrowUpRight size={13} />
            </span>
          </Button>
        </div>
      </section>

      {/* Dubai */}
      <section className="relative border-t border-rule">
        <Monogram ratio="aspect-[21/8]" className="max-h-[420px]" label="Dubai skyline — cinematic hero footage, commission before launch" />
        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto w-full max-w-6xl px-6 sm:px-8">
            <p className="max-w-md font-serif text-3xl italic text-ivory sm:text-4xl">
              Dubai → Business → Leadership → Public Presence → Influence.
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="mx-auto max-w-6xl px-6 py-28 text-center sm:px-8">
        <h2 className="text-4xl sm:text-5xl">Let&rsquo;s Build Something.</h2>
        <p className="mx-auto mt-5 max-w-md text-taupe">
          For business setup, advisory, media, or speaking enquiries — reach out directly.
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-4">
          <Button href="/contact">Start a Conversation</Button>
        </div>
      </section>
    </>
  );
}
