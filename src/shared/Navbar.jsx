import React from "react";

const Navbar = () => {
  return (
    <header>
      <nav className="flex justify-between items-center">
        <div className="py-5 text-color-secondary font-bold text-3xl">
          <a href="/home">
            <span className="text-color-white">Light</span>Code
          </a>
        </div>
        <div>
          <ul className="hidden lg:flex items-center">
            <li className="space-x-6">
              <a
                href="/home"
                className="hover:text-color-secondary ease-in duration-200"
              >
                Home
              </a>
              <a
                href="/features"
                className="hover:text-color-secondary ease-in duration-200"
              >
                Features
              </a>
              <a
                href="/testimoinal"
                className="hover:text-color-secondary ease-in duration-200"
              >
                Testimonial
              </a>
              <a
                href="/pricing"
                className="hover:text-color-secondary ease-in duration-200"
              >
                Pricing
              </a>
              <a
                href="/blog"
                className="hover:text-color-secondary ease-in duration-200"
              >
                Blog
              </a>
              <a
                href="/contact"
                className="hover:text-color-secondary ease-in duration-200"
              >
                Contact
              </a>
              <button className="btn bg-color-secondary rounded-full px-9 py-2 capitalize font-bold hover:opacity-80 ease-in duration-200">
                Free Trial
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
