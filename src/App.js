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
      <form style="display: grid; max-width: 200px; gap: 20px">
        <label for="res-date">Choose date</label>
        <input type="date" id="res-date" />
        <label for="res-time">Choose time</label>
        <select id="res-time ">
          <option>17:00</option>
          <option>18:00</option>
          <option>19:00</option>
          <option>20:00</option>
          <option>21:00</option>
          <option>22:00</option>
        </select>
        <label for="guests">Number of guests</label>
        <input type="number" placeholder="1" min="1" max="10" id="guests" />
        <label for="occasion">Occasion</label>
        <select id="occasion">
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>
        <input type="submit" value="Make Your reservation" />
      </form>
    </>
  );
}

export default Restaurant;
