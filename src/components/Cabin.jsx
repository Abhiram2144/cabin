// src/components/Cabin.js
import React from 'react';

const Cabin = ({ id, status, onCabinClick }) => {
  return (
    <div 
      className={`border p-4 m-2 w-48 cursor-pointer shadow-md ${status === 'free' ? 'bg-green-200' : 'bg-red-200'}`} 
      onClick={() => onCabinClick(id)}
    >
      <h3 className="font-bold">Cabin {id}</h3>
      <p>Status: {status}</p>
    </div>
  );
};

export default Cabin;
