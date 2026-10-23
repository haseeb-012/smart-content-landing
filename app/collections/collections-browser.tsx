"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { cn } from "@/components/ui/primitives";
import { collectionCategories, sampleCollections } from "@/lib/content";

type Sort = "Most videos" | "A–Z";

export function CollectionsBrowser() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<string>("All");
  const [sort, setSort] = useState<Sort>("Most videos");

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return sampleCollections
      .filter((c) => category === "All" || c.category === category)
      .filter((c) => !q || `${c.name} ${c.sub} ${c.category}`.toLowerCase().includes(q))
      .sort((a, b) => (sort === "A–Z" ? a.name.localeCompare(b.name) : b.videos - a.videos));
  }, [query, category, sort]);

  return (
    <div className="glow-panel rounded-3xl border border-line bg-panel p-6">
      <h2 className="font-display text-xl font-medium text-white">Collections</h2>
      <p className="mt-1 text-sm text-text">
        Curated groups of standout videos by format, visual hook, editing style and signature series.
      </p>
      <div className="mt-5 flex flex-col gap-3 land:flex-row">
        <label className="relative flex-1">
          <span className="sr-only">Search collections</span>
          <Search className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-dim" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search collections"
            className="w-full rounded-xl border border-line bg-page py-3 pl-11 pr-4 text-sm text-white placeholder:text-dim focus:border-accent focus:outline-none"
          />
        </label>
        <select
          aria-label="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="rounded-full border border-line bg-panel px-4 py-2 text-sm text-white"
        >
          <option>All</option>
          {collectionCategories.map((c) => (
            <option key={c.name}>{c.name}</option>
          ))}
        </select>
        <select
          aria-label="Sort by"
          value={sort}
          onChange={(e) => setSort(e.target.value as Sort)}
          className="rounded-full border border-line bg-panel px-4 py-2 text-sm text-white"
        >
          <option>Most videos</option>
          <option>A–Z</option>
        </select>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-4 mob:grid-cols-2 tab:grid-cols-4">
        {results.map((c) => (
          <article key={c.name} className="overflow-hidden rounded-2xl border border-line bg-page/40">
            <div className={cn("grid h-28 place-items-center bg-gradient-to-br px-4 text-center", c.hue)}>
              <span className="font-display text-lg font-semibold text-white/90">{c.name}</span>
            </div>
            <div className="p-4">
              <p className="truncate text-[11px] font-semibold uppercase tracking-wide text-dim">
                {c.category} · {c.sub}
              </p>
              <h3 className="mt-1.5 font-medium text-white">{c.name}</h3>
              <span className="mt-3 inline-block rounded-full border border-line px-2.5 py-0.5 text-xs text-white/85">
                {c.videos} videos
              </span>
            </div>
          </article>
        ))}
        {results.length === 0 && (
          <p className="col-span-full py-10 text-center text-sm text-dim">No collections match — try a broader search.</p>
        )}
      </div>
    </div>
  );
}
