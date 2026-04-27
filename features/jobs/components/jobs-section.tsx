import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { getTranslations } from "next-intl/server"
import { SectionShell } from "@/features/shared-home"
import { getJobFilterKeys, getJobKeys } from "@/features/jobs/services/jobs.service"

export async function JobsSection() {
  const t = await getTranslations("Landing.jobs")
  const jobs = getJobKeys()
  const filters = getJobFilterKeys()

  return (
    <SectionShell id="jobs" className="bg-white py-[82px]">
      <div className="space-y-4">
        <p className="text-[12px] leading-[1.16] font-normal text-[#40A0CA]">{t("eyebrow")}</p>
        <h2 className="max-w-[866px] text-balance text-[36px] leading-normal font-bold text-[#171717]">{t("title")}</h2>
        <p className="max-w-[500px] text-[16px] leading-[1.16] font-normal text-[#525252]">{t("description")}</p>
      </div>

      <div className="mt-8 flex flex-wrap gap-6 border-b border-[#002B46] pb-2">
        {filters.map((filter) => (
          <Badge
            key={filter}
            variant="secondary"
            className="rounded-none border-b border-transparent bg-transparent px-0 py-1 text-[16px] font-medium text-[#40A0CA] first:border-[#002B46] first:text-[#002B46]"
          >
            {t(`filters.${filter}`)}
          </Badge>
        ))}
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {jobs.map((job, index) => (
          <Card
            key={job}
            className={
              index === 1
                ? "rounded-[8px] border border-[#00A3F7] bg-[linear-gradient(180deg,#006EA8_0%,#005685_100%)] text-white shadow-[0_0_0_5px_rgba(255,255,255,1),0_0_0_4px_rgba(232,242,255,1),0_4px_5px_rgba(0,86,133,0.15),0_10px_13px_rgba(0,86,133,0.22),0_24px_32px_rgba(0,86,133,0.19)]"
                : "rounded-[8px] border border-[#dadada] bg-white"
            }
          >
            <CardContent className="space-y-4 p-6">
              <Badge
                className={
                  index === 1
                    ? "w-fit rounded-[64px] bg-white/20 px-3 py-2 text-[12px] text-white"
                    : "w-fit rounded-[64px] bg-[#f5f5f5] px-3 py-2 text-[12px] text-[#525252]"
                }
              >
                {t(`items.${job}.department`)}
              </Badge>
              <h3 className={`text-[20px] leading-[1.16] font-bold ${index === 1 ? "text-white" : "text-[#262626]"}`}>
                {t(`items.${job}.title`)}
              </h3>
              <div className="flex items-center justify-between">
                <p className={`text-[16px] leading-[1.16] font-medium ${index === 1 ? "text-white" : "text-[#002B46]"}`}>$1200 /month</p>
                <p className={`text-[16px] leading-[1.16] font-medium ${index === 1 ? "text-white" : "text-[#002B46]"}`}>{t(`items.${job}.type`)}</p>
              </div>
              <p className={`text-[16px] leading-[1.16] font-normal ${index === 1 ? "text-[#e8f2ff]" : "text-[#525252]"}`}>{t(`items.${job}.company`)}</p>
              <Button
                variant="outline"
                className={`h-[44px] w-full rounded-[12px] ${index === 1 ? "border-white bg-white/10 text-white" : "border-[#dadada]"}`}
              >
                {t("moreDetails")}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-8">
        <Button className="h-11 rounded-xl bg-[#001222] px-5 text-base font-medium hover:bg-[#002b46]">{t("showAll")}</Button>
      </div>
    </SectionShell>
  )
}
