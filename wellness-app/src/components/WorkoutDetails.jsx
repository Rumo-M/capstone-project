
// WorkoutDetails.jsx
import React from 'react';

const WorkoutDetails = ({ workout }) => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold">{workout.name}</h2>
      <p className="mt-2 text-gray-600">{workout.instructions}</p>
    </div>
  );
};

export default WorkoutDetails;