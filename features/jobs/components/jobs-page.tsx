import Image from "next/image"
import { BriefcaseBusiness, SendHorizonal, CirclePlay, Camera } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Link } from "@/i18n/navigation"
import { getTranslations } from "next-intl/server"
import { SectionShell, SiteHeader } from "@/features/shared-home"
import { getJobKeys } from "@/features/jobs/services/jobs.service"
import { JobsPageContent } from "@/features/jobs/components/jobs-page-content"

export async function JobsPage() {
  const t = await getTranslations("Landing.jobsPage")
  const jobsT = await getTranslations("Landing.jobs")
  const footerT = await getTranslations("Landing.footer")
  const contactT = await getTranslations("Landing.contact")
  const jobs = getJobKeys()

  return (
    <main className="flex-1 bg-white">
      <SectionShell className="relative overflow-hidden bg-[linear-gradient(180deg,#001222_0%,#032c44_100%)] py-8">
        <div className="pointer-events-none absolute -top-[220px] -left-[130px] h-[500px] w-[500px] rounded-full bg-[#80cdf6] blur-[200px]" />
        <div className="pointer-events-none absolute -top-[220px] -right-[130px] h-[500px] w-[500px] rounded-full bg-[#80cdf6] blur-[200px]" />
        <SiteHeader activeItem="jobs" />
      </SectionShell>

      <SectionShell className="relative py-[62px]">
        <div className="mx-auto flex max-w-[866px] flex-col items-center gap-7 text-center">
          <p className="inline-flex items-center gap-2 rounded-[8px] bg-[rgba(64,160,202,0.25)] px-4 py-2 text-[12px] leading-[1.16] text-[#40A0CA]">
            <BriefcaseBusiness className="h-4 w-4" />
            {jobsT("eyebrow")}
          </p>
          <h1 className="font-heading text-balance text-[52px] leading-[1.16] font-bold text-[#171717]">{jobsT("title")}</h1>
          <p className="max-w-[690px] text-[16px] leading-normal text-[#525252]">{jobsT("description")}</p>
          <form className="mt-2 flex w-full max-w-[584px] gap-3">
            <Input
              placeholder={t("searchPlaceholder")}
              className="h-[52px] rounded-[6px] border-[#c4d9e8] bg-[#e8f2ff] text-[#123854] placeholder:text-[#89a1b3]"
            />
            <Button className="h-[52px] min-w-[138px] rounded-[8px] bg-[linear-gradient(180deg,#006EA8_0%,#005685_100%)] text-[18px] font-medium text-white shadow-[0_12px_18px_-8px_rgba(0,110,168,0.65)] hover:brightness-105">
              {t("search")}
            </Button>
          </form>
        </div>

        <JobsPageContent
          jobs={jobs}
          allJobsLabel={t("allJobs")}
          allJobsCountLabel={t("allJobsCount")}
          filterLabel={t("filter")}
          departmentLabel={t("department")}
          postedAgoLabel={t("postedAgo")}
          salaryPeriodLabel={t("salaryPeriod")}
          timeLabel={t("time")}
          companyNameLabel={t("companyName")}
          companySubLabel={t("companySubLabel")}
          moreDetailsLabel={jobsT("moreDetails")}
          filterPanelTitle={t("filterPanel.title")}
          clearAllLabel={t("filterPanel.clearAll")}
          stateLabel={t("filterPanel.state")}
          categoriesLabel={t("filterPanel.categories")}
          salaryLabel={t("filterPanel.salary")}
          salaryMinLabel={t("filterPanel.salaryMin")}
          salaryMaxLabel={t("filterPanel.salaryMax")}
          salaryFromLabel={t("filterPanel.from")}
          salaryToLabel={t("filterPanel.to")}
          stateOptions={[
            t("filterPanel.stateOptions.hassan"),
            t("filterPanel.stateOptions.alle"),
            t("filterPanel.stateOptions.alle"),
            t("filterPanel.stateOptions.alle"),
            t("filterPanel.stateOptions.alle"),
            t("filterPanel.stateOptions.alle"),
            t("filterPanel.stateOptions.alle"),
            t("filterPanel.stateOptions.alle"),
          ]}
          categoryOptions={[
            t("filterPanel.categoryOptions.marketing"),
            t("filterPanel.categoryOptions.design"),
            t("filterPanel.categoryOptions.it"),
            t("filterPanel.categoryOptions.medical"),
            t("filterPanel.categoryOptions.marketing"),
            t("filterPanel.categoryOptions.marketing"),
            t("filterPanel.categoryOptions.marketing"),
            t("filterPanel.categoryOptions.marketing"),
          ]}
        />
      </SectionShell>

      <footer className="relative overflow-hidden bg-[#001222] py-[56px] text-white">
        <SectionShell className="relative bg-transparent py-0">
          <div className="border-b border-[#003F64] pb-6">
            <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr_1fr]">
              <div className="space-y-5">
                <Image src="/home/hero/hero-logo.svg" alt={footerT("brand")} width={92} height={124} className="h-[124px] w-[92px]" />
                <p className="max-w-[474px] text-base leading-normal text-[#f5f5f5]">{contactT("footerDescription")}</p>
                <div className="flex items-center gap-6 text-[#f5f5f5]">
                  <Camera className="h-5 w-5" />
                  <SendHorizonal className="h-5 w-5" />
                  <CirclePlay className="h-5 w-5" />
                </div>
              </div>
              <div className="space-y-6">
                <h3 className="text-[20px] font-bold text-[#40A0CA]">{footerT("quickLinks.title")}</h3>
                <div className="space-y-4 text-base text-[#f5f5f5]">
                  <Link href="/about">{footerT("quickLinks.items.about")}</Link>
                  <Link href="/jobs">{footerT("quickLinks.items.jobs")}</Link>
                  <span>{footerT("quickLinks.items.services")}</span>
                  <Link href="/contact">{footerT("quickLinks.items.contact")}</Link>
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
              <span>{contactT("legal.terms")}</span>
              <span className="h-4 w-px bg-[#40A0CA]" />
              <span>{contactT("legal.faqs")}</span>
              <span className="h-4 w-px bg-[#40A0CA]" />
              <span>{contactT("legal.privacy")}</span>
            </div>
          </div>
        </SectionShell>
      </footer>
    </main>
  )
}
