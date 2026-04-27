import { getTranslations } from "next-intl/server"
import { ImagePlaceholder } from "./image-placeholder"
import { ProcessSection } from "@/features/process"
import { SectionShell, SiteHeader } from "@/features/shared-home"
import { SupportSection } from "@/features/support"



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
