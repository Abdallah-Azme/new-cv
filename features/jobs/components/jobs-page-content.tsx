"use client"

import { useMemo, useState, type ReactNode } from "react"
import { CalendarDays, ChevronDown, Filter, MoveUpRight, XCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent } from "@/components/ui/sheet"

type JobsPageContentProps = {
  jobs: readonly string[]
  allJobsLabel: string
  allJobsCountLabel: string
  filterLabel: string
  departmentLabel: string
  postedAgoLabel: string
  salaryPeriodLabel: string
  timeLabel: string
  companyNameLabel: string
  companySubLabel: string
  moreDetailsLabel: string
  filterPanelTitle: string
  clearAllLabel: string
  stateLabel: string
  categoriesLabel: string
  salaryLabel: string
  salaryMinLabel: string
  salaryMaxLabel: string
  salaryFromLabel: string
  salaryToLabel: string
  stateOptions: string[]
  categoryOptions: string[]
}

export function JobsPageContent({
  jobs,
  allJobsLabel,
  allJobsCountLabel,
  filterLabel,
  departmentLabel,
  postedAgoLabel,
  salaryPeriodLabel,
  timeLabel,
  companyNameLabel,
  companySubLabel,
  moreDetailsLabel,
  filterPanelTitle,
  clearAllLabel,
  stateLabel,
  categoriesLabel,
  salaryLabel,
  salaryMinLabel,
  salaryMaxLabel,
  salaryFromLabel,
  salaryToLabel,
  stateOptions,
  categoryOptions,
}: JobsPageContentProps) {
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false)
  const [activeStates, setActiveStates] = useState<number[]>([3, 7])
  const [activeCategories, setActiveCategories] = useState<number[]>([3])
  const [salaryValue, setSalaryValue] = useState(45)

  const jobCards = useMemo(() => jobs.slice(0, 4), [jobs])

  return (
    <div className="mt-[52px] space-y-5">
      <div className="flex items-center justify-between">
        <h2 className="text-[36px] leading-[1.16] font-semibold text-[#171717]">
          {allJobsLabel} <span className="text-[#525252]">({allJobsCountLabel})</span>
        </h2>
        <Button
          onClick={() => setIsMobileFilterOpen(true)}
          className="h-[44px] rounded-[12px] bg-[linear-gradient(180deg,#006EA8_0%,#005685_100%)] px-7 text-base text-white shadow-[0_12px_18px_-8px_rgba(0,110,168,0.65)] hover:brightness-105 lg:hidden"
        >
          <Filter className="h-4 w-4" />
          {filterLabel}
        </Button>
      </div>

      <div className="grid items-start gap-6 lg:grid-cols-[minmax(0,1fr)_416px]">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {jobCards.map((job) => (
            <article key={job} className="rounded-[16px] border border-[#78a3be] bg-white p-6">
              <span className="inline-flex rounded-[64px] bg-[linear-gradient(180deg,#006EA8_0%,#005685_100%)] px-3 py-[6px] text-[11px] text-white">
                {departmentLabel}
              </span>
              <div className="mt-3 flex items-start justify-between gap-3">
                <h3 className="text-[34px] leading-[1.05] font-bold tracking-[-0.8px] text-[#171717]">Job Title</h3>
                <p className="pt-1 text-[17px] text-[#4b5563]">{postedAgoLabel}</p>
              </div>
              <div className="mt-3 flex items-center justify-between text-[29px] leading-[1.1] font-bold text-[#0f172a]">
                <p>
                  $1200 <span className="text-[24px] font-medium text-[#2b8ab6]">{salaryPeriodLabel}</span>
                </p>
                <p className="text-[28px] font-semibold text-[#0f172a]">{timeLabel}</p>
              </div>
              <div className="mt-3">
                <p className="text-[31px] leading-[1.08] font-bold tracking-[-0.7px] text-[#111827]">{companyNameLabel}</p>
                <p className="text-lg text-[#6b7280]">{companySubLabel}</p>
              </div>
              <Button className="mt-5 h-[44px] w-full rounded-[12px] border border-white bg-[url('/contact/button-noise.png'),linear-gradient(180deg,#006EA8_0%,#005685_100%)] bg-size-[300px_300px,auto] bg-blend-overlay text-[20px] text-white shadow-[0_0_0_5px_rgba(255,255,255,1),0_0_0_4px_rgba(232,242,255,1),0_4px_5px_rgba(0,86,133,0.15),0_10px_13px_rgba(0,86,133,0.22),0_25px_32px_rgba(0,86,133,0.19),0_42px_107px_rgba(123,190,255,0.34),inset_0_1px_4px_2px_rgba(194,221,255,1),inset_0_1px_18px_2px_rgba(232,242,255,1)] hover:brightness-105">
                {moreDetailsLabel}
                <MoveUpRight className="h-5 w-5" />
              </Button>
            </article>
          ))}
        </div>

        <aside className="hidden lg:block">
          <FilterPanel
            filterPanelTitle={filterPanelTitle}
            clearAllLabel={clearAllLabel}
            stateLabel={stateLabel}
            categoriesLabel={categoriesLabel}
            salaryLabel={salaryLabel}
            salaryMinLabel={salaryMinLabel}
            salaryMaxLabel={salaryMaxLabel}
            salaryFromLabel={salaryFromLabel}
            salaryToLabel={salaryToLabel}
            stateOptions={stateOptions}
            categoryOptions={categoryOptions}
            activeStates={activeStates}
            activeCategories={activeCategories}
            salaryValue={salaryValue}
            onClearAll={() => {
              setActiveStates([])
              setActiveCategories([])
              setSalaryValue(45)
            }}
            onToggleState={(index) =>
              setActiveStates((prev) => (prev.includes(index) ? prev.filter((item) => item !== index) : [...prev, index]))
            }
            onToggleCategory={(index) =>
              setActiveCategories((prev) => (prev.includes(index) ? prev.filter((item) => item !== index) : [...prev, index]))
            }
            onSalaryChange={setSalaryValue}
          />
        </aside>
      </div>

      <Sheet open={isMobileFilterOpen} onOpenChange={setIsMobileFilterOpen}>
        <SheetContent side="right" className="w-[92vw] max-w-[420px] overflow-y-auto border-l border-[#78a3be] p-0 sm:w-[420px]">
          <div className="p-4 sm:p-6">
            <FilterPanel
              filterPanelTitle={filterPanelTitle}
              clearAllLabel={clearAllLabel}
              stateLabel={stateLabel}
              categoriesLabel={categoriesLabel}
              salaryLabel={salaryLabel}
              salaryMinLabel={salaryMinLabel}
              salaryMaxLabel={salaryMaxLabel}
              salaryFromLabel={salaryFromLabel}
              salaryToLabel={salaryToLabel}
              stateOptions={stateOptions}
              categoryOptions={categoryOptions}
              activeStates={activeStates}
              activeCategories={activeCategories}
              salaryValue={salaryValue}
              onClearAll={() => {
                setActiveStates([])
                setActiveCategories([])
                setSalaryValue(45)
              }}
              onToggleState={(index) =>
                setActiveStates((prev) => (prev.includes(index) ? prev.filter((item) => item !== index) : [...prev, index]))
              }
              onToggleCategory={(index) =>
                setActiveCategories((prev) => (prev.includes(index) ? prev.filter((item) => item !== index) : [...prev, index]))
              }
              onSalaryChange={setSalaryValue}
            />
          </div>
        </SheetContent>
      </Sheet>
    </div>
  )
}

type FilterSectionProps = {
  title: string
  children: ReactNode
}

function FilterSection({ title, children }: FilterSectionProps) {
  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between">
        <h4 className="text-[31px] leading-[1.05] font-medium text-[#262626]">{title}</h4>
        <ChevronDown className="h-4 w-4 text-[#63b2da]" />
      </div>
      {children}
    </section>
  )
}

type FilterChipGridProps = {
  options: string[]
  activeIndices: number[]
  onToggle: (index: number) => void
}

function FilterChipGrid({ options, activeIndices, onToggle }: FilterChipGridProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {options.map((option, index) => {
        const isActive = activeIndices.includes(index)

        return (
          <button
            key={`${option}-${index}`}
            type="button"
            onClick={() => onToggle(index)}
            className={`min-w-[76px] rounded-[64px] border px-4 py-2 text-[16px] leading-[1.16] ${
              isActive ? "border-[#40A0CA] text-[#40A0CA]" : "border-[#a3a3a3] text-[#a3a3a3]"
            }`}
          >
            {option}
          </button>
        )
      })}
    </div>
  )
}

type FilterPanelProps = {
  filterPanelTitle: string
  clearAllLabel: string
  stateLabel: string
  categoriesLabel: string
  salaryLabel: string
  salaryMinLabel: string
  salaryMaxLabel: string
  salaryFromLabel: string
  salaryToLabel: string
  stateOptions: string[]
  categoryOptions: string[]
  activeStates: number[]
  activeCategories: number[]
  salaryValue: number
  onClearAll: () => void
  onToggleState: (index: number) => void
  onToggleCategory: (index: number) => void
  onSalaryChange: (value: number) => void
}

function FilterPanel({
  filterPanelTitle,
  clearAllLabel,
  stateLabel,
  categoriesLabel,
  salaryLabel,
  salaryMinLabel,
  salaryMaxLabel,
  salaryFromLabel,
  salaryToLabel,
  stateOptions,
  categoryOptions,
  activeStates,
  activeCategories,
  salaryValue,
  onClearAll,
  onToggleState,
  onToggleCategory,
  onSalaryChange,
}: FilterPanelProps) {
  return (
    <div className="rounded-[16px] border border-[#78a3be] bg-white p-6">
      <div className="flex items-center justify-between">
        <h3 className="text-[36px] leading-[1.16] font-bold text-[#262626]">{filterPanelTitle}</h3>
        <button type="button" onClick={onClearAll} className="inline-flex items-center gap-1 text-[16px] text-[#262626]">
          <XCircle className="h-4 w-4 text-[#7db5ce]" />
          {clearAllLabel}
        </button>
      </div>

      <div className="mt-8 space-y-6">
        <FilterSection title={stateLabel}>
          <FilterChipGrid options={stateOptions} activeIndices={activeStates} onToggle={onToggleState} />
        </FilterSection>

        <FilterSection title={categoriesLabel}>
          <FilterChipGrid options={categoryOptions} activeIndices={activeCategories} onToggle={onToggleCategory} />
        </FilterSection>

        <FilterSection title={salaryLabel}>
          <div className="space-y-2">
            <div className="flex items-center justify-between text-[16px] text-[#a3a3a3]">
              <span>{salaryMinLabel}</span>
              <span>{salaryMaxLabel}</span>
            </div>
            <input
              type="range"
              min={0}
              max={100}
              value={salaryValue}
              onChange={(event) => onSalaryChange(Number(event.target.value))}
              className="h-6 w-full accent-[#63b2da]"
            />
          </div>
          <div className="mt-4 grid grid-cols-2 gap-4">
            <div className="border-b border-[#a3a3a3] pb-2 text-[16px] text-[#a3a3a3]">{salaryFromLabel}</div>
            <div className="border-b border-[#a3a3a3] pb-2 text-[16px] text-[#a3a3a3]">{salaryToLabel}</div>
          </div>
        </FilterSection>
      </div>
    </div>
  )
}
