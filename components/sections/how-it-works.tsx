"use client";

import { useEffect, useState } from "react";
import { Container, cn } from "@/components/ui/primitives";
import { ScreenFrame, type ScreenName } from "@/components/sections/screen";
import { steps } from "@/lib/content";

// Step → real dashboard screen.
const stepScreens: ScreenName[] = ["channels", "videos", "analysis", "script"];

export function HowItWorks() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setActive((s) => (s + 1) % steps.length), 5000);
    return () => clearInterval(id);
  }, [paused]);

  return (
    <section id="how-it-works" className="scroll-mt-24 py-24 land:py-32">
      <Container>
        <div className="grid gap-12 tab:grid-cols-[0.8fr_1.2fr] tab:gap-16">
          <div>
            <h2 className="h2">How it works</h2>
            <p className="mt-5 max-w-[32rem] text-base text-text">
              Smart Content does the heavy lifting on research and scriptwriting so you can focus on filming.
            </p>
            <ol className="mt-12" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
              {steps.map((s, i) => (
                <li key={s.title} className="border-b border-line">
                  <button type="button" onClick={() => setActive(i)} aria-expanded={active === i} className="w-full py-6 text-left">
                    <span className={cn("text-xs font-semibold uppercase tracking-wide", active === i ? "text-accent" : "text-white/40")}>
                      Step {i + 1}
                    </span>
                    <span
                      className={cn(
                        "mt-2 block font-display text-2xl font-medium leading-8 tracking-[-0.013em] transition",
                        active === i ? "text-white" : "text-white/35",
                      )}
                    >
                      {s.title}
                    </span>
                    {active === i && <span className="mt-3 block text-base text-text">{s.body}</span>}
                  </button>
                  {active === i && !paused && (
                    <span className="block h-px origin-left animate-[grow_5s_linear] bg-accent" key={`bar-${active}`} />
                  )}
                </li>
              ))}
            </ol>
          </div>
          <div className="glow-panel self-center rounded-[28px]">
            {/* All four are rendered so switching is instant; only the active one is visible. */}
            <div className="grid">
              {stepScreens.map((name, i) => (
                <div
                  key={name}
                  aria-hidden={active !== i}
                  className={cn("col-start-1 row-start-1 transition-opacity duration-300", active === i ? "opacity-100" : "opacity-0")}
                >
                  <ScreenFrame name={name} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
      <style>{`@keyframes grow { from { transform: scaleX(0) } to { transform: scaleX(1) } }`}</style>
    </section>
  );
}
