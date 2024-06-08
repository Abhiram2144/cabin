import React from 'react';

const Filter = ({ selectedFilter, onFilterChange }) => {
  return (
    <div className="fixed bottom-0 w-full bg-white p-4 shadow-lg flex justify-center space-x-4">
      <button 
        className={`p-2 rounded ${selectedFilter === 'all' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`} 
        onClick={() => onFilterChange('all')}>
        All
      </button>
      <button 
        className={`p-2 rounded ${selectedFilter === 'free' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`} 
        onClick={() => onFilterChange('free')}>
        Free
      </button>
      <button 
        className={`p-2 rounded ${selectedFilter === 'occupied' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`} 
        onClick={() => onFilterChange('occupied')}>
        Occupied
      </button>
      <button 
        className={`p-2 rounded ${selectedFilter === 'reserved' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`} 
        onClick={() => onFilterChange('reserved')}>
        Reserved
      </button>
    </div>
  );
};

export default Filter;
