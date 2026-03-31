import React from 'react';
import { Card } from '../../../UI/Card';
//import Card from "../../components/UI/Card";

export const AvailablePremiums = ({ premiums }) => {
  console.log(premiums, 'premiums');

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {premiums.map((premium) => {
          console.log(premium, "premium");
          return <Card key={premium.id} premium={premium} />;
        })}
      </div>
    </div>
  );
};