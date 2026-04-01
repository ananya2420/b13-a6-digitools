import { useState } from 'react';
import group7 from "../../assets/products/Group 7.png";
import group8 from "../../assets/products/Group 8.png";
import group9 from "../../assets/products/Group 9.png";
import group10 from "../../assets/products/Group 10.png";
import group11 from "../../assets/products/Group 11.png";
import group12 from "../../assets/products/Group 12.png";
import { FaCheck } from "react-icons/fa";
import { toast } from 'react-toastify';

const imageMap = {
  "group-7.png": group7,
  "group-8.png": group8,
  "group-9.png": group9,
  "group-10.png": group10,
  "group-11.png": group11,
  "group-12.png": group12,
};

export const Card = ({ premium,setCart,cart, setSelectedPremiums,selectedPremiums}) => {
  if (!premium) return null;

  const [isSelected,setIsSelected]=useState(false);

  console.log(premium.price);

 const handleChoosePremium = () => {
  setIsSelected(true);

  setCart(prev => [...prev, premium.price]);

  setSelectedPremiums(prev => [...prev, premium]);

  toast.success(`${premium.name} is selected`);
};

  return (
    <div className="card bg-base-100 shadow-md">

      {/* Image */}
      <figure>
        <img
          src={imageMap[premium.premiumImg]}
          alt={premium.name}
          className="h-48 object-cover"
        />
      </figure>

      {/* Content */}
      <div className="card-body">
        <h2 className="text-xl font-semibold">{premium.name}</h2>
        <p className="text-gray-500">{premium.description}</p>

        <h3 className="text-2xl font-bold">
          ${premium.price} / {premium.period}
        </h3>

        {/* Features */}
        <ul className="space-y-2 my-4">
          {premium.features?.map((feature, index) => (
            <li key={index} className="flex items-center gap-2">
              <FaCheck className="text-green-500" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        {/* Button */}
      <button
  className={`btn ${isSelected ? 'bg-green-500 text-white cursor-not-allowed' : 'bg-purple-500 text-white'} `}
  onClick={handleChoosePremium}
  disabled={isSelected}
>
  {isSelected ? "Added to cart!" : "Buy now"}
</button>
      </div>
    </div>
  );
};
