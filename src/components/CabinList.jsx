// src/components/CabinList.js
import React from 'react';
import Cabin from './Cabin';
import { groupCabins } from '../utils/groupCabins';
import { cabinGroups } from '../utils/cabinGroups';

const CabinList = ({ cabins, onCabinClick }) => {
  const groupedCabins = groupCabins(cabins, cabinGroups);

  return (
    <div>
      {groupedCabins.map(group => (
        <div key={group.id} className="mb-6">
          <h2 className="text-lg font-bold mb-4 text-center">Group {group.id}</h2>
          <div className="flex flex-wrap justify-center">
            {group.cabins.map(cabin => (
              <Cabin 
                key={cabin.id} 
                id={cabin.id} 
                status={cabin.status}
                onCabinClick={onCabinClick} 
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CabinList;
