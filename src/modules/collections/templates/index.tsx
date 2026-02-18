import { Suspense } from "react"

import SkeletonProductGrid from "@modules/skeletons/templates/skeleton-product-grid"
import RefinementList from "@modules/store/components/refinement-list"
import { SortOptions } from "@modules/store/components/refinement-list/sort-products"
import PaginatedProducts from "@modules/store/templates/paginated-products"
import { HttpTypes } from "@medusajs/types"

export default function CollectionTemplate({
  sortBy,
  collection,
  page,
  countryCode,
}: {
  sortBy?: SortOptions
  collection: HttpTypes.StoreCollection
  page?: string
  countryCode: string
}) {
  const pageNumber = page ? parseInt(page) : 1
  const sort = sortBy || "created_at"

  return (
    <div className="bg-[#FAF7F2] min-h-screen">
      {/* Luxury Collection Header */}
      <div className="bg-[#1A1A1A] py-16 sm:py-20">
        <div className="content-container text-center">
          <p className="text-[#C9A96E] text-sm tracking-[0.3em] uppercase mb-4 font-light">
            Collection
          </p>
          <h1 className="font-heading text-4xl sm:text-5xl text-white mb-4">
            {collection.title}
          </h1>
          <div className="w-16 h-[1px] bg-[#C9A96E] mx-auto" />
        </div>
      </div>

      <div className="flex flex-col small:flex-row small:items-start py-10 content-container">
        <RefinementList sortBy={sort} />
        <div className="w-full">
          <Suspense
            fallback={
              <SkeletonProductGrid
                numberOfProducts={collection.products?.length}
              />
            }
          >
            <PaginatedProducts
              sortBy={sort}
              page={pageNumber}
              collectionId={collection.id}
              countryCode={countryCode}
            />
          </Suspense>
        </div>
      </div>
    </div>
  )
}
