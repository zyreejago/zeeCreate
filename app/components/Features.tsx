import { Zap, Smartphone, Palette } from "lucide-react"

const features = [
  {
    name: "Lightning Fast",
    description: "Our websites are optimized for speed, ensuring your visitors have a smooth experience.",
    icon: Zap,
  },
  {
    name: "Fully Responsive",
    description: "Your website will look great on any device, from desktop to mobile.",
    icon: Smartphone,
  },
  {
    name: "Beautiful Design",
    description: "We create stunning, modern designs that capture your brand's essence.",
    icon: Palette,
  },
]

const Features = () => {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Features</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            A better way to build your web presence
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            We combine cutting-edge technology with expert design to deliver websites that stand out.
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}

export default Features

