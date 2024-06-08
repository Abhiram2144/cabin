// src/components/CabinModal.js
import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '80%',
    maxHeight: '90vh',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
  },
};

const CabinModal = ({ isOpen, onRequestClose, onSave, onReserve, onCancel, onReset, cabin }) => {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [startTime, setStartTime] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (cabin) {
      setUserName(cabin.userName || '');
      setEmail(cabin.email || '');
      setPhoneNumber(cabin.phoneNumber || '');
      setStartTime(cabin.startTime || '');
    }
  }, [cabin]);

  const handleSave = () => {
    if (!userName || !email || !phoneNumber || !startTime) {
      setError('All fields are required');
      return;
    }

    onSave(cabin.id, { userName, email, phoneNumber, startTime });
    setError('');
  };

  const handleReserve = () => {
    if (!userName || !email || !phoneNumber || !startTime) {
      setError('All fields are required');
      return;
    }

    onReserve(cabin.id, { userName, email, phoneNumber, startTime });
    setError('');
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Cabin Details"
      style={customStyles}
    >
      <div className="bg-white p-6 rounded shadow-md w-full max-w-2xl mx-auto">
        <h2 className="text-lg font-bold mb-4">Cabin {cabin.id}</h2>
        {(cabin.status === 'free' || cabin.status === 'reserved') ? (
          <>
            <input
              className="block w-full p-2 mb-2 border rounded"
              type="text"
              placeholder="User Name"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
            <input
              className="block w-full p-2 mb-2 border rounded"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="block w-full p-2 mb-2 border rounded"
              type="tel"
              placeholder="Phone Number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <input
              className="block w-full p-2 mb-2 border rounded"
              type="text"
              placeholder="Start Time"
              value={startTime}
              onChange={(e) => setStartTime(e.target.value)}
            />
            {error && <p className="text-red-500">{error}</p>}
            <div className="flex justify-end space-x-2">
              {cabin.status === 'free' && (
                <button className="bg-green-500 text-white p-2 rounded" onClick={handleReserve}>
                  Reserve
                </button>
              )}
              <button className="bg-blue-500 text-white p-2 rounded" onClick={handleSave}>
                Book Now
              </button>
              <button className="bg-gray-500 text-white p-2 rounded" onClick={onRequestClose}>
                Cancel
              </button>
            </div>
          </>
        ) : (
          <>
            <p className="mb-2">
              <strong>User:</strong> {cabin.userName}
            </p>
            <p className="mb-2">
              <strong>Email:</strong> {cabin.email}
            </p>
            <p className="mb-2">
              <strong>Phone:</strong> {cabin.phoneNumber}
            </p>
            <p className="mb-2">
              <strong>Start Time:</strong> {cabin.startTime}
            </p>
            <div className="flex justify-end space-x-2">
              <button className="bg-red-500 text-white p-2 rounded" onClick={() => onReset(cabin.id)}>
                Reset
              </button>
              <button className="bg-gray-500 text-white p-2 rounded" onClick={onRequestClose}>
                Close
              </button>
            </div>
          </>
        )}
      </div>
    </Modal>
  );
};

export default CabinModal;
