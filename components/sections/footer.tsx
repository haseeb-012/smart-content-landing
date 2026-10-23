import Link from "next/link";
import { Container } from "@/components/ui/primitives";
import { Logo } from "@/components/sections/logo";
import { COPYRIGHT_YEAR, HELP_URL, loginUrl, SUPPORT_EMAIL } from "@/lib/site";

const columns = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "/#features" },
      { label: "How it works", href: "/#how-it-works" },
      { label: "Pricing", href: "/#pricing" },
      { label: "FAQ", href: "/#faq" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { label: "MCP", href: "/mcp" },
      { label: "Collections", href: "/collections" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Knowledge Base", href: HELP_URL },
      { label: "Affiliate Program", href: "/affiliate" },
      { label: "Support", href: `mailto:${SUPPORT_EMAIL}` },
      { label: "Login", href: loginUrl },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-1/2 h-[420px] w-[520px] -translate-x-1/2 bg-[radial-gradient(50%_80%_at_50%_100%,rgb(26_92_255/0.5),transparent_70%)]"
      />
      <Container className="relative pb-8 pt-40">
        <div className="flex flex-col gap-12 land:flex-row land:justify-between">
          <Logo size="lg" />
          <div className="grid grid-cols-2 gap-x-20 gap-y-10 mob:grid-cols-3">
            {columns.map((c) => (
              <div key={c.title}>
                <h3 className="font-display text-sm font-semibold uppercase tracking-[-0.01em] text-white/40">
                  {c.title}
                </h3>
                <ul className="mt-5 space-y-4">
                  {c.links.map((l) => (
                    <li key={l.label}>
                      <Link href={l.href} className="text-lg text-white transition hover:text-accent">
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="horizon mt-16 opacity-70" />
        <div className="mt-8 flex flex-col gap-3 text-sm text-white land:flex-row land:items-center land:justify-between">
          <p>© {COPYRIGHT_YEAR} Smart Content. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/legal/privacy-policy" className="hover:text-accent">
              Privacy Policy
            </Link>
            <Link href="/legal/terms-of-service" className="hover:text-accent">
              Terms of Service
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
