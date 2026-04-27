import { Card, CardContent } from "@/components/ui/card"
import { getTranslations } from "next-intl/server"
import { SectionShell } from "@/features/shared-home"
import { getProcessSteps } from "@/features/process/services/process.service"

export async function ProcessSection() {
  const t = await getTranslations("Landing.process")
  const steps = getProcessSteps()

  return (
    <SectionShell className="relative overflow-hidden bg-[#001222] py-[64px]">
      <div className="absolute inset-x-0 bottom-0 h-[280px] bg-[radial-gradient(circle_at_center,rgba(64,160,202,0.35),rgba(0,18,34,0))]" />
      <div className="relative space-y-4 text-center">
        <p className="text-[12px] leading-[1.16] font-normal text-[#40A0CA]">{t("eyebrow")}</p>
        <h2 className="mx-auto max-w-[866px] text-balance text-[36px] leading-normal font-bold text-white">{t("title")}</h2>
        <p className="mx-auto max-w-[500px] text-[16px] leading-[1.16] font-normal text-[#f5f5f5]">{t("description")}</p>
      </div>

      <div className="relative mt-10 grid gap-6 md:grid-cols-3">
        <div className="pointer-events-none absolute top-[34px] left-[16%] right-[16%] hidden border-t-2 border-dashed border-[#40A0CA] md:block" />
        {steps.map((step, index) => (
          <Card key={step} className="rounded-[8px] border-0 bg-transparent text-white">
            <CardContent className="space-y-3 px-2 py-0 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-[#40A0CA] bg-[#002B46] text-[14px] font-medium">
                {index + 1}
              </div>
              <p className="text-[20px] leading-[1.16] font-bold">{t(`steps.${step}.title`)}</p>
              <p className="text-[16px] leading-[1.16] font-light text-[#fafafa]">{t(`steps.${step}.description`)}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </SectionShell>
  )
}
