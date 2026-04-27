import { cn } from "@/lib/utils"

type SectionShellProps = {
  id?: string
  className?: string
  children: React.ReactNode
}

export function SectionShell({ id, className, children }: SectionShellProps) {
  return (
    <section id={id} className={cn("w-full px-4 sm:px-6 lg:px-[100px]", className)}>
      <div className="mx-auto w-full max-w-[1312px]">{children}</div>
    </section>
  )
}
