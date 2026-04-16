import React from "react";

export default function Features() {
  return (
    <section className="features">
      <div className="section-title">
        <h2 className="offer-h2">What you will find here</h2>
        <p>Everything a fabulous coder needs to shine</p>
      </div>
      <div className="cards">
        <div className="card">
          <h3>HTML</h3>
          <p>Learn HTML, CSS, and JavaScript through beautiful, pink-themed lessons designed for everyone.</p>
        </div>
        <div className="card">
          <h3>CSS</h3>
          <p>Build real apps from scratch — portfolios, fashion trackers, and more glam projects.</p>
        </div>
        <div className="card">
          <h3>JAVASCRIPT</h3>
          <p>Connect with other fabulous coders, share your work, and grow together as a community.</p>
        </div>
      </div>
    </section>
  );
}