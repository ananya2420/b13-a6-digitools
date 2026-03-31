import React, { use } from 'react'
import { AvailablePremiums } from './AvailablePremiums/AvailablePremiums';


export const Premium = ({premiumPromise}) => {
  console.log(premiumPromise);

  const premiums=use(premiumPromise);
  console.log(premiums);
  return (
    <div className='container mx-auto'>
      premium: {premiums.length}
    
    <AvailablePremiums premiums={premiums} />
    </div>
  )
}

