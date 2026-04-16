import React from "react";
import heroRight from "../assets/download.jpg";

export default function About() {
  return (
    <div className="about" id="about-id">
    <div className="about-content-left">
     <h2 className="offer-h2 about-h2">About Barbie Coding</h2>
    <p>Barbie Coding is a creative and supportive space designed to make programming more approachable, enjoyable, and empowering for girls who want to explore the world of tech. It was built with the belief that coding shouldn’t 
    feel intimidating or exclusive—it should feel like a place where you can freely create, experiment, and grow.</p>


    <br></br>
    <p>This platform encourages hands-on learning through interactive experiences, allowing you to practice real coding skills while expressing your own ideas. Whether you are writing your first lines of code or improving what you already know, Barbie Coding gives you the freedom to learn at your own pace, without pressure or fear of making mistakes.</p>
    
    </div>

    <div className="about-content-right"><img src={heroRight}/></div>
    </div>
  );
}