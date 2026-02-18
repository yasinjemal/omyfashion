import { notFound } from "next/navigation"
import { Suspense } from "react"

import SkeletonProductGrid from "@modules/skeletons/templates/skeleton-product-grid"
import RefinementList from "@modules/store/components/refinement-list"
import { SortOptions } from "@modules/store/components/refinement-list/sort-products"
import PaginatedProducts from "@modules/store/templates/paginated-products"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { HttpTypes } from "@medusajs/types"

export default function CategoryTemplate({
  category,
  sortBy,
  page,
  countryCode,
}: {
  category: HttpTypes.StoreProductCategory
  sortBy?: SortOptions
  page?: string
  countryCode: string
}) {
  const pageNumber = page ? parseInt(page) : 1
  const sort = sortBy || "created_at"

  if (!category || !countryCode) notFound()

  const parents = [] as HttpTypes.StoreProductCategory[]

  const getParents = (category: HttpTypes.StoreProductCategory) => {
    if (category.parent_category) {
      parents.push(category.parent_category)
      getParents(category.parent_category)
    }
  }

  getParents(category)

  return (
    <div className="bg-[#FAF7F2] min-h-screen">
      {/* Luxury Category Header */}
      <div className="bg-[#1A1A1A] py-16 sm:py-20">
        <div className="content-container text-center">
          {/* Breadcrumb */}
          {parents.length > 0 && (
            <div className="flex items-center justify-center gap-2 mb-4">
              {parents.map((parent) => (
                <span key={parent.id} className="text-white/50 text-sm">
                  <LocalizedClientLink
                    className="hover:text-[#C9A96E] transition-colors"
                    href={`/categories/${parent.handle}`}
                  >
                    {parent.name}
                  </LocalizedClientLink>
                  <span className="ml-2">/</span>
                </span>
              ))}
            </div>
          )}
          <p className="text-[#C9A96E] text-sm tracking-[0.3em] uppercase mb-4 font-light">
            Category
          </p>
          <h1 className="font-heading text-4xl sm:text-5xl text-white mb-4" data-testid="category-page-title">
            {category.name}
          </h1>
          <div className="w-16 h-[1px] bg-[#C9A96E] mx-auto" />
          {category.description && (
            <p className="text-white/60 text-sm max-w-md mx-auto mt-4">
              {category.description}
            </p>
          )}
        </div>
      </div>

      <div
        className="flex flex-col small:flex-row small:items-start py-10 content-container"
        data-testid="category-container"
      >
        <RefinementList sortBy={sort} data-testid="sort-by-container" />
        <div className="w-full">
          {category.category_children && category.category_children.length > 0 && (
            <div className="mb-8">
              <ul className="flex flex-wrap gap-3">
                {category.category_children.map((c) => (
                  <li key={c.id}>
                    <LocalizedClientLink
                      href={`/categories/${c.handle}`}
                      className="inline-block px-5 py-2 bg-white border border-gray-200 text-sm text-[#1A1A1A] hover:border-[#C9A96E] hover:text-[#C9A96E] transition-all"
                    >
                      {c.name}
                    </LocalizedClientLink>
                  </li>
                ))}
              </ul>
            </div>
          )}
          <Suspense
            fallback={
              <SkeletonProductGrid
                numberOfProducts={category.products?.length ?? 8}
              />
            }
          >
            <PaginatedProducts
              sortBy={sort}
              page={pageNumber}
              categoryId={category.id}
              countryCode={countryCode}
            />
          </Suspense>
        </div>
      </div>
    </div>
  )
}
