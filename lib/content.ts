// All marketing copy lives here so it can be edited without touching layout code.
// Copy is our own; structure mirrors the reference (see docs/research).

export const features = [
  { pre: "Discover ", accent: "top channels", post: " in your niche", body: "See who is winning in your space and borrow what works.", art: "channels" },
  { pre: "Spot ", accent: "outlier videos", post: " from channels you follow", body: "Search a growing database of videos that beat their channel's average.", art: "outliers" },
  { pre: "Generate ", accent: "dozens of hooks", post: " in seconds", body: "Start from hook templates proven to stop the scroll.", art: "hooks" },
  { pre: "Build a feed of ", accent: "competitor channels", post: " in one place", body: "Track TikTok, Instagram and YouTube creators side by side.", art: "feed" },
  { pre: "Pull the ", accent: "full transcript", post: " of any video", body: "Download clean transcripts as text or structured files.", art: "transcript" },
  { pre: "Write ", accent: "ready-to-record scripts", post: " fast", body: "Hook, intro, body, story and CTA — grounded in real outliers.", art: "script" },
  { pre: "Learn ", accent: "why a video went viral", post: "", body: "Hook, format, story structure and visuals, broken down by AI.", art: "analysis" },
  { pre: "Use ", accent: "projects", post: " to keep ideas organized", body: "Group ideas, scripts and research by campaign or client.", art: "projects" },
] as const;

export const steps = [
  {
    title: "Build your feed",
    body: "Add the creators you want to learn from — by suggestion, by describing your niche, by search, or by pasting a URL.",
  },
  {
    title: "Find outlier videos",
    body: "We score every video against its own channel's median, so small creators with breakout hits rise to the top.",
  },
  {
    title: "See why they worked",
    body: "One click breaks a video into summary, transcript, hook, format and visual style.",
  },
  {
    title: "Write your script",
    body: "Turn the pattern into your own hook-to-CTA script, edit it, and export it anywhere.",
  },
];

export type PlanId = "pro" | "visionary" | "titan";
export const plans: Array<{
  id: PlanId;
  name: string;
  blurb: string;
  monthly: number;
  yearly: number;
  credits: number;
  popular?: boolean;
  features: string[];
}> = [
  {
    id: "pro",
    name: "Pro",
    blurb: "For creators who want to grow faster on short-form.",
    monthly: 49,
    yearly: 39,
    credits: 100,
    features: [
      "100 credits per month",
      "Outlier video database",
      "Deep-dive video analysis",
      "Curated competitor feed",
      "MCP connector for Claude",
      "Verify up to 3 channels for personal analytics",
      "12-hour refresh for verified channels",
      "Up to 3 workspaces",
      "Track up to 150 competitors per workspace",
    ],
  },
  {
    id: "visionary",
    name: "Visionary",
    blurb: "For power users who want more research, more often.",
    monthly: 99,
    yearly: 79,
    credits: 250,
    popular: true,
    features: [
      "250 credits per month",
      "Everything in Pro",
      "Verify up to 5 channels for personal analytics",
      "6-hour refresh for verified channels",
      "Up to 5 workspaces",
      "Track up to 250 competitors per workspace",
    ],
  },
  {
    id: "titan",
    name: "Titan",
    blurb: "For agencies and teams running research at scale.",
    monthly: 499,
    yearly: 399,
    credits: 1500,
    features: [
      "1,500 credits per month",
      "Everything in Visionary",
      "API access",
      "Verify up to 20 channels for personal analytics",
      "1-hour refresh for verified channels",
      "Up to 20 workspaces",
      "Guest access to your workspaces",
    ],
  },
];

export const faqs: Record<"General" | "Billing" | "Account", Array<{ q: string; a: string }>> = {
  General: [
    { q: "What is Smart Content?", a: "A research and scriptwriting tool for short-form creators. Track channels, find outlier videos, learn why they worked and turn that into your own script." },
    { q: "Which platforms are supported?", a: "TikTok, Instagram Reels and YouTube Shorts." },
    { q: "What is an outlier score?", a: "How far a video beat its own channel's typical performance. We divide its views by the median views of that channel's previous 30 videos." },
    { q: "Do I need to connect my own account?", a: "No. Connecting is optional and only unlocks your personal analytics dashboard. Everything else works without it." },
    { q: "What does a credit buy?", a: "One credit = one action: analyzing a video, writing a script or running a report. Browsing, filtering, watchlists and Collections are free." },
  ],
  Billing: [
    { q: "Can I pay today?", a: "Payments currently run in Stripe test mode while we finish onboarding a live provider. No real card is charged — use Stripe's test cards." },
    { q: "Do credits roll over?", a: "No. Credits reset each month on your account anniversary." },
    { q: "Can I change plans?", a: "Yes, you can upgrade or downgrade at any time." },
    { q: "Do you offer refunds?", a: "No refunds, but you can cancel anytime." },
  ],
  Account: [
    { q: "Can I change my email?", a: "Not yet. Email changes aren't supported in this version." },
    { q: "Do you support two-factor authentication?", a: "Not in this version. Passkey sign-in is on our roadmap." },
    { q: "How many workspaces can I create?", a: "Pro includes 3, Visionary 5 and Titan 20." },
  ],
};

// Placeholder testimonials. Replace with real, consented customer quotes before launch.
export const testimonials = Array.from({ length: 9 }, (_, i) => ({
  name: `Creator ${i + 1}`,
  role: ["Fitness · TikTok", "Finance · Shorts", "Food · Reels", "Tech · TikTok", "Agency owner", "Ghostwriter"][i % 6],
  quote: [
    "Placeholder quote — swap in real feedback about finding outliers faster.",
    "Placeholder quote — swap in real feedback about hooks and scripts.",
    "Placeholder quote — swap in real feedback about time saved on research.",
  ][i % 3],
}));

export const mcpUseCases = [
  { tag: "Formats", prompt: "Which formats are working best in my niche this month?" },
  { tag: "Hooks", prompt: "Which hook styles are beating the rest for my competitors?" },
  { tag: "Competitors", prompt: "How is my top competitor growing so fast right now?" },
  { tag: "Ideas", prompt: "Give me five video ideas based on this week's outliers." },
  { tag: "Trends", prompt: "What topics are trending across the channels I track?" },
  { tag: "Breakdowns", prompt: "Break down why this video went viral." },
  { tag: "Discovery", prompt: "Find creators similar to the ones in my watchlist." },
  { tag: "Watchlist", prompt: "Suggest channels I should add to my watchlist." },
  { tag: "Scripts", prompt: "Write a script for my next video using a proven outlier hook." },
];

export const mcpSkills = [
  "/analyze", "/channels-add", "/channels-recap", "/channels-search", "/channels-suggest",
  "/topic", "/formats-watchlist", "/hooks-watchlist", "/video-suggest", "/videos-watchlist",
];

export const collectionCategories = [
  { name: "Formats", count: 22, body: "Repeatable video structures — breakdowns, explainers, case studies and more." },
  { name: "Editing Styles", count: 30, body: "Cuts, transitions and pacing patterns that keep viewers watching." },
  { name: "Visual Hooks", count: 47, body: "Opening frames and camera moves that stop the scroll in the first second." },
  { name: "Signature Series", count: 6, body: "Recurring branded series that build loyal audiences." },
] as const;

export const sampleCollections = [
  { category: "Formats", sub: "Explainers", name: "Breakdown / Explainer", videos: 17, hue: "from-[#1a5cff] to-[#0a2a8f]" },
  { category: "Visual Hooks", sub: "Opening scene", name: "Unexpected First Frame", videos: 7, hue: "from-[#14b8a6] to-[#0f4f4a]" },
  { category: "Editing Styles", sub: "Studio", name: "Side-by-Side Compare", videos: 5, hue: "from-[#a855f7] to-[#4c1d95]" },
  { category: "Signature Series", sub: "Case study", name: "Case Study Series", videos: 10, hue: "from-[#f97316] to-[#7c2d12]" },
  { category: "Visual Hooks", sub: "Camera", name: "Fast Push-In", videos: 12, hue: "from-[#3b82f6] to-[#1e3a8a]" },
  { category: "Formats", sub: "Listicle", name: "Top 3 Countdown", videos: 14, hue: "from-[#22c55e] to-[#14532d]" },
  { category: "Editing Styles", sub: "Text", name: "Kinetic Captions", videos: 9, hue: "from-[#ec4899] to-[#831843]" },
  { category: "Formats", sub: "Story", name: "Before / After", videos: 11, hue: "from-[#eab308] to-[#713f12]" },
];

export const collectionTags = [
  "Fast Push-In", "A vs B", "Whip Pan", "Walk & Talk", "Challenge", "Green Screen", "Day in the Life",
  "POV", "Countdown", "Myth vs Fact", "Street Interview", "Reaction", "Before / After", "Tutorial",
  "Hot Take", "Split Screen", "Text Story", "Duet", "Behind the Scenes", "Unboxing",
];
