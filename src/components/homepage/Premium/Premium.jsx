import React, { use, useState } from 'react'
import { AvailablePremiums } from './AvailablePremiums/AvailablePremiums';
import { SelectedPremiums } from './SelectedPremiums/SelectedPremiums';


export const Premium = ({premiumPromise,setCart,cart}) => {
  //console.log(premiumPromise);

  const premiums=use(premiumPromise);
  //console.log(premiums);

  const [selectedType,setSelectedType]=useState("available");
   
  console.log(selectedType,"selectedType");

  const [selectedPremiums,setSelectedPremiums]=useState([]);

  return (
    <div className='container mx-auto'>
      <div className="flex flex-col items-center justify-center text-center gap-4 py-10">
  {selectedType==="available"?( <h2>Available premiums</h2> ):(<h2>Cart(2)</h2>)}
  
  <p className="max-w-xl">
    Choose from our curated collection of premium digital products designed
    <br />
    to boost your productivity and creativity.
  </p>

  <div className="flex gap-4">
   <button
  onClick={() => setSelectedType("products")}
  className={`btn ${
    selectedType === "products" ? "bg-purple-500" : "bg-purple-500"
  } text-white rounded-l-xl rounded-r-xl`}
   >Products
</button>
    <button  onClick={() => setSelectedType("selected")} className={`btn ${selectedType==="selected"?"bg-white":""} text-black rounded-r-name rounded-r-xl`}>Cart(0)</button>
  </div>
</div>
    
    {selectedType === "products" ? (
  <AvailablePremiums premiums={premiums} setCart={setCart} cart={cart} setSelectedPremiums={setSelectedPremiums} selectedPremiums={selectedPremiums} />
) : (
  <SelectedPremiums selectedPremiums={selectedPremiums}/>
)}
    </div>
  )
}

