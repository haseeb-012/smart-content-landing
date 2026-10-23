import { Eye, Heart, MessageCircle, TrendingUp, Flame, Users } from "lucide-react";
import { Accent, Container, Pill } from "@/components/ui/primitives";

const stats = [
  { label: "Outlier score", value: "105.3x", icon: TrendingUp, tone: "bg-good/10 text-good border-good/25" },
  { label: "Views", value: "3.2M", icon: Eye, tone: "bg-views/10 text-views border-views/25" },
  { label: "Engagement rate", value: "11%", icon: Flame, tone: "bg-warn/10 text-warn border-warn/25" },
  { label: "Likes", value: "169K", icon: Heart, tone: "bg-accent/15 text-[#9ec3ff] border-accent/30" },
  { label: "Comments", value: "1.8K", icon: MessageCircle, tone: "bg-amber-400/10 text-amber-300 border-amber-400/25" },
  { label: "Channel followers", value: "331K", icon: Users, tone: "bg-white/5 text-white/80 border-white/15" },
];

export function Outliers() {
  return (
    <section className="py-16 land:py-24">
      <Container>
        <div className="glow-panel relative overflow-hidden rounded-[32px] border border-line bg-panel px-6 pb-12 pt-16 land:px-12">
          <div aria-hidden className="grid-bg pointer-events-none absolute inset-0 opacity-60" />
          <div className="relative text-center">
            <Pill>Fresh outliers every day</Pill>
            <h2 className="h2 mx-auto mt-6 max-w-[34rem]">
              Find the <Accent>top 1%</Accent> of videos in every niche
            </h2>
          </div>

          <div className="relative mt-14 grid items-end gap-6 tab:grid-cols-[1fr_1.3fr_1fr]">
            <div className="grid -rotate-3 grid-cols-2 gap-2 rounded-2xl border border-line bg-panel-2 p-3 shadow-2xl">
              {stats.map((s) => (
                <div key={s.label} className={`rounded-xl border p-3 ${s.tone}`}>
                  <p className="text-[11px] opacity-80">{s.label}</p>
                  <p className="mt-1 flex items-center gap-1 text-base font-semibold"><s.icon className="size-4" />{s.value}</p>
                </div>
              ))}
            </div>

            <div className="rounded-2xl border border-line bg-panel-2 p-5">
              <p className="text-sm font-semibold text-white">Why it worked</p>
              <p className="mt-2 text-sm leading-6 text-text">
                A contrarian hook in the first two seconds, a three-beat breakdown, and on-screen captions that pay off the
                promise before the 20-second mark. The channel averages 30K views — this video did 3.2M.
              </p>
              <p className="mt-4 text-xs text-dim">Every outlier comes with the reason it beat its channel, and why it worked.</p>
            </div>

            <div className="rotate-3 rounded-2xl border border-line bg-panel-2 p-4 shadow-2xl">
              <div className="flex items-center gap-3">
                <span className="size-9 rounded-full bg-gradient-to-br from-accent to-[#f97316]" />
                <div className="flex-1">
                  <p className="text-sm font-semibold text-white">fitwithkai</p>
                  <p className="text-xs text-dim">2.2M followers</p>
                </div>
              </div>
              <p className="mt-4 text-xs text-white/80">Add this channel to a watchlist:</p>
              <div className="mt-2 rounded-lg border border-line px-3 py-2 text-xs text-dim">Select a watchlist</div>
              <div className="mt-3 rounded-lg bg-accent py-2 text-center text-xs font-semibold text-white">Add to watchlist</div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
