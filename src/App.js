import './App.css';
import React from 'react';

function Restaurant() {
  return (
    <>
      <header>
        <h1>Little Lemon</h1>
        <nav>    
          <ul>
            <li><a href="/home">Homepage</a></li>        
            <li><a href="/about">About Us</a></li>
            <li><a href="/blog">Blog</a></li>  
          </ul>
        </nav>
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
    </>
  );
}

export default Restaurant;
