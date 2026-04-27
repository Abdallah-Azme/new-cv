import type { ReactNode } from "react"
import Image from "next/image"
import { Link } from "@/i18n/navigation"

type Props = {
  backLabel: string
  backHref: string
  logoAlt: string
  title: string
  description: string
  children: ReactNode
  footerPrefix: string
  footerActionLabel: string
  footerActionHref: string
  topSlot?: ReactNode
  asideSlot?: ReactNode
}

export function AuthCardWrapper({
  backLabel,
  backHref,
  logoAlt,
  title,
  description,
  children,
  footerPrefix,
  footerActionLabel,
  footerActionHref,
  topSlot,
  asideSlot,
}: Props) {
  return (
    <section className="relative flex min-h-screen w-full items-center justify-center px-4 py-10 text-white sm:px-6">
      <Link
        href={backHref}
        className="absolute inset-s-[100px] top-12 inline-flex h-10 items-center justify-center gap-2 rounded-xl px-8 py-2 text-base text-[#40a0ca]"
      >
        <Image src="/auth/back.svg" alt="" width={24} height={24} aria-hidden />
        <span>{backLabel}</span>
      </Link>

      <div className="flex w-[470px] flex-col items-center gap-12">
        <header className="flex w-[470px] flex-col items-center gap-8">
          <Image src="/auth/logo.svg" alt={logoAlt} width={122} height={131} priority />

          <div className="flex w-full flex-col items-center gap-6">
            <div className="flex w-full flex-col items-center gap-4 text-center">
              <h1 className="font-heading text-2xl leading-9 font-bold text-white">{title}</h1>
              <p className="max-w-[412px] text-base leading-6 text-[#f5f5f5]">{description}</p>
            </div>

            {topSlot}
          </div>
        </header>

        <div className="flex w-[470px] flex-col gap-4">
          {children}
          {asideSlot}
        </div>

        <footer className="flex w-[470px] flex-col items-center gap-6">
          <div className="flex items-center gap-1 text-sm leading-[21px]">
            <span className="text-white">{footerPrefix}</span>
            <Link href={footerActionHref} className="font-medium text-[#40a0ca]">
              {footerActionLabel}
            </Link>
          </div>
        </footer>
      </div>
    </section>
  )
}
