"use client";

import { useState } from "react";
import type { Appearance } from "@/lib/data/types";
import { appearanceCategories } from "@/lib/data/appearances";
import { AppearanceCard } from "@/components/AppearanceCard";
import { Reveal } from "@/components/Reveal";

export function PublicFigureArchive({ appearances }: { appearances: Appearance[] }) {
  const [active, setActive] = useState("all");
  const filtered =
    active === "all" ? appearances : appearances.filter((a) => a.category === active);

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {appearanceCategories.map((c) => (
          <button
            key={c.value}
            type="button"
            onClick={() => setActive(c.value)}
            className={`border px-4 py-2 font-mono text-[11px] uppercase tracking-[0.08em] transition-colors ${
              active === c.value
                ? "border-gold bg-gold text-obsidian"
                : "border-gold-line text-taupe hover:text-ivory"
            }`}
          >
            {c.label}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="mt-14 text-taupe">
          Nothing verified in this category yet — Dyuti&rsquo;s team can add appearances here
          through the admin panel once it ships.
        </p>
      ) : (
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((a) => (
            <Reveal key={a.slug}>
              <AppearanceCard appearance={a} />
            </Reveal>
          ))}
        </div>
      )}
    </div>
  );
}
