import Image from "next/image"
import { Button } from "@/components/ui/button"
import { getTranslations } from "next-intl/server"
import { SectionShell, SiteHeader } from "@/features/shared-home"

export async function HeroSection() {
  const t = await getTranslations("Landing.hero")

  return (
    <SectionShell
      id="home"
      className="relative h-[982px] overflow-hidden bg-[linear-gradient(180deg,#001222_0%,#19b8ff_100%)]"
    >
      <Image src="/home/hero/hero-bg-image.png" alt="" fill className="object-cover opacity-[0.35] mix-blend-overlay" aria-hidden />
      <Image src="/home/hero/hero-blur.svg" alt="" fill className="object-cover" aria-hidden />
      <Image
        src="/home/hero/hero-glow-left.svg"
        alt=""
        width={501}
        height={501}
        className="pointer-events-none absolute -top-8 -left-[112px]"
        aria-hidden
      />
      <Image
        src="/home/hero/hero-glow-right.svg"
        alt=""
        width={501}
        height={501}
        className="pointer-events-none absolute -top-8 -right-[112px]"
        aria-hidden
      />

      <div className="relative pt-[32px]">
        <SiteHeader activeItem="home" />

        <div className="mt-[176px] flex flex-col items-center gap-[48px] pb-[30px]">
          <div className="flex flex-col items-center gap-4">
            <p className="inline-flex items-center gap-2 rounded-[8px] bg-[rgba(64,160,202,0.25)] px-4 py-2 text-[12px] leading-[1.16] font-normal text-white">
              <Image src="/home/hero/hero-eyebrow-icon.svg" alt="" width={16} height={16} aria-hidden />
              {t("eyebrow")}
            </p>

            <div className="flex w-full max-w-[866px] flex-col items-center gap-8">
              <h1 className="font-heading max-w-[866px] text-center text-balance text-[72px] leading-[1.16] font-bold text-white">
                {t("title")}
              </h1>
              <span className="h-[9px] w-[300px] rounded-full bg-[#40A0CA]" aria-hidden />
              <p className="max-w-[680px] text-center text-pretty text-[18px] leading-normal font-normal text-white/95">
                {t("description")}
              </p>
            </div>

            <Button className="h-[52px] w-[220px] rounded-[12px] border border-white bg-[linear-gradient(180deg,#006EA8_0%,#005685_100%)] px-4 py-2 text-base leading-[1.16] font-medium text-white shadow-[0_0_0_5px_rgba(255,255,255,1),0_0_0_4px_rgba(232,242,255,1),0_4px_5px_rgba(0,86,133,0.15),0_10px_13px_rgba(0,86,133,0.22),0_25px_32px_rgba(0,86,133,0.19),0_42px_107px_rgba(123,190,255,0.34),inset_0_1px_4px_2px_rgba(194,221,255,1),inset_0_1px_18px_2px_rgba(232,242,255,1)] hover:brightness-110">
              {t("cta")}
            </Button>
          </div>
        </div>
      </div>
    </SectionShell>
  )
}
