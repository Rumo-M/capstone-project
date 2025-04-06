// Progress.js
import React from 'react';
import ProgressChart from './ProgressChart';  // Assuming you already have this component for the chart

const Progress = () => {
  // Example progress data
  const progressData = [
    { date: '2025-04-01', value: 5 },
    { date: '2025-04-02', value: 10 },
    { date: '2025-04-03', value: 15 },
    { date: '2025-04-04', value: 20 },
  ];

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold mb-4">Your Progress</h2>
      <p className="mb-6">Track your health progress and achievements over time.</p>

      {/* Progress chart */}
      <ProgressChart data={progressData} />

      {/* You can add more progress-related information here */}
      <div className="mt-8">
        <h3 className="text-2xl font-bold mb-2">Progress Details</h3>
        <ul>
          {progressData.map((entry, index) => (
            <li key={index} className="mb-2">
              <span className="font-semibold">{entry.date}:</span> {entry.value} points
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Progress;
