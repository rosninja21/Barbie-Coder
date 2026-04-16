import React from "react";
import { useNavigate } from "react-router-dom";
import heroRight from '../assets/download.jpg';

export default function Hero() {

  const navigate= useNavigate();

  

  return (
    <section className="hero" id="hero-id">
      <div className="hero-content">

        <div className="hero-left">
          <div className="hero-left-content">
            <h1>
              <span className="line1">Coding everyday,</span>
              <span className="line2">Innovate each day!</span>
            </h1>
            <p>
              A playful, welcoming space where girls can learn coding without feeling intimidated or excluded.
            </p>
            <div className="hero-btns">
              <button className="b-btn btn-shimmer" onClick={() => navigate("/editor")}>Start Coding ✦</button>
              <button className="b-btn btn-shimmer btn-view">View Lessons</button>
            </div>
          </div>
        </div>

        <div
          className="hero-right"
          style={{ backgroundImage: `url(${heroRight})` }}
        />

      </div>
    </section>
  );
}