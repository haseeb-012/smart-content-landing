import { Accent, ButtonLink, Container } from "@/components/ui/primitives";
import { ScreenFrame } from "@/components/sections/screen";
import { signupUrl } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden pb-24 pt-32 land:pt-36">
      <div aria-hidden className="glow-top pointer-events-none absolute inset-0" />
      <div aria-hidden className="grid-bg pointer-events-none absolute inset-0" />
      <Container className="relative">
        <div className="mx-auto max-w-[45rem] text-center">
          <h1 className="h1">
            Turn <Accent>viral outliers</Accent> into scripts that work
          </h1>
          <p className="mx-auto mt-8 max-w-[38rem] text-lg leading-7 text-white">
            Research the top channels in your niche, find the videos that beat the odds, and remix the pattern into
            your own short-form script.
          </p>
          <div className="mt-10 flex justify-center">
            <ButtonLink href={signupUrl()} size="md">
              Try it free
            </ButtonLink>
          </div>
          <p className="mt-6 text-sm text-dim">Built for TikTok, Reels and Shorts creators</p>
        </div>
        <div className="glow-panel mx-auto mt-16 max-w-[80rem] rounded-[28px]">
          <ScreenFrame name="videos" priority />
        </div>
      </Container>
    </section>
  );
}
