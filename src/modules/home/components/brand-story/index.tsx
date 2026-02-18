import LocalizedClientLink from "@modules/common/components/localized-client-link"

const BrandStory = () => {
  return (
    <section className="relative overflow-hidden bg-charcoal py-24 sm:py-32">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, rgba(201,169,110,0.15) 0%, transparent 50%),
                              radial-gradient(circle at 80% 50%, rgba(201,169,110,0.1) 0%, transparent 50%)`,
          }}
        />
      </div>

      <div className="content-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left — Visual element */}
          <div className="relative">
            <div className="aspect-[4/5] bg-charcoal-light rounded-sm overflow-hidden relative">
              <div
                className="absolute inset-0 bg-gradient-to-br from-gold/10 via-transparent to-gold/5"
              />
              {/* Abstract fashion silhouette pattern */}
              <svg
                className="absolute inset-0 w-full h-full opacity-10"
                viewBox="0 0 400 500"
                fill="none"
              >
                <circle cx="200" cy="120" r="60" stroke="rgba(201,169,110,0.5)" strokeWidth="0.5" />
                <line x1="200" y1="180" x2="200" y2="320" stroke="rgba(201,169,110,0.3)" strokeWidth="0.5" />
                <line x1="200" y1="220" x2="140" y2="280" stroke="rgba(201,169,110,0.3)" strokeWidth="0.5" />
                <line x1="200" y1="220" x2="260" y2="280" stroke="rgba(201,169,110,0.3)" strokeWidth="0.5" />
                <line x1="200" y1="320" x2="160" y2="450" stroke="rgba(201,169,110,0.3)" strokeWidth="0.5" />
                <line x1="200" y1="320" x2="240" y2="450" stroke="rgba(201,169,110,0.3)" strokeWidth="0.5" />
              </svg>
              {/* Brand mark */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div
                    className="text-gold/20 text-6xl sm:text-7xl font-light tracking-wider"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    OMY
                  </div>
                  <div className="w-16 h-[1px] bg-gold/20 mx-auto mt-3" />
                  <div
                    className="text-gold/15 text-xs tracking-[0.5em] uppercase mt-3"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    FASHION
                  </div>
                </div>
              </div>
            </div>
            {/* Decorative frame */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border border-gold/10 rounded-sm -z-0" />
          </div>

          {/* Right — Story text */}
          <div>
            <p className="section-subheading mb-6 text-gold">Our Story</p>
            <h2
              className="text-white text-4xl sm:text-5xl font-light leading-tight mb-8"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Crafted with
              <span className="italic"> Purpose</span>,{" "}
              <br className="hidden sm:block" />
              Worn with{" "}
              <span className="italic">Confidence</span>
            </h2>
            <div className="space-y-5 text-white/50 text-base font-light leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
              <p>
                Born in the heart of South Africa, OMYFASHION represents a new
                chapter in contemporary fashion. We believe that style is not
                about following trends — it&apos;s about expressing who you are.
              </p>
              <p>
                Every piece in our collection is carefully curated to bring you
                the perfect balance of quality craftsmanship, sustainable
                practices, and cutting-edge design that transcends seasons.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-12 pt-10 border-t border-white/10">
              {[
                { value: "500+", label: "Styles" },
                { value: "15K+", label: "Happy Customers" },
                { value: "4.9", label: "Rating" },
              ].map((stat, i) => (
                <div key={i}>
                  <div
                    className="text-gold text-2xl sm:text-3xl font-light"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {stat.value}
                  </div>
                  <div
                    className="text-white/40 text-[11px] tracking-[0.15em] uppercase mt-1"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <LocalizedClientLink href="/store">
                <span className="btn-luxury-outline">
                  Explore Collection
                </span>
              </LocalizedClientLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BrandStory
