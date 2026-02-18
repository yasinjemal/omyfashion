import { Suspense } from "react"

import { listRegions } from "@lib/data/regions"
import { listLocales } from "@lib/data/locales"
import { getLocale } from "@lib/data/locale-actions"
import { StoreRegion } from "@medusajs/types"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import CartButton from "@modules/layout/components/cart-button"
import SideMenu from "@modules/layout/components/side-menu"
import NavWrapper from "@modules/layout/components/nav-wrapper"

export default async function Nav() {
  const [regions, locales, currentLocale] = await Promise.all([
    listRegions().then((regions: StoreRegion[]) => regions),
    listLocales(),
    getLocale(),
  ])

  return (
    <NavWrapper>
      {/* Left: Menu + Search */}
      <div className="flex-1 basis-0 h-full flex items-center gap-x-4">
        <div className="h-full">
          <SideMenu regions={regions} locales={locales} currentLocale={currentLocale} />
        </div>
        <LocalizedClientLink
          href="/store"
          className="hidden small:flex items-center gap-x-2 text-sm tracking-wide hover:opacity-70 transition-opacity"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
          </svg>
          <span>Search</span>
        </LocalizedClientLink>
      </div>

      {/* Center: Logo */}
      <div className="flex items-center h-full">
        <LocalizedClientLink
          href="/"
          className="font-heading text-2xl md:text-3xl tracking-[0.2em] hover:opacity-70 transition-opacity"
          data-testid="nav-store-link"
        >
          OMYFASHION
        </LocalizedClientLink>
      </div>

      {/* Right: Account + Wishlist + Cart */}
      <div className="flex items-center gap-x-5 h-full flex-1 basis-0 justify-end">
        <LocalizedClientLink
          href="/store"
          className="hidden small:flex items-center text-sm tracking-wide hover:opacity-70 transition-opacity"
        >
          Shop
        </LocalizedClientLink>
        <LocalizedClientLink
          className="hidden small:flex items-center gap-x-1.5 text-sm tracking-wide hover:opacity-70 transition-opacity"
          href="/account"
          data-testid="nav-account-link"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
          </svg>
          <span>Account</span>
        </LocalizedClientLink>
        <Suspense
          fallback={
            <LocalizedClientLink
              className="flex items-center gap-x-1.5 text-sm tracking-wide hover:opacity-70 transition-opacity"
              href="/cart"
              data-testid="nav-cart-link"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
              </svg>
              <span>Cart (0)</span>
            </LocalizedClientLink>
          }
        >
          <CartButton />
        </Suspense>
      </div>
    </NavWrapper>
  )
}
