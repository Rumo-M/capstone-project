import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Footer from './components/Footer';
import Nutrition from './Nutrition';
import Workout from './Workouts';
import Progress from './Progress';
import Home from './components/Home';

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
           path="/workout" element={<Workout />} />
        
          {/* Nutrition Route */}
          <Route 
           path="/nutrition" element={<Nutrition />} />

          {/* Progress Route */}
          <Route 
           path="/progress" element={<Progress />} />
        
        </Routes>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
