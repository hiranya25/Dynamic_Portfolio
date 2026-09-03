export function SectionHeading({
  num,
  eyebrow,
  title,
  lead,
  light,
}: {
  num: string;
  eyebrow: string;
  title: string;
  lead?: string;
  light?: boolean;
}) {
  return (
    <div className="max-w-2xl">
      <div className="mb-5 flex items-center gap-2.5 font-mono text-xs tracking-[0.14em] uppercase text-gold">
        <span className="text-taupe-dim">{num}</span>
        <span>{eyebrow}</span>
        <span
          className="h-px flex-1 bg-gold-line"
          style={{ minWidth: "24px" }}
        />
      </div>
      <h2
        className={`text-4xl sm:text-5xl leading-[1.05] ${
          light ? "text-ivory" : "text-ivory"
        }`}
      >
        {title}
      </h2>
      {lead && <p className="mt-5 max-w-xl text-lg text-taupe">{lead}</p>}
    </div>
  );
}
