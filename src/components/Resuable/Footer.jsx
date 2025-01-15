import React from "react";
import logo from "../../assets/logo.png";
import facebook from "../../assets/facebook.png";
import instagram from "../../assets/instagram.png";
import LinkedIn from "../../assets/linkedin.png";
import twitter from "../../assets/twitter.png";
export const Footer = () => {
  return (
    <div>
      <footer className="bg-gray-50 mt-12 py-10">
        {/* Logo Section */}
        <div className=" mx-auto px-5 max-w-6xl">
          <div className="flex items-center justify-center md:justify-start gap-3 mb-8">
            <img src={logo} alt="Logo" className="w-10 h-10" />
            <h1 className="text-3xl font-semibold text-[#2F2F2F]">Dagmaros</h1>
          </div>

          {/* Navigation Sections */}
          <div className="flex flex-wrap justify-around space-y-8 md:space-y-0">
            {/* About Us Section */}
            <div className="w-full md:w-1/4">
              <h2 className="text-[30px] font-semibold text-[#12122D] mb-4 text-center md:text-left">
                About Us
              </h2>
              <ul className="space-y-3 text-center md:text-left">
                <li>
                  <a
                    href="#"
                    className="text-[#2F2F2F] hover:text-[#13274F] transition duration-200"
                  >
                    Who We Are
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[#2F2F2F] hover:text-[#13274F] transition duration-200"
                  >
                    Our Mission
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[#2F2F2F] hover:text-[#13274F] transition duration-200"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[#2F2F2F] hover:text-[#13274F] transition duration-200"
                  >
                    Press & Media
                  </a>
                </li>
              </ul>
            </div>

            {/* Resources Section */}
            <div className="w-full md:w-1/4">
              <h2 className="text-[30px] font-semibold  mb-4 text-center md:text-left">
                Resources
              </h2>
              <ul className="space-y-3 text-center md:text-left">
                <li>
                  <a
                    href="#"
                    className="text-[#2F2F2F]  hover:text-blue transition duration-200"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[#2F2F2F]  hover:text-blue transition duration-200"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[#2F2F2F]  hover:text-blue transition duration-200"
                  >
                    Service
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[#2F2F2F]hover:text-blue-500 transition duration-200"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[#2F2F2F] hover:text-blue-500 transition duration-200"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            {/* Features Section */}
            <div className="w-full md:w-1/4">
              <h2 className="text-[30px] font-semibold text-gray-800 mb-4 text-center md:text-left">
                Features
              </h2>
              <ul className="space-y-3 text-center md:text-left">
                <li>
                  <a
                    href="#"
                    className="text-[#2F2F2F]  hover:text-blue-500 transition duration-200"
                  >
                    Creativity
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[#2F2F2F]  hover:text-blue-500 transition duration-200"
                  >
                    Strategy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[#2F2F2F] hover:text-blue-500 transition duration-200"
                  >
                    Growth
                  </a>
                </li>
              </ul>
            </div>

            {/* Stay Connected Section */}
            <div className="w-full md:w-1/4">
              <h2 className="text-xl font-semibold text-gray-800 mb-4 text-center md:text-left">
                Stay Connected
              </h2>
              <div className="flex justify-center md:justify-start space-x-5">
                <a href="#">
                  <img
                    src={facebook}
                    alt="Facebook"
                    className="w-5 h-5 hover:opacity-75 transition duration-200"
                  />
                </a>
                <a href="#">
                  <img
                    src={LinkedIn}
                    alt="LinkedIn"
                    className="w-5 h-5 hover:opacity-75 transition duration-200"
                  />
                </a>
                <a href="#">
                  <img
                    src={twitter}
                    alt="Twitter"
                    className="w-5 h-5 hover:opacity-75 transition duration-200"
                  />
                </a>
                <a href="#">
                  <img
                    src={instagram}
                    alt="Instagram"
                    className="w-5 h-5 hover:opacity-75 transition duration-200"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
