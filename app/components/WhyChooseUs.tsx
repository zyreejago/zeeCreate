import {
  CheckCircle,
  Code,
  Lightbulb,
  ShieldCheck,
  TrendingUp,
  Users,
} from "lucide-react";

const reasons = [
  {
    title: "Expert Web Developers",
    description:
      "Our team consists of highly skilled and experienced web developers who are passionate about creating exceptional websites.",
    icon: Code,
    color: "bg-gradient-to-br from-teal-400 to-green-500",
  },
  {
    title: "Customized Solutions",
    description:
      "We don't believe in one-size-fits-all solutions. We tailor our web development services to meet your specific business needs and goals.",
    icon: Lightbulb,
    color: "bg-gradient-to-br from-yellow-400 to-orange-500",
  },
  {
    title: "Results-Driven Approach",
    description:
      "We focus on delivering websites that drive results, whether it's generating leads, increasing sales, or improving brand awareness.",
    icon: TrendingUp,
    color: "bg-gradient-to-br from-purple-400 to-pink-500",
  },
  {
    title: "Transparent Communication",
    description:
      "We keep you informed every step of the way, providing regular updates and seeking your feedback throughout the development process.",
    icon: Users,
    color: "bg-gradient-to-br from-red-400 to-yellow-500",
  },
  {
    title: "Security and Reliability",
    description:
      "We prioritize the security and reliability of your website, implementing robust measures to protect your data and ensure optimal performance.",
    icon: ShieldCheck,
    color: "bg-gradient-to-br from-blue-400 to-purple-500",
  },
  {
    title: "Ongoing Support and Maintenance",
    description:
      "We provide ongoing support and maintenance services to keep your website up-to-date, secure, and running smoothly.",
    icon: CheckCircle,
    color: "bg-gradient-to-br from-green-400 to-blue-500",
  },
];

const WhyChooseUs = () => {
  return (
    <div id="why-choose-us" className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Why Choose ZeeCreate?
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            We're more than just a web development agency. We're your partners
            in online success.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <div
                className={`absolute inset-0 ${reason.color} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}
              ></div>
              <div className="relative p-6">
                <div
                  className={`w-16 h-16 flex items-center justify-center text-white rounded-full mb-4 ${reason.color}`}
                >
                  <reason.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {reason.title}
                </h3>
                <p className="text-gray-600">{reason.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
