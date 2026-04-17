import React from "react";
import {useState} from "react";
import Logo from "./Logo";

export default function Nav() {

   const [active, setActive]=useState("Home");
  return (

    <nav className="nav">
       <Logo />
      <div className="b-search">
        <input type="text" id="search-bar" placeholder="Search projects, tutorials..." />
        <button id="btn-go">Search</button>
      </div>
      <ul className="navlinks">
        <li> <a
            href="#hero-id"
            className={active === "Home" ? "active" : ""}
            onClick={() => setActive("Home")}
          >
            Home
          </a></li>

        <li><a href="#about-id"
        className={active ==="About" ? "active" : ""}
        onClick={() => setActive ("About")} 
          >About</a></li>





        <li><a href="#learn-id" className={active === "Learn" ? "active" : ""}  onClick={() => setActive ("About")} >Learn</a></li>


         <li><a href="#" className={active=== "Resources" ? "active" : ""}>Resources</a></li>
      </ul>
    </nav>
  );
}