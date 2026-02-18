"use client"

import { useState } from "react"

const Newsletter = () => {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
      setEmail("")
    }
  }

  return (
    <section className="relative bg-cream py-20 sm:py-28 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-gold/[0.03] rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold/[0.03] rounded-full translate-x-1/3 translate-y-1/3" />

      <div className="content-container relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <p className="section-subheading mb-4">Stay Connected</p>
          <h2
            className="section-heading text-3xl sm:text-4xl lg:text-5xl mb-6"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Join the OMYFASHION Family
          </h2>
          <p
            className="text-smoke text-base font-light leading-relaxed mb-10 max-w-lg mx-auto"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Subscribe for exclusive access to new arrivals, special offers, and
            style inspiration delivered straight to your inbox.
          </p>

          {submitted ? (
            <div className="flex items-center justify-center gap-3 py-4">
              <svg
                className="w-5 h-5 text-gold"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span
                className="text-charcoal text-sm tracking-wide"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Welcome to the family! Check your inbox.
              </span>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                className="flex-1 px-6 py-4 bg-white border border-cream-dark text-charcoal text-sm tracking-wide placeholder:text-smoke/50 focus:outline-none focus:border-gold/50 transition-colors duration-300"
                style={{ fontFamily: "var(--font-body)" }}
              />
              <button type="submit" className="btn-luxury-primary whitespace-nowrap">
                Subscribe
              </button>
            </form>
          )}

          <p
            className="text-smoke/50 text-[11px] mt-6 tracking-wide"
            style={{ fontFamily: "var(--font-body)" }}
          >
            By subscribing, you agree to our Privacy Policy. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Newsletter
