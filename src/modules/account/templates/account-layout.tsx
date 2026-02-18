import React from "react"

import UnderlineLink from "@modules/common/components/interactive-link"

import AccountNav from "../components/account-nav"
import { HttpTypes } from "@medusajs/types"

interface AccountLayoutProps {
  customer: HttpTypes.StoreCustomer | null
  children: React.ReactNode
}

const AccountLayout: React.FC<AccountLayoutProps> = ({
  customer,
  children,
}) => {
  return (
    <div className="flex-1 bg-[#FAF7F2]" data-testid="account-page">
      {/* Luxury Page Header */}
      <div className="bg-[#1A1A1A] py-14 sm:py-16">
        <div className="content-container text-center">
          <p className="text-[#C9A96E] text-sm tracking-[0.3em] uppercase mb-3 font-light">
            My Account
          </p>
          <h1 className="font-heading text-4xl sm:text-5xl text-white mb-3">
            Account Dashboard
          </h1>
          <div className="w-16 h-[1px] bg-[#C9A96E] mx-auto" />
        </div>
      </div>

      <div className="content-container h-full max-w-5xl mx-auto py-8 sm:py-12">
        <div className="flex flex-col">
          <div className="grid grid-cols-1 small:grid-cols-[240px_1fr] gap-8">
            <div>{customer && <AccountNav customer={customer} />}</div>
            <div className="flex-1">{children}</div>
          </div>
          <div className="flex flex-col small:flex-row items-end justify-between border-t border-[#C9A96E]/20 py-12 gap-8 mt-12">
            <div>
              <h3 className="font-heading text-xl text-[#1A1A1A] mb-2">Got questions?</h3>
              <span className="text-sm text-[#666]">
                You can find frequently asked questions and answers on our
                customer service page.
              </span>
            </div>
            <div>
              <UnderlineLink href="/customer-service">
                Customer Service
              </UnderlineLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AccountLayout
