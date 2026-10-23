import type { ReactNode } from "react";
import { Container, Pill } from "@/components/ui/primitives";

/** Shared shell for text pages (legal, affiliate). */
export function ProsePage({ pill, title, updated, children }: { pill?: string; title: string; updated?: string; children: ReactNode }) {
  return (
    <section className="pb-24 pt-36">
      <Container className="max-w-[48rem]">
        {pill && <Pill>{pill}</Pill>}
        <h1 className="h2 mt-6">{title}</h1>
        {updated && <p className="mt-3 text-sm text-dim">Last updated {updated}</p>}
        <div className="mt-10 space-y-5 text-base leading-7 text-text [&_h2]:mt-10 [&_h2]:font-display [&_h2]:text-2xl [&_h2]:font-medium [&_h2]:text-white [&_li]:ml-5 [&_li]:list-disc">
          {children}
        </div>
      </Container>
    </section>
  );
}
