import Link from "next/link";
import type { Appearance } from "@/lib/data/types";
import { Monogram } from "./Monogram";

export function AppearanceCard({ appearance }: { appearance: Appearance }) {
  return (
    <Link
      href={`/public-figure/${appearance.slug}`}
      className="group block border border-rule bg-panel transition-colors hover:border-gold-line"
    >
      <Monogram ratio="aspect-[16/10]" />
      <div className="p-6">
        <div className="font-mono text-[11px] uppercase tracking-[0.1em] text-gold">
          {appearance.categoryLabel}
        </div>
        <h3 className="mt-3 font-serif text-2xl text-ivory group-hover:text-gold-bright">
          {appearance.title}
        </h3>
        <p className="mt-2 line-clamp-2 text-sm text-taupe">{appearance.summary}</p>
        <div className="mt-4 flex gap-4 font-mono text-[11px] uppercase tracking-[0.06em] text-taupe-dim">
          {appearance.date && <span>{appearance.date}</span>}
          {appearance.location && <span>{appearance.location}</span>}
        </div>
      </div>
    </Link>
  );
}
