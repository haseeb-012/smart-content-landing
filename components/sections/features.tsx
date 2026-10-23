"use client";

import { useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Accent, Container } from "@/components/ui/primitives";
import { ScreenCrop, type ScreenName } from "@/components/sections/screen";
import { features } from "@/lib/content";

// Which real dashboard screen (and which part of it) illustrates each feature card.
const shot: Record<(typeof features)[number]["art"], { name: ScreenName; position: string }> = {
  channels: { name: "channels", position: "28% 26%" },
  outliers: { name: "videos", position: "75% 30%" },
  hooks: { name: "hooks", position: "65% 25%" },
  feed: { name: "dashboard", position: "60% 20%" },
  transcript: { name: "analysis", position: "85% 72%" },
  script: { name: "script", position: "45% 25%" },
  analysis: { name: "analysis", position: "85% 25%" },
  projects: { name: "ideas", position: "60% 22%" },
};

export function Features() {
  const track = useRef<HTMLDivElement>(null);
  const scroll = (dir: 1 | -1) => track.current?.scrollBy({ left: dir * 368, behavior: "smooth" });

  return (
    <section id="features" className="scroll-mt-24 py-24 land:py-32">
      <Container>
        <div className="relative">
          <h2 className="h2 mx-auto max-w-[44rem] text-center">
            Everything you need to make <Accent>winning</Accent> short-form videos
          </h2>
          <div className="mt-8 flex justify-center gap-3 tab:absolute tab:bottom-0 tab:right-0 tab:mt-0">
            {[-1, 1].map((d) => (
              <button
                key={d}
                type="button"
                onClick={() => scroll(d as 1 | -1)}
                aria-label={d < 0 ? "Previous features" : "Next features"}
                className="grid size-[68px] place-items-center rounded-full border border-line bg-chip text-white transition hover:bg-[#1d2d4f]"
              >
                {d < 0 ? <ArrowLeft className="size-5" /> : <ArrowRight className="size-5" />}
              </button>
            ))}
          </div>
        </div>
      </Container>

      <div className="mx-auto mt-16 max-w-[85rem] px-5 land:px-10 tab:px-16">
        <div ref={track} className="no-scrollbar -mx-1 flex snap-x snap-mandatory gap-8 overflow-x-auto px-1 pb-4">
          {features.map((f) => (
            <article
              key={f.accent}
              className="flex w-[336px] flex-none snap-start flex-col overflow-hidden rounded-2xl border border-line bg-panel shadow-[0_0_40px_-20px_var(--accent-glow)]"
            >
              <div className="p-3 pb-0">
                <ScreenCrop
                  name={shot[f.art].name}
                  position={shot[f.art].position}
                  className="h-[200px] rounded-t-xl border border-white/10"
                />
              </div>
              <div className="p-6 pt-5">
                <h3 className="font-display text-xl font-medium leading-7 tracking-[-0.01em] text-white">
                  {f.pre}
                  <Accent>{f.accent}</Accent>
                  {f.post}
                </h3>
                <p className="mt-3 text-base text-text">{f.body}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
