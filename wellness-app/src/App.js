import React, { useState } from 'react';
import { HashRouter as Router, Route, Routes, Link } from 'react-router-dom'; // Only use HashRouter here
import Footer from './Footer';
import Card from './Card';
import Modal from './Modal';
import Settings from './Settings';
import WorkoutList from './WorkoutList';
import ProgressChart from './components/ProgressChart';
import MealPlanner from './MealPlanner';
import FetchWorkouts from './components/FetchWorkouts';
import FetchMeals from './components/FetchMeals';
import Home from './Home';
import Workout from './Workout';
import NutritionTracker from './NutritionTracker';
import Progress from './Progress';

const App = () => {
  const [workouts, setWorkouts] = useState([]);
  const [meals, setMeals] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [loading, setLoading] = useState(false); 

  return (
    <Router>
      <div className="min-h-screen bg-gray-100 p-6">
        <h1 className="text-3xl font-bold text-center mb-6">Health & Wellness App</h1>

        {/* Navigation Bar */}
        <nav>
          <ul className="flex justify-center space-x-4">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/workout">Workout</Link></li>
            <li><Link to="/nutrition">Nutrition</Link></li>
            <li><Link to="/progress">Progress</Link></li>
          </ul>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />

          {/* Workout Route */}
          <Route 
            path="/workout" 
            element={
              <div>
                <FetchWorkouts setWorkouts={setWorkouts} setLoading={setLoading} />
                {loading ? <p>Loading workouts...</p> : <WorkoutList workouts={workouts} />}
              </div>
            } 
          />

          {/* Nutrition Route */}
          <Route 
            path="/nutrition" 
            element={
              <div>
                <FetchMeals setMeals={setMeals} setLoading={setLoading} />
                {loading ? <p>Loading meals...</p> : <NutritionTracker meals={meals} />}  {/* Use NutritionTracker component */}
              </div>
            } 
          />

          {/* Progress Route */}
          <Route 
            path="/progress" 
            element={
              <div>
                <ProgressChart data={[{ date: '2025-04-01', value: 5 }, { date: '2025-04-02', value: 10 }]} />
              </div>
            } 
          />
        </Routes>

        {/* Open Settings Modal */}
        <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded" onClick={() => setModalOpen(true)}>Open Settings</button>
        <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
          <Settings />
        </Modal>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
