export function Monogram({
  className = "",
  ratio = "aspect-[4/5]",
  label,
}: {
  className?: string;
  ratio?: string;
  label?: string;
}) {
  return (
    <div
      className={`relative ${ratio} overflow-hidden border border-gold-line bg-panel ${className}`}
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 120% 80% at 30% 0%, rgba(201,162,92,0.14), transparent 60%)",
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(115deg, var(--color-gold) 0, var(--color-gold) 1px, transparent 1px, transparent 14px)",
        }}
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="font-serif text-[clamp(48px,12vw,160px)] leading-none text-gold-bright/80">
          DP
        </span>
      </div>
      <div className="absolute inset-4 border border-gold-line" />
      {label && (
        <span className="absolute bottom-4 left-4 right-4 font-mono text-[11px] uppercase tracking-[0.1em] text-taupe-dim">
          {label}
        </span>
      )}
    </div>
  );
}
