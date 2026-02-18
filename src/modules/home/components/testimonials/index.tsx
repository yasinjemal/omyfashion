const testimonials = [
  {
    name: "Nomsa M.",
    location: "Johannesburg",
    text: "The quality is exceptional. Every piece I&apos;ve ordered has exceeded my expectations. OMYFASHION understands what modern women want.",
    rating: 5,
  },
  {
    name: "Thabo K.",
    location: "Cape Town",
    text: "Finally, a South African fashion brand that delivers both on style and quality. The shipping was fast and the packaging felt luxurious.",
    rating: 5,
  },
  {
    name: "Lerato P.",
    location: "Durban",
    text: "I&apos;ve been shopping here for months now. The attention to detail in every garment is remarkable. Truly premium fashion.",
    rating: 5,
  },
]

const Testimonials = () => {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="content-container">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="section-subheading mb-4">Testimonials</p>
          <h2
            className="section-heading text-3xl sm:text-4xl lg:text-5xl"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            What Our Customers Say
          </h2>
          <div className="flex items-center justify-center gap-3 mt-6">
            <div className="w-8 h-[1px] bg-gold" />
            <div className="w-1.5 h-1.5 rotate-45 bg-gold" />
            <div className="w-8 h-[1px] bg-gold" />
          </div>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="relative p-8 bg-silk rounded-sm border border-cream-dark/50 hover:border-gold/20 transition-colors duration-300"
            >
              {/* Quote mark */}
              <div
                className="text-gold/20 text-6xl leading-none mb-4 -mt-2"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                &ldquo;
              </div>

              <p
                className="text-charcoal/70 text-sm leading-relaxed mb-6"
                style={{ fontFamily: "var(--font-body)" }}
                dangerouslySetInnerHTML={{ __html: t.text }}
              />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <svg
                    key={j}
                    className="w-3.5 h-3.5 text-gold"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center">
                  <span
                    className="text-gold text-sm font-medium"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {t.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p
                    className="text-charcoal text-sm font-medium"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {t.name}
                  </p>
                  <p
                    className="text-smoke text-[11px]"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {t.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
