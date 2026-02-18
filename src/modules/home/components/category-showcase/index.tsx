import LocalizedClientLink from "@modules/common/components/localized-client-link"

const categories = [
  {
    name: "Women",
    desc: "Elegant essentials",
    href: "/store",
    gradient: "from-rose-900/80 to-neutral-900/90",
    pattern: "M10 80 Q 52.5 10, 95 80 T 180 80",
  },
  {
    name: "Men",
    desc: "Modern sophistication",
    href: "/store",
    gradient: "from-slate-800/80 to-neutral-900/90",
    pattern: "M10 10 L 90 90 M90 10 L 10 90",
  },
  {
    name: "Accessories",
    desc: "Finishing touches",
    href: "/store",
    gradient: "from-amber-900/70 to-neutral-900/90",
    pattern: "M50 10 L90 50 L50 90 L10 50 Z",
  },
]

const CategoryShowcase = () => {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="content-container">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="section-subheading mb-4">Explore</p>
          <h2
            className="section-heading text-4xl sm:text-5xl"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Shop by Category
          </h2>
          <div className="flex items-center justify-center gap-3 mt-6">
            <div className="w-8 h-[1px] bg-gold" />
            <div className="w-1.5 h-1.5 rotate-45 bg-gold" />
            <div className="w-8 h-[1px] bg-gold" />
          </div>
        </div>

        {/* Category grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((cat, i) => (
            <LocalizedClientLink
              key={i}
              href={cat.href}
              className="group relative block overflow-hidden aspect-[3/4] bg-charcoal rounded-sm"
            >
              {/* Background pattern */}
              <div
                className={`absolute inset-0 bg-gradient-to-b ${cat.gradient}`}
              />
              <svg
                className="absolute inset-0 w-full h-full opacity-[0.04]"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
              >
                <path
                  d={cat.pattern}
                  fill="none"
                  stroke="rgba(201,169,110,0.5)"
                  strokeWidth="0.5"
                />
              </svg>

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-8 sm:p-10">
                <div className="transform transition-all duration-500 group-hover:translate-y-[-8px]">
                  <p
                    className="text-gold text-[10px] tracking-[0.3em] uppercase mb-3"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {cat.desc}
                  </p>
                  <h3
                    className="text-white text-3xl sm:text-4xl font-light"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {cat.name}
                  </h3>
                  <div className="mt-4 flex items-center gap-2 text-white/60 group-hover:text-gold transition-colors duration-300">
                    <span
                      className="text-xs tracking-[0.2em] uppercase"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      Explore
                    </span>
                    <svg
                      className="w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gold/0 group-hover:bg-gold/5 transition-colors duration-500" />
            </LocalizedClientLink>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CategoryShowcase
