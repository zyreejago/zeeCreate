"use client"
import type React from "react"

const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, target: string) => {
  e.preventDefault()
  const element = document.getElementById(target)
  if (element) {
    const offset = 80
    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
    window.scrollTo({
      top: elementPosition - offset,
      behavior: "smooth",
    })
  }
}
const CTA = () => {
  return (
    <div id="contact" className="bg-blue-700 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-white text-center mb-4">Ready to Take Your Business Online?</h2>
        <p className="text-xl text-blue-100 text-center mb-8">
          Let&apos;s create a website that drives results and helps your business
        </p>
        <div className="text-center">
          <a
            href="#pricing"
            onClick={(e) => handleNavClick(e, "pricing")}
            className="inline-block bg-white text-blue-700 font-bold py-3 px-8 rounded-full text-lg hover:bg-blue-50 transition duration-300"
          >
            Get Started Today
          </a>
        </div>
      </div>
    </div>
  )
}

export default CTA

