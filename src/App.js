import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PasswordPage from './PasswordPage';
import MainPage from './MainPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PasswordPage />} />
        <Route path="/home" element={<MainPage />} />
        {/* Add other routes here */}
      </Routes>
    </Router>
  );
}

export default App;
