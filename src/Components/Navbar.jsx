import React, { useState } from "react";
import logo from "../assets/hacker.png";
import { MdOutlineMenuOpen } from "react-icons/md";
import { GiThunderSkull } from "react-icons/gi";

const Navbar = () => {
  const [mobile, SetMobile] = useState(false);
  const NAV_LINKS = ["Home", "About", "Portfolio", "Contact"];
  return (
    <nav className="fixed top-0 w-full z-50 transition-all duration-300 bg-slate-950/20 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16 md:h-20">
          <div className="flex items-center space-x-1 group cursor-pointer">
            <div>
              <img
                src={logo}
                alt="PixelLab"
                className="w-6 h-6 sm:w-8 sm:h-8"
              />
            </div>
            <span className="text-lg sm:text-xl md:text-2xl font-bold">
              <span className="text-white">Pixel</span>
              <span className="text-blue-300">Lab</span>
            </span>
          </div>

          {/* Nav links */}
          <div className=" hidden md:flex items-center space-x-6 lg:space-x-8">
            <a
              href="#features"
              className="text-gray-300 hover:text-white text-sm lg:text-base font-bold"
            >
              About
            </a>

            <a
              href="#pricing"
              className="text-gray-300 hover:text-white text-sm lg:text-base font-bold"
            >
              Portfolio
            </a>

            <a
              href="#testimonials"
              className="text-gray-300 hover:text-white text-sm lg:text-base font-bold "
            >
              Contact
            </a>
          </div>

          <button
            className="md:hidden p-2 text-gray-300 hover:text-white"
            onClick={() => SetMobile((prev) => !prev)}
          >
            {mobile ? (
              <GiThunderSkull className="w-5 h-5 sm:w-6 sm:h-6" />
            ) : (
              <MdOutlineMenuOpen className="w-5 h-5 sm:w-6 sm:h-6" />
            )}
          </button>
        </div>
      </div>

      {mobile && (
        <div className="md:hidden bg-slate-900/95 backdrop-blur-lg border-t border-slate-800 animate-in slide-in-from-top duration-300 ">
          <div className="px-4 py-4 sm:py-6 space-y-3 sm:space-y-4">
            <a
              href="#features"
              onClick={() => SetMobile(false)}
              className="block text-gray-300 hover:text-white text-sm lg:text-base font-bold"
            >
              About
            </a>

            <a
              href="#pricing"
              onClick={() => SetMobile(false)}
              className="block text-gray-300 hover:text-white text-sm lg:text-base font-bold "
            >
              Portfolio
            </a>

            <a
              href="#testimonials"
              onClick={() => SetMobile(false)}
              className="block text-gray-300 hover:text-white text-sm lg:text-base font-bold"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
