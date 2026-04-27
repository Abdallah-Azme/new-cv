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

type TabsProps = {
  activeLabel: string
  inactiveLabel: string
}

export function AuthUserCompanyTabs({ activeLabel, inactiveLabel }: TabsProps) {
  return (
    <div className="flex h-11 w-full items-center gap-4">
      <button
        type="button"
        className="inline-flex h-11 w-[227px] items-center justify-center gap-2 rounded-xl border border-white/20 bg-[#006ea8] px-4 py-2 text-base text-white shadow-[0_0_0_5px_#fff,0_0_0_9px_#E8F2FF,0_3.71px_4.85px_rgba(0,86,133,0.15),0_10.27px_13.40px_rgba(0,86,133,0.22),0_24.72px_32.25px_rgba(0,86,133,0.19),0_42px_107px_rgba(123,190,255,0.34),inset_0_1px_4px_2px_#C2DDFF,inset_0_1px_18px_2px_#E8F2FF]"
      >
        <Image src="/auth/user.svg" alt="" width={24} height={24} className="h-6 w-6" aria-hidden />
        <span>{activeLabel}</span>
      </button>
      <button
        type="button"
        className="inline-flex h-10 w-[227px] items-center justify-center gap-2 rounded-xl border border-[#a3a3a3] px-4 py-2 text-base text-[#a3a3a3]"
      >
        <Image src="/auth/company.svg" alt="" width={24} height={24} className="h-6 w-6" aria-hidden />
        <span>{inactiveLabel}</span>
      </button>
    </div>
  )
}

type SideLinkProps = {
  href: string
  label: string
}

export function AuthSideLink({ href, label }: SideLinkProps) {
  return (
    <div className="text-right">
      <Link className="text-sm leading-[21px] font-medium text-[#40a0ca]" href={href}>
        {label}
      </Link>
    </div>
  )
}

type AuthPrimaryCtaProps = {
  label: string
}

export function AuthPrimaryCta({ label }: AuthPrimaryCtaProps) {
  return (
    <button
      type="submit"
      className="inline-flex h-[52px] w-full items-center justify-center rounded-xl border border-[#9fc9e6] bg-linear-to-b from-[#006ea8] to-[#005685] px-4 py-2 text-base font-medium text-white shadow-[0_42px_107px_rgba(123,190,255,0.34),0_24.7206px_32.2574px_rgba(0,86,133,0.1867),0_10.2677px_13.3981px_rgba(0,86,133,0.22),0_3.71362px_4.84582px_rgba(0,86,133,0.1533),inset_0_1px_18px_2px_#E8F2FF,inset_0_1px_4px_2px_#C2DDFF]"
    >
      {label}
    </button>
  )
}

type AuthFooterProps = {
  children: ReactNode
}

export function AuthFooter({ children }: AuthFooterProps) {
  return <div className="flex w-[470px] flex-col items-center gap-6">{children}</div>
}

type AuthFieldGroupProps = {
  children: ReactNode
}

export function AuthFieldGroup({ children }: AuthFieldGroupProps) {
  return (
    <div className="flex w-[470px] flex-col gap-6">
      {children}
    </div>
  )
}

type AuthFieldRowProps = {
  iconSrc: string
  placeholder: string
  type?: string
  endIconSrc?: string
  endIconButtonProps?: React.ButtonHTMLAttributes<HTMLButtonElement>
}

export function AuthFieldRow({
  iconSrc,
  placeholder,
  type = "text",
  endIconSrc,
  endIconButtonProps,
}: AuthFieldRowProps) {
  return (
    <label className="flex h-[52px] items-center justify-between gap-2 border-b border-white py-4">
      <div className="flex min-w-0 items-center gap-2">
        <Image src={iconSrc} alt="" width={20} height={20} aria-hidden />
        <input
          type={type}
          placeholder={placeholder}
          className="w-full bg-transparent text-base leading-6 text-white placeholder:text-white focus:outline-none"
        />
      </div>
      {endIconSrc ? (
        <button type="button" className="cursor-pointer" {...endIconButtonProps}>
          <Image src={endIconSrc} alt="" width={20} height={20} aria-hidden />
        </button>
      ) : null}
    </label>
  )
}
