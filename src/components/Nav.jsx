import React from "react";

export default function Nav() {
  return (
    <nav className="nav">
      <div className="b-logo">Barbie<span>Coding</span></div>
      <div className="b-search">
        <input type="text" id="search-bar" placeholder="Search projects, tutorials..." />
        <button id="btn-go">Search</button>
      </div>
      <ul className="navlinks">
        <li><a href="#hero-id">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
        <li><a href="#">Learn</a></li>
         <li><a href="#">Resources</a></li>
      </ul>
    </nav>
  );
}