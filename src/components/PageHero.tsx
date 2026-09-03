import { GoldRule } from "./GoldRule";

export function PageHero({
  eyebrow,
  title,
  lead,
}: {
  eyebrow: string;
  title: string;
  lead?: string;
}) {
  return (
    <section className="border-b border-rule">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8 sm:py-28">
        <div className="font-mono text-xs uppercase tracking-[0.18em] text-gold">
          {eyebrow}
        </div>
        <h1 className="mt-4 max-w-3xl text-4xl sm:text-5xl lg:text-6xl">{title}</h1>
        <GoldRule className="my-7" />
        {lead && <p className="max-w-xl text-lg text-taupe">{lead}</p>}
      </div>
    </section>
  );
}
