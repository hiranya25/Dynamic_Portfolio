import type { Stat } from "@/lib/data/types";
import { Counter } from "./Counter";

export function StatGrid({ stats }: { stats: Stat[] }) {
  return (
    <div className="grid grid-cols-2 gap-px border border-rule bg-rule md:grid-cols-4">
      {stats.map((s) => (
        <div key={s.label} className="bg-obsidian p-6">
          <div className="font-serif text-4xl text-gold-bright">
            <Counter value={s.value} suffix={s.suffix} />
          </div>
          <div className="mt-2.5 text-[13px] leading-snug text-taupe">{s.label}</div>
        </div>
      ))}
    </div>
  );
}
