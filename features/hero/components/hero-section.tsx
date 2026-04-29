import Image from "next/image"
import { getTranslations } from "next-intl/server"
import { PrimaryButton } from "@/components/ui/primary-button"
import { SectionShell } from "@/features/shared-home"

export async function HeroSection() {
  const t = await getTranslations("Landing.hero")
  const title = t("title")

  // Function to wrap the highlighted word
  const renderTitle = () => {
    const highlightWords = ["Germany", "ألمانيا", "Deutschland"]
    let parts = [title]

    for (const word of highlightWords) {
      if (title.includes(word)) {
        parts = title.split(word)
        return (
          <>
            {parts[0]}
            <span className="relative inline-block px-4 py-1">
              <span className="relative z-10">{word}</span>
              <Image
                src="/home/splash.png"
                alt=""
                fill
                className="absolute inset-0 z-0 h-full w-full scale-150 object-contain opacity-90"
                aria-hidden
              />
            </span>
            {parts[1]}
          </>
        )
      }
    }
    return title
  }

  return (
    <SectionShell
      id="home"
      className="relative h-[982px] overflow-hidden bg-[#001222]"
    >
      {/* Background Bars */}
      <div 
        className="absolute inset-0 z-0 opacity-40"
        style={{
          background: "repeating-linear-gradient(90deg, transparent, transparent 50px, rgba(64, 160, 202, 0.15) 50px, rgba(64, 160, 202, 0.15) 100px)",
          maskImage: "linear-gradient(to top, black 0%, transparent 80%)",
          WebkitMaskImage: "linear-gradient(to top, black 0%, transparent 80%)"
        }}
      />

      <Image src="/home/hero/hero-bg-image.png" alt="" fill className="z-1 object-cover opacity-[0.15] mix-blend-overlay" aria-hidden />
      <Image src="/home/hero/hero-blur.svg" alt="" fill className="z-2 object-cover opacity-50" aria-hidden />
      
      <Image
        src="/home/hero/hero-glow-left.svg"
        alt=""
        width={501}
        height={501}
        className="pointer-events-none absolute -top-8 -left-[112px] z-3 opacity-30"
        aria-hidden
      />
      <Image
        src="/home/hero/hero-glow-right.svg"
        alt=""
        width={501}
        height={501}
        className="pointer-events-none absolute -top-8 -right-[112px] z-3 opacity-30"
        aria-hidden
      />

      <div className="relative z-10">
        <div className="mt-[48px] flex flex-col items-center gap-[48px] pb-[30px]">
          <div className="flex flex-col items-center gap-4">
            <p className="inline-flex items-center gap-2 rounded-[8px] bg-[rgba(64,160,202,0.15)] px-4 py-2 text-[12px] leading-[1.16] font-normal text-white border border-white/10">
              <Image src="/home/hero/hero-eyebrow-icon.svg" alt="" width={16} height={16} aria-hidden />
              {t("eyebrow")}
            </p>

            <div className="flex w-full max-w-[950px] flex-col items-center gap-8 mt-4">
              <h1 className="font-heading max-w-[866px] text-center text-balance text-[72px] leading-[1.1] font-bold text-white">
                {renderTitle()}
              </h1>
              <p className="max-w-[680px] text-center text-pretty text-[18px] leading-[1.6] font-normal text-white/80">
                {t("description")}
              </p>
            </div>

            <PrimaryButton className="h-[52px] w-[220px] mt-4">
              {t("cta")}
            </PrimaryButton>
          </div>
        </div>
      </div>
    </SectionShell>
  )
}
