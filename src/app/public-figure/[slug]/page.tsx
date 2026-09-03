import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, ArrowLeft } from "lucide-react";
import { Monogram } from "@/components/Monogram";
import { GoldRule } from "@/components/GoldRule";
import { AppearanceCard } from "@/components/AppearanceCard";
import { appearances, appearanceBySlug } from "@/lib/data/appearances";
import { sourceById } from "@/lib/data/sources";

export function generateStaticParams() {
  return appearances.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const appearance = appearanceBySlug(slug);
  if (!appearance) return {};
  return {
    title: appearance.title,
    description: appearance.summary,
  };
}

export default async function AppearancePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const appearance = appearanceBySlug(slug);
  if (!appearance) notFound();

  const related = appearances.filter((a) => a.slug !== appearance.slug);

  return (
    <>
      <section className="border-b border-rule">
        <div className="mx-auto max-w-5xl px-6 py-16 sm:px-8">
          <Link
            href="/public-figure"
            className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.08em] text-taupe hover:text-gold-bright"
          >
            <ArrowLeft size={13} /> Public Figure
          </Link>

          <div className="mt-8 font-mono text-xs uppercase tracking-[0.18em] text-gold">
            {appearance.categoryLabel}
          </div>
          <h1 className="mt-4 max-w-3xl text-4xl sm:text-5xl">{appearance.title}</h1>
          <GoldRule className="my-7" />
          <div className="flex flex-wrap gap-x-8 gap-y-2 font-mono text-[12px] uppercase tracking-[0.06em] text-taupe-dim">
            {appearance.date && <span>{appearance.date}</span>}
            {appearance.location && <span>{appearance.location}</span>}
            {appearance.role && <span>{appearance.role}</span>}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <Monogram ratio="aspect-[16/10]" label="Cover image — pending asset" />
            <div className="mt-10 space-y-5 text-lg leading-relaxed text-taupe">
              {appearance.description.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>

            {appearance.externalUrl && (
              <a
                href={appearance.externalUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="mt-8 inline-flex items-center gap-2 border border-gold-line px-6 py-3 font-mono text-[12px] uppercase tracking-[0.1em] text-ivory hover:border-gold hover:text-gold-bright"
              >
                {appearance.externalLabel ?? "Learn more"} <ArrowUpRight size={13} />
              </a>
            )}
          </div>

          <aside>
            <div className="font-mono text-[11px] uppercase tracking-[0.1em] text-gold">
              Sources
            </div>
            <ul className="mt-4 space-y-3">
              {appearance.sources.map((id) => {
                const source = sourceById(id);
                if (!source) return null;
                return (
                  <li key={id}>
                    <a
                      href={source.url}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="text-sm text-taupe hover:text-gold-bright"
                    >
                      {source.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </aside>
        </div>
      </section>

      {related.length > 0 && (
        <section className="border-t border-rule bg-panel/40">
          <div className="mx-auto max-w-5xl px-6 py-16 sm:px-8">
            <div className="font-mono text-xs uppercase tracking-[0.18em] text-gold">
              Related Appearances
            </div>
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {related.map((a) => (
                <AppearanceCard key={a.slug} appearance={a} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
