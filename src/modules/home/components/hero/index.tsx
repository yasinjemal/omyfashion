import LocalizedClientLink from "@modules/common/components/localized-client-link"

const Hero = () => {
  return (
    <section className="relative w-full h-screen min-h-[700px] overflow-hidden bg-charcoal">
      {/* Background gradient with subtle pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-charcoal-light to-charcoal" />
        {/* Decorative diagonal lines */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 60px,
            rgba(201,169,110,0.3) 60px,
            rgba(201,169,110,0.3) 61px
          )`,
          }}
        />
        {/* Radial glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gold/[0.04] blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6">
        {/* Top decorative line */}
        <div className="w-[1px] h-16 bg-gradient-to-b from-transparent to-gold/60 mb-8 animate-fade-in-up" />

        {/* Subheading */}
        <p
          className="text-gold tracking-[0.4em] uppercase text-[11px] font-medium mb-6 animate-fade-in-up delay-100"
          style={{ fontFamily: "var(--font-body)" }}
        >
          Curated Fashion &middot; South Africa
        </p>

        {/* Main heading */}
        <h1
          className="animate-fade-in-up delay-200"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          <span className="block text-white text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light leading-[1.1] tracking-wide">
            Discover Your
          </span>
          <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light leading-[1.1] tracking-wide mt-2">
            <span className="text-shimmer">Signature Style</span>
          </span>
        </h1>

        {/* Decorative divider */}
        <div className="flex items-center gap-4 my-8 animate-fade-in-up delay-300">
          <div className="w-12 h-[1px] bg-gold/40" />
          <div className="w-2 h-2 rotate-45 border border-gold/40" />
          <div className="w-12 h-[1px] bg-gold/40" />
        </div>

        {/* Description */}
        <p
          className="text-white/60 max-w-lg text-base sm:text-lg font-light leading-relaxed animate-fade-in-up delay-400"
          style={{ fontFamily: "var(--font-body)" }}
        >
          Premium clothing &amp; accessories crafted for those who appreciate
          timeless elegance and modern sophistication.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-10 animate-fade-in-up delay-500">
          <LocalizedClientLink href="/store">
            <span className="btn-luxury-gold">Shop Collection</span>
          </LocalizedClientLink>
          <LocalizedClientLink href="/store">
            <span className="btn-luxury-outline">New Arrivals</span>
          </LocalizedClientLink>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in-up delay-700">
          <span
            className="text-white/30 text-[10px] tracking-[0.3em] uppercase"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Scroll
          </span>
          <div className="w-[1px] h-8 bg-gradient-to-b from-white/30 to-transparent animate-float" />
        </div>
      </div>

      {/* Side text decorations */}
      <div className="hidden lg:block absolute left-8 top-1/2 -translate-y-1/2 -rotate-90 origin-center">
        <span
          className="text-white/10 text-[10px] tracking-[0.5em] uppercase"
          style={{ fontFamily: "var(--font-body)" }}
        >
          OMYFASHION &mdash; EST. 2026
        </span>
      </div>
      <div className="hidden lg:block absolute right-8 top-1/2 -translate-y-1/2 rotate-90 origin-center">
        <span
          className="text-white/10 text-[10px] tracking-[0.5em] uppercase"
          style={{ fontFamily: "var(--font-body)" }}
        >
          Premium Fashion &mdash; South Africa
        </span>
      </div>
    </section>
  )
}

export default Hero
