import {
  Globe,
  Clock,
  Users,
  TrendingUp,
  Lightbulb,
  Shield,
  ShoppingCart,
  ArrowUpRight,
  Settings,
  Code,
} from "lucide-react";

const benefits = [
  {
    title: "Generate Qualified Leads",
    description:
      "Attract potential customers actively searching for your services. A well-optimized website captures leads and fuels your sales pipeline.",
    icon: TrendingUp,
    color: "bg-gradient-to-br from-green-400 to-blue-500",
  },
  {
    title: "Strengthen Your Brand Identity",
    description:
      "Showcase your unique value proposition and brand personality. A consistent brand experience across your website builds recognition and customer loyalty.",
    icon: Lightbulb,
    color: "bg-gradient-to-br from-yellow-400 to-orange-500",
  },
  {
    title: "Cost-Effective Marketing Channel",
    description:
      "Reach a wider audience at a fraction of the cost of traditional marketing. A website provides a central hub for all your marketing efforts.",
    icon: ShoppingCart,
    color: "bg-gradient-to-br from-purple-400 to-pink-500",
  },
  {
    title: "Enhance Customer Service",
    description:
      "Provide instant answers to frequently asked questions and offer 24/7 support. A website empowers your customers to find the information they need, when they need it.",
    icon: Users,
    color: "bg-gradient-to-br from-red-400 to-yellow-500",
  },
  {
    title: "Gain a Competitive Edge",
    description:
      "Stand out from the competition and attract customers who are actively searching for businesses like yours. A professional website gives you a distinct advantage.",
    icon: ArrowUpRight,
    color: "bg-gradient-to-br from-blue-400 to-purple-500",
  },
  {
    title: "Showcase Your Expertise",
    description:
      "Establish credibility by showcasing your skills, experience, and unique approach. A website allows you to demonstrate your expertise and attract clients who value quality.",
    icon: Code,
    color: "bg-gradient-to-br from-teal-400 to-green-500",
  },
];

const WebsiteBenefits = () => {
  return (
    <div id="Benefits" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Unlock Your Business Potential with a Powerful Website
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Discover the key benefits of having a website designed to drive
            results and support your business goals.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <div
                className={`absolute inset-0 ${benefit.color} opacity-10 group-hover:opacity-20 transition-opacity duration-300`}
              ></div>
              <div className="relative p-6">
                <div className={`w-16 h-16 flex items-center justify-center text-white rounded-full mb-4 ${benefit.color}`}>
                  <benefit.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WebsiteBenefits;
