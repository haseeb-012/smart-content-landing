import type { Metadata } from "next";
import { ArrowDown } from "lucide-react";
import { Accent, ButtonLink, CheckItem, Container, Pill } from "@/components/ui/primitives";
import { Accordion } from "@/components/sections/faq";
import { collectionCategories, collectionTags, sampleCollections } from "@/lib/content";
import { DASHBOARD_URL, SUPPORT_EMAIL } from "@/lib/site";
import { CollectionsBrowser } from "./collections-browser";

export const metadata: Metadata = {
  title: "Collections — curated short-form outlier examples | Smart Content",
  description: "100+ free, curated collections of outlier videos grouped by format, editing style, visual hook and series.",
};

const colFaq = [
  { q: "What are collections?", a: "Hand-picked groups of outlier videos that share one specific pattern — a format, an editing style, a visual hook or a series." },
  { q: "Do collections cost credits?", a: "No. Collections are free on every plan." },
  { q: "How many are there?", a: "100+ across four categories, with new videos added every week." },
  { q: "Can I make my own?", a: "Not yet — our team curates every collection in this version." },
  { q: "Can I export one?", a: "Yes. Export any collection as a reference sheet to share with your editor." },
];

export default function CollectionsPage() {
  return (
    <>
      <section className="relative overflow-hidden pb-16 pt-32">
        <div aria-hidden className="glow-top pointer-events-none absolute inset-0" />
        <Container className="relative text-center">
          <Pill>Smart Content Collections</Pill>
          <h1 className="h1 mx-auto mt-6 max-w-[52rem]">
            A library of <Accent>proven short-form patterns</Accent>
          </h1>
          <p className="mx-auto mt-6 max-w-[36rem] text-lg leading-7 text-white/85">
            100+ curated collections of outlier videos across every niche. Study the pattern, then model your next video on it.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-6">
            <ButtonLink href={`${DASHBOARD_URL}/collections`}>Browse collections</ButtonLink>
            <a href="#inside" className="flex items-center gap-1.5 font-medium text-white hover:text-accent">
              See what&apos;s inside <ArrowDown className="size-4" />
            </a>
          </div>
        </Container>
        <Container className="relative mt-16 max-w-[60rem]">
          <CollectionsBrowser />
          <ul className="mt-10 grid gap-4 land:grid-cols-2">
            {[
              "100+ curated collections, free for everyone",
              "Grouped by format, visual hook, editing style and series",
              "Export any collection as a reference sheet",
              "Deep analysis with transcript and full breakdown",
              "Search across every video in the library",
              "New outlier videos added every week",
            ].map((t) => (
              <CheckItem key={t}>{t}</CheckItem>
            ))}
          </ul>
        </Container>
      </section>

      <section id="inside" className="scroll-mt-24 py-20">
        <Container>
          <h2 className="h2">
            100+ collections, <Accent>four categories</Accent>
          </h2>
          <p className="mt-4 max-w-[40rem] text-text">
            Examples across every niche, organized by format, editing style, visual hook or signature series.
          </p>
          <div className="mt-10 grid gap-6 land:grid-cols-2 tab:grid-cols-4">
            {collectionCategories.map((c) => (
              <div key={c.name} className="rounded-2xl border border-line bg-panel p-6">
                <p className="font-display text-5xl font-medium text-white">{c.count}</p>
                <h3 className="mt-3 font-display text-xl font-medium text-accent">{c.name}</h3>
                <p className="mt-2 text-sm text-text">{c.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="text-center">
            <Pill>A sample of the library</Pill>
            <h2 className="h2 mt-6">Example collections</h2>
          </div>
          <div className="mx-auto mt-10 flex max-w-[60rem] flex-wrap justify-center gap-2.5">
            {collectionTags.map((t) => (
              <span key={t} className="rounded-full border border-line bg-panel px-4 py-2 text-sm text-white/85">{t}</span>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="text-center">
            <h2 className="h2">Try popular collections</h2>
            <p className="mt-3 text-text">Free to open — no credits needed.</p>
          </div>
          <div className="mt-10 grid gap-6 land:grid-cols-2 tab:grid-cols-4">
            {sampleCollections.slice(0, 4).map((c) => (
              <a key={c.name} href={`${DASHBOARD_URL}/collections`} className="group overflow-hidden rounded-2xl border border-line bg-panel transition hover:border-accent/60">
                <div className={`h-32 bg-gradient-to-br ${c.hue}`} />
                <div className="p-5">
                  <p className="text-[11px] font-semibold uppercase tracking-wide text-dim">{c.category}</p>
                  <p className="mt-1 font-medium text-white group-hover:text-accent">{c.name}</p>
                </div>
              </a>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container className="max-w-[60rem]">
          <h2 className="h2 text-center">Questions</h2>
          <div className="mt-10">
            <Accordion items={colFaq} />
          </div>
          <p className="mt-6 text-center text-sm text-dim">
            Other issues? Email <a className="text-white underline" href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>.
          </p>
        </Container>
      </section>
    </>
  );
}
