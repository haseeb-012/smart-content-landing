import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { Check } from "lucide-react";

export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

/** 1280px content width with 64px gutters (20px on phones), as measured on the reference. */
export function Container({ className, children }: { className?: string; children: ReactNode }) {
  return <div className={cn("mx-auto w-full max-w-[85rem] px-5 land:px-10 tab:px-16", className)}>{children}</div>;
}

type Variant = "solid" | "accent" | "outline" | "ghost";
type ButtonProps = ComponentProps<typeof Link> & { variant?: Variant; size?: "sm" | "md" | "lg" };

const variants: Record<Variant, string> = {
  solid: "bg-chip text-white shadow-[inset_0_2px_4px_rgb(255_255_255/0.12)] hover:bg-[#1d2d4f]",
  accent:
    "bg-accent text-white shadow-[inset_0_2px_4px_rgb(255_255_255/0.2),0_8px_24px_-8px_var(--accent-glow)] hover:bg-accent-strong",
  outline: "border border-line bg-transparent text-white hover:bg-white/5",
  ghost: "text-white hover:text-accent",
};
const sizes = { sm: "px-4 py-2 text-sm", md: "px-6 py-3 text-base", lg: "px-7 py-3.5 text-base" };

export function ButtonLink({ variant = "solid", size = "md", className, ...props }: ButtonProps) {
  return (
    <Link
      className={cn(
        "inline-flex select-none items-center justify-center gap-2 rounded-full font-display font-semibold leading-[1.1] tracking-[-0.01em] transition",
        "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
        sizes[size],
        variants[variant],
        className,
      )}
      {...props}
    />
  );
}

/** Small rounded label above section headings ("Use cases", "Millions of videos…"). */
export function Pill({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "relative inline-flex items-center rounded-full border border-accent/40 bg-chip px-4 py-1.5 text-xs font-semibold text-white",
        "shadow-[inset_0_1px_0_rgb(255_255_255/0.08),0_0_18px_-6px_var(--accent-glow)]",
        className,
      )}
    >
      {children}
    </span>
  );
}

export function Accent({ children }: { children: ReactNode }) {
  return <span className="text-accent">{children}</span>;
}

export function SectionHeading({
  pill,
  title,
  subtitle,
  align = "center",
  className,
}: {
  pill?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: "center" | "left";
  className?: string;
}) {
  return (
    <div className={cn(align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-xl", className)}>
      {pill && <Pill className="mb-6">{pill}</Pill>}
      <h2 className="h2">{title}</h2>
      {subtitle && <p className="mt-5 text-base text-text">{subtitle}</p>}
    </div>
  );
}

export function Card({ className, children }: { className?: string; children: ReactNode }) {
  return <div className={cn("rounded-2xl border border-line bg-panel p-6", className)}>{children}</div>;
}

export function CheckItem({ children }: { children: ReactNode }) {
  return (
    <li className="flex items-start gap-3 text-[15px] leading-6 text-white/85">
      <span className="mt-0.5 grid size-[18px] flex-none place-items-center rounded-full border border-accent/60 text-accent">
        <Check className="size-3" strokeWidth={3} />
      </span>
      {children}
    </li>
  );
}

export function TestModeBadge({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border border-amber-400/40 bg-amber-400/10 px-2.5 py-0.5 text-[11px] font-semibold text-amber-300",
        className,
      )}
    >
      <span className="size-1.5 rounded-full bg-amber-400" aria-hidden />
      Test mode — no real payment
    </span>
  );
}
