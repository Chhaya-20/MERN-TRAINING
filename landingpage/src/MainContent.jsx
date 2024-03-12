// MainContent.js

import React from 'react';
import './App.css'

function MainContent() {
  return (
    <div className="main-content">
       <h2>Features of React</h2>
      <section className="features">
       
       
        <div class="card">
  <img class="card-img" src="https://miro.medium.com/v2/resize:fit:1400/1*8WteabVYTAd8w-Du6jJFGw.png" alt="Card Image"/>
  <div class="card-content">
    <h2 class="card-title">Declarative</h2>
    <p class="card-description">React makes it easy to create interactive UIs by using a declarative syntax that describes how the UI should look.</p>
  </div>
  </div>
  <div class="card">
  <img class="card-img" src="https://i.stack.imgur.com/D8TEN.jpg" alt="Card Image"/>
  <div class="card-content">
    <h2 class="card-title">Component-Based: </h2>
    <p class="card-description">React applications are composed of reusable components, making it easy to manage complex UIs and promote code reuse.
</p>
  </div>
  </div>
  <div class="card">
  <img class="card-img" src="https://miro.medium.com/v2/resize:fit:1400/1*-Ijet6kVJqGgul6adezDLQ.png" alt="Card Image"/>
  <div class="card-content">
    <h2 class="card-title">React Hooks</h2>
    <p class="card-description">React Hooks are functions that allow you to use state and other React features in functional components. They provide a simpler way to manage state and side effects in your applications.</p>
  </div>
  </div>

      </section>
      <section className="testimonials">
        <h2>Testimonials</h2>
        <div className="testimonial-card">
          <div className="testimonial-content">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta vel repellendus dolores, illum a dignissimos deserunt, fuga animi unde natus quaerat facere debitis. Cupiditate nemo adipisci vero repellendus ipsa laborum architecto quae facere fuga!</p>
            <p>- John Doe</p>
          </div>
        </div>
      </section>
    </div>

  );
}

export default MainContent;
