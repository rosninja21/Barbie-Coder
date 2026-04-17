import { useState } from "react";
import { useNavigate } from "react-router-dom";

const languages = [
  {
    id: "html",
    label: "HTML",
    dot: "#ff8fab",
    icon: "🌐",
    title: "HTML — Structure of the Web",
    topics: [
      { icon: "📄", name: "What is HTML?", desc: "The skeleton of every webpage. Learn tags, elements, and structure.", level: "Beginner" },
      { icon: "🖼️", name: "Tags & Elements", desc: "Headings, paragraphs, images, links — the building blocks.", level: "Beginner" },
      { icon: "📋", name: "Forms & Inputs", desc: "Create buttons, text boxes, dropdowns, and more.", level: "Intermediate" },
      { icon: "🏛️", name: "Semantic HTML", desc: "Use meaningful tags like <header>, <main>, <article>.", level: "Intermediate" },
    ],
  },
  {
    id: "css",
    label: "CSS",
    dot: "#c084fc",
    icon: "🎨",
    title: "CSS — Style & Beauty",
    topics: [
      { icon: "🌈", name: "Colors & Fonts", desc: "Make your page fabulous with colors, gradients, and fonts.", level: "Beginner" },
      { icon: "📐", name: "Flexbox", desc: "Align and distribute elements like a pro.", level: "Intermediate" },
      { icon: "🗂️", name: "CSS Grid", desc: "Build powerful two-dimensional layouts.", level: "Intermediate" },
      { icon: "✨", name: "Animations", desc: "Add sparkle with transitions and keyframe animations.", level: "Advanced" },
    ],
  },
  {
    id: "js",
    label: "JavaScript",
    dot: "#fbbf24",
    icon: "⚡",
    title: "JavaScript — Make It Interactive",
    topics: [
      { icon: "📚", name: "Variables & Types", desc: "Strings, numbers, booleans — data basics.", level: "Beginner" },
      { icon: "🔁", name: "Functions", desc: "Reusable blocks of logic that power your app.", level: "Beginner" },
      { icon: "🎉", name: "DOM Manipulation", desc: "Change the page dynamically with JS magic.", level: "Intermediate" },
      { icon: "🚀", name: "Async & Fetch", desc: "Load data from APIs and handle promises.", level: "Advanced" },
    ],
  },
  {
    id: "python",
    label: "Python",
    dot: "#34d399",
    icon: "🐍",
    title: "Python — Powerful & Friendly",
    topics: [
      { icon: "💻", name: "Basics", desc: "Print, variables, loops — Python is easy to read!", level: "Beginner" },
      { icon: "📊", name: "Data Structures", desc: "Lists, dicts, sets, and tuples.", level: "Intermediate" },
      { icon: "🤖", name: "AI & ML Basics", desc: "Use Python for machine learning with scikit-learn.", level: "Advanced" },
      { icon: "📱", name: "Web with Flask", desc: "Build web apps using Python's Flask framework.", level: "Advanced" },
    ],
  },
  {
    id: "sql",
    label: "SQL",
    dot: "#60a5fa",
    icon: "🗄️",
    title: "SQL — Data is Power",
    topics: [
      { icon: "🔍", name: "SELECT Queries", desc: "Fetch and filter data from tables.", level: "Beginner" },
      { icon: "🔗", name: "Joins", desc: "Combine data from multiple tables with INNER, LEFT joins.", level: "Intermediate" },
      { icon: "📈", name: "Aggregations", desc: "COUNT, SUM, AVG — analyze your data.", level: "Intermediate" },
      { icon: "🏗️", name: "Database Design", desc: "Build schemas with primary keys, foreign keys, and indexes.", level: "Advanced" },
    ],
  },
  {
    id: "more",
    label: "More ✦",
    dot: "#f472b6",
    icon: "🌟",
    title: "More Languages",
    topics: [
      { icon: "☕", name: "Java", desc: "Object-oriented programming with a classic language.", level: "Intermediate" },
      { icon: "📦", name: "C++", desc: "High-performance programming for games and systems.", level: "Advanced" },
      { icon: "🚀", name: "TypeScript", desc: "JavaScript with superpowers — add types for fewer bugs.", level: "Intermediate" },
      { icon: "🟢", name: "Kotlin", desc: "Build Android apps with this modern language.", level: "Intermediate" },
      { icon: "🍎", name: "Swift", desc: "Create iOS and macOS apps for Apple devices.", level: "Intermediate" },
      { icon: "⚙️", name: "Rust", desc: "Fast and safe systems programming language.", level: "Advanced" },
    ],
  },
];

const badgeStyles = {
  Beginner: { background: "#fce4ec", color: "#880e4f" },
  Intermediate: { background: "#fff3e0", color: "#7c4b00" },
  Advanced: { background: "#f3e5f5", color: "#4a148c" },
};

export default function BarbieNavbar() {
  const [active, setActive] = useState("html");
  const [menuOpen, setMenuOpen] = useState(false);

  const current = languages.find((l) => l.id === active);

  return (
    <div id="learn-id" style={{ background: "#fff0f6", minHeight: "100vh", fontFamily: "'Nunito', sans-serif", paddingBottom: "2rem" }}>
      {/* Navbar */}
      <nav
        style={{
          background: "linear-gradient(90deg, #ff5fa0 0%, #ff87c3 50%, #ff5fa0 100%)",
          padding: "0 1.5rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          boxShadow: "0 4px 18px #ff5fa044",
          height: "64px",
          position: "relative",
          zIndex: 10,
        }}
      >
        {/* Logo */}
        <div style={{ fontFamily: "'Fredoka One', cursive", fontSize: "1.5rem", color: "#fff", display: "flex", alignItems: "center", gap: 8 }}>
          👑 Barbie Codes
        </div>

        {/* Desktop Nav Links */}
        <ul
          style={{
            display: "flex",
            gap: 6,
            listStyle: "none",
            margin: 0,
            padding: 0,
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          {languages.map((lang) => (
            <li key={lang.id}>
              <button
                onClick={() => { setActive(lang.id); setMenuOpen(false); }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  background: active === lang.id ? "#fff" : "rgba(255,255,255,0.18)",
                  color: active === lang.id ? "#d5006d" : "#fff",
                  border: active === lang.id ? "1.5px solid #fff" : "1.5px solid rgba(255,255,255,0.35)",
                  borderRadius: "999px",
                  padding: "7px 14px",
                  fontWeight: 700,
                  fontSize: "0.82rem",
                  cursor: "pointer",
                  fontFamily: "'Nunito', sans-serif",
                  transition: "all 0.2s",
                  letterSpacing: "0.3px",
                  whiteSpace: "nowrap",
                  boxShadow: active === lang.id ? "0 2px 12px #ff5fa055" : "none",
                }}
              >
                <span style={{ width: 8, height: 8, borderRadius: "50%", background: lang.dot, display: "inline-block", flexShrink: 0 }} />
                {lang.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Hero */}
      <div style={{ textAlign: "center", padding: "2.5rem 1rem 1rem" }}>
        <h1 style={{ fontFamily: "'Fredoka One', cursive", fontSize: "2rem", color: "#d5006d", marginBottom: 6 }}>
          💖 Learn to Code, Barbie Style!
        </h1>
        <p style={{ color: "#b0406e", fontWeight: 600, fontSize: "1rem" }}>
          Pick a language and start your fabulous coding journey
        </p>
      </div>

      {/* Section Content */}
      <div style={{ padding: "1rem 1.5rem 0", animation: "fadeIn 0.3s ease" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: "1rem" }}>
          <span style={{ fontSize: "1.4rem" }}>{current.icon}</span>
          <span style={{ fontFamily: "'Fredoka One', cursive", fontSize: "1.3rem", color: "#d5006d" }}>
            {current.title}
          </span>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
            gap: 14,
          }}
        >
          {current.topics.map((topic) => (
            <div
              key={topic.name}
              style={{
                background: "#fff",
                borderRadius: 16,
                padding: "1rem",
                border: "2px solid #ffd6e8",
                cursor: "pointer",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "#ff5fa0";
                e.currentTarget.style.transform = "translateY(-3px)";
                e.currentTarget.style.boxShadow = "0 6px 20px #ff5fa022";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "#ffd6e8";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <div style={{ fontSize: "1.5rem", marginBottom: 8 }}>{topic.icon}</div>
              <h3 style={{ fontFamily: "'Fredoka One', cursive", fontSize: "1rem", color: "#c2185b", marginBottom: 4 }}>
                {topic.name}
              </h3>
              <p style={{ fontSize: "0.78rem", color: "#b06080", lineHeight: 1.5, margin: 0 }}>{topic.desc}</p>
              <span
                style={{
                  display: "inline-block",
                  fontSize: "0.68rem",
                  fontWeight: 700,
                  padding: "2px 8px",
                  borderRadius: 999,
                  marginTop: 8,
                  ...badgeStyles[topic.level],
                }}
              >
                {topic.level}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}