import { getTranslations } from "next-intl/server"
import { ProcessSection } from "@/features/process"
import { SectionShell, SiteHeader } from "@/features/shared-home"
import { SupportSection } from "@/features/support"

function ImagePlaceholder({
  className,
  tone = "blue",
}: {
  className?: string
  tone?: "blue" | "warm" | "neutral"
}) {
  const backgroundTone =
    tone === "blue"
      ? "bg-[linear-gradient(135deg,#0f2940_0%,#1f6f9e_45%,#b7d6e9_100%)]"
      : tone === "warm"
        ? "bg-[linear-gradient(135deg,#6f4d36_0%,#9f6f4e_50%,#d2b59a_100%)]"
        : "bg-[linear-gradient(135deg,#3d4a58_0%,#7f94a8_50%,#d5dde6_100%)]"

  return (
    <div
      className={`overflow-hidden rounded-[20px] border border-[#dce9f4] shadow-[0_8px_24px_rgba(0,25,45,0.08)] ${backgroundTone} ${className ?? ""}`}
    >
      <div className="h-full w-full bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.36)_0%,transparent_40%),radial-gradient(circle_at_80%_30%,rgba(255,255,255,0.28)_0%,transparent_36%),linear-gradient(180deg,transparent_30%,rgba(0,18,34,0.2)_100%)]" />
    </div>
  )
}

export async function AboutPage() {
  const aboutT = await getTranslations("Landing.about")

  return (
    <main className="flex-1 bg-[#f8fbff]">

      <SectionShell className="bg-white py-[70px]">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <div className="space-y-5">
            <h1 className="max-w-[540px] text-balance text-[48px] leading-[1.12] font-bold text-[#001222]">{aboutT("intro.title")}</h1>
            <p className="max-w-[620px] text-[16px] leading-relaxed text-[#385066]">{aboutT("intro.descriptionOne")}</p>
            <p className="max-w-[620px] text-[16px] leading-relaxed text-[#385066]">{aboutT("intro.descriptionTwo")}</p>
          </div>

          <div className="relative min-h-[360px]">
            <ImagePlaceholder className="absolute top-0 left-0 h-[235px] w-[80%]" tone="warm" />
            <ImagePlaceholder className="absolute right-0 bottom-0 h-[235px] w-[82%]" tone="neutral" />
          </div>
        </div>
      </SectionShell>

      <ProcessSection />

      <SectionShell className="bg-white py-[82px]">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <div className="space-y-4">
            <p className="inline-flex items-center rounded-[8px] bg-[#eaf4fb] px-3 py-2 text-sm font-medium text-[#0f7abd]">{aboutT("story.eyebrow")}</p>
            <h2 className="max-w-[540px] text-balance text-[44px] leading-[1.12] font-bold text-[#001222]">{aboutT("story.title")}</h2>
            <p className="max-w-[620px] text-[16px] leading-relaxed text-[#385066]">{aboutT("story.descriptionOne")}</p>
            <p className="max-w-[620px] text-[16px] leading-relaxed text-[#385066]">{aboutT("story.descriptionTwo")}</p>
          </div>

          <ImagePlaceholder className="h-[330px] w-full" tone="blue" />
        </div>
      </SectionShell>

      <SupportSection />
    </main>
  )
}
