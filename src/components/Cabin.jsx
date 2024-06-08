// src/components/Cabin.js
import React from 'react';

const Cabin = ({ id, status, onCabinClick }) => {
  let bgColor = 'bg-red-200'; // Default color for occupied

  if (status === 'free') {
    bgColor = 'bg-green-200';
  } else if (status === 'reserved') {
    bgColor = 'bg-yellow-200';
  }

  return (
    <div 
      className={`border p-4 m-2 w-48 cursor-pointer shadow-md ${bgColor}`} 
      onClick={() => onCabinClick(id)}
    >
      <h3 className="font-bold">Cabin {id}</h3>
      <p>Status: {status}</p>
    </div>
  );
};

export default Cabin;
