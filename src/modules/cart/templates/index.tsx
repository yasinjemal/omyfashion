import ItemsTemplate from "./items"
import Summary from "./summary"
import EmptyCartMessage from "../components/empty-cart-message"
import SignInPrompt from "../components/sign-in-prompt"
import Divider from "@modules/common/components/divider"
import { HttpTypes } from "@medusajs/types"

const CartTemplate = ({
  cart,
  customer,
}: {
  cart: HttpTypes.StoreCart | null
  customer: HttpTypes.StoreCustomer | null
}) => {
  return (
    <div className="bg-[#FAF7F2] min-h-screen">
      {/* Luxury Page Header */}
      <div className="bg-[#1A1A1A] py-14 sm:py-16">
        <div className="content-container text-center">
          <p className="text-[#C9A96E] text-sm tracking-[0.3em] uppercase mb-3 font-light">
            Your Selections
          </p>
          <h1 className="font-heading text-4xl sm:text-5xl text-white mb-3">
            Shopping Bag
          </h1>
          <div className="w-16 h-[1px] bg-[#C9A96E] mx-auto" />
        </div>
      </div>

      <div className="py-10">
        <div className="content-container" data-testid="cart-container">
          {cart?.items?.length ? (
            <div className="grid grid-cols-1 small:grid-cols-[1fr_380px] gap-x-12">
              <div className="flex flex-col py-6 gap-y-6">
                {!customer && (
                  <>
                    <SignInPrompt />
                    <Divider />
                  </>
                )}
                <ItemsTemplate cart={cart} />
              </div>
              <div className="relative">
                <div className="flex flex-col gap-y-8 sticky top-12">
                  {cart && cart.region && (
                    <div className="bg-white p-6 shadow-sm border border-gray-100">
                      <Summary cart={cart as any} />
                    </div>
                  )}
                </div>
              </div>
            </div>
          ) : (
            <div>
              <EmptyCartMessage />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default CartTemplate
