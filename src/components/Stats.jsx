import React from "react";

export default function Stats() {
  return (
    <div className="b-stats">
      {[
        { num: "10K+", label: "Coders Joined" },
        { num: "50+", label: "Free Tutorials" },
        { num: "200+", label: "Projects Built" },
        { num: "★ 4.9", label: "Community Rating" }
      ].map((stat, i) => (
        <div key={i}>
          <span className="stat-num">{stat.num}</span>
          <div className="stat-label">{stat.label}</div>
        </div>
      ))}
    </div>
  );
}