import React, { useState } from 'react';
import './Navbar.css';
import logo from '../assets/download.jpeg';

const Navbar = () => (
  
  <nav className="navbar">
    <a href="/" className="home">NRI GROUP OF <br></br>INSTITUTIONS</a>
    <ul className="nav-links">
      <li><a href="/">Home</a></li>
      <li><a href="/features">Features</a></li>
      <li><a href="/about">About</a></li>
      <li><a href="/contact">Contact</a></li>
      <li><a href="/login" className="login">Login</a></li>
      <li><a href="/register" className="register">Signup</a></li>
        
    </ul>

    
  </nav>
);

export default Navbar;
