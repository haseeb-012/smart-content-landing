"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { ButtonLink, cn } from "@/components/ui/primitives";
import { Logo } from "@/components/sections/logo";
import { loginUrl, navLinks, signupUrl, solutionLinks } from "@/lib/site";

/** Fixed floating pill nav: max 1042px, 8/8/8/20 padding, translucent navy — measured from the reference. */
export function Navbar() {
  const [open, setOpen] = useState(false);
  const [solutions, setSolutions] = useState(false);

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 px-5 py-4 land:px-10">
      <div className="pointer-events-auto mx-auto w-full max-w-[65.125rem]">
        <nav
          aria-label="Main"
          className="flex items-center rounded-full border border-white/[0.02] bg-nav py-2 pl-5 pr-2 backdrop-blur-xl"
        >
          <Logo />

          <ul className="mx-auto hidden items-center tab:flex">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="px-4 py-1.5 text-sm font-medium text-white transition hover:text-accent">
                  {l.label}
                </Link>
              </li>
            ))}
            <li className="relative" onMouseLeave={() => setSolutions(false)}>
              <button
                type="button"
                aria-expanded={solutions}
                onClick={() => setSolutions((v) => !v)}
                onMouseEnter={() => setSolutions(true)}
                className="flex items-center gap-1 px-4 py-1.5 text-sm font-medium text-white transition hover:text-accent"
              >
                Solutions <ChevronDown className={cn("size-4 transition", solutions && "rotate-180")} />
              </button>
              {solutions && (
                <div className="absolute left-1/2 top-full w-64 -translate-x-1/2 pt-3">
                  <div className="rounded-2xl border border-line bg-panel p-2 shadow-2xl">
                    {solutionLinks.map((s) => (
                      <Link key={s.href} href={s.href} className="block rounded-xl px-3 py-2.5 hover:bg-white/5">
                        <span className="block text-sm font-medium text-white">{s.label}</span>
                        <span className="block text-xs text-dim">{s.description}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </li>
          </ul>

          <div className="ml-auto hidden items-center gap-3 tab:flex">
            <Link href={loginUrl} className="px-4 py-1.5 text-sm font-medium text-white hover:text-accent">
              Login
            </Link>
            <ButtonLink href={signupUrl()} size="sm">
              Try it free
            </ButtonLink>
          </div>

          <button
            type="button"
            className="ml-auto rounded-full p-2 text-white tab:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </nav>

        {open && (
          <div className="mt-2 rounded-3xl border border-line bg-panel/95 p-4 backdrop-blur-xl tab:hidden">
            <ul className="flex flex-col">
              {[...navLinks, ...solutionLinks].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-3 py-3 text-sm font-medium text-white hover:bg-white/5"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-3 grid gap-2">
              <ButtonLink href={loginUrl} variant="outline" size="sm">
                Login
              </ButtonLink>
              <ButtonLink href={signupUrl()} variant="accent" size="sm">
                Try it free
              </ButtonLink>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
