"use client"

import { useMemo } from "react"
import { usePathname } from "next/navigation"
import { SiteFooter } from "@/features/shared-home/components/site-footer"
import { SiteHeader } from "@/features/shared-home/components/site-header"

type SiteChromeProps = {
  children: React.ReactNode
}

const AUTH_ROUTES = new Set(["sign-in", "sign-up", "forgot-password"])

export function SiteChrome({ children }: SiteChromeProps) {
  const pathname = usePathname()

  const isAuthPage = useMemo(() => {
    const segments = pathname.split("/").filter(Boolean)
    const lastSegment = segments.at(-1)
    return lastSegment ? AUTH_ROUTES.has(lastSegment) : false
  }, [pathname])

  return (
    <>
      {!isAuthPage && <SiteHeader />}
      <main className="flex-1">{children}</main>
      {!isAuthPage && <SiteFooter />}
    </>
  )
}
