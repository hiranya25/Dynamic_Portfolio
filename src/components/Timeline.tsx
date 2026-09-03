import type { ExperienceEntry } from "@/lib/data/types";
import { Reveal } from "./Reveal";

export function Timeline({ entries }: { entries: ExperienceEntry[] }) {
  return (
    <div className="mt-12 border-l border-gold-line pl-8">
      {entries.map((entry, i) => (
        <Reveal key={entry.role + entry.period} delay={i * 0.05}>
          <div className="relative pb-9 last:pb-0">
            <span className="absolute -left-[calc(2rem+5px)] top-1.5 h-[9px] w-[9px] rounded-full border border-gold bg-obsidian" />
            <div className="font-mono text-[13px] tracking-[0.03em] text-gold">
              {entry.period}
            </div>
            <div className="mt-1 font-serif text-2xl text-ivory">{entry.role}</div>
            <div className="text-sm text-taupe">{entry.org}</div>
            {entry.note && (
              <div className="mt-1 text-sm text-taupe-dim">{entry.note}</div>
            )}
          </div>
        </Reveal>
      ))}
    </div>
  );
}
