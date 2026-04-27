import Image from "next/image"

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
