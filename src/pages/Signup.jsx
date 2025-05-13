import React, { useState } from 'react';
import '../styles/Signup.css'; // Ensure you have the correct path to your CSS file
import loginImage from '../assets/loginlogo.png';
import Navbar from '../components/Navbar';


const Signup = () => {
  const [role, setRole] = useState('Student');

  return (
    <>
    {/* Navbar displayed at the top */}
    <Navbar />
    <div className="login-container">
      <div className="login-left">
        <img src={loginImage} alt="Signup Illustration" className="login-img" />
      </div>

      <div className="login-right">
        <h2>Create Account</h2>
        <p>Choose your role</p>

        {/* Role Toggle Buttons */}
        <div className="role-toggle-group">
          <button
            className={`role-button ${role === 'Admin' ? 'active' : ''}`}
            onClick={() => setRole('Admin')}
            type="button"
          >
            Admin
          </button>
          <button
            className={`role-button ${role === 'Student' ? 'active' : ''}`}
            onClick={() => setRole('Student')}
            type="button"
          >
            Student
          </button>
        </div>

        <form className="login-form">
          <input type="hidden" name="role" value={role} />

          <label>Full Name</label>
          <input type="text" placeholder="Enter your full name" required />

          <label>Email</label>
          <input type="email" placeholder="Enter your email" required />

          <label>Password</label>
          <input type="password" placeholder="Create a password" required />

          <button type="submit" className="login-btn">Sign Up</button>
        </form>

        <p className="signup-link">
          Already have an account? <a href="/login">Login here</a>
        </p>
      </div>
    </div>
    </>
  );
};

export default Signup;
