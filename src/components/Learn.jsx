import { useState } from "react";
import { languages } from "./languages";
import Logo from "./Logo";

export default function Learn() {
  const [active, setActive] = useState("html");

  const current = languages.find((lang) => lang.id === active);

  return (
    <div className="learn-page">
      <nav className="nav">
        <Logo />

        <ul className="language-name">
          {languages.map((lang) => (
            <li key={lang.id}>
              <button
                onClick={() => setActive(lang.id)}
                className={`language-btn ${active === lang.id ? "active" : "inactive"}`}
              >
                <span style={{ background: lang.dot }} className="dot" />
                {lang.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Section Content */}
      {current && (
        <div className="section-content">
          <h2 className="section-title">
            {current.icon} {current.title}
          </h2>

          <div className="topic-grid">
            {current.topics.map((topic) => (
              <div key={topic.name} className="topic-card">
                <span className="topic-icon">{topic.icon}</span>
                <h3 className="topic-name">{topic.name}</h3>
                <p className="topic-desc">{topic.desc}</p>
                <span className={`badge badge-${topic.level?.toLowerCase()}`}>
                  {topic.level}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}