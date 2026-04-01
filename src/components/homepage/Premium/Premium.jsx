import React, { use, useState } from 'react';
import { AvailablePremiums } from './AvailablePremiums/AvailablePremiums';
import { SelectedPremiums } from './SelectedPremiums/SelectedPremiums';

export const Premium = ({ premiumPromise, setCart, cart }) => {
  const premiums = use(premiumPromise); 

  const [selectedType, setSelectedType] = useState("available");
  const [selectedPremiums, setSelectedPremiums] = useState([]);

  // Calculate total of selected products
  const total = selectedPremiums.reduce((sum, item) => sum + item.price, 0);

  // Remove item from cart
  const handleDeleteSelectedPremiums = (premium) => {
    const filtered = selectedPremiums.filter(item => item.id !== premium.id);
    setSelectedPremiums(filtered);
    setCart(filtered);
  };

 

  return (
    <div className='container mx-auto'>
      {/* Header Section */}
      <div className="flex flex-col items-center justify-center text-center gap-4 py-10">
        {selectedType === "available" ? (
          <h2>Available premiums</h2>
        ) : (
          <h2>Your Cart ({selectedPremiums.length})</h2>
        )}

        <h1 className="text-3xl font-bold">Premium Digital Tools</h1>
        <p className="max-w-xl">
          Choose from our curated collection of premium digital products designed
          <br />
          to boost your productivity and creativity.
        </p>

        {/* Tabs */}
        <div className="flex gap-4">
          <button
            onClick={() => setSelectedType("available")}
            className={`btn ${
              selectedType === "available"
                ? "bg-purple-500 text-white"
                : "bg-gray-200 text-black"
            } rounded-l-xl rounded-r-xl`}
          >
            Available
          </button>

          <button
            onClick={() => setSelectedType("selected")}
            className={`btn ${
              selectedType === "selected"
                ? "bg-purple-500 text-white"
                : "bg-gray-200 text-black"
            } rounded-r-xl`}
          >
            Cart ({selectedPremiums.length})
          </button>
        </div>
      </div>

      {/* Render Available or Selected Premiums */}
      {selectedType === "available" ? (
        <AvailablePremiums
          premiums={premiums}
          setCart={setCart}
          cart={cart}
          setSelectedPremiums={setSelectedPremiums}
          selectedPremiums={selectedPremiums}
        />
      ) : (
        <div className="space-y-5">
          <SelectedPremiums
            selectedPremiums={selectedPremiums}
            setSelectedPremiums={setSelectedPremiums}
            setCart={setCart}
            cart={cart}
          />

         
        </div>
      )}
    </div>
  );
};