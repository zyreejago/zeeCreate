"use client";
import React from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import Head from "next/head";

const faqs = [
  {
    question: "How long does it take to build a website?",
    answer:
      "The time required to build a website depends on its complexity. A simple website typically takes 1-7 days, while a more complex one can take 2-5 weeks. We'll provide a more accurate estimate after discussing your specific needs.",
  },
  {
    question: "Do you offer website maintenance services?",
    answer:
      "Yes, we offer ongoing maintenance and support services to keep your website up-to-date, secure, and running smoothly. We have various maintenance packages to suit different needs and budgets.",
  },
  {
    question: "Can you help with SEO for my website?",
    answer:
      "We incorporate SEO best practices in all our website designs. We also offer additional SEO services to help improve your website's visibility in search engine results and drive more organic traffic to your site.",
  },
  {
    question: "Do you design e-commerce websites?",
    answer:
      "Yes, we have extensive experience in designing and developing e-commerce websites. We can create a custom online store that's user-friendly, secure, and optimized for conversions.",
  },
  {
    question:
      "What's the difference between custom and template-based websites?",
    answer:
      "Custom websites are built from scratch to meet your specific needs and branding, offering unique designs and functionalities. Template-based websites use pre-designed layouts that can be customized to some extent. While templates are quicker and cheaper to implement, custom websites offer more flexibility and uniqueness.",
  },
  {
    question: "Where is your portfolio?",
    answer:
      "I do have a portfolio, but I cannot share it as I need to protect the privacy of my clients or the company. At ZeeCreate, we highly prioritize the privacy of those who have placed an order with us.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <Head>
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Head>
      <div className="bg-white py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">
            Frequently Asked Questions
          </h2>
          <dl className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-200 pb-6">
                <dt className="text-lg">
                  <button
                    onClick={() =>
                      setOpenIndex(openIndex === index ? null : index)
                    }
                    className="flex justify-between items-start text-left w-full focus:outline-none"
                  >
                    <span className="font-medium text-gray-900">
                      {faq.question}
                    </span>
                    <span className="ml-6 flex-shrink-0">
                      {openIndex === index ? (
                        <ChevronUp className="h-6 w-6 text-gray-500 transition-transform duration-300 transform rotate-180" />
                      ) : (
                        <ChevronDown className="h-6 w-6 text-gray-500 transition-transform duration-300" />
                      )}
                    </span>
                  </button>
                </dt>
                <dd
                  className={`mt-2 pr-12 overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === index ? "max-h-40" : "max-h-0"
                  }`}
                >
                  <p className="text-base text-gray-700">{faq.answer}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </>
  );
};

export default FAQ;
