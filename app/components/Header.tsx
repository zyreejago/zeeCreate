"use client";

import type React from "react";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const router = useRouter();
  const pathname = usePathname();

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/#services" },
    { name: "Pricing", href: "/#pricing" },
    { name: "Testimonials", href: "/#testimonials" },
    { name: "Contact", href: "/#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (pathname !== "/") return;

      const sections = navItems
        .filter((item) => item.href.startsWith("/#"))
        .map((item) => item.href.substring(2));
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
  }, [pathname]);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    if (pathname !== "/" && href.startsWith("/#")) {
      router.push("/");
      setTimeout(() => {
        const element = document.getElementById(href.substring(2));
        if (element) {
          window.scrollTo({ top: element.offsetTop - 80, behavior: "smooth" });
        }
      }, 100);
    } else if (href.startsWith("/#")) {
      const element = document.getElementById(href.substring(2));
      if (element) {
        window.scrollTo({ top: element.offsetTop - 80, behavior: "smooth" });
      }
    } else {
      router.push(href);
    }
    setIsMenuOpen(false);
  };

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/" && !activeSection;
    if (href.startsWith("/#")) return activeSection === href.substring(2);
    return pathname === href;
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
                <li key={item.name}>
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`relative inline-block px-1 py-2 text-sm font-medium transition-colors duration-300 ${
                      isActive(item.href)
                        ? "text-blue-600"
                        : "text-gray-600 hover:text-blue-600"
                    }`}
                  >
                    {item.name}
                    <span
                      className={`absolute bottom-0 left-0 h-0.5 bg-blue-600 transition-all duration-300 ${
                        isActive(item.href) ? "w-full" : "w-0"
                      }`}
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
              <div key={item.name}>
                <a
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="relative inline-block px-3 py-2 w-full text-base font-medium"
                >
                  <span
                    className={`relative z-10 transition-colors duration-300 ${
                      isActive(item.href) ? "text-blue-600" : "text-gray-600"
                    }`}
                  >
                    {item.name}
                  </span>
                  <span
                    className={`absolute bottom-0 left-0 h-0.5 bg-blue-600 transition-all duration-300 ${
                      isActive(item.href) ? "w-full" : "w-0"
                    }`}
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
