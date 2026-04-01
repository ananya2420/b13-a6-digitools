import React from 'react';
import { SelectedCard } from '../../../UI/SelectedCard/SelectedCard';
import ShoppingCart from "../../../../assets/products/shopping-cart.png"

export const SelectedPremiums = ({ selectedPremiums, setSelectedPremiums, setCart }) => {

 
  const handleDeleteSelectedPremiums = (premium) => {
    const filteredPremiums = selectedPremiums.filter(item => item.id !== premium.id);
    setSelectedPremiums(filteredPremiums);
    setCart(filteredPremiums); 
  };

  
  const total = selectedPremiums.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="space-y-5">

      {selectedPremiums.length === 0 ? (
        <div className="flex flex-col items-center justify-center gap-4">
          <img src={ShoppingCart} alt="" className="h-40" />
          <p>Your cart is empty</p>
        </div>
      ) : (
        <>
          {selectedPremiums.map(premium => (
            <SelectedCard
              key={premium.id}
              premium={premium}
              handleDeleteSelectedPremiums={handleDeleteSelectedPremiums}
            />
          ))}

         
          <div className="flex justify-between mt-6 p-4 bg-gray-100 rounded-xl shadow">
            <h2 className="text-xl font-semibold">Total: ${total.toFixed(2)}</h2>
            <button
              onClick={() => { setSelectedPremiums([]); setCart([]); }}
              className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-xl"
            >
              Proceed to Checkout
            </button>
          </div>
        </>
      )}

    </div>
  );
};