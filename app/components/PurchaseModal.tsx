"use client";

import type React from "react";
import { useState, useEffect, useRef } from "react";
import { X } from "lucide-react";

interface PurchaseModalProps {
  isOpen: boolean;
  onClose: () => void;
  planName: string;
  onSubmit: (formData: FormData) => void;
}

interface FormData {
  name: string;
  phone: string;
  websiteType: string;
  technology: string;
  framework: string;
  deadline: string;
  message: string;
}

const PurchaseModal: React.FC<PurchaseModalProps> = ({
  isOpen,
  onClose,
  planName,
  onSubmit,
}) => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    websiteType: "",
    technology: "",
    framework: "",
    deadline: "",
    message: "",
  });

  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 overflow-y-auto">
      <div
        ref={modalRef}
        className="bg-white rounded-lg p-4 sm:p-8 max-w-4xl w-full mx-4 my-2 max-h-[90vh] overflow-y-auto"
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Purchase {planName} Plan</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <X size={24} />
          </button>
        </div>
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-full"
        >
          <div>
            <label
              htmlFor="name"
              className="block text-gray-700 font-bold mb-2 text-sm"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg text-sm"
              required
            />
          </div>
          <div>
            <label
              htmlFor="phone"
              className="block text-gray-700 font-bold mb-2 text-sm"
            >
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg text-sm"
              required
            />
          </div>
          <div>
            <label
              htmlFor="websiteType"
              className="block text-gray-700 font-bold mb-2 text-sm"
            >
              Website Type
            </label>
            <input
              type="text"
              id="websiteType"
              name="websiteType"
              value={formData.websiteType}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg text-sm"
              placeholder="E.g., E-commerce, Portfolio, Blog"
              required
            />
          </div>
          <div>
            <label
              htmlFor="technology"
              className="block text-gray-700 font-bold mb-2 text-sm"
            >
              Preferred Programming Language
            </label>
            <input
              type="text"
              id="technology"
              name="technology"
              value={formData.technology}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg text-sm"
              placeholder="E.g., JavaScript, PHP, Dart"
            />
          </div>
          <div>
            <label
              htmlFor="framework"
              className="block text-gray-700 font-bold mb-2 text-sm"
            >
              Preferred Framework (Optional)
            </label>
            <input
              type="text"
              id="framework"
              name="framework"
              value={formData.framework}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg text-sm"
              placeholder="E.g., Next.js, Nuxt.js, Gatsby"
            />
          </div>
          <div>
            <label
              htmlFor="deadline"
              className="block text-gray-700 font-bold mb-2 text-sm"
            >
              Desired Deadline
            </label>
            <input
              type="date"
              id="deadline"
              name="deadline"
              value={formData.deadline}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg text-sm"
              required
            />
          </div>
          <div className="col-span-1 sm:col-span-2">
            <label
              htmlFor="message"
              className="block text-gray-700 font-bold mb-2 text-sm"
            >
              Project Details
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg text-sm"
              rows={4}
              placeholder="Please provide details about your website project, including its purpose, key features, and any specific requirements."
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="col-span-1 sm:col-span-2 w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 text-sm"
          >
            Get Payment
          </button>
        </form>
      </div>
    </div>
  );
};

export default PurchaseModal;
