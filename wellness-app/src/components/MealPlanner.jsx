import React from 'react';

const MealPlanner = ({ meals }) => {
  if (!meals || meals.length === 0) {
    return <p>No meals available</p>;
  }

  return (
    <div>
      {meals.map(meal => (
        <div key={meal.id}>
          <h3>{meal.name}</h3>
          <p>{meal.description}</p>
        </div>
      ))}
    </div>
  );
};

export default MealPlanner;
