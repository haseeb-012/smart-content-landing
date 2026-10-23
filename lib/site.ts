// Central place for URLs and copy shared across pages.
export const DASHBOARD_URL = process.env.NEXT_PUBLIC_DASHBOARD_URL ?? "http://localhost:3001";
export const HELP_URL = process.env.NEXT_PUBLIC_HELP_URL ?? "#";
export const COPYRIGHT_YEAR = 2026;
export const SUPPORT_EMAIL = "support@smartcontent.example";

export const signupUrl = (plan?: string) =>
  `${DASHBOARD_URL}/signup${plan ? `?plan=${encodeURIComponent(plan)}` : ""}`;
export const loginUrl = `${DASHBOARD_URL}/login`;

export const navLinks = [
  { label: "Features", href: "/#features" },
  { label: "How it works", href: "/#how-it-works" },
  { label: "Pricing", href: "/#pricing" },
  { label: "FAQ", href: "/#faq" },
];

export const solutionLinks = [
  { label: "MCP", href: "/mcp", description: "Use Smart Content inside Claude" },
  { label: "Collections", href: "/collections", description: "Free library of proven patterns" },
];
