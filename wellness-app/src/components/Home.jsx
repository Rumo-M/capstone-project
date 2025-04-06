// Home.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center items-center bg-gradient-to-br from-teal-100 via-lime-100 to-emerald-200 min-h-screen flex-col text-center p-10">
      <h1 className="text-4xl font-extrabold text-emerald-800 drop-shadow-md mb-6">
        🌟 Welcome to the Health & Wellness App
      </h1>
      <p className="mt-4 text-lg text-gray-700 max-w-xl mx-auto">
        Your all-in-one dashboard to manage workouts, track nutrition, and celebrate your progress!
      </p>

      <div className="mt-10 flex flex-wrap gap-8 justify-center">
        {/* Workout Button */}
        <button
          onClick={() => navigate("/workout")}
          className="relative group bg-white/20 backdrop-blur-md px-8 py-3 w-full sm:w-auto rounded-xl border border-green-400 shadow-lg text-green-800 font-semibold text-lg transition-all duration-300 hover:bg-gradient-to-br hover:from-green-400 hover:to-green-600 hover:text-white hover:shadow-2xl transform hover:scale-105"
        >
          <span className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-green-300 to-green-500 opacity-30 group-hover:opacity-50 transition-all duration-300 blur-sm z-0"></span>
          <span className="relative z-10 flex items-center gap-2">
            🏋️ <span>Workout</span>
          </span>
        </button>

        {/* Nutrition Button */}
        <button
          onClick={() => navigate("/nutrition")}
          className="relative group bg-white/20 backdrop-blur-md px-8 py-3 w-full sm:w-auto rounded-xl border border-yellow-400 shadow-lg text-yellow-800 font-semibold text-lg transition-all duration-300 hover:bg-gradient-to-br hover:from-yellow-300 hover:to-yellow-500 hover:text-white hover:shadow-2xl transform hover:scale-105"
        >
          <span className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-yellow-300 to-yellow-500 opacity-30 group-hover:opacity-50 transition-all duration-300 blur-sm z-0"></span>
          <span className="relative z-10 flex items-center gap-2">
            🥗 <span>Nutrition</span>
          </span>
        </button>

        {/* Progress Button */}
        <button
          onClick={() => navigate("/progress")}
          className="relative group bg-white/20 backdrop-blur-md px-8 py-3 w-full sm:w-auto rounded-xl border border-purple-400 shadow-lg text-purple-800 font-semibold text-lg transition-all duration-300 hover:bg-gradient-to-br hover:from-purple-400 hover:to-purple-600 hover:text-white hover:shadow-2xl transform hover:scale-105"
        >
          <span className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-purple-300 to-purple-500 opacity-30 group-hover:opacity-50 transition-all duration-300 blur-sm z-0"></span>
          <span className="relative z-10 flex items-center gap-2">
            📈 <span>Progress</span>
          </span>
        </button>
      </div>
    </div>
  );
};

export default Home;
