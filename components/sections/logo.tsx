import Link from "next/link";
import { cn } from "@/components/ui/primitives";

/**
 * Smart Content mark: three rising rounded bars + a breakout dot ("an outlier taking off").
 * Same visual family as the reference (solid electric blue, bold rounded geometry) but an original shape.
 */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={cn("size-8", className)} aria-hidden>
      <rect x="2" y="17" width="8" height="13" rx="3" fill="var(--accent)" />
      <rect x="12" y="10" width="8" height="20" rx="3" fill="var(--accent)" />
      <rect x="22" y="14" width="8" height="16" rx="3" fill="var(--accent)" opacity="0.55" />
      <circle cx="26" cy="6" r="4" fill="var(--accent)" />
    </svg>
  );
}

export function Logo({ size = "md" }: { size?: "md" | "lg" }) {
  return (
    <Link href="/" className="flex flex-none items-center gap-2.5" aria-label="Smart Content home">
      <LogoMark className={size === "lg" ? "size-14" : "size-8"} />
      <span
        className={cn(
          "font-display font-medium tracking-[-0.02em] text-white",
          size === "lg" ? "text-[44px] leading-none" : "text-[22px] leading-none",
        )}
      >
        Smart Content
      </span>
    </Link>
  );
}
