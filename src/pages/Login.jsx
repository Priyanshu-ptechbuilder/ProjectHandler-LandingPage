import React, { useState } from 'react';
import '../styles/Login.css';
import loginImage from '../assets/loginlogo.png'; // Rename your image accordingly
import Navbar from '../components/Navbar';

const Login = () => {
  const [role, setRole] = useState('Student');

  return (
    <>
      {/* Navbar displayed at the top */}
      <Navbar />
    <div className="login-container">
      <div className="login-left">
        <img src={loginImage} alt="Login Illustration" className="login-img" />
      </div>

      <div className="login-right">
        <h2>Welcome back</h2>
        <p>Please enter your details to continue.</p>

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
          <input type="hidden" name="role" value={role} /> {/* Hidden input to track selected role */}

          <label>Email</label>
          <input type="email" placeholder="Enter your email" required />

          <label>Password</label>
          <input type="password" placeholder="Enter your password" required />

          <div className="login-options">
            <label>
              <input type="checkbox" /> Remember me
            </label>
            <a href="/forgot">Forgot Password?</a>
          </div>

          <button type="submit" className="login-btn">Login</button>
        </form>

        <p className="signup-link">
          Don’t have an account? <a href="/register">Sign up here</a>
        </p>
      </div>
    </div>
    </>
  );
};

export default Login;
