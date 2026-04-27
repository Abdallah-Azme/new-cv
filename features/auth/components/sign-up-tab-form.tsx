"use client"

import { useState } from "react"
import Image from "next/image"
import { AuthFieldGroup, AuthFieldRow, AuthPrimaryCta } from "./auth-card-wrapper"

type Props = {
  userTabLabel: string
  companyTabLabel: string
  fullNamePlaceholder: string
  emailPlaceholder: string
  passwordPlaceholder: string
  showPasswordLabel: string
  hidePasswordLabel: string
  submitLabel: string
}

export function SignUpTabForm({
  userTabLabel,
  companyTabLabel,
  fullNamePlaceholder,
  emailPlaceholder,
  passwordPlaceholder,
  showPasswordLabel,
  hidePasswordLabel,
  submitLabel,
}: Props) {
  const [activeTab, setActiveTab] = useState<"user" | "company">("user")
  const [showPassword, setShowPassword] = useState(false)

  return (
    <>
      <div className="flex h-11 w-full items-center gap-4">
        <button
          type="button"
          onClick={() => setActiveTab("user")}
          className={
            activeTab === "user"
              ? "inline-flex h-11 w-[227px] items-center justify-center gap-2 rounded-xl border border-white/20 bg-[#006ea8] px-4 py-2 text-base text-white shadow-[0_0_0_5px_#fff,0_0_0_9px_#E8F2FF,0_3.71px_4.85px_rgba(0,86,133,0.15),0_10.27px_13.40px_rgba(0,86,133,0.22),0_24.72px_32.25px_rgba(0,86,133,0.19),0_42px_107px_rgba(123,190,255,0.34),inset_0_1px_4px_2px_#C2DDFF,inset_0_1px_18px_2px_#E8F2FF]"
              : "inline-flex h-10 w-[227px] items-center justify-center gap-2 rounded-xl border border-[#a3a3a3] px-4 py-2 text-base text-[#a3a3a3]"
          }
          aria-pressed={activeTab === "user"}
        >
          <Image src="/auth/user.svg" alt="" width={24} height={24} className="h-6 w-6" aria-hidden />
          <span>{userTabLabel}</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab("company")}
          className={
            activeTab === "company"
              ? "inline-flex h-11 w-[227px] items-center justify-center gap-2 rounded-xl border border-white/20 bg-[#006ea8] px-4 py-2 text-base text-white shadow-[0_0_0_5px_#fff,0_0_0_9px_#E8F2FF,0_3.71px_4.85px_rgba(0,86,133,0.15),0_10.27px_13.40px_rgba(0,86,133,0.22),0_24.72px_32.25px_rgba(0,86,133,0.19),0_42px_107px_rgba(123,190,255,0.34),inset_0_1px_4px_2px_#C2DDFF,inset_0_1px_18px_2px_#E8F2FF]"
              : "inline-flex h-10 w-[227px] items-center justify-center gap-2 rounded-xl border border-[#a3a3a3] px-4 py-2 text-base text-[#a3a3a3]"
          }
          aria-pressed={activeTab === "company"}
        >
          <Image src="/auth/company.svg" alt="" width={24} height={24} className="h-6 w-6" aria-hidden />
          <span>{companyTabLabel}</span>
        </button>
      </div>

      <AuthFieldGroup>
        <AuthFieldRow
          iconSrc="/auth/user.svg"
          placeholder={activeTab === "user" ? fullNamePlaceholder : companyTabLabel}
        />
        <AuthFieldRow iconSrc="/auth/email.svg" type="email" placeholder={emailPlaceholder} />
        <AuthFieldRow
          iconSrc="/auth/password.svg"
          type={showPassword ? "text" : "password"}
          placeholder={passwordPlaceholder}
          endIconSrc="/auth/eye.svg"
          endIconButtonProps={{
            onClick: () => setShowPassword((previous) => !previous),
            "aria-label": showPassword ? hidePasswordLabel : showPasswordLabel,
            "aria-pressed": showPassword,
          }}
        />
      </AuthFieldGroup>

      <AuthPrimaryCta label={submitLabel} />
    </>
  )
}
