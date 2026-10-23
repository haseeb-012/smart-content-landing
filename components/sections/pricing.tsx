"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { ButtonLink, CheckItem, Container, Pill, TestModeBadge, cn } from "@/components/ui/primitives";
import { plans } from "@/lib/content";
import { signupUrl } from "@/lib/site";

type Cycle = "monthly" | "yearly";

export function Pricing() {
  const [cycle, setCycle] = useState<Cycle>("monthly");

  return (
    <section id="pricing" className="scroll-mt-24 py-24 land:py-32">
      <Container>
        <div className="text-center">
          <Pill>Simple, scalable plans</Pill>
          <h2 className="h2 mt-6">Scalable pricing</h2>
          <div className="relative mt-10 inline-flex">
            <div role="radiogroup" aria-label="Billing cycle" className="flex rounded-full border border-line bg-white/10 p-1">
              {(["monthly", "yearly"] as const).map((c) => (
                <button
                  key={c}
                  role="radio"
                  aria-checked={cycle === c}
                  onClick={() => setCycle(c)}
                  className={cn(
                    "rounded-full px-6 py-2.5 text-base font-medium capitalize transition",
                    cycle === c ? "bg-chip text-white shadow-[inset_0_2px_4px_rgb(255_255_255/0.12)]" : "text-white/70 hover:text-white",
                  )}
                >
                  {c}
                </button>
              ))}
            </div>
            <span className="absolute left-full top-1/2 ml-6 hidden -translate-y-1/2 rotate-[-8deg] whitespace-nowrap rounded-full border border-accent/50 bg-chip px-4 py-2 text-xs font-semibold uppercase text-white shadow-[0_0_24px_-6px_var(--accent-glow)] land:block">
              Save 20% with yearly
            </span>
          </div>
          <div className="mt-6">
            <TestModeBadge />
          </div>
        </div>

        <div className="mt-14 grid gap-8 tab:grid-cols-3">
          {plans.map((p) => {
            const price = cycle === "monthly" ? p.monthly : p.yearly;
            return (
              <article
                key={p.id}
                className={cn(
                  "flex flex-col rounded-2xl border bg-panel p-6",
                  p.popular ? "border-accent shadow-[0_0_60px_-20px_var(--accent-glow)]" : "border-line",
                )}
              >
                <div className="flex items-start justify-between">
                  <h3 className="font-display text-[28px] font-medium leading-9 text-white">{p.name}</h3>
                  {p.popular && (
                    <span className="rounded-full border border-accent/50 bg-chip px-4 py-1.5 text-sm font-medium text-white">Popular</span>
                  )}
                </div>
                <p className="mt-2 min-h-12 text-sm text-text">{p.blurb}</p>
                <p className="mt-6 flex items-end gap-1.5">
                  <span className="font-display text-5xl font-medium leading-none text-white">${price}</span>
                  <span className="pb-1 text-sm text-dim">/mo</span>
                </p>
                <p className="mt-2 h-5 text-xs text-dim">
                  {cycle === "yearly" ? `Billed yearly ($${price * 12}/yr)` : "Billed monthly"}
                </p>
                <ul className="mt-8 flex-1 space-y-3.5">
                  {p.features.map((f) => (
                    <CheckItem key={f}>{f}</CheckItem>
                  ))}
                </ul>
                <ButtonLink
                  href={`${signupUrl(p.id)}&cycle=${cycle}`}
                  className="mt-10 w-full"
                  variant={p.popular ? "accent" : "solid"}
                >
                  Get started <ArrowRight className="size-4" />
                </ButtonLink>
              </article>
            );
          })}
        </div>
        <p className="mt-8 text-center text-sm text-dim">
          Checkout runs on Stripe in test mode — no real card is charged.
        </p>
      </Container>
    </section>
  );
}
