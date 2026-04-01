import React from "react";
//import SocialIcons from "./SocialIcons";
import { IoShareSocial } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300">
  <div className="max-w-7xl mx-auto px-6 lg:px-20 py-12 grid grid-cols-1 md:grid-cols-5 gap-8">
    <div className="md:col-span-2">
      <h1 className="text-2xl font-bold mb-2 text-white">DigiTools</h1>
      <p className="text-gray-400 mb-4">
        Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.
      </p>
      <IoShareSocial className="text-gray-400" />
    </div>

    <div>
      <h2 className="font-semibold mb-3 text-white">Product</h2>
      <ul className="space-y-2 text-sm">
        <li><a href="#" className="hover:text-purple-500 transition">Features</a></li>
        <li><a href="#" className="hover:text-purple-500 transition">Pricing</a></li>
        <li><a href="#" className="hover:text-purple-500 transition">Template</a></li>
        <li><a href="#" className="hover:text-purple-500 transition">Integrations</a></li>
      </ul>
    </div>

    <div>
      <h2 className="font-semibold mb-3 text-white">Company</h2>
      <ul className="space-y-2 text-sm">
        <li><a href="#" className="hover:text-purple-500 transition">About</a></li>
        <li><a href="#" className="hover:text-purple-500 transition">Blog</a></li>
        <li><a href="#" className="hover:text-purple-500 transition">Careers</a></li>
        <li><a href="#" className="hover:text-purple-500 transition">Press</a></li>
      </ul>
    </div>

    <div>
      <h2 className="font-semibold mb-3 text-white">Resources</h2>
      <ul className="space-y-2 text-sm">
        <li><a href="#" className="hover:text-purple-500 transition">Documentation</a></li>
        <li><a href="#" className="hover:text-purple-500 transition">Help Center</a></li>
        <li><a href="#" className="hover:text-purple-500 transition">Community</a></li>
      </ul>
    </div>
  </div>

  <div className="border-t border-gray-700 py-4 px-6 lg:px-20">
    <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
      <p className="mb-2 md:mb-0">© 2026 Digitools. All rights reserved.</p>
      <div className="flex flex-wrap gap-2 md:gap-4">
        <a href="#" className="hover:text-purple-500 transition">Privacy Policy</a>
        <span>|</span>
        <a href="#" className="hover:text-purple-500 transition">Terms of Service</a>
        <span>|</span>
        <a href="#" className="hover:text-purple-500 transition">Cookies</a>
      </div>
    </div>
  </div>
</footer>
  );
};

export default Footer;
