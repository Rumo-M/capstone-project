import React from 'react';

const Workout = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-100 to-pink-50 px-6 py-10 text-gray-800">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-extrabold text-center text-purple-700 mb-10">
          🏋️‍♀️ Workout Plan
        </h1>

        <h2 className="text-2xl font-semibold text-indigo-800 mb-6">
          💪 Types of Workouts for Health & Wellness
        </h2>

        {[{
            title: '💪 1. Strength Training (Muscle Building)',
            goal: 'Build muscle, increase strength, improve metabolism.',
            examples:
              'Bodyweight exercises, weight training (dumbbells, barbells), resistance bands.',
            frequency: '2-4 times per week, focusing on different muscle groups.',
          },
          {
            title: '🏃 2. Cardio Workouts (Endurance and Fat Burning)',
            goal: 'Improve cardiovascular health, burn fat, increase stamina.',
            examples: 'Running, cycling, HIIT, swimming, jump rope.',
            frequency: '3-5 times per week, or 2-3 times for HIIT.',
          },
          {
            title: '🧘‍♀️ 3. Flexibility and Mobility (Stretching and Recovery)',
            goal: 'Improve flexibility, reduce injury risk, aid muscle recovery.',
            examples: 'Yoga, Pilates, static stretching, foam rolling.',
            frequency: 'Daily or 3-4 times a week.',
          },
          {
            title: '⚖️ 4. Balance and Coordination (Core Stability)',
            goal: 'Enhance balance, improve posture, reduce injury risk.',
            examples: 'Balance exercises, core workouts (planks, crunches), Tai Chi.',
            frequency: '2-3 times a week.',
          },
          {
            title: '🏋️‍♂️ 5. Functional Fitness (Daily Movement and Mobility)',
            goal: 'Improve day-to-day movements and mobility.',
            examples: 'Deadlifts, squats, kettlebell swings, lunges.',
            frequency: '2-3 times a week.',
          },
          {
            title: '🌿 6. Active Rest and Recovery (Restorative Workouts)',
            goal: 'Allow muscles to recover while staying active.',
            examples: 'Walking, light swimming, stretching, restorative yoga.',
            frequency: 'Active rest days between intense workouts.',
          }
        ].map((section, index) => (
          <section
            key={index}
            className="mb-6 bg-white rounded-2xl shadow-md p-6 border-l-4 border-purple-300 hover:shadow-lg transition duration-300"
          >
            <h3 className="text-xl font-bold text-purple-700 mb-2">{section.title}</h3>
            <p>
              <span className="font-medium text-gray-700">Goal:</span> {section.goal}
            </p>
            <p>
              <span className="font-medium text-gray-700">Examples:</span> {section.examples}
            </p>
            <p>
              <span className="font-medium text-gray-700">Frequency:</span> {section.frequency}
            </p>
          </section>
        ))}

        <h2 className="text-2xl font-semibold text-indigo-800 mt-10 mb-4">
          🗓 Sample Weekly Workout Plan
        </h2>
        <ul className="list-disc ml-6 space-y-2 text-gray-700">
          <li><strong>Monday</strong>: Strength Training (Full Body)</li>
          <li><strong>Tuesday</strong>: Cardio (Running or HIIT) + Stretching</li>
          <li><strong>Wednesday</strong>: Yoga or Pilates (Flexibility)</li>
          <li><strong>Thursday</strong>: Strength Training (Upper Body)</li>
          <li><strong>Friday</strong>: Cardio (Cycling or Swimming)</li>
          <li><strong>Saturday</strong>: Core and Balance Workouts</li>
          <li><strong>Sunday</strong>: Active Rest (Walking, Stretching, or Light Yoga)</li>
        </ul>

        <p className="mt-6 text-lg text-gray-800">
          ✨ This balanced routine promotes strength, endurance, flexibility, and recovery—perfect for achieving overall wellness!
        </p>
      </div>
    </div>
  );
};

export default Workout;z
