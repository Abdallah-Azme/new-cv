import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { getTranslations } from "next-intl/server"
import { SectionShell } from "@/features/shared-home"
import { getCategoryKeys } from "@/features/categories/services/categories.service"

export async function CategoriesSection() {
  const t = await getTranslations("Landing.categories")
  const categories = getCategoryKeys()

  return (
    <SectionShell id="categories" className="bg-white py-[82px]">
      <div className="space-y-4">
        <p className="text-[12px] leading-[1.16] font-normal text-[#40A0CA]">{t("eyebrow")}</p>
        <h2 className="max-w-[866px] text-balance text-[36px] leading-normal font-bold text-[#171717]">
          {t("title")}
        </h2>
        <p className="max-w-[500px] text-[16px] leading-[1.16] font-normal text-[#525252]">{t("description")}</p>
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_1fr_1fr_1fr]">
        {categories.slice(0, 6).map((key, index) => {
          const isFeatured = index === 2
          return (
            <Card
              key={key}
              className={
                isFeatured
                  ? "rounded-[8px] border border-[#4BB7E7] bg-[linear-gradient(180deg,#2D7494_0%,#398DB3_100%)] text-white shadow-[0_0_0_5px_rgba(255,255,255,1),0_0_0_4px_rgba(194,227,250,1),0_4px_5px_rgba(75,183,231,0.15),0_10px_13px_rgba(75,183,231,0.22),0_24px_32px_rgba(75,183,231,0.19)]"
                  : "rounded-[8px] border border-[#d4d4d4] bg-white"
              }
            >
              <CardContent className="space-y-6 p-6">
                <p className={`text-[20px] leading-[1.16] font-bold ${isFeatured ? "text-white" : "text-[#262626]"}`}>
                  {t(`items.${key}.label`)}
                </p>
                <Badge
                  variant="secondary"
                  className={`rounded-[8000px] px-3 py-2 text-[12px] font-medium ${
                    isFeatured ? "bg-white/20 text-[#fafafa]" : "bg-[#f5f5f5] text-[#525252]"
                  }`}
                >
                  {t(`items.${key}.vacancy`)}
                </Badge>
              </CardContent>
            </Card>
          )
        })}

        <Card className="rounded-[8px] border border-[#4BB7E7] bg-[linear-gradient(180deg,#2D7494_0%,#398DB3_100%)] text-white shadow-[0_0_0_5px_rgba(255,255,255,1),0_0_0_4px_rgba(194,227,250,1),0_4px_5px_rgba(75,183,231,0.15),0_10px_13px_rgba(75,183,231,0.22),0_24px_32px_rgba(75,183,231,0.19)]">
          <CardContent className="flex h-full flex-col justify-between gap-6 p-6">
            <div className="space-y-4">
              <p className="text-[64px] leading-[1.16] font-medium">13k+</p>
              <p className="text-[16px] leading-[1.16] font-normal">{t("metricLabel")}</p>
            </div>
            <Button
              variant="outline"
              className="h-[52px] rounded-[12px] border-white bg-[linear-gradient(180deg,#006EA8_0%,#005685_100%)] text-white"
            >
              {t("showMore")}
            </Button>
          </CardContent>
        </Card>
      </div>
      <div className="mt-6 grid gap-6 lg:grid-cols-4">
        {categories.slice(6).map((key) => (
          <Card key={key} className="rounded-[8px] border border-[#d4d4d4] bg-white">
            <CardContent className="space-y-6 p-6">
              <p className="text-[20px] leading-[1.16] font-bold text-[#262626]">{t(`items.${key}.label`)}</p>
              <Badge variant="secondary" className="rounded-[8000px] bg-[#f5f5f5] px-3 py-2 text-[12px] font-medium text-[#525252]">
                {t(`items.${key}.vacancy`)}
              </Badge>
            </CardContent>
          </Card>
        ))}
      </div>
    </SectionShell>
  )
}
