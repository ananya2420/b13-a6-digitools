import React from "react";

const Stats = () => {
  return (
    <div className="bg-purple-500 text-white py-12 px-6 lg:px-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">

  
        <div>
          <h2 className="text-3xl font-bold mb-2">50K+</h2>
          <p className="text-sm">Active Users</p>
        </div>

     
        <div>
          <h2 className="text-3xl font-bold mb-2">200+</h2>
          <p className="text-sm">Premium Tools</p>
        </div>

       
        <div>
          <h2 className="text-3xl font-bold mb-2">4.9</h2>
          <p className="text-sm">Rating</p>
        </div>

      </div>
    </div>
  );
};

export default Stats;