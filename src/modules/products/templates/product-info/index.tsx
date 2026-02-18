import { HttpTypes } from "@medusajs/types"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

type ProductInfoProps = {
  product: HttpTypes.StoreProduct
}

const ProductInfo = ({ product }: ProductInfoProps) => {
  return (
    <div id="product-info">
      <div className="flex flex-col gap-y-4 lg:max-w-[500px] mx-auto">
        {product.collection && (
          <LocalizedClientLink
            href={`/collections/${product.collection.handle}`}
            className="text-xs tracking-[0.2em] uppercase text-[#C9A96E] hover:text-[#B8934E] transition-colors font-light"
          >
            {product.collection.title}
          </LocalizedClientLink>
        )}
        <h2
          className="font-heading text-3xl sm:text-4xl leading-tight text-[#1A1A1A]"
          data-testid="product-title"
        >
          {product.title}
        </h2>
        <div className="w-10 h-[1px] bg-[#C9A96E]" />

        <p
          className="text-sm leading-relaxed text-[#666] whitespace-pre-line"
          data-testid="product-description"
        >
          {product.description}
        </p>
      </div>
    </div>
  )
}

export default ProductInfo
