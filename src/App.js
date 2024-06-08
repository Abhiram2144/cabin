import React, { useState, useEffect } from 'react';
import CabinList from './components/CabinList';
import CabinModal from './components/CabinModal';
import Filter from './components/Filter';
import './App.css';

const initialCabins = Array.from({ length: 110 }, (v, i) => ({
  id: i + 1,
  status: 'free',
  userName: null,
  email: null,
  phoneNumber: null,
  startTime: null,
}));

const App = () => {
  const [cabins, setCabins] = useState(() => {
    const savedCabins = localStorage.getItem('cabins');
    return savedCabins ? JSON.parse(savedCabins) : initialCabins;
  });

  const [selectedCabin, setSelectedCabin] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    localStorage.setItem('cabins', JSON.stringify(cabins));
  }, [cabins]);

  const handleCabinClick = (id) => {
    const cabin = cabins.find(cabin => cabin.id === id);
    setSelectedCabin(cabin);
    setModalIsOpen(true);
  };

  const handleSave = (id, details) => {
    setCabins(cabins.map(cabin =>
      cabin.id === id ? { ...cabin, status: 'occupied', ...details } : cabin
    ));
    setModalIsOpen(false);
  };

  const handleReserve = (id, details) => {
    setCabins(cabins.map(cabin =>
      cabin.id === id ? { ...cabin, status: 'reserved', ...details } : cabin
    ));
    setModalIsOpen(false);
  };

  const handleReset = (id) => {
    setCabins(cabins.map(cabin =>
      cabin.id === id ? { ...cabin, status: 'free', userName: null, email: null, phoneNumber: null, startTime: null } : cabin
    ));
    setModalIsOpen(false);
  };

  const handleResetAll = () => {
    setCabins(initialCabins);
    localStorage.setItem('cabins', JSON.stringify(initialCabins));
  };

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  const filteredCabins = filter === 'all' ? cabins : cabins.filter(cabin => cabin.status === filter);

  return (
    <div className="app">
      <h1 className="text-2xl font-bold my-4 text-center">Reading Room Cabins</h1>
      <CabinList cabins={filteredCabins} onCabinClick={handleCabinClick} />
      {selectedCabin && (
        <CabinModal 
          isOpen={modalIsOpen}
          onRequestClose={() => setModalIsOpen(false)}
          onSave={handleSave}
          onReserve={handleReserve}
          onReset={handleReset}
          cabin={selectedCabin}
        />
      )}
      <Filter selectedFilter={filter} onFilterChange={handleFilterChange} />
      <button 
        onClick={handleResetAll} 
        className="fixed bottom-16 right-4 bg-red-500 text-white p-3 rounded-full shadow-lg">
        Reset All
      </button>
    </div>
  );
};

export default App;
