import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Budi Santoso",
    role: "Owner, Santoso Electronics Store",
    content:
      "Working with this web development team was a game-changer for my business. They delivered a stunning, functional website that perfectly represents my store. The increase in online inquiries has been remarkable!",
    rating: 5,
  },
  {
    name: "Siti Rahmawati",
    role: "Owner, Simple Eatery",
    content:
      "As a small restaurant owner, I needed a website to showcase my menu and allow easy online ordering. The team delivered beyond my expectations, creating a user-friendly site that has significantly boosted my orders.",
    rating: 5,
  },
  {
    name: "Andi Pratama",
    role: "Freelance Photographer",
    content:
      "I'm amazed at how well they translated my vision into a stunning portfolio website. The design is sleek, the gallery feature is exactly what I needed, and I've received numerous compliments from clients. It's been a great investment for my business.",
    rating: 4,
  },
  {
    name: "Rina Setiawan",
    role: "Owner, Rina Fashion Boutique",
    content:
      "Their expertise in web development has helped my boutique attract more customers online. The website is modern, easy to navigate, and has increased my sales significantly.",
    rating: 5,
  },
  {
    name: "Dian Nugroho",
    role: "Owner, Sejahtera Coffee",
    content:
      "I wanted a simple but attractive website for my coffee shop, and they delivered exactly that. The website is easy to use, showcases my menu beautifully, and has brought in more customers.",
    rating: 4,
  },
]

const marqueeAnimation = `
  @keyframes marquee {
    0% { transform: translateX(0%); }
    100% { transform: translateX(-100%); }
  }
  .animate-marquee {
    animation: marquee 30s linear infinite;
  }
  .animate-marquee:hover {
    animation-play-state: paused;
  }
`

const Testimonials = () => {
  return (
    <>
      <style>{marqueeAnimation}</style>
      <div id="testimonials" className="overflow-hidden py-12 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">What Our Clients Say</h2>
          <div className="relative">
            <div className="flex animate-marquee hover:pause">
              {[...testimonials, ...testimonials, ...testimonials].map((testimonial, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-full sm:w-96 mx-4 bg-white rounded-lg shadow-lg p-6 flex flex-col justify-between h-72"
                >
                  <div>
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <blockquote className="text-gray-700 mb-4">&quot;{testimonial.content}&quot;</blockquote>
                  </div>
                  <div className="mt-auto">
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-gray-600">{testimonial.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Testimonials

