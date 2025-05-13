import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

// Placeholder imports for future pages
import Upload from './pages/Upload';
import Verify from './pages/Verify';
import Review from './pages/Review';
import Login from './pages/Login';
import Signup from './pages/Signup';

// Importing the HomePage component
// import HomePage from './pages/HomePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/verify" element={<Verify />} />
        <Route path="/review" element={<Review />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Signup />} />


        {/* <Route path="/dashboard" element={<HomePage />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
