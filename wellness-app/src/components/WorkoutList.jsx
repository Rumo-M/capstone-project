import React from 'react';

const WorkoutList = ({ workouts }) => {
  if (!workouts || workouts.length === 0) {
    return <p>No workouts available</p>;
  }

  return (
    <div>
      {workouts.map(workout => (
        <div key={workout.id}>
          <h3>{workout.name}</h3>
          <p>{workout.description}</p>
        </div>
      ))}
    </div>
  );
};

export default WorkoutList;
