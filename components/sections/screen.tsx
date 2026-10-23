import Image from "next/image";
import { cn } from "@/components/ui/primitives";

// Real screenshots of the Smart Content dashboard (public/screens, 2880×1800, captured from our own app).
export type ScreenName = "dashboard" | "videos" | "analysis" | "channels" | "ideas" | "hooks" | "script" | "collections";

const alt: Record<ScreenName, string> = {
  dashboard: "Smart Content dashboard with follower and view charts",
  videos: "Outlier video feed with filters and outlier, views and engagement scores",
  analysis: "Deep analysis of a video with summary, transcript, hook and format tabs",
  channels: "Channel watchlist with followers and views",
  ideas: "Ideas generated from analyzed videos",
  hooks: "Hook generator producing variations",
  script: "Script editor with hook, intro, main content and CTA blocks",
  collections: "Curated collections of short-form patterns",
};

/** Full screenshot in a browser-like frame. */
export function ScreenFrame({ name, priority, className }: { name: ScreenName; priority?: boolean; className?: string }) {
  return (
    <div className={cn("overflow-hidden rounded-[20px] border border-white/10 bg-[#0b1426] p-1.5 shadow-2xl land:rounded-[28px] land:p-2", className)}>
      <div className="flex items-center gap-1.5 px-2 pb-2 pt-1" aria-hidden>
        <span className="size-2.5 rounded-full bg-white/15" />
        <span className="size-2.5 rounded-full bg-white/15" />
        <span className="size-2.5 rounded-full bg-white/15" />
      </div>
      <Image
        src={`/screens/${name}.png`}
        alt={alt[name]}
        width={2880}
        height={1800}
        priority={priority}
        sizes="(min-width: 1280px) 1200px, 100vw"
        className="h-auto w-full rounded-[14px] land:rounded-[20px]"
      />
    </div>
  );
}

/** Zoomed-in crop of a screenshot — `position` picks the focal point, `zoom` how close we get. */
export function ScreenCrop({
  name,
  position = "70% 20%",
  zoom = 2.2,
  className,
}: {
  name: ScreenName;
  position?: string;
  zoom?: number;
  className?: string;
}) {
  return (
    <div className={cn("relative overflow-hidden bg-[#f2f5fb]", className)}>
      <Image
        src={`/screens/${name}.png`}
        alt={alt[name]}
        fill
        sizes="(min-width: 768px) 900px, 100vw"
        className="object-cover"
        style={{ objectPosition: position, transform: `scale(${zoom})`, transformOrigin: position }}
      />
    </div>
  );
}
