"use client";

import type React from "react";
import Image from "next/image";

const Hero = () => {
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

  return (
    <div id="home" className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 bg-white lg:max-w-2xl lg:w-full">
          <svg
            className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>

          <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-16 sm:pt-24 sm:pb-20">
            <div className="text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">
                  Create stunning websites
                </span>{" "}
                <span className="block text-blue-600 xl:inline">
                  with ZeeCreate
                </span>
              </h1>
              <p className="mt-6 text-base text-gray-500 sm:text-lg md:text-xl max-w-xl">
                Transform your online presence with our expert web design and
                development services. We craft beautiful, responsive websites
                tailored to your business needs.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <div>
                  <a
                    href="#pricing"
                    onClick={(e) => handleNavClick(e, "pricing")}
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Get started
                  </a>
                </div>
                <div>
                  <a
                    href="#Benefits"
                    onClick={(e) => handleNavClick(e, "services")}
                    className="w-full flex items-center justify-center px-8 py-3 border-2 border-blue-600 text-base font-medium rounded-lg text-blue-700 bg-transparent hover:bg-blue-50 md:py-4 md:text-lg md:px-10 transition-all duration-300"
                  >
                    Learn more
                  </a>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 p-4">
        <div className="h-56 w-full sm:h-72 md:h-96 lg:h-full overflow-hidden rounded-2xl shadow-2xl">
          <Image
            src="https://images.unsplash.com/photo-1669023414162-5bb06bbff0ec?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Web development illustration showing programming languages and code editor"
            width={1632}
            height={1088}
            className="h-full w-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
