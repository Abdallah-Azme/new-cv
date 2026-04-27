import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Link } from "@/i18n/navigation"
import { getTranslations } from "next-intl/server"
import { SectionShell } from "@/features/shared-home"
import { getNewsKeys } from "@/features/news/services/news.service"

export async function NewsSection() {
  const t = await getTranslations("Landing.news")
  const news = getNewsKeys()

  return (
    <SectionShell id="news" className="bg-white py-[82px]">
      <div className="space-y-4">
        <p className="text-[12px] leading-[1.16] font-normal text-[#40A0CA]">{t("eyebrow")}</p>
        <h2 className="max-w-[866px] text-balance text-[36px] leading-normal font-bold text-[#171717]">{t("title")}</h2>
        <p className="max-w-[500px] text-[16px] leading-[1.16] font-normal text-[#525252]">{t("description")}</p>
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-[1.3fr_1fr]">
        <Card className="overflow-hidden rounded-[16px] border border-[#dadada] bg-white">
          <Image src="/home/content/news-feature.png" alt="" width={1287} height={858} className="h-[445px] w-full object-cover" />
          <CardContent className="space-y-3 p-6">
            <h3 className="text-[40px] leading-normal font-medium text-[#171717]">{t("items.first.title")}</h3>
            <p className="text-[20px] leading-[1.16] text-[#525252]">{t("items.first.description")}</p>
            <Link href="/news/first">
              <Button className="h-[52px] w-[220px] rounded-[12px] border border-white bg-[linear-gradient(180deg,#006EA8_0%,#005685_100%)] text-white">
                {t("readMore")}
              </Button>
            </Link>
          </CardContent>
        </Card>
        <div className="space-y-6">
          {news.slice(1).map((item, idx) => (
            <Link key={item} href={`/news/${item}`} className="block">
              <Card className="rounded-[16px] border border-[#dadada] bg-white">
                <CardContent className="flex gap-4 p-4">
                  <Image
                    src={`/home/content/news-${idx + 1}.png`}
                    alt=""
                    width={223}
                    height={223}
                    className="h-[140px] w-[140px] rounded-[16px] object-cover"
                  />
                  <div className="flex flex-1 flex-col justify-between gap-4 py-2">
                    <div className="space-y-3">
                      <h3 className="text-[32px] leading-[1.16] font-semibold text-[#171717]">{t(`items.${item}.title`)}</h3>
                      <p className="text-[16px] leading-[1.16] text-[#525252]">{t(`items.${item}.description`)}</p>
                    </div>
                    <p className="text-[16px] leading-[1.16] text-[#525252]">{t(`items.${item}.date`)}</p>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </SectionShell>
  )
}
