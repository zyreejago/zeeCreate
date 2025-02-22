"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import PurchaseModal from "./PurchaseModal";

interface FormData {
  name: string;
  phone: string;
  websiteType: string;
  technology: string;
  framework: string;
  deadline: string;
  message: string;
}

const plans = [
  {
    name: "Basic",
    price: "699.000",
    features: [
      "Responsive design",
      "5 pages",
      "Contact form",
      "Basic SEO",
      "Speed Optimization",
      "3x Revision",
    ],
    includeHostingNote: true,
  },
  {
    name: "Professional",
    price: "1.799.000",
    isRecommended: true,
    features: [
      "Responsive design",
      "CMS Admin Panel",
      "10 pages",
      "Contact form",
      "Advanced SEO",
      "E-commerce integration",
      "Include Hosting",
      "Performance monitoring",
      "Speed Optimization",
      "5x Revision",
    ],
    includeHostingNote: false,
  },
  {
    name: "Enterprise",
    price: "2.999.000",
    features: [
      "Responsive design",
      "Unlimited pages",
      "Custom functionality",
      "Advanced SEO",
      "E-commerce integration",
      "6 months of support",
      "Include Hosting",
      "Custom API integration",
      "Advanced analytics dashboard",
      "High Optimization",
      "Unlimited Revision",
    ],
    includeHostingNote: false,
  },
];

const Pricing = () => {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleGetStarted = (planName: string) => {
    setSelectedPlan(planName);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedPlan(null);
  };

  const handleSubmit = (formData: FormData) => {
    const plan = plans.find((p) => p.name === selectedPlan);
    if (!plan) return;

    const message = `*Hii zee!*

  New ${selectedPlan} Plan Order

  *Customer Details:*
    • Name: ${formData.name}
    • Phone: ${formData.phone}

  *Project Details:*
    • Website Type: ${formData.websiteType}
    • Programming Language: ${formData.technology}
    • Framework: ${formData.framework || "Not specified"}
    • Desired Deadline: ${formData.deadline}

  *Selected Plan:*
    • Plan: ${selectedPlan}
    • Price: Rp ${plan.price}

  *Additional Information:*
    ${formData.message}

  Thank you for choosing our service! We'll get back to you shortly to discuss your project further.`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/6288987244675?text=${encodedMessage}`, "_blank");
    handleCloseModal();
  };

  return (
    <div id="pricing" className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Choose the perfect plan for your needs
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            We offer flexible pricing options tailored to your needs
          </p>
        </div>
        <div className="mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0 xl:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`bg-white rounded-lg shadow-lg overflow-hidden flex flex-col relative md:hover:scale-105 md:transition-transform md:duration-300 ${
                plan.isRecommended ? "border-2 border-blue-500" : ""
              }`}
            >
              {plan.isRecommended && (
                <div className="absolute top-0 right-0 bg-blue-500 text-white px-4 py-1 rounded-bl-lg text-sm font-semibold">
                  Recommended
                </div>
              )}
              <div className="px-6 py-8 flex-grow">
                <h3 className="text-2xl font-semibold text-gray-900">
                  {plan.name}
                </h3>
                <p className="mt-4 text-4xl font-extrabold text-gray-900">
                  Rp {plan.price}
                </p>
                <p className="mt-1 text-sm text-gray-500">One-time payment</p>
                <ul className="mt-6 space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <div className="flex-shrink-0">
                        <Check
                          className="h-6 w-6 text-green-500"
                          aria-hidden="true"
                        />
                      </div>
                      <p className="ml-3 text-base text-gray-700">{feature}</p>
                    </li>
                  ))}
                </ul>
                {plan.includeHostingNote && (
                  <p className="mt-6 text-sm text-red-500">
                    * Not including hosting and domain
                  </p>
                )}
              </div>
              <div className="px-6 py-8 bg-gray-50 mt-auto">
                <button
                  onClick={() => handleGetStarted(plan.name)}
                  className={`block w-full rounded-md py-2 px-4 text-sm font-medium text-center text-white focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                    plan.isRecommended
                      ? "bg-blue-600 hover:bg-blue-700 focus:ring-blue-500"
                      : "bg-blue-600 hover:bg-blue-700 focus:ring-blue-500"
                  } active:bg-blue-800`}
                >
                  Get started
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <a href="https://wa.me/6288987244675">
            <button className="inline-block bg-green-500 border border-transparent rounded-md py-3 px-8 text-lg font-medium text-white hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 active:bg-green-700">
              Need a Custom Website? Contact Us
            </button>
          </a>
        </div>
      </div>
      <PurchaseModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        planName={selectedPlan || ""}
        onSubmit={handleSubmit}
      />
    </div>
  );
};

export default Pricing;
