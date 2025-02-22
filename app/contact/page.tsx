export default function Contact() {
    return (
      <div className="container mx-auto py-16 px-4">
        <h1 className="text-4xl font-bold mb-8 text-center">Contact Us</h1>
        <div className="max-w-3xl mx-auto">
          <p className="text-lg mb-8 text-center">
            We'd love to hear from you! Whether you have a question about our services, need a quote, or want to discuss
            your project, our team is here to help.
          </p>
          <div className="bg-white shadow-md rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
                  Name
                </label>
                <input type="text" id="name" name="name" className="w-full px-3 py-2 border rounded-lg" required />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
                  Email
                </label>
                <input type="email" id="email" name="email" className="w-full px-3 py-2 border rounded-lg" required />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-700 font-bold mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-3 py-2 border rounded-lg"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-4">Other Ways to Reach Us</h3>
            <p className="mb-2">Email: info@zeecreate.com</p>
            <p className="mb-2">Phone: +1 (555) 123-4567</p>
            <p>Address: 123 Web Street, Digital City, 12345</p>
          </div>
        </div>
      </div>
    )
  }
  
  