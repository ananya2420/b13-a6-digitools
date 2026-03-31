import React from "react";
import shoppingCart from "../../assets/products/shopping-cart.png";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-md px-4">
      
    
      <div className="navbar-start">
        <h1 className="text-2xl font-bold text-purple-500 cursor-pointer">
          DigiTools
        </h1>
      </div>

    
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-2">
          <li><a className="hover:text-purple-500">Products</a></li>
          <li><a className="hover:text-purple-500">Features</a></li>
          <li><a className="hover:text-purple-500">Price</a></li>
          <li><a className="hover:text-purple-500">Testimonial</a></li>
          <li><a className="hover:text-purple-500">FAQ</a></li>
        </ul>
      </div>

  
      <div className="navbar-end flex items-center gap-4">
     
        <img
          src={shoppingCart}
          alt="cart"
          className="w-6 h-6 cursor-pointer"
        />

        <button className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-lg transition">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Navbar;