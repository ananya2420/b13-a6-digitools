import React from "react";
import play from "../../assets/products/Play.png"
import bannerImg from "../../assets/banner.png"; 
import Rectangle4 from "../../assets/products/Rectangle 4.png"
const Banner = () => {
  return (
    <div className="bg-base-100 py-16 px-6 lg:px-20">
      
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-10">
        
   
        <div className="flex-1 text-center lg:text-left">
          
      
         <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-600 px-4 py-1 rounded-full text-sm font-medium mb-4">
  <img src={Rectangle4} alt="icon" className="w-4 h-4" />
  <span>New: AI-Powered Tools Available</span>
</div>


          <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
            Supercharge Your <br />
            Digital Workflow
          </h1>

        
          <p className="text-gray-600 mb-6">
            Access premium AI tools, design assets, templates, and productivity
            software—all in one place. Start creating faster today.
          </p>

       
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            
            <button className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-lg transition">
              Explore Products
            </button>

            <button className="flex items-center justify-center gap-2 border border-purple-500 text-purple-500 px-6 py-3 rounded-lg hover:bg-purple-50 transition">
              <img src={play} alt="" />
              Watch Demo
            </button>

          </div>
        </div>

   
        <div className="flex-1">
          <img
            src={bannerImg}
            alt="banner"
            className="w-full max-w-md mx-auto"
          />
        </div>

      </div>
    </div>
  );
};

export default Banner;