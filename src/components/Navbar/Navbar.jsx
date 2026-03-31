import React from "react";
import shoppingCart from "../../assets/products/shopping-cart.png";

const Navbar = ({ cart }) => {
  return (
    <div className="navbar bg-base-100 shadow-md px-4 mx-auto">
      
      {/* Navbar Start */}
      <div className="navbar-start">
        <h1 className="text-2xl font-bold text-purple-500 cursor-pointer">
          DigiTools
        </h1>
      </div>

      {/* Navbar Center */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-2">
          <li><a className="hover:text-purple-500">Products</a></li>
          <li><a className="hover:text-purple-500">Features</a></li>
          <li><a className="hover:text-purple-500">Price</a></li>
          <li><a className="hover:text-purple-500">Testimonial</a></li>
          <li><a className="hover:text-purple-500">FAQ</a></li>
        </ul>
      </div>

      {/* Navbar End */}
      <div className="navbar-end flex items-center gap-4">

        {/* Cart Icon + Badge */}
        <div className="relative">
  <img
    src={shoppingCart}
    alt="cart"
    className="w-6 h-6 cursor-pointer"
  />
  {cart.length > 0 && (
    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
      {cart.length}
    </span>
  )}
</div>

        {/* Login & Get Started Buttons */}
        <button className="bg-white text-black px-3 py-1 rounded-lg hover:bg-gray-100 transition">
          Login
        </button>
        <button className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-lg transition">
          Get Started
        </button>

      </div>
    </div>
  );
};

export default Navbar;