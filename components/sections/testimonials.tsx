import { Star } from "lucide-react";
import { Accent, ButtonLink, Container, Pill } from "@/components/ui/primitives";
import { testimonials } from "@/lib/content";
import { signupUrl } from "@/lib/site";

/** Testimonial wall + CTA band with the glowing horizon line. Quotes are placeholders until real ones exist. */
export function Testimonials() {
  return (
    <section className="relative py-24 land:py-32">
      <Container>
        <div className="text-center">
          <Pill>What creators say</Pill>
          <h2 className="h2 mx-auto mt-6 max-w-[40rem]">
            Loved by creators who <Accent>post with a plan</Accent>
          </h2>
          <p className="mt-4 flex items-center justify-center gap-2 text-sm text-dim">
            <span className="flex text-amber-300">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="size-4 fill-current" />
              ))}
            </span>
            Sample reviews — replace with real customer quotes before launch
          </p>
        </div>

        <div className="mt-14 columns-1 gap-5 land:columns-2 tab:columns-3">
          {testimonials.map((t) => (
            <figure key={t.name} className="mb-5 break-inside-avoid rounded-2xl border border-line bg-panel p-6">
              <blockquote className="text-base text-white/85">“{t.quote}”</blockquote>
              <figcaption className="mt-5 flex items-center gap-3">
                <span className="grid size-9 place-items-center rounded-full bg-chip text-xs font-semibold text-white">
                  {t.name.split(" ").map((p) => p[0]).join("")}
                </span>
                <span>
                  <span className="block text-sm font-semibold text-white">{t.name}</span>
                  <span className="block text-xs text-dim">{t.role}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>

      <div className="relative mt-24">
        <div className="horizon" />
        <Container className="pt-24 text-center">
          <Pill>Stop guessing what to post</Pill>
          <h2 className="h2 mx-auto mt-6 max-w-[40rem]">
            Make content you <Accent>know</Accent> will work
          </h2>
          <div className="mt-10 flex justify-center">
            <ButtonLink href={signupUrl()}>Try it free</ButtonLink>
          </div>
        </Container>
      </div>
    </section>
  );
}
