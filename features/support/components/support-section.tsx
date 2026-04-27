import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { getTranslations } from "next-intl/server"
import { SectionShell } from "@/features/shared-home"

export async function SupportSection() {
  const t = await getTranslations("Landing.support")

  return (
    <SectionShell className="bg-white py-[56px]">
      <Card className="overflow-hidden rounded-[16px] border border-[#d4e6f3] bg-[linear-gradient(180deg,#006EA8_0%,#005685_100%)] text-white shadow-[0_0_0_5px_rgba(255,255,255,1),0_0_0_4px_rgba(232,242,255,1),0_4px_5px_rgba(0,86,133,0.15),0_10px_13px_rgba(0,86,133,0.22),0_24px_32px_rgba(0,86,133,0.19)]">
        <CardContent className="space-y-5 p-8 text-center">
          <p className="text-[12px] leading-[1.16] font-normal text-[#e8f2ff]">{t("eyebrow")}</p>
          <h2 className="text-balance text-[32px] leading-[1.16] font-semibold">{t("title")}</h2>
          <p className="mx-auto max-w-[700px] text-[16px] leading-[1.16] font-normal text-[#d7e7f1]">{t("description")}</p>
          <div className="flex flex-wrap justify-center gap-3 pt-2">
            <Button variant="secondary" className="h-[44px] rounded-[12px] bg-white px-4 text-[16px] text-[#002B46] hover:bg-[#eaf7ff]">
              {t("actions.faqs")}
            </Button>
            <Button variant="outline" className="h-[44px] rounded-[12px] border-white bg-white/10 px-4 text-[16px] text-white hover:bg-white/20">
              {t("actions.contact")}
            </Button>
          </div>
        </CardContent>
      </Card>
    </SectionShell>
  )
}
