import { Container } from "@medusajs/ui"

import ChevronDown from "@modules/common/icons/chevron-down"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { convertToLocale } from "@lib/util/money"
import { HttpTypes } from "@medusajs/types"

type OverviewProps = {
  customer: HttpTypes.StoreCustomer | null
  orders: HttpTypes.StoreOrder[] | null
}

const Overview = ({ customer, orders }: OverviewProps) => {
  return (
    <div data-testid="overview-page-wrapper">
      <div>
        {/* Welcome Section */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
          <div>
            <p className="text-[#C9A96E] text-xs tracking-[0.2em] uppercase mb-1 font-light">
              Welcome back
            </p>
            <h1 className="font-heading text-2xl sm:text-3xl text-[#1A1A1A]" data-testid="welcome-message" data-value={customer?.first_name}>
              Hello, {customer?.first_name}
            </h1>
          </div>
          <span className="text-sm text-[#666]">
            Signed in as:{" "}
            <span
              className="font-medium text-[#1A1A1A]"
              data-testid="customer-email"
              data-value={customer?.email}
            >
              {customer?.email}
            </span>
          </span>
        </div>

        <div className="w-full h-[1px] bg-[#C9A96E]/30 mb-8" />

        {/* Stats Cards */}
        <div className="grid grid-cols-2 gap-6 mb-10">
          <div className="bg-white p-6 border border-gray-100 shadow-sm">
            <h3 className="text-xs tracking-[0.2em] uppercase text-[#C9A96E] mb-3 font-light">Profile</h3>
            <div className="flex items-end gap-x-2">
              <span
                className="font-heading text-3xl text-[#1A1A1A]"
                data-testid="customer-profile-completion"
                data-value={getProfileCompletion(customer)}
              >
                {getProfileCompletion(customer)}%
              </span>
              <span className="uppercase text-xs text-[#999] mb-1">
                Completed
              </span>
            </div>
          </div>

          <div className="bg-white p-6 border border-gray-100 shadow-sm">
            <h3 className="text-xs tracking-[0.2em] uppercase text-[#C9A96E] mb-3 font-light">Addresses</h3>
            <div className="flex items-end gap-x-2">
              <span
                className="font-heading text-3xl text-[#1A1A1A]"
                data-testid="addresses-count"
                data-value={customer?.addresses?.length || 0}
              >
                {customer?.addresses?.length || 0}
              </span>
              <span className="uppercase text-xs text-[#999] mb-1">
                Saved
              </span>
            </div>
          </div>
        </div>

        {/* Recent Orders */}
        <div className="flex flex-col gap-y-4">
          <div className="flex items-center gap-x-2">
            <h3 className="text-xs tracking-[0.2em] uppercase text-[#C9A96E] font-light">Recent Orders</h3>
          </div>
          <ul
            className="flex flex-col gap-y-3"
            data-testid="orders-wrapper"
          >
            {orders && orders.length > 0 ? (
              orders.slice(0, 5).map((order) => {
                return (
                  <li
                    key={order.id}
                    data-testid="order-wrapper"
                    data-value={order.id}
                  >
                    <LocalizedClientLink
                      href={`/account/orders/details/${order.id}`}
                    >
                      <div className="bg-white border border-gray-100 shadow-sm flex justify-between items-center p-4 hover:border-[#C9A96E]/30 transition-colors">
                        <div className="grid grid-cols-3 grid-rows-2 text-sm gap-x-4 flex-1">
                          <span className="font-medium text-[#1A1A1A]">Date placed</span>
                          <span className="font-medium text-[#1A1A1A]">
                            Order number
                          </span>
                          <span className="font-medium text-[#1A1A1A]">
                            Total amount
                          </span>
                          <span className="text-[#666]" data-testid="order-created-date">
                            {new Date(order.created_at).toDateString()}
                          </span>
                          <span
                            className="text-[#666]"
                            data-testid="order-id"
                            data-value={order.display_id}
                          >
                            #{order.display_id}
                          </span>
                          <span className="text-[#666]" data-testid="order-amount">
                            {convertToLocale({
                              amount: order.total,
                              currency_code: order.currency_code,
                            })}
                          </span>
                        </div>
                        <button
                          className="flex items-center justify-between text-[#C9A96E]"
                          data-testid="open-order-button"
                        >
                          <span className="sr-only">
                            Go to order #{order.display_id}
                          </span>
                          <ChevronDown className="-rotate-90" />
                        </button>
                      </div>
                    </LocalizedClientLink>
                  </li>
                )
              })
            ) : (
              <span className="text-[#999] text-sm" data-testid="no-orders-message">No recent orders</span>
            )}
          </ul>
        </div>
      </div>
    </div>
  )
}

const getProfileCompletion = (customer: HttpTypes.StoreCustomer | null) => {
  let count = 0

  if (!customer) {
    return 0
  }

  if (customer.email) {
    count++
  }

  if (customer.first_name && customer.last_name) {
    count++
  }

  if (customer.phone) {
    count++
  }

  const billingAddress = customer.addresses?.find(
    (addr) => addr.is_default_billing
  )

  if (billingAddress) {
    count++
  }

  return (count / 4) * 100
}

export default Overview
