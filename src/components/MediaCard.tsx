import { ArrowUpRight } from "lucide-react";
import type { MediaItem } from "@/lib/data/types";

export function MediaCard({ item }: { item: MediaItem }) {
  return (
    <a
      href={item.url}
      target="_blank"
      rel="noreferrer noopener"
      className="group flex flex-col justify-between border border-rule bg-panel p-6 transition-colors hover:border-gold-line"
    >
      <div>
        <div className="flex items-center justify-between">
          <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-gold">
            {item.outlet}
          </span>
          {item.date && (
            <span className="font-mono text-[11px] text-taupe-dim">{item.date}</span>
          )}
        </div>
        <h3 className="mt-3 font-serif text-xl leading-snug text-ivory">
          {item.headline}
        </h3>
        <p className="mt-2 text-sm text-taupe">{item.excerpt}</p>
      </div>
      <div className="mt-5 flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.08em] text-taupe-dim group-hover:text-gold-bright">
        Read the feature <ArrowUpRight size={13} />
      </div>
    </a>
  );
}
