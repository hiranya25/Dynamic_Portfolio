import Link from "next/link";
import type { ReactNode } from "react";

export function Button({
  href,
  children,
  variant = "primary",
  external,
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost";
  external?: boolean;
}) {
  const base =
    "inline-flex items-center gap-2 px-6 py-3 font-mono text-[12px] uppercase tracking-[0.1em] transition-colors";
  const styles =
    variant === "primary"
      ? "bg-gold text-obsidian hover:bg-gold-bright"
      : "border border-gold-line text-ivory hover:border-gold hover:text-gold-bright";

  const props = external
    ? { target: "_blank", rel: "noreferrer noopener" }
    : {};

  return (
    <Link href={href} className={`${base} ${styles}`} {...props}>
      {children}
    </Link>
  );
}
