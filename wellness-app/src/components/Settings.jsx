// Settings.jsx
import React, { useState } from 'react';

const Settings = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">Settings</h2>
      <label className="flex items-center mt-4">
        <input type="checkbox" checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
        <span className="ml-2">Enable Dark Mode</span>
      </label>
    </div>
  );
};

export default Settings;