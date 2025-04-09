// src/components/Card.jsx
import React from 'react';

const Card = ({ title, description, children }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-4 transition hover:shadow-lg">
      <h3 className="text-lg font-semibold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600 mb-3">{description}</p>
      {children && <div className="mt-2">{children}</div>}
    </div>
  );
};

export default Card;
