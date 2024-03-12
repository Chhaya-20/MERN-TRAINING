// Header.js

import React from 'react';
import './App.css'

function Header() {
  return (
    <header className="header">
      <h1>Welcome to Our Product Landing Page</h1>
      <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Features</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
