"use client"

import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"

export default function NavWrapper({ children }: { children: React.ReactNode }) {
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  // Only use transparent nav on homepage
  const isHomepage = pathname === "/" || /^\/[a-z]{2}\/?$/.test(pathname)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const isTransparent = isHomepage && !scrolled

  return (
    <div
      className={`sticky top-0 inset-x-0 z-50 transition-all duration-500 ${
        isTransparent
          ? "bg-transparent"
          : "bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100"
      }`}
    >
      <header className="relative h-20 mx-auto">
        <nav
          className={`content-container flex items-center justify-between w-full h-full transition-colors duration-500 ${
            isTransparent ? "text-white" : "text-charcoal"
          }`}
        >
          {children}
        </nav>
      </header>
    </div>
  )
}
