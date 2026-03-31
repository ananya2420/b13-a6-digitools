import React, { use } from 'react'

export const Premium = ({premiumPromise}) => {
  console.log(premiumPromise);

  const data=use(premiumPromise);
  console.log(data);
  return (
    <div>premium: {data.length}</div>
  )
}

