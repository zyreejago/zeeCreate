import type React from "react"
import { useState } from "react"
import { X } from "lucide-react"

interface PurchaseModalProps {
  isOpen: boolean
  onClose: () => void
  planName: string
  onSubmit: (formData: FormData) => void
}

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

const PurchaseModal: React.FC<PurchaseModalProps> = ({ isOpen, onClose, planName, onSubmit }) => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    websiteType: "",
    technology: "",
    framework: "",
    deadline: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prevState) => ({ ...prevState, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit(formData)
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 overflow-y-auto">
      <div className="bg-white rounded-lg p-8 max-w-md w-full m-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Purchase {planName} Plan</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X size={24} />
          </button>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg"
              required
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-gray-700 font-bold mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg"
              required
            />
          </div>
          <div>
            <label htmlFor="websiteType" className="block text-gray-700 font-bold mb-2">
              Website Type
            </label>
            <input
              type="text"
              id="websiteType"
              name="websiteType"
              value={formData.websiteType}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg"
              placeholder="E.g., E-commerce, Portfolio, Blog"
              required
            />
          </div>
          <div>
            <label htmlFor="technology" className="block text-gray-700 font-bold mb-2">
              Preferred Technology
            </label>
            <input
              type="text"
              id="technology"
              name="technology"
              value={formData.technology}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg"
              placeholder="E.g., React, Vue, Angular"
            />
          </div>
          <div>
            <label htmlFor="framework" className="block text-gray-700 font-bold mb-2">
              Preferred Framework (Optional)
            </label>
            <input
              type="text"
              id="framework"
              name="framework"
              value={formData.framework}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg"
              placeholder="E.g., Next.js, Nuxt.js, Gatsby"
            />
          </div>
          <div>
            <label htmlFor="deadline" className="block text-gray-700 font-bold mb-2">
              Desired Deadline
            </label>
            <input
              type="date"
              id="deadline"
              name="deadline"
              value={formData.deadline}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-gray-700 font-bold mb-2">
              Project Details
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg"
              rows={4}
              placeholder="Please provide details about your website project, including its purpose, key features, and any specific requirements."
              required
            ></textarea>
          </div>
          <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700">
            Get Payment
          </button>
        </form>
      </div>
    </div>
  )
}

export default PurchaseModal

