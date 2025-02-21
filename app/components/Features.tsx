"use client";

import {
  Zap,
  Smartphone,
  Palette,
  Search,
  ShieldCheck,
  Settings,
  Code,
  BarChart,
  Globe,
} from "lucide-react";

const features = [
  {
    name: "Lightning Fast",
    description:
      "Our websites are optimized for speed, ensuring your visitors have a smooth experience.",
    icon: Zap,
  },
  {
    name: "Fully Responsive",
    description:
      "Your website will look great on any device, from desktop to mobile.",
    icon: Smartphone,
  },
  {
    name: "Beautiful Design",
    description:
      "We create stunning, modern designs that capture your brand's essence.",
    icon: Palette,
  },
  {
    name: "SEO Optimized",
    description:
      "Built with search engines in mind to help your website rank better and reach more customers.",
    icon: Search,
  },
  {
    name: "Secure & Reliable",
    description:
      "Advanced security measures to keep your website and customer data safe.",
    icon: ShieldCheck,
  },
  {
    name: "Easy Management",
    description:
      "User-friendly admin panel to easily update your content and manage your website.",
    icon: Settings,
  },
  {
    name: "Custom Development",
    description:
      "Tailored functionality and features specific to your business needs.",
    icon: Code,
  },
  {
    name: "Analytics Integration",
    description:
      "Track your website's performance with detailed analytics and insights.",
    icon: BarChart,
  },
  {
    name: "Global Reach",
    description:
      "Multi-language support and CDN integration for worldwide accessibility.",
    icon: Globe,
  },
];
const handleNavClick = (
  e: React.MouseEvent<HTMLAnchorElement>,
  target: string
) => {
  e.preventDefault();
  const element = document.getElementById(target);
  if (element) {
    const offset = 80;
    const elementPosition =
      element.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({
      top: elementPosition - offset,
      behavior: "smooth",
    });
  }
};

const Features = () => {
  return (
    <div id="services" className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">
            Our Services
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            A better way to build your web presence
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            We combine cutting-edge technology with expert design to deliver
            websites that stand out and perform excellently.
          </p>
        </div>

        <div className="mt-16">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-8">
            {features.map((feature) => (
              <div
                key={feature.name}
                className="relative bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white transform transition-transform duration-300 hover:scale-110">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                    {feature.name}
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-gray-600 mb-8">
            Ready to transform your online presence? Let's create something
            amazing together!
          </p>
          <a
            href="#pricing"
            onClick={(e) => handleNavClick(e, "pricing")}
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-300"
          >
            Start Your Project
          </a>
        </div>
      </div>
    </div>
  );
};

export default Features;
