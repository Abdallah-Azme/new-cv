"use client"

import * as React from "react"
import Image from "next/image"
import { Check, ChevronDown } from "lucide-react"
import { useLocale, useTranslations } from "next-intl"
import { Button } from "@/components/ui/button"
import { PrimaryButton } from "@/components/ui/primary-button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Link, usePathname } from "@/i18n/navigation"
import { cn } from "@/lib/utils"

type NavItemKey = "home" | "about" | "services" | "jobs" | "news" | "contact"

type SiteHeaderProps = {
  activeItem?: NavItemKey
}

const NAV_ITEMS: Array<{ key: NavItemKey; href: string }> = [
  { key: "home", href: "/" },
  { key: "about", href: "/about" },
  { key: "services", href: "/#categories" },
  { key: "jobs", href: "/jobs" },
  { key: "news", href: "/news" },
  { key: "contact", href: "/contact" },
]

const LOCALE_OPTIONS = [
  { locale: "de", labelKey: "locale.de" },
  { locale: "en", labelKey: "locale.en" },
  { locale: "ar", labelKey: "locale.ar" },
] as const

export function SiteHeader({ activeItem }: SiteHeaderProps) {
  const t = useTranslations("Landing.hero")
  const currentLocale = useLocale()
  const currentLocaleOption = LOCALE_OPTIONS.find((option) => option.locale === currentLocale) ?? LOCALE_OPTIONS[0]
  const pathname = usePathname()

  const activeNav = React.useMemo(() => {
    if (activeItem) return activeItem
    const item = NAV_ITEMS.find((item) => {
      if (item.href === "/") return pathname === "/"
      return pathname.startsWith(item.href)
    })
    return item?.key
  }, [activeItem, pathname])



  return (
    <header className="relative w-full overflow-hidden bg-[#001222]">
      <div className="mx-auto flex h-[128px] max-w-[1512px] items-center justify-between px-6 lg:px-[100px]">
        {/* Background Glows - Subtler as per design */}
        <div className="pointer-events-none absolute top-0 -start-[10%] h-full w-[40%] bg-[#80CDF6] opacity-10 blur-[120px]" />
        <div className="pointer-events-none absolute top-0 -end-[10%] h-full w-[40%] bg-[#80CDF6] opacity-10 blur-[120px]" />

        <Link href="/" aria-label={t("brand")} className="relative z-10 shrink-0">
          <Image src="/home/hero/hero-logo.svg" alt={t("brand")} width={64} height={64} className="h-14 w-14 lg:h-16 lg:w-16" />
        </Link>

        <nav className="relative z-10 hidden items-center gap-4 lg:flex">
          {NAV_ITEMS.map((item, index) => (
            <React.Fragment key={item.key}>
              {index > 0 && <div className="h-[18px] w-px bg-white/20" aria-hidden="true" />}
              <Link
                href={item.href}
                className={cn(
                  "px-2 text-[16px] leading-[1.16] font-normal text-white transition-colors hover:text-[#7CCEF3]",
                  activeNav === item.key && "text-[#40A0CA]"
                )}
              >
                {t(`nav.${item.key}`)}
              </Link>
            </React.Fragment>
          ))}
        </nav>

        <div className="relative z-10 flex items-center gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                className="h-[44px] gap-2 rounded-[12px] border border-[#40A0CA]/50 bg-transparent px-3 text-white hover:bg-white/5"
                aria-label={t("languageAria")}
              >
                <ChevronDown className="h-4 w-4 text-white/90" />
                <span className="h-4 w-6 rounded-[2px] bg-[linear-gradient(180deg,#000_0%,#000_33%,#dd0000_33%,#dd0000_66%,#ffce00_66%,#ffce00_100%)]" />
              </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end" className="w-[190px] rounded-[12px] border border-[#cfe7f7] bg-white p-1">
              {LOCALE_OPTIONS.map((option) => (
                <DropdownMenuItem key={option.locale} asChild className="rounded-[8px] px-2 py-2 text-[#032C44]">
                  <Link locale={option.locale} href={pathname} className="flex w-full items-center justify-between">
                    <span>{t(option.labelKey)}</span>
                    {option.locale === currentLocaleOption.locale ? <Check className="h-4 w-4 text-[#006EA8]" /> : null}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <Link href="/sign-in">
            <PrimaryButton className="w-[140px] lg:w-[150px]">
              {t("login")}
            </PrimaryButton>
          </Link>
        </div>
      </div>
    </header>
  )
}
