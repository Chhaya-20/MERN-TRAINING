// MainContent.js

import React from 'react';
import './App.css'

function MainContent() {
  return (
    <div className="main-content">
      <section className="features">
        <h2>Features</h2>
        <ul>
          <li>Feature 1</li>
          <li>Feature 2</li>
          <li>Feature 3</li>
        </ul>
      </section>
      <section className="testimonial">
        <h2>Testimonials</h2>
        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit."</p>
        <p>- John Doe</p>
      </section>
    </div>
  );
}

export default MainContent;
