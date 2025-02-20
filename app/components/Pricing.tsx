"use client"

import { useState } from "react"
import { Check } from "lucide-react"
import PurchaseModal from "./PurchaseModal"

interface FormData {
  name: string
  email: string
  phone: string
  websiteType: string
  technology: string
  framework: string
  deadline: string
  message: string
}

const plans = [
  {
    name: "Basic",
    price: 999,
    features: ["Responsive design", "5 pages", "Contact form", "Basic SEO", "1 month of support"],
  },
  {
    name: "Professional",
    price: 1999,
    features: [
      "Responsive design",
      "10 pages",
      "Contact form",
      "Advanced SEO",
      "E-commerce integration",
      "3 months of support",
    ],
  },
  {
    name: "Enterprise",
    price: 3999,
    features: [
      "Responsive design",
      "Unlimited pages",
      "Custom functionality",
      "Advanced SEO",
      "E-commerce integration",
      "Analytics dashboard",
      "6 months of support",
    ],
  },
]

const Pricing = () => {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleGetStarted = (planName: string) => {
    setSelectedPlan(planName)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedPlan(null)
  }

  const handleSubmit = (formData: FormData) => {
    const plan = plans.find((p) => p.name === selectedPlan)
    if (!plan) return

    const message = `
      New ${selectedPlan} Plan Order:
      Name: ${formData.name}
      Email: ${formData.email}
      Phone: ${formData.phone}
      Website Type: ${formData.websiteType}
      Technology: ${formData.technology}
      Framework: ${formData.framework}
      Deadline: ${formData.deadline}
      Plan: ${selectedPlan}
      Price: $${plan.price}
      
      Project Details:
      ${formData.message}
    `

    const encodedMessage = encodeURIComponent(message)
    window.open(`https://wa.me/your_number?text=${encodedMessage}`, "_blank")
    handleCloseModal()
  }

  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Choose the perfect plan for your business
          </h2>
          <p className="mt-4 text-xl text-gray-600">We offer flexible pricing options to meet your specific needs</p>
        </div>
        <div className="mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0 xl:grid-cols-3">
          {plans.map((plan) => (
            <div key={plan.name} className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">
              <div className="px-6 py-8 flex-grow">
                <h3 className="text-2xl font-semibold text-gray-900">{plan.name}</h3>
                <p className="mt-4 text-4xl font-extrabold text-gray-900">${plan.price}</p>
                <p className="mt-1 text-sm text-gray-500">One-time payment</p>
                <ul className="mt-6 space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <div className="flex-shrink-0">
                        <Check className="h-6 w-6 text-green-500" aria-hidden="true" />
                      </div>
                      <p className="ml-3 text-base text-gray-700">{feature}</p>
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-sm text-red-500">* Not including hosting and domain</p>
              </div>
              <div className="px-6 py-8 bg-gray-50 mt-auto">
                <button
                  onClick={() => handleGetStarted(plan.name)}
                  className="block w-full bg-blue-600 border border-transparent rounded-md py-2 px-4 text-sm font-medium text-center text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Get started
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <button
            onClick={() => handleGetStarted("Custom")}
            className="inline-block bg-green-500 border border-transparent rounded-md py-3 px-8 text-lg font-medium text-white hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
          >
            Need a Custom Website? Contact Us
          </button>
        </div>
      </div>
      <PurchaseModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        planName={selectedPlan || ""}
        onSubmit={handleSubmit}
      />
    </div>
  )
}

export default Pricing

