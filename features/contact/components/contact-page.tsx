import Image from "next/image"
import type { ReactNode } from "react"
import { PrimaryButton } from "@/components/ui/primary-button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Link } from "@/i18n/navigation"
import { getTranslations } from "next-intl/server"
import { Camera, CirclePlay, MapPin, Phone, Send, Mail, SendHorizonal } from "lucide-react"
import { getContactFaqs } from "@/features/contact/services/contact-faqs.service"
import { SectionShell, SiteHeader } from "@/features/shared-home"

export async function ContactPage() {
  const t = await getTranslations("Landing.contact")
  const footerT = await getTranslations("Landing.footer")
  const faqs = getContactFaqs()

  return (
    <main className="flex-1 bg-white">
      <SiteHeader activeItem="contact" />

      <SectionShell className="relative bg-white py-[72px]">
        <div className="absolute inset-0 opacity-[0.05]">
          <Image src="/contact/noise-bg.png" alt="" fill className="object-cover" />
        </div>
        <div className="relative space-y-8">
          <div className="space-y-6">
            <p className="inline-flex items-center gap-2 rounded-[8px] bg-[rgba(64,160,202,0.25)] px-4 py-2 text-[12px] leading-[1.16] text-[#40A0CA]">
              <SendHorizonal className="h-4 w-4" />
              {t("eyebrow")}
            </p>
            <div className="max-w-[643px] space-y-6">
              <h1 className="font-heading text-[48px] leading-[1.16] font-bold text-[#171717]">{t("title")}</h1>
              <p className="text-[16px] leading-normal text-[#525252]">{t("description")}</p>
            </div>
          </div>

          <div className="grid overflow-hidden rounded-[16px] border border-[#d4d4d4] bg-white lg:grid-cols-2">
            <div className="relative min-h-[520px]">
              <Image src="/contact/contact-map.png" alt={t("mapAlt")} fill className="object-cover" />
            </div>

            <div className="space-y-12 p-8 md:p-16">
              <h2 className="font-heading text-[36px] leading-[1.16] font-bold text-[#032C44]">{t("form.title")}</h2>
              <form className="space-y-8">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-4">
                    <label className="text-base font-medium text-[#262626]">{t("form.nameLabel")}</label>
                    <Input placeholder={t("form.namePlaceholder")} className="rounded-none border-0 border-b border-[#d4d4d4] px-0 focus-visible:ring-0" />
                  </div>
                  <div className="space-y-4">
                    <label className="text-base font-medium text-[#262626]">{t("form.emailLabel")}</label>
                    <Input placeholder={t("form.emailPlaceholder")} className="rounded-none border-0 border-b border-[#d4d4d4] px-0 focus-visible:ring-0" />
                  </div>
                  <div className="space-y-4">
                    <label className="text-base font-medium text-[#262626]">{t("form.phoneLabel")}</label>
                    <Input placeholder={t("form.phonePlaceholder")} className="rounded-none border-0 border-b border-[#d4d4d4] px-0 focus-visible:ring-0" />
                  </div>
                  <div className="space-y-4">
                    <label className="text-base font-medium text-[#262626]">{t("form.subjectLabel")}</label>
                    <Input
                      placeholder={t("form.subjectPlaceholder")}
                      className="rounded-none border-0 border-b border-[#d4d4d4] px-0 focus-visible:ring-0"
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <label className="text-base font-medium text-[#262626]">{t("form.messageLabel")}</label>
                  <Textarea
                    placeholder={t("form.messagePlaceholder")}
                    className="min-h-[88px] resize-none rounded-none border-0 border-b border-[#d4d4d4] px-0 focus-visible:ring-0"
                  />
                </div>

                <PrimaryButton>
                  <Send className="h-4 w-4" />
                  {t("form.send")}
                </PrimaryButton>
              </form>
            </div>
          </div>
        </div>
      </SectionShell>

      <section className="relative py-[46px]">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#001222_0%,#032C44_100%)]" />
        <div className="absolute inset-0 opacity-[0.05]">
          <Image src="/contact/noise-bg.png" alt="" fill className="object-cover" />
        </div>
        <SectionShell className="relative bg-transparent py-0">
          <div className="grid gap-4 md:grid-cols-3">
            <ContactInfoCard icon={<Phone className="h-12 w-12 text-[#40A0CA]" />} label={t("info.phoneLabel")} value={footerT("contact.phone")} />
            <ContactInfoCard icon={<Mail className="h-12 w-12 text-[#40A0CA]" />} label={t("info.emailLabel")} value={footerT("contact.email")} />
            <ContactInfoCard icon={<MapPin className="h-12 w-12 text-[#40A0CA]" />} label={t("info.addressLabel")} value={footerT("contact.address")} />
          </div>
        </SectionShell>
      </section>

      <SectionShell className="relative bg-white py-[112px]">
        <div className="absolute inset-0 opacity-[0.05]">
          <Image src="/contact/noise-bg.png" alt="" fill className="object-cover" />
        </div>
        <div className="relative mx-auto max-w-[866px] space-y-16">
          <div className="space-y-6 text-center">
            <p className="inline-flex items-center gap-2 rounded-[8px] bg-[rgba(64,160,202,0.25)] px-4 py-2 text-[12px] leading-[1.16] text-[#40A0CA]">
              <SendHorizonal className="h-4 w-4" />
              {t("faq.eyebrow")}
            </p>
            <h2 className="font-heading text-[48px] leading-[1.16] font-bold text-[#171717]">{t("faq.title")}</h2>
            <p className="text-[16px] leading-normal text-[#525252]">{t("faq.description")}</p>
          </div>

          <Accordion type="single" defaultValue={faqs[1]?.id} collapsible className="w-full">
            {faqs.map((faq) => (
              <AccordionItem key={faq.id} value={faq.id} className="border-b border-[#d4d4d4]">
                <AccordionTrigger className="py-4 text-left no-underline hover:no-underline">
                <div className="flex items-center gap-1 text-[18px] leading-normal font-semibold text-[#262626]">
                    <span className="bg-[linear-gradient(270deg,#032C44_0%,#41A0CA_100%)] bg-clip-text text-[20px] font-extrabold text-transparent">
                      Q.
                    </span>
                    {t(`faq.items.${faq.questionKey}`)}
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-4 text-base leading-normal text-[#262626]">
                  {t(`faq.items.${faq.answerKey}`)}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </SectionShell>

      <footer className="relative overflow-hidden bg-[#001222] py-[56px] text-white">
        <div className="absolute inset-0 opacity-[0.35]">
          <Image src="/contact/noise-bg.png" alt="" fill className="object-cover" />
        </div>
        <SectionShell className="relative bg-transparent py-0">
          <div className="border-b border-[#003F64] pb-6">
            <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr_1fr]">
              <div className="space-y-5">
                <Image src="/home/hero/hero-logo.svg" alt={footerT("brand")} width={92} height={124} className="h-[124px] w-[92px]" />
                <p className="max-w-[474px] text-base leading-normal text-[#f5f5f5]">{t("footerDescription")}</p>
                <div className="flex items-center gap-6 text-[#f5f5f5]">
                  <Camera className="h-5 w-5" />
                  <SendHorizonal className="h-5 w-5" />
                  <CirclePlay className="h-5 w-5" />
                </div>
              </div>
              <div className="space-y-6">
                <h3 className="text-[20px] font-bold text-[#40A0CA]">{footerT("quickLinks.title")}</h3>
                <div className="space-y-4 text-base text-[#f5f5f5]">
                  <p>{footerT("quickLinks.items.about")}</p>
                  <p>{footerT("quickLinks.items.jobs")}</p>
                  <p>{footerT("quickLinks.items.services")}</p>
                  <p>{footerT("quickLinks.items.contact")}</p>
                </div>
              </div>
              <div className="space-y-6">
                <h3 className="text-[20px] font-bold text-[#40A0CA]">{footerT("contact.title")}</h3>
                <div className="space-y-4 text-base text-[#f5f5f5]">
                  <p>{footerT("contact.phone")}</p>
                  <p>{footerT("contact.email")}</p>
                  <p>{footerT("contact.address")}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-between gap-3 pt-6 text-sm text-[#f5f5f5]">
            <p>{footerT("copyright")}</p>
            <div className="flex items-center gap-4">
              <span>{t("legal.terms")}</span>
              <span className="h-4 w-px bg-[#40A0CA]" />
              <span>{t("legal.faqs")}</span>
              <span className="h-4 w-px bg-[#40A0CA]" />
              <span>{t("legal.privacy")}</span>
            </div>
          </div>
        </SectionShell>
      </footer>
    </main>
  )
}

type ContactInfoCardProps = {
  icon: ReactNode
  label: string
  value: string
}

function ContactInfoCard({ icon, label, value }: ContactInfoCardProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-6 px-6 py-8 text-center text-[#f5f5f5] md:border-r md:border-[#40A0CA] md:last:border-r-0">
      {icon}
      <div className="space-y-2">
        <p className="text-sm leading-[1.16] text-[#d4d4d4]">{label}</p>
        <p className="text-xl leading-normal">{value}</p>
      </div>
    </div>
  )
}

