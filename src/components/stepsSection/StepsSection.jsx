import React from "react";
import user from "../../assets/products/user.png"
import packageIcon from "../../assets/products/package.png";
import rocket from "../../assets/products/rocket.png";

const StepsSection = () => {
  return (
    <div className="py-16 px-6 lg:px-20 bg-base-100">
      
   
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">Get Started in 3 Steps</h2>
        <p className="text-gray-600">
          Start using premium digital tools in minutes, not hours.
        </p>
      </div>

      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Card 1 */}
        <div className="relative bg-white shadow-md rounded-xl p-6 flex flex-col items-start">
          <span className="absolute top-4 right-4 text-purple-500 font-bold text-xl">01</span>
          <img src={user} alt="Create Account" className="w-16 h-16 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Create Account</h3>
          <p className="text-gray-600 text-sm">
            Sign up for free in seconds. No credit card required to get started.
          </p>
        </div>

        {/* Card 2 */}
        <div className="relative bg-white shadow-md rounded-xl p-6 flex flex-col items-start">
          <span className="absolute top-4 right-4 text-purple-500 font-bold text-xl">02</span>
          <img src={packageIcon} alt="Choose Products" className="w-16 h-16 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Choose Products</h3>
          <p className="text-gray-600 text-sm">
            Browse our catalog and select the tools that fit your needs.
          </p>
        </div>

        {/* Card 3 */}
        <div className="relative bg-white shadow-md rounded-xl p-6 flex flex-col items-start">
          <span className="absolute top-4 right-4 text-purple-500 font-bold text-xl">03</span>
          <img src={rocket} alt="Start Creating" className="w-16 h-16 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Start Creating</h3>
          <p className="text-gray-600 text-sm">
            Download and start using your premium tools immediately.
          </p>
        </div>

      </div>
    </div>
  );
};

export default StepsSection;