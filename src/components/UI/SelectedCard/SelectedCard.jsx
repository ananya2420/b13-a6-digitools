import React from 'react'

import group7 from "../../../assets/products/Group 7.png"
import group8 from "../../../assets/products/Group 8.png"
import group9 from "../../../assets/products/Group 9.png"
import group10 from "../../../assets/products/Group 10.png"
import group11 from "../../../assets/products/Group 11.png"
import group12 from "../../../assets/products/group 12.png"

const imageMap = {
  "group-7.png": group7,
  "group-8.png": group8,
  "group-9.png": group9,
  "group-10.png": group10,
  "group-11.png": group11,
  "group-12.png": group12,
};

export const SelectedCard = ({premium,handleDeleteSelectedPremiums}) => {
  return (
    <div className="p-3">
      <div className="flex items-center justify-between bg-white shadow-md rounded-xl p-4 hover:shadow-lg transition">
        
        <div className="flex items-center gap-4">
          <img 
            src={imageMap[premium.premiumImg]} 
             alt={premium.name} 
              className="h-[100px] w-auto rounded-md object-cover"
/>

          <div>
            <h2 className='flex items-center gap-2 font-semibold text-2xl'>
              {premium.name}
            </h2> 
            <p className="text-gray-500 font-medium">
              ${premium.price}
            </p>
          </div>
        </div>

        <button 
          onClick={()=>handleDeleteSelectedPremiums(premium)}
          className="bg-red-100 hover:bg-red-200 text-red-600 p-3 rounded-full transition"
        >
          Delete
        </button>

      </div>
    </div>
  )
}