# Landing — current state (2026-10-23)

Run: `npm install && npm run dev` → http://localhost:3000 (set `NEXT_PUBLIC_DASHBOARD_URL` for login/signup links; default http://localhost:3001)

Pages: `/` (hero + app preview, features carousel, how it works, outliers band, testimonials + CTA, pricing with monthly/yearly + test-mode badge, FAQ tabs, walkthrough), `/mcp`, `/collections` (working search/filter/sort), `/legal/privacy-policy`, `/legal/terms-of-service` (drafts), `/affiliate` (inactive).

Layout tokens measured from the reference with REA — see `smart-content-backend/docs/research/REA_PUBLIC_PAGES.md`. Decisions: `smart-content-backend/docs/DECISIONS.md`.

Product images: `public/screens/*.png` are real screenshots of our dashboard (2880×1800), used in the hero, feature cards, How it works and Walkthrough (`components/sections/screen.tsx`).
Regenerate after dashboard UI changes: run the dashboard on :3001, start Chrome with `--remote-debugging-port=9333`, then `node scripts/capture-screens.mjs public/screens` (uses an isolated browser context and seeds demo data).

Palette (D14): navy `#020814` + electric blue `#1A5CFF`; logo = three rising bars + breakout dot.

To do: real logo, final copy review, real testimonials, walkthrough video, 390px REA comparison pass, Playwright tests, waitlist API.
