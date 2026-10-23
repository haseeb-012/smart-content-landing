import type { Metadata } from "next";
import { ArrowRight, Copy, Sparkles } from "lucide-react";
import { Accent, ButtonLink, Card, Container, Pill } from "@/components/ui/primitives";
import { Accordion } from "@/components/sections/faq";
import { mcpSkills, mcpUseCases } from "@/lib/content";
import { DASHBOARD_URL, signupUrl, SUPPORT_EMAIL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Smart Content for AI assistants — MCP",
  description: "Connect Smart Content to Claude and other MCP clients for live short-form data and video breakdowns.",
};

const MCP_URL = process.env.NEXT_PUBLIC_MCP_URL ?? "https://mcp.smartcontent.example/mcp";

const assistants = [
  { name: "Claude", surfaces: "Claude.ai · Desktop · Code", cta: "Add to Claude", primary: true },
  { name: "Cursor", surfaces: "Editor agent", cta: "Setup guide" },
  { name: "VS Code", surfaces: "Copilot agent mode", cta: "Setup guide" },
  { name: "Any MCP client", surfaces: "Streamable HTTP + OAuth", cta: "Copy server URL", url: true },
];

const solution = [
  ["Live performance data", "Your assistant reads real outlier scores, views and engagement from the channels you track."],
  ["Video breakdowns", "It can open any analyzed video: transcript, hook, format and visual style."],
  ["Niche-level patterns", "It compares across your whole watchlist to see which hooks and formats are rising."],
  ["Clear next steps", "It turns the data into ideas, hooks and scripts you can film this week."],
];

const mcpFaq = [
  { q: "Which assistants work?", a: "Any assistant that supports remote MCP servers with OAuth — Claude first, plus Cursor, VS Code and others." },
  { q: "Which plans include MCP?", a: "MCP is included on Pro, Visionary and Titan. During early access it's enabled for accounts flagged by our team." },
  { q: "How do I connect?", a: "Open Settings → Connectors in the app, copy the server URL, add it to your assistant and approve access once." },
  { q: "Can the assistant see all my data?", a: "Only the workspaces you approve. You can set each tool to Always allow, Needs approval or Blocked." },
  { q: "Does it use credits?", a: "Reading your data is free. Analyzing a video that isn't in your workspace yet uses 1 credit, the same as in the app." },
];

export default function McpPage() {
  return (
    <>
      <section className="relative overflow-hidden pb-20 pt-36">
        <div aria-hidden className="glow-top pointer-events-none absolute inset-0" />
        <div aria-hidden className="grid-bg pointer-events-none absolute inset-0" />
        <Container className="relative text-center">
          <Pill>Smart Content for AI assistants</Pill>
          <h1 className="h1 mx-auto mt-6 max-w-[48rem]">
            Give your AI assistant <Accent>real content data</Accent>
          </h1>
          <p className="mx-auto mt-6 max-w-[44rem] text-lg leading-7 text-white/85">
            Connect Smart Content to Claude or any MCP-compatible assistant. It gets live short-form data, deep video
            breakdowns and niche-level patterns — so it stops guessing and starts suggesting ideas worth filming.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <ButtonLink href={signupUrl()}>Get started</ButtonLink>
            <ButtonLink href="#connect" variant="outline">Connect your assistant</ButtonLink>
          </div>
          <p className="mt-12 text-xs font-semibold uppercase tracking-[0.12em] text-dim">Works with</p>
          <div className="mt-4 flex flex-wrap justify-center gap-x-10 gap-y-3 text-lg font-medium text-white">
            {["Claude", "Cursor", "VS Code", "Windsurf", "Any MCP client"].map((a) => (
              <span key={a}>{a}</span>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="text-center">
            <Pill>The problem</Pill>
            <h2 className="h2 mx-auto mt-6 max-w-[40rem]">
              Assistants give <Accent>generic</Accent> content advice
            </h2>
          </div>
          <div className="mx-auto mt-12 grid max-w-[72rem] gap-6 tab:grid-cols-2">
            <Card className="rounded-3xl p-7">
              <p className="text-xs font-semibold uppercase tracking-wide text-dim">Without data</p>
              <p className="mt-4 text-white/85">Here are some tips for better hooks:</p>
              <ul className="mt-3 list-disc space-y-1.5 pl-5 text-white/75">
                <li>Open with a question</li>
                <li>Make a bold claim early</li>
                <li>Create curiosity</li>
                <li>Use trending audio</li>
              </ul>
              <p className="mt-6 border-t border-line pt-4 text-sm text-dim">True for every niche — so useful in none.</p>
            </Card>
            <Card className="glow-panel rounded-3xl border-accent/50 p-7">
              <p className="text-xs font-semibold uppercase tracking-wide text-accent">With Smart Content</p>
              <ul className="mt-4 space-y-4">
                {[["18.8x", "Case-study hooks lead your niche this month."], ["12.5x", "Contrarian takes are close behind."], ["2.1x", "Secret-reveal hooks are the most common — and now the weakest."]].map(([s, t]) => (
                  <li key={s} className="flex gap-4">
                    <span className="w-14 flex-none font-display text-lg font-semibold text-accent">{s}</span>
                    <span className="text-white/85">{t}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 rounded-xl border border-accent/40 bg-accent/10 p-4 text-sm text-white">
                Try next: “I tested [5 tools] to see which one could [plan a month of content].”
              </p>
            </Card>
          </div>
          <p className="mt-6 text-center text-sm text-dim">Illustrative example.</p>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="text-center">
            <Pill>The solution</Pill>
            <h2 className="h2 mx-auto mt-6 max-w-[40rem]">
              A strategist, <Accent>not a data feed</Accent>
            </h2>
          </div>
          <ol className="mx-auto mt-12 grid max-w-[72rem] gap-6 land:grid-cols-2 tab:grid-cols-4">
            {solution.map(([t, b], i) => (
              <li key={t} className="rounded-2xl border border-line bg-panel p-6">
                <span className="font-display text-sm font-semibold text-accent">0{i + 1}</span>
                <h3 className="mt-3 font-display text-xl font-medium text-white">{t}</h3>
                <p className="mt-2 text-sm text-text">{b}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="text-center">
            <Pill>Use cases</Pill>
            <h2 className="h2 mx-auto mt-6 max-w-[36rem]">
              Ask anything about <Accent>what&apos;s working</Accent>
            </h2>
            <p className="mx-auto mt-5 max-w-[30rem] text-text">
              Ask in plain English. Every answer comes from live data on your niche.
            </p>
          </div>
          <div className="mt-12 grid gap-6 land:grid-cols-2 tab:grid-cols-3">
            {mcpUseCases.map((u) => (
              <Card key={u.tag} className="p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.08em] text-accent">{u.tag}</p>
                <p className="mt-4 font-display text-xl font-medium leading-7 text-white">“{u.prompt}”</p>
              </Card>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-2">
            {mcpSkills.map((s) => (
              <code key={s} className="rounded-full border border-line bg-chip px-3 py-1 text-xs text-white/85">{s}</code>
            ))}
          </div>
        </Container>
      </section>

      <section id="connect" className="scroll-mt-24 py-20">
        <Container>
          <div className="text-center">
            <Pill>Connect</Pill>
            <h2 className="h2 mt-6">Connect your assistant</h2>
          </div>
          <div className="mt-12 grid gap-6 land:grid-cols-2 tab:grid-cols-4">
            {assistants.map((a) => (
              <Card key={a.name} className="flex flex-col">
                <span className="grid size-10 place-items-center rounded-xl bg-chip text-white"><Sparkles className="size-5" /></span>
                <h3 className="mt-4 font-display text-xl font-medium text-white">{a.name}</h3>
                <p className="text-sm text-dim">{a.surfaces}</p>
                {a.url && <code className="mt-4 block truncate rounded-lg border border-line bg-page px-3 py-2 text-xs text-white/80">{MCP_URL}</code>}
                <ButtonLink
                  href={a.primary ? `${DASHBOARD_URL}/settings/connectors` : "#"}
                  variant={a.primary ? "accent" : "outline"}
                  size="sm"
                  className="mt-6"
                >
                  {a.url ? <Copy className="size-4" /> : null}
                  {a.cta} {a.url ? null : <ArrowRight className="size-4" />}
                </ButtonLink>
              </Card>
            ))}
          </div>
          <p className="mt-6 text-center text-sm text-dim">Included on Pro, Visionary and Titan.</p>
        </Container>
      </section>

      <section className="py-20">
        <Container className="max-w-[60rem]">
          <h2 className="h2 text-center">Questions</h2>
          <div className="mt-10">
            <Accordion items={mcpFaq} />
          </div>
          <p className="mt-6 text-center text-sm text-dim">
            Something else? Email <a className="text-white underline" href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>.
          </p>
        </Container>
      </section>

      <section className="py-24 text-center">
        <Container>
          <h2 className="h2 mx-auto max-w-[36rem]">Connect once. <Accent>Ask forever.</Accent></h2>
          <p className="mt-4 text-text">Included on every paid plan.</p>
          <div className="mt-8 flex justify-center"><ButtonLink href={signupUrl()}>Try it free</ButtonLink></div>
        </Container>
      </section>
    </>
  );
}
