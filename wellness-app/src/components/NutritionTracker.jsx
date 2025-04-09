// src/NutritionTracker.js
import React, { useState } from 'react';

const NutritionTracker = ({ meals }) => {
  const [selectedMeal, setSelectedMeal] = useState(null);

  const handleMealSelect = (meal) => {
    setSelectedMeal(meal);
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Nutrition Tracker</h2>
      <div className="space-y-4">
        {/* List of meals */}
        {meals.length > 0 ? (
          meals.map((meal, index) => (
            <div key={index} className="cursor-pointer" onClick={() => handleMealSelect(meal)}>
              <h3 className="text-lg">{meal.name}</h3>
              <p>{meal.description}</p>
            </div>
          ))
        ) : (
          <p>No meals available.</p>
        )}
      </div>
      
      {/* Display selected meal details */}
      {selectedMeal && (
        <div className="mt-4">
          <h4 className="font-semibold">Selected Meal: {selectedMeal.name}</h4>
          <p>{selectedMeal.description}</p>
        </div>
      )}
    </div>
  );
};

export default NutritionTracker;
