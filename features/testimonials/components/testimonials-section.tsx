import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { getTranslations } from "next-intl/server"
import { SectionShell } from "@/features/shared-home"

export async function TestimonialsSection() {
  const t = await getTranslations("Landing.testimonials")

  return (
    <SectionShell className="bg-[#f8fcff] py-[82px]">
      <div className="space-y-4 text-center">
        <p className="text-[12px] leading-[1.16] font-normal text-[#40A0CA]">{t("eyebrow")}</p>
        <h2 className="mx-auto max-w-[866px] text-balance text-[36px] leading-normal font-bold text-[#171717]">{t("title")}</h2>
        <p className="mx-auto max-w-[500px] text-[16px] leading-[1.16] font-normal text-[#525252]">{t("description")}</p>
      </div>
      <div className="mt-8 grid items-start gap-6 lg:grid-cols-[1fr_1.1fr_1fr]">
        <div className="space-y-6">
          <Image src="/home/content/testimonial-left.png" alt="" width={445} height={445} className="h-auto w-full rounded-[32px] object-cover" />
          <div>
            <p className="text-[16px] text-[#525252]">{t(`items.jacob.role`)}</p>
            <p className="text-[32px] leading-normal font-bold text-[#171717]">{t(`items.jacob.name`)}</p>
          </div>
        </div>

        <Card className="rounded-[32px] border border-[#00A3F7] bg-[linear-gradient(180deg,#006EA8_0%,#005685_100%)] text-white shadow-[0_0_0_5px_rgba(255,255,255,1),0_0_0_4px_rgba(232,242,255,1),0_4px_5px_rgba(0,86,133,0.15),0_10px_13px_rgba(0,86,133,0.22),0_24px_32px_rgba(0,86,133,0.19)]">
          <CardContent className="space-y-16 p-8">
            <p className="text-[24px] leading-normal">{t(`items.jacob.quote`)}</p>
            <div>
              <p className="text-[16px]">{t(`items.jacob.role`)}</p>
              <p className="text-[32px] leading-normal font-bold">{t(`items.jacob.name`)}</p>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-6">
          <Image src="/home/content/testimonial-right-1.png" alt="" width={445} height={445} className="h-auto w-full rounded-[32px] object-cover" />
          <div>
            <p className="text-[16px] text-[#525252]">{t(`items.albert.role`)}</p>
            <p className="text-[32px] leading-normal font-bold text-[#171717]">{t(`items.albert.name`)}</p>
          </div>
        </div>
      </div>
    </SectionShell>
  )
}
