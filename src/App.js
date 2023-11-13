import './App.css';
import React from 'react';

function App() {
  return (
    <div className="App">
      
    </div>
  );
}

function Restaurant() {
  return (
    <div>
      <header>
        <h1>Restaurant Name</h1>
      </header>
      <img src="restaurant-image.jpg" alt="Restaurant" />
      <section>
        <h2>Menu</h2>
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ul>
      </section>
      <section>
        <h2>Reviews</h2>
        <ul>
          <li>Review 1</li>
          <li>Review 2</li>
          <li>Review 3</li>
        </ul>
      </section>
    </div>
  );
}

export default Restaurant;

export default App;
