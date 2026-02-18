import { ArrowUpRightMini } from "@medusajs/icons"
import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "404",
  description: "Something went wrong",
}

export default function NotFound() {
  return (
    <div className="flex flex-col gap-4 items-center justify-center min-h-[calc(100vh-64px)] bg-[#FAF7F2]">
      <p className="text-[#C9A96E] text-sm tracking-[0.3em] uppercase font-light">Error 404</p>
      <h1 className="font-heading text-4xl sm:text-5xl text-[#1A1A1A]">Page Not Found</h1>
      <div className="w-12 h-[1px] bg-[#C9A96E]" />
      <p className="text-sm text-[#666] mt-2">
        The page you tried to access does not exist.
      </p>
      <Link
        className="flex gap-x-1 items-center group mt-4 px-8 py-3 bg-[#1A1A1A] text-white hover:bg-[#C9A96E] transition-all duration-300 tracking-wider uppercase text-sm"
        href="/"
      >
        <span>Back to Home</span>
        <ArrowUpRightMini
          className="group-hover:rotate-45 ease-in-out duration-150"
        />
      </Link>
    </div>
  )
}
