import { Metadata } from "next"

import FeaturedProducts from "@modules/home/components/featured-products"
import Hero from "@modules/home/components/hero"
import BrandPromiseBar from "@modules/home/components/brand-promise-bar"
import CategoryShowcase from "@modules/home/components/category-showcase"
import BrandStory from "@modules/home/components/brand-story"
import Testimonials from "@modules/home/components/testimonials"
import Newsletter from "@modules/home/components/newsletter"
import { listCollections } from "@lib/data/collections"
import { getRegion } from "@lib/data/regions"

export const metadata: Metadata = {
  title: "OMYFASHION | Premium Fashion South Africa",
  description:
    "Shop the latest trends in clothing, accessories, and more at OMYFASHION. Premium fashion for every occasion. Free shipping over R999.",
}

export default async function Home(props: {
  params: Promise<{ countryCode: string }>
}) {
  const params = await props.params

  const { countryCode } = params

  const region = await getRegion(countryCode)

  const { collections } = await listCollections({
    fields: "id, handle, title",
  })

  if (!collections || !region) {
    return null
  }

  return (
    <>
      <Hero />
      <BrandPromiseBar />
      <CategoryShowcase />
      <div className="py-16 md:py-24 bg-white">
        <div className="content-container">
          <div className="text-center mb-12">
            <p className="section-subheading">Handpicked for You</p>
            <h2 className="section-heading">Featured Collection</h2>
            <div className="flex items-center justify-center gap-3 mt-4">
              <div className="h-px w-12 bg-gold" />
              <div className="w-2 h-2 rotate-45 bg-gold" />
              <div className="h-px w-12 bg-gold" />
            </div>
          </div>
          <ul className="flex flex-col gap-x-6">
            <FeaturedProducts collections={collections} region={region} />
          </ul>
        </div>
      </div>
      <BrandStory />
      <Testimonials />
      <Newsletter />
    </>
  )
}
