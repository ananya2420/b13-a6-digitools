import React from "react";
import { FaCheck } from "react-icons/fa";

const PricingSection = () => {
  return (
    <div className="py-16 px-6 lg:px-20 bg-base-100">


      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Simple, Transparent Pricing</h1>
        <p className="text-gray-600">
          Choose the plan that fits your needs. Upgrade or downgrade anytime.
        </p>
      </div>

      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

       
        <div className="bg-white text-black shadow-md rounded-xl p-6 flex flex-col justify-between">
          <div>
            <h2 className="text-xl font-semibold mb-1">Starter</h2>
            <p className="text-gray-500 mb-4">Perfect for getting started</p>
            <h3 className="text-2xl font-bold mb-6">$0/month</h3>

           
            <ul className="space-y-2 mb-6">
              <li className="flex items-center gap-2">
                <FaCheck className="text-green-500" /> 
                <span className="text-black">Access to 10 free tools</span>
              </li>
              <li className="flex items-center gap-2">
                <FaCheck className="text-green-500" /> 
                <span className="text-black">Basic templates</span>
              </li>
              <li className="flex items-center gap-2">
                <FaCheck className="text-green-500" /> 
                <span className="text-black">Community support</span>
              </li>
              <li className="flex items-center gap-2">
                <FaCheck className="text-green-500" /> 
                <span className="text-black">1 project per month</span>
              </li>
            </ul>
          </div>

          <button className="bg-purple-500 text-white px-6 py-3 rounded-lg w-full mt-auto hover:bg-purple-600 transition">
            Get Started Free
          </button>
        </div>

        
       <div className="bg-purple-500 text-white shadow-md rounded-xl p-6 flex flex-col justify-between border-2 border-purple-700">
  <div>
    <p className="text-center font-medium uppercase mb-1 text-yellow-400">Most Popular</p>
    <h2 className="text-2xl font-bold mb-1">Pro</h2>
    <p className="text-gray-200 mb-4">Best for professionals</p>
    <h3 className="text-2xl font-bold mb-6">$29/month</h3>


    <ul className="space-y-2 mb-6">
      <li className="flex items-center justify-between">
        <span className="text-white">Access to all premium tools</span>
        <FaCheck className="text-green-500 ml-2" />
      </li>
      <li className="flex items-center justify-between">
        <span className="text-white">Unlimited templates</span>
        <FaCheck className="text-green-500 ml-2" />
      </li>
      <li className="flex items-center justify-between">
        <span className="text-white">Priority support</span>
        <FaCheck className="text-green-500 ml-2" />
      </li>
      <li className="flex items-center justify-between">
        <span className="text-white">Unlimited projects</span>
        <FaCheck className="text-green-500 ml-2" />
      </li>
      <li className="flex items-center justify-between">
        <span className="text-white">Cloud sync</span>
        <FaCheck className="text-green-500 ml-2" />
      </li>
      <li className="flex items-center justify-between">
        <span className="text-white">Advanced analytics</span>
        <FaCheck className="text-green-500 ml-2" />
      </li>
    </ul>
  </div>

  <button className="bg-white text-purple-500 px-6 py-3 rounded-lg w-full mt-auto hover:bg-gray-100 transition">
    Explore Pro
  </button>
</div>

        
        <div className="bg-white text-black shadow-md rounded-xl p-6 flex flex-col justify-between">
          <div>
            <h2 className="text-xl font-semibold mb-1">Enterprise</h2>
            <p className="text-gray-500 mb-4">For teams and businesses</p>
            <h3 className="text-2xl font-bold mb-6">$99/month</h3>

        
            <ul className="space-y-2 mb-6">
              <li className="flex items-center gap-2">
                <FaCheck className="text-green-500" /> 
                <span className="text-black">Everything in Pro</span>
              </li>
              <li className="flex items-center gap-2">
                <FaCheck className="text-green-500" /> 
                <span className="text-black">Team collaboration</span>
              </li>
              <li className="flex items-center gap-2">
                <FaCheck className="text-green-500" /> 
                <span className="text-black">Custom integrations</span>
              </li>
              <li className="flex items-center gap-2">
                <FaCheck className="text-green-500" /> 
                <span className="text-black">Dedicated support</span>
              </li>
              <li className="flex items-center gap-2">
                <FaCheck className="text-green-500" /> 
                <span className="text-black">SLA guarantee</span>
              </li>
              <li className="flex items-center gap-2">
                <FaCheck className="text-green-500" /> 
                <span className="text-black">Custom branding</span>
              </li>
            </ul>
          </div>

          <button className="bg-purple-500 text-white px-6 py-3 rounded-lg w-full mt-auto hover:bg-purple-600 transition">
            Contact Sales
          </button>
        </div>

      </div>
    </div>
  );
};

export default PricingSection;