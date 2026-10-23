"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { Container, cn } from "@/components/ui/primitives";
import { faqs } from "@/lib/content";
import { SUPPORT_EMAIL } from "@/lib/site";

type Tab = keyof typeof faqs;

export function Accordion({ items }: { items: Array<{ q: string; a: string }> }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <ul className="border-t border-line">
      {items.map((f, i) => (
        <li key={f.q} className="border-b border-line">
          <button
            type="button"
            onClick={() => setOpen(open === i ? null : i)}
            aria-expanded={open === i}
            className="flex w-full items-center justify-between gap-6 py-6 text-left"
          >
            <span className="font-display text-lg font-medium text-white">{f.q}</span>
            <Plus className={cn("size-5 flex-none text-white transition", open === i && "rotate-45")} />
          </button>
          <div className={cn("grid transition-all", open === i ? "grid-rows-[1fr] pb-6" : "grid-rows-[0fr]")}>
            <p className="overflow-hidden text-base text-text">{f.a}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}

export function Faq() {
  const [tab, setTab] = useState<Tab>("General");
  return (
    <section id="faq" className="scroll-mt-24 py-24 land:py-32">
      <Container>
        <div className="grid gap-12 tab:grid-cols-2">
          <div>
            <h2 className="font-display text-[56px] font-medium leading-[1.05] tracking-[-0.02em] text-white land:text-[80px]">
              Still have questions?
            </h2>
            <p className="mt-6 text-base text-text">
              Can&apos;t find what you need? Email{" "}
              <a className="text-white underline underline-offset-4" href={`mailto:${SUPPORT_EMAIL}`}>
                {SUPPORT_EMAIL}
              </a>
              .
            </p>
          </div>
          <div>
            <div role="tablist" className="inline-flex rounded-full border border-line bg-white/10 p-1">
              {(Object.keys(faqs) as Tab[]).map((t) => (
                <button
                  key={t}
                  role="tab"
                  aria-selected={tab === t}
                  onClick={() => setTab(t)}
                  className={cn(
                    "rounded-full px-6 py-2.5 text-base font-medium transition",
                    tab === t ? "bg-chip text-white shadow-[inset_0_2px_4px_rgb(255_255_255/0.12)]" : "text-white/70 hover:text-white",
                  )}
                >
                  {t}
                </button>
              ))}
            </div>
            <div className="mt-8">
              <Accordion key={tab} items={faqs[tab]} />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
