"use client";

import type React from "react";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const navItems = ["Home", "Services", "Pricing", "Testimonials", "Contact"];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => item.toLowerCase());
      let current = "";

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && window.scrollY >= element.offsetTop - 100) {
          current = section;
        }
      }

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-sm fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-blue-600">
              <span className="font-poppins">ZeeCreate</span>
            </Link>
          </div>
          <nav className="hidden md:block">
            <ul className="flex items-baseline space-x-8 font-poppins">
              {navItems.map((item) => (
                <li key={item} className="relative">
                  <a
                    href={`#${item.toLowerCase()}`}
                    onClick={(e) => handleNavClick(e, item.toLowerCase())}
                    className={`relative inline-block px-1 py-2 text-sm font-medium transition-colors duration-300 ${
                      activeSection === item.toLowerCase()
                        ? "text-blue-600"
                        : "text-gray-600 hover:text-blue-600"
                    }`}
                  >
                    <span className="relative z-10">{item}</span>
                    <span
                      className={`absolute bottom-0 left-0 h-0.5 bg-blue-600 transition-all duration-500 ease-in-out ${
                        activeSection === item.toLowerCase()
                          ? "w-full opacity-100"
                          : "w-0 opacity-0"
                      }`}
                      style={{
                        transformOrigin: "left center",
                      }}
                    />
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-blue-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <div key={item} className="relative">
                <a
                  href={`#${item.toLowerCase()}`}
                  onClick={(e) => handleNavClick(e, item.toLowerCase())}
                  className="relative inline-block px-3 py-2 w-full text-base font-medium"
                >
                  <span
                    className={`relative z-10 transition-colors duration-300 ${
                      activeSection === item.toLowerCase()
                        ? "text-blue-600"
                        : "text-gray-600"
                    }`}
                  >
                    {item}
                  </span>
                  <span
                    className={`absolute bottom-0 left-3 h-0.5 bg-blue-600 transition-all duration-500 ease-in-out ${
                      activeSection === item.toLowerCase()
                        ? "w-12 opacity-100"
                        : "w-0 opacity-0"
                    }`}
                    style={{
                      transformOrigin: "left center",
                    }}
                  />
                </a>
              </div>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
