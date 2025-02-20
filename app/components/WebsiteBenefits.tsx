import { Globe, Clock, Users, TrendingUp, ShieldCheck } from "lucide-react"

const benefits = [
  {
    title: "Global Reach",
    description: "Expand your business beyond geographical boundaries and reach customers worldwide.",
    icon: Globe,
  },
  {
    title: "24/7 Availability",
    description:
      "Your website works round the clock, providing information and services even when you're not available.",
    icon: Clock,
  },
  {
    title: "Credibility",
    description: "A professional website enhances your brand's credibility and builds trust with potential customers.",
    icon: ShieldCheck,
  },
  {
    title: "Customer Engagement",
    description: "Interact with your audience through contact forms, chatbots, and social media integration.",
    icon: Users,
  },
  {
    title: "Marketing Opportunities",
    description: "Leverage digital marketing strategies to increase visibility and attract more customers.",
    icon: TrendingUp,
  },
]

const WebsiteBenefits = () => {
  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Why Your Business Needs a Website</h2>
          <p className="mt-4 text-xl text-gray-600">
            In today's digital age, having a website is crucial for business success. Here's why:
          </p>
        </div>
        <div className="mt-10">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="pt-6">
                <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-blue-500 rounded-md shadow-lg">
                        <benefit.icon className="h-6 w-6 text-white" aria-hidden="true" />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">{benefit.title}</h3>
                    <p className="mt-5 text-base text-gray-500">{benefit.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default WebsiteBenefits

