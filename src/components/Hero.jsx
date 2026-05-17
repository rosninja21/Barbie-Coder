import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import heroRight from "../assets/barbie-editor.png";

export default function Hero() {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/learn?q=${encodeURIComponent(query.trim())}`);
    }
  };

  return (
    <>

      <section className="hero" id="hero-id">

        {/* ── LEFT: Barbie image ── */}
        <div className="hero-left">
          <div className="hero-barbie-wrap">
            <span className="hero-sparkle">✦</span>
            <span className="hero-sparkle">💖</span>
            <span className="hero-sparkle">⋆</span>
            <span className="hero-sparkle">✨</span>
            <img
              src={heroRight}
              alt="Barbie"
              className="hero-barbie-img"
            />
          </div>
        </div>

        {/* ── RIGHT: Content ── */}
        <div className="hero-right">
          <div className="hero-center">

            <h1>
              <span className="line1">Coding everyday,</span>
              <span className="line2">Innovate each day!</span>
            </h1>

            <p>
              A playful, welcoming space where girls can learn coding
              without feeling intimidated or excluded.
            </p>

            {/* Search */}
            <div className="hero-search">
              <form onSubmit={handleSearch}>
                <input
                  type="text"
                  placeholder="Search a lesson… e.g. Flexbox 🔍"
                  value={query}
                  onChange={e => setQuery(e.target.value)}
                />
                <button type="submit">Search ✦</button>
              </form>
              <div className="hero-chips">
                {["HTML Tags", "CSS Grid", "JS Functions", "Python Loops", "Flexbox"].map(s => (
                  <span
                    key={s}
                    className="hero-chip"
                    onClick={() => {
                      setQuery(s);
                      navigate(`/learn?q=${encodeURIComponent(s)}`);
                    }}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA buttons */}
            <div className="hero-btns">
              <button className="b-btn btn-shimmer" onClick={() => navigate("/editor")}>
                Start Coding ✦
              </button>
              <button className="b-btn btn-shimmer btn-view" onClick={() => navigate("/learn")}>
                View Lessons
              </button>
            </div>

          </div>
        </div>

      </section>
    </>
  );
}