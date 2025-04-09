// Modal.jsx
import React from 'react';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg w-1/3">
        {children}
        <button className="mt-4 bg-red-500 text-white p-2 rounded" onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Modal;