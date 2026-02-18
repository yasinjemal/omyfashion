import React, { Suspense } from "react"

import ImageGallery from "@modules/products/components/image-gallery"
import ProductActions from "@modules/products/components/product-actions"
import ProductOnboardingCta from "@modules/products/components/product-onboarding-cta"
import ProductTabs from "@modules/products/components/product-tabs"
import RelatedProducts from "@modules/products/components/related-products"
import ProductInfo from "@modules/products/templates/product-info"
import SkeletonRelatedProducts from "@modules/skeletons/templates/skeleton-related-products"
import { notFound } from "next/navigation"
import { HttpTypes } from "@medusajs/types"

import ProductActionsWrapper from "./product-actions-wrapper"

type ProductTemplateProps = {
  product: HttpTypes.StoreProduct
  region: HttpTypes.StoreRegion
  countryCode: string
  images: HttpTypes.StoreProductImage[]
}

const ProductTemplate: React.FC<ProductTemplateProps> = ({
  product,
  region,
  countryCode,
  images,
}) => {
  if (!product || !product.id) {
    return notFound()
  }

  return (
    <>
      <div className="bg-[#FAF7F2]">
        <div
          className="content-container flex flex-col small:flex-row small:items-start py-8 sm:py-12 relative gap-x-8"
          data-testid="product-container"
        >
          {/* Product Info - Left Sidebar */}
          <div className="flex flex-col small:sticky small:top-48 small:py-0 small:max-w-[350px] w-full py-8 gap-y-6">
            <ProductInfo product={product} />
            <ProductTabs product={product} />
          </div>

          {/* Image Gallery - Center */}
          <div className="block w-full relative">
            <ImageGallery images={images} />
          </div>

          {/* Product Actions - Right Sidebar */}
          <div className="flex flex-col small:sticky small:top-48 small:py-0 small:max-w-[350px] w-full py-8 gap-y-12">
            <ProductOnboardingCta />
            <Suspense
              fallback={
                <ProductActions
                  disabled={true}
                  product={product}
                  region={region}
                />
              }
            >
              <ProductActionsWrapper id={product.id} region={region} />
            </Suspense>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <div className="bg-[#FAF7F2]">
        <div
          className="content-container py-16 small:py-24"
          data-testid="related-products-container"
        >
          <div className="text-center mb-12">
            <p className="text-[#C9A96E] text-sm tracking-[0.3em] uppercase mb-3 font-light">
              You May Also Like
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl text-[#1A1A1A]">
              Complete the Look
            </h2>
            <div className="w-12 h-[1px] bg-[#C9A96E] mx-auto mt-4" />
          </div>
          <Suspense fallback={<SkeletonRelatedProducts />}>
            <RelatedProducts product={product} countryCode={countryCode} />
          </Suspense>
        </div>
      </div>
    </>
  )
}

export default ProductTemplate
