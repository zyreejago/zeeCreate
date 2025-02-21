const BlogPage = () => {
  return (
    <div className="container mx-auto py-16">
      <h1 className="text-3xl font-bold mb-4">Our Blog</h1>
      <p>
        Welcome to our blog! Here, we share insights, tips, and best practices
        on web development, design, and online marketing. Stay tuned for regular
        updates and expert advice to help you succeed online.
      </p>
      <h2 className="text-2xl font-semibold mt-8 mb-4">Recent Posts</h2>
      <ul className="list-disc list-inside">
        <li>
          <a href="#" className="text-blue-500 hover:underline">
            The Latest Trends in Web Design
          </a>
        </li>
        <li>
          <a href="#" className="text-blue-500 hover:underline">
            5 Tips for Improving Your Website's SEO
          </a>
        </li>
        <li>
          <a href="#" className="text-blue-500 hover:underline">
            How to Choose the Right Web Development Framework
          </a>
        </li>
      </ul>
    </div>
  );
};

export default BlogPage;
