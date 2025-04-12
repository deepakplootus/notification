import React from "react";
import facebook from "../assets/facebook.png"; // Import your Facebook icon here
import instagram from "../assets/instagram.png"; // Import your Instagram icon here
import logo from "../assets/logowhite.svg"; // Import your logo here

const Footer = () => {
  return (
    <footer className="bg-[#FFAFB6] text-white py-12 px-6 md:px-12">
      {/* Main pink background */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Column 1: Logo and Social */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          {/* Logo */}
          <div className="text-center md:text-left mb-4">
            <img className="w-32 md:w-40" src={logo} alt="Logo" />
          </div>
          {/* Social Icons */}
          <div className="flex space-x-4 mt-4 md:mt-6">
            <a
              href="#"
              aria-label="Facebook"
              className="border hover:text-white rounded-md p-2 flex items-center justify-center transition duration-200 w-32 text-sm"
            >
              <img className="w-5 h-5 mr-2" src={facebook} alt="Facebook" />
              FACEBOOK
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="border hover:text-white rounded-md p-2 flex items-center justify-center transition duration-200 w-32 text-sm"
            >
              <img className="w-5 h-5 mr-2" src={instagram} alt="Instagram" />
              INSTAGRAM
            </a>
          </div>
        </div>

        {/* Column 2: Information */}
        <div>
          <h3 className="text-lg font-semibold mb-4 uppercase tracking-wider">
            Information
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="">
                Track your Order
              </a>
            </li>
            <li>
              <a href="#" className="">
                Returns and Refunds
              </a>
            </li>
            <li>
              <a href="#" className="">
                Holiday List
              </a>
            </li>
            <li>
              <a href="#" className="">
                Terms & Conditions
              </a>
            </li>
            <li>
              <a href="#" className="">
                Aartis
              </a>
            </li>
            <li>
              <a href="#" className="">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="">
                FAQ
              </a>
            </li>
            <li>
              <a href="#" className="">
                Deals & Coupons
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3: About My Pooja Box */}
        <div>
          <h3 className="text-lg font-semibold mb-4 uppercase tracking-wider">
            About My Pooja Box
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#" className="">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="">
                Corporate Enquiry
              </a>
            </li>
            <li>
              <a href="#" className="">
                Exchange/Cancel My Order
              </a>
            </li>
          </ul>
        </div>

        {/* Column 4: Customer Care */}
        <div>
          <h3 className="text-lg font-semibold mb-4 uppercase tracking-wider">
            Customer Care
          </h3>
          <div className="space-y-2 text-sm">
            <p>
              Phone:{" "}
              <a href="tel:+918010288882" className="">
                +91 8010288882
              </a>{" "}
              |{" "}
              <a href="tel:+918010188881" className="">
                +91 8010188881
              </a>
            </p>
            <p>
              Email:{" "}
              <a href="mailto:orders@mypoojabox.com" className="">
                orders@mypoojabox.com
              </a>
            </p>
            <p className="mt-3 leading-relaxed">
              Address: My Pooja Box, Jagat Complex,
              <br />
              100 Ft Rd, Ghitorni, New Delhi 110030
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
