import { Play } from "lucide-react";
import { Container } from "@/components/ui/primitives";
import { ScreenCrop } from "@/components/sections/screen";

/** "Learn how to grow" card with a real dashboard collage. Video slot is a placeholder until we record a walkthrough. */
export function Walkthrough() {
  return (
    <section className="py-16 land:py-24">
      <Container>
        <div className="glow-panel grid overflow-hidden rounded-[32px] border border-accent/40 bg-panel tab:grid-cols-2">
          <div className="relative flex flex-col justify-end p-8 land:p-12">
            <span className="absolute right-10 top-10 hidden rotate-[-8deg] text-sm font-semibold uppercase text-white land:block">
              Watch video ↘
            </span>
            <h2 className="font-display text-[32px] font-medium leading-[1.15] tracking-[-0.02em] text-white land:text-[40px]">
              Learn how to grow faster on short-form with Smart Content
            </h2>
            <p className="mt-4 text-base text-text">A 3-minute tour: from tracking channels to a finished script.</p>
          </div>
          <div className="relative m-4 min-h-[360px] overflow-hidden rounded-3xl border border-line bg-gradient-to-br from-panel-2 to-[#071a4a]">
            <ScreenCrop
              name="dashboard"
              position="55% 20%"
              zoom={1.5}
              className="absolute left-6 top-8 h-[62%] w-[78%] -rotate-2 rounded-xl border border-white/20 shadow-2xl"
            />
            <ScreenCrop
              name="script"
              position="45% 30%"
              zoom={1.8}
              className="absolute bottom-10 right-5 h-[48%] w-[58%] rotate-2 rounded-xl border border-white/20 shadow-2xl"
            />
            <button
              type="button"
              disabled
              title="Walkthrough video coming soon"
              className="absolute bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full bg-chip px-6 py-3 font-display font-semibold text-white shadow-[inset_0_2px_4px_rgb(255_255_255/0.12)]"
            >
              <Play className="size-4 fill-current" /> Watch walkthrough
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}
