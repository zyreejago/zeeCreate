import Link from "next/link"

const blogPosts = [
  {
    title: "The Latest Trends in Web Design for 2025",
    excerpt:
      "Explore the cutting-edge design trends that are shaping the web in 2025. From immersive 3D experiences to AI-driven personalization, learn how to keep your website ahead of the curve.",
    date: "March 15, 2025",
    slug: "latest-web-design-trends-2025",
  },
  {
    title: "5 Essential Tips for Improving Your Website's SEO",
    excerpt:
      "Discover key strategies to boost your website's search engine rankings. From optimizing content to improving site speed, these tips will help you attract more organic traffic.",
    date: "February 28, 2025",
    slug: "5-tips-improve-website-seo",
  },
  {
    title: "How to Choose the Right Web Development Framework in 2025",
    excerpt:
      "With so many options available, selecting the best framework for your project can be challenging. We break down the pros and cons of the most popular frameworks to help you make an informed decision.",
    date: "January 10, 2025",
    slug: "choosing-web-development-framework-2025",
  },
]

export default function BlogPage() {
  return (
    <div className="container mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold mb-8 text-center">ZeeCreate Blog</h1>
      <div className="max-w-4xl mx-auto">
        <p className="text-lg mb-12 text-center">
          Welcome to our blog! Here, we share insights, tips, and best practices on web development, design, and online
          marketing. Stay tuned for regular updates and expert advice to help you succeed online.
        </p>
        <div className="space-y-12">
          {blogPosts.map((post, index) => (
            <article key={index} className="border-b border-gray-200 pb-8">
              <h2 className="text-2xl font-semibold mb-2">
                <Link href={`/blog/${post.slug}`} className="text-blue-600 hover:text-blue-800 transition-colors">
                  {post.title}
                </Link>
              </h2>
              <p className="text-gray-600 mb-4">{post.date}</p>
              <p className="text-lg mb-4">{post.excerpt}</p>
              <Link
                href={`/blog/${post.slug}`}
                className="text-blue-600 hover:text-blue-800 transition-colors font-semibold"
              >
                Read more →
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}

