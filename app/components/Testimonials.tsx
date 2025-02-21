import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart",
    content:
      "Working with this web development team was a game-changer for our startup. They delivered a stunning, functional website that perfectly captures our brand identity. The increase in user engagement and conversions has been remarkable!",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Owner, Chen's Cuisine",
    content:
      "As a restaurant owner, I needed a website that would showcase our menu and allow for easy online ordering. The team delivered beyond my expectations, creating a beautiful, user-friendly site that has significantly boosted our online orders.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Freelance Photographer",
    content:
      "I'm amazed at how well they translated my vision into a stunning portfolio website. The design is sleek, the gallery feature is exactly what I needed, and I've received numerous compliments from clients. It's been a great investment for my business.",
    rating: 5,
  },
]

const marqueeAnimation = `
  @keyframes marquee {
    0% { transform: translateX(100%); }
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
              {[...testimonials, ...testimonials].map((testimonial, index) => (
                <div key={index} className="flex-shrink-0 w-full sm:w-96 mx-4 bg-white rounded-lg shadow-lg p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-gray-700 mb-4">"{testimonial.content}"</blockquote>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-gray-600">{testimonial.role}</div>
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

