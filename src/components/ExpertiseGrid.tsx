import type { ExpertiseArea } from "@/lib/data/types";
import { Reveal } from "./Reveal";

export function ExpertiseGrid({ items }: { items: ExpertiseArea[] }) {
  return (
    <div className="mt-12 grid gap-px border border-rule bg-rule sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item, i) => (
        <Reveal key={item.slug} delay={i * 0.05} className="bg-obsidian">
          <div className="h-full p-7">
            <span className="font-mono text-xs text-gold-dim">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-3 font-serif text-2xl text-ivory">{item.title}</h3>
            <p className="mt-2.5 text-sm leading-relaxed text-taupe">
              {item.description}
            </p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
