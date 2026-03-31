import React from 'react';
import { MdDelete } from "react-icons/md";
export const SelectedPremiums = ({ selectedPremiums,setSelectedPremiums,setCart,cart }) => {
  console.log(selectedPremiums, 'selectedPremiums');

  const handleDeleteSelectedPremiums=(premium)=>{
    console.log(selectedPremiums,"selectedPremium");

    const filteredPremiums=selectedPremiums.filter(premium=>premium.name !==premium.name);
    console.log(filteredPremiums,"filteredPremiums");
    setSelectedPremiums(filteredPremiums);
    setCart(cart+premium.price)
  }
  return (
    <div>
        <div className='space-y-5'>
      {selectedPremiums.map((premium, index) => {
        return <div key={index}>
          <div>
            <img src={`/assets/${premium.premiumImg}`} alt={premium.name} className="h-[100px] w-auto rounded-md"/>
            <div>
            <h2 className='flex items-center gap-2 font-semibold text-2xl'>{premium.name}</h2> 
             <p>{premium.price}</p>
                </div>
          </div>
        
         <button onClick={()=>handleDeleteSelectedPremiums(premium)}>
            
            <MdDelete />
            </button>
        </div>
      })}
    </div>
    </div>
  );
};