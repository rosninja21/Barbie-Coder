import React, { useState, useRef, useCallback, useEffect } from "react";
// import barbieImg from '../assets/barbie-editor.png'; // uncomment in your project

// ── LESSONS DATA ───────────────────────────────────────────────────────────────
const LESSONS = {
  html: {
    label: "HTML", dot: "#ff69b4", icon: "🌸",
    topics: [
      { icon: "🏷️", name: "Tags & Elements", desc: "Learn how to wrap content in opening and closing tags.", level: "Beginner",
        template: `<h1>Hello Barbie! 💖</h1>\n<p>This is a paragraph tag.</p>\n<strong>This is bold!</strong>` },
      { icon: "🔗", name: "Links & Images", desc: "Add clickable links and display images.", level: "Beginner",
        template: `<a href="https://barbie.com">Visit Barbie 💅</a>\n<br/>\n<img src="https://via.placeholder.com/200x150/ff69b4/white?text=Barbie" alt="barbie"/>` },
      { icon: "📋", name: "Lists", desc: "Ordered and unordered lists for organizing content.", level: "Beginner",
        template: `<h2>My Wishlist 💝</h2>\n<ul>\n  <li>Pink dress</li>\n  <li>Dream house</li>\n  <li>Convertible car</li>\n</ul>` },
      { icon: "📦", name: "Divs & Spans", desc: "Group elements using div and span.", level: "Beginner",
        template: `<div style="background:pink; padding:20px; border-radius:10px;">\n  <span style="color:purple; font-weight:bold;">I am a span inside a div!</span>\n</div>` },
      { icon: "📝", name: "Forms", desc: "Collect input from users with form elements.", level: "Intermediate",
        template: `<form style="font-family:sans-serif; padding:20px;">\n  <label>Name: <input type="text" placeholder="Barbie"/></label><br/><br/>\n  <label>Email: <input type="email" placeholder="barbie@dreamhouse.com"/></label><br/><br/>\n  <button type="button" style="background:#ff69b4;color:white;border:none;padding:8px 20px;border-radius:8px;">Submit 💌</button>\n</form>` },
      { icon: "📊", name: "Tables", desc: "Display data in rows and columns.", level: "Intermediate",
        template: `<table style="width:100%;border-collapse:collapse;font-family:sans-serif;">\n  <tr style="background:#ff69b4;color:white;">\n    <th style="padding:10px;">Name</th><th style="padding:10px;">Role</th>\n  </tr>\n  <tr style="background:#fff0f8;">\n    <td style="padding:10px;text-align:center;">Barbie</td><td style="padding:10px;text-align:center;">CEO 👑</td>\n  </tr>\n</table>` },
    ],
  },
  css: {
    label: "CSS", dot: "#ab47bc", icon: "💜",
    topics: [
      { icon: "🎨", name: "Colors & Backgrounds", desc: "Style elements with colors and gradients.", level: "Beginner",
        template: `<div style="font-family:sans-serif; padding:20px;">\n  <div style="background: linear-gradient(135deg,#ff69b4,#6a0dad); color:white; padding:30px; border-radius:16px; text-align:center;">\n    <h2>Gradient Magic ✨</h2>\n    <p>CSS gradients are beautiful!</p>\n  </div>\n</div>` },
      { icon: "📐", name: "Box Model", desc: "Understand margin, padding, border, and content.", level: "Beginner",
        template: `<div style="font-family:sans-serif; padding:30px;">\n  <div style="margin:20px; padding:20px; border:3px solid #ff69b4; border-radius:10px; background:#fff0f8; text-align:center;">\n    <p style="color:#c2185b;">I have margin, padding, and border! 📦</p>\n  </div>\n</div>` },
      { icon: "🧲", name: "Flexbox", desc: "Arrange items in rows and columns easily.", level: "Intermediate",
        template: `<div style="display:flex; gap:12px; padding:20px; flex-wrap:wrap;">\n  <div style="flex:1; min-width:80px; background:#ff69b4; color:white; padding:20px; border-radius:12px; text-align:center;">Box 1</div>\n  <div style="flex:1; min-width:80px; background:#ab47bc; color:white; padding:20px; border-radius:12px; text-align:center;">Box 2</div>\n  <div style="flex:1; min-width:80px; background:#6a0dad; color:white; padding:20px; border-radius:12px; text-align:center;">Box 3</div>\n</div>` },
      { icon: "🔲", name: "CSS Grid", desc: "Create two-dimensional layouts.", level: "Intermediate",
        template: `<div style="display:grid; grid-template-columns:repeat(3,1fr); gap:12px; padding:20px;">\n  <div style="background:#fce4ec; border:2px solid #ff69b4; border-radius:10px; padding:16px; text-align:center; color:#c2185b;">Grid 1</div>\n  <div style="background:#f3e5f5; border:2px solid #ab47bc; border-radius:10px; padding:16px; text-align:center; color:#6a0dad;">Grid 2</div>\n  <div style="grid-column:span 3; background:linear-gradient(135deg,#ff69b4,#6a0dad); color:white; border-radius:10px; padding:16px; text-align:center;">Full Width 💅</div>\n</div>` },
      { icon: "✨", name: "Animations", desc: "Bring elements to life with CSS animations.", level: "Advanced",
        template: `<style>\n@keyframes bounce {\n  0%,100% { transform: translateY(0); }\n  50% { transform: translateY(-20px); }\n}\n.ball {\n  width:60px; height:60px;\n  background: linear-gradient(135deg,#ff69b4,#6a0dad);\n  border-radius:50%;\n  animation: bounce 1s ease-in-out infinite;\n  margin: 40px auto;\n}\n</style>\n<div class="ball"></div>\n<p style="text-align:center;font-family:sans-serif;color:#c2185b;">I'm bouncing! 💖</p>` },
      { icon: "🖱️", name: "Hover Effects", desc: "Add interactivity with :hover pseudo-class.", level: "Intermediate",
        template: `<style>\n.hover-btn {\n  background: linear-gradient(135deg,#ff69b4,#6a0dad);\n  color:white; border:none; padding:14px 32px;\n  border-radius:50px; font-size:16px; cursor:pointer;\n  transition: all 0.3s ease;\n  display:block; margin: 40px auto;\n}\n.hover-btn:hover { transform: translateY(-4px) scale(1.05); box-shadow: 0 12px 30px rgba(255,105,180,0.5); }\n</style>\n<button class="hover-btn">Hover over me! 💅</button>` },
    ],
  },
  js: {
    label: "JavaScript", dot: "#FFE066", icon: "⚡",
    topics: [
      { icon: "📦", name: "Variables", desc: "Store data using let, const, and var.", level: "Beginner",
        template: `<div id="out" style="font-family:sans-serif; padding:20px;"></div>\n<script>\nconst name = "Barbie";\nlet age = 25;\ndocument.getElementById("out").innerHTML =\n  "<h2>Hi, I am " + name + "! 💖</h2><p>Age: " + age + "</p>";\n</script>` },
      { icon: "🔁", name: "Loops", desc: "Repeat actions using for and while loops.", level: "Beginner",
        template: `<div id="out" style="font-family:sans-serif; padding:20px;"></div>\n<script>\nlet html = "<h3 style='color:#c2185b;'>Barbie's Outfits 👗</h3><ul>";\nconst outfits = ["Pink Dress", "Beach Outfit", "Space Suit", "Princess Gown"];\nfor (let i = 0; i < outfits.length; i++) {\n  html += "<li>" + outfits[i] + "</li>";\n}\nhtml += "</ul>";\ndocument.getElementById("out").innerHTML = html;\n</script>` },
      { icon: "⚙️", name: "Functions", desc: "Reuse code by wrapping it in functions.", level: "Beginner",
        template: `<div id="out" style="font-family:sans-serif; padding:20px;"></div>\n<script>\nfunction greet(name) {\n  return "Hello, " + name + "! You are fabulous! 💅";\n}\ndocument.getElementById("out").innerHTML =\n  "<p style='color:#6a0dad;font-size:18px;'>" + greet("Barbie") + "</p>";\n</script>` },
      { icon: "🎯", name: "DOM Events", desc: "React to user actions like clicks.", level: "Intermediate",
        template: `<button onclick="changeColor()" style="display:block;margin:30px auto;padding:14px 28px;background:#ff69b4;color:white;border:none;border-radius:50px;font-size:16px;cursor:pointer;">Click me! 🎨</button>\n<div id="box" style="width:150px;height:150px;background:#fce4ec;border-radius:20px;margin:0 auto;transition:background 0.4s;"></div>\n<script>\nconst colors=["#ff69b4","#ab47bc","#6a0dad","#e91e8c","#ff4081"]; let i=0;\nfunction changeColor(){document.getElementById("box").style.background=colors[i++%colors.length];}\n</script>` },
      { icon: "📋", name: "Arrays & Objects", desc: "Organize data in collections.", level: "Intermediate",
        template: `<div id="out" style="font-family:sans-serif; padding:20px;"></div>\n<script>\nconst barbie={name:"Barbie",job:"CEO",hobby:"Everything 💖"};\nconst friends=["Midge","Christie","Teresa"];\nlet html="<h3 style='color:#c2185b;'>About Barbie 👑</h3>";\nObject.entries(barbie).forEach(([k,v])=>html+=\`<p><b>\${k}:</b> \${v}</p>\`);\nhtml+="<h3 style='color:#6a0dad;'>Friends 💕</h3><ul>";\nfriends.forEach(f=>html+=\`<li>\${f}</li>\`);\nhtml+="</ul>";\ndocument.getElementById("out").innerHTML=html;\n</script>` },
      { icon: "🌐", name: "Fetch & APIs", desc: "Get live data from the internet.", level: "Advanced",
        template: `<div id="out" style="font-family:sans-serif; padding:20px; color:#c2185b;"><h3>Loading joke... 🤣</h3></div>\n<script>\nfetch("https://official-joke-api.appspot.com/random_joke")\n  .then(r=>r.json())\n  .then(d=>{\n    document.getElementById("out").innerHTML=\n      "<h3 style='color:#6a0dad;'>😂 Joke Time!</h3>"+\n      "<p><b>"+d.setup+"</b></p>"+\n      "<p style='color:#ff69b4;'>"+d.punchline+"</p>";\n  })\n  .catch(()=>{document.getElementById("out").innerHTML="<p>Couldn't load 😔</p>";});\n</script>` },
    ],
  },
  python: {
    label: "Python", dot: "#4fc3f7", icon: "🐍",
    topics: [
      { icon: "📝", name: "Print & Variables", desc: "Output text and store data in variables.", level: "Beginner",
        pyNote: `# Variables & Print\nname = "Barbie"\nage = 25\nprint("Hello, " + name + "!")\nprint("Age:", age)\nprint("Fabulous? Absolutely! 💖")` },
      { icon: "🔁", name: "Loops", desc: "Repeat code using for and while loops.", level: "Beginner",
        pyNote: `# For Loop\noutfits = ["Pink Dress", "Beach Outfit", "Space Suit"]\nfor outfit in outfits:\n    print("👗", outfit)\n\n# While Loop\ncount = 1\nwhile count <= 3:\n    print("Barbie is fabulous x", count)\n    count += 1` },
      { icon: "⚙️", name: "Functions", desc: "Define reusable blocks of code.", level: "Beginner",
        pyNote: `def greet(name):\n    return f"Hello, {name}! You're amazing! 💅"\n\nresult = greet("Barbie")\nprint(result)\n\ndef power(base, exp=2):\n    return base ** exp\n\nprint(power(4))    # 16\nprint(power(2, 3)) # 8` },
      { icon: "📋", name: "Lists & Dicts", desc: "Organize data in lists and dictionaries.", level: "Intermediate",
        pyNote: `friends = ["Midge", "Christie", "Teresa"]\nfriends.append("Skipper")\nprint("Friends:", friends)\n\nbarbie = {\n  "name": "Barbie",\n  "job": "CEO",\n  "hobby": "Everything"\n}\nfor key, val in barbie.items():\n    print(f"{key}: {val}")` },
      { icon: "🏛️", name: "Classes & OOP", desc: "Model real-world things using classes.", level: "Intermediate",
        pyNote: `class Barbie:\n    def __init__(self, name, job):\n        self.name = name\n        self.job = job\n\n    def introduce(self):\n        return f"Hi! I'm {self.name}, a {self.job}! 💖"\n\nb1 = Barbie("Barbie", "Astronaut")\nb2 = Barbie("Barbie", "President")\nprint(b1.introduce())\nprint(b2.introduce())` },
      { icon: "⚠️", name: "Error Handling", desc: "Handle errors gracefully with try/except.", level: "Advanced",
        pyNote: `def divide(a, b):\n    try:\n        result = a / b\n        print(f"{a} ÷ {b} = {result}")\n    except ZeroDivisionError:\n        print("Can't divide by zero 😬")\n    except TypeError:\n        print("Numbers only! 💅")\n    finally:\n        print("--- done ---")\n\ndivide(10, 2)\ndivide(5, 0)\ndivide("Barbie", 3)` },
    ],
  },
};

const VOID_TAGS = new Set(["area","base","br","col","embed","hr","img","input","link","meta","param","source","track","wbr"]);

function validateHTML(code) {
  const errors = [], stack = [], tagRx = /<\/?([a-z][a-z0-9]*)\b[^>]*>/gi;
  let m;
  while ((m = tagRx.exec(code)) !== null) {
    const full = m[0], tag = m[1].toLowerCase();
    if (VOID_TAGS.has(tag)) continue;
    if (full.startsWith("</")) {
      if (!stack.length || stack[stack.length-1] !== tag) errors.push(`Unexpected closing tag </${tag}> 😬`);
      else stack.pop();
    } else if (!full.endsWith("/>")) stack.push(tag);
  }
  stack.forEach(t => errors.push(`Unclosed <${t}> — don't forget </${t}>! 💅`));
  if (/<[^>]*</.test(code)) errors.push("Nested < inside a tag — check your brackets!");
  if (code.match(/style="[^"]*$/m)) errors.push('style attribute missing closing quote 😱');
  return errors;
}

function LineNumbers({ code, scrollTop }) {
  return (
    <div className="bc-linenums" style={{ transform: `translateY(-${scrollTop}px)` }}>
      {code.split("\n").map((_, i) => <span key={i} className="bc-linenum">{i + 1}</span>)}
    </div>
  );
}

export default function Editor() {
  const [lang, setLang]             = useState("html");
  const [code, setCode]             = useState(LESSONS.html.topics[0].template);
  const [output, setOutput]         = useState("");
  const [errors, setErrors]         = useState([]);
  const [copied, setCopied]         = useState(false);
  const [scrollTop, setScrollTop]   = useState(0);
  const [showLessons, setShowLessons] = useState(true);
  const [splitPct, setSplitPct]     = useState(55);

  const isDragging   = useRef(false);
  const containerRef = useRef(null);
  const isPython     = lang === "python";
  const currentLang  = LESSONS[lang];

  const runCode = () => {
    if (isPython) { setOutput("__python__"); setErrors([]); return; }
    const errs = validateHTML(code);
    if (errs.length) { setErrors(errs); setOutput(""); return; }
    setErrors([]); setOutput(code);
  };

  const clearCode = () => { setCode(""); setOutput(""); setErrors([]); };

  const copyCode = () => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true); setTimeout(() => setCopied(false), 2000);
    });
  };

  const loadTopic = (topic) => {
    const src = isPython ? topic.pyNote : topic.template;
    if (src) { setCode(src); setOutput(""); setErrors([]); }
  };

  const switchLang = (id) => {
    setLang(id);
    const first = LESSONS[id].topics[0];
    setCode((id === "python" ? first.pyNote : first.template) || "");
    setOutput(""); setErrors([]);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Tab") {
      e.preventDefault();
      const ta = e.target, s = ta.selectionStart, end = ta.selectionEnd;
      const next = code.substring(0, s) + "  " + code.substring(end);
      setCode(next);
      requestAnimationFrame(() => { ta.selectionStart = ta.selectionEnd = s + 2; });
    }
  };

  const onDividerDown = useCallback((e) => {
    e.preventDefault(); isDragging.current = true;
    document.body.style.cursor = "col-resize";
    document.body.style.userSelect = "none";
  }, []);

  useEffect(() => {
    const onMove = (e) => {
      if (!isDragging.current || !containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      setSplitPct(Math.min(Math.max(((e.clientX - rect.left) / rect.width) * 100, 20), 75));
    };
    const onUp = () => { isDragging.current = false; document.body.style.cursor = ""; document.body.style.userSelect = ""; };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
    return () => { window.removeEventListener("mousemove", onMove); window.removeEventListener("mouseup", onUp); };
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Leckerli+One&family=Poppins:wght@300;400;500;600;700&family=Pacifico&family=Space+Mono:wght@400;700&display=swap');

        .bc-root { --pink: #ff69b4; --purple: #6a0dad; --pale: #fff0f8; --gradient: linear-gradient(135deg,#6a0dad,#ff69b4); }
        .bc-root *, .bc-root *::before, .bc-root *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .bc-root {
          font-family: 'Poppins', sans-serif;
          background: var(--gradient);
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          position: relative;
          overflow: hidden;
        }

        /* Barbie image */
        .barbie-bg {
          position: fixed;
          bottom: 0;
          left: 0;
          width: 250px;
          pointer-events: none;
          opacity: 0.9;
          z-index: 0;
        }

        /* ── TOP BAR ── */
        .bc-topbar {
          position: relative;
          z-index: 10;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 10px;
          padding: 14px 28px;
          background-color: palevioletred;
          box-shadow: 0 4px 20px rgba(106,13,173,0.35);
          border-bottom: 1px solid rgba(255,255,255,0.18);
        }

        .b-logo {
          font-family: 'Pacifico', cursive;
          font-size: 1.2rem;
          color: white;
          letter-spacing: -1px;
          display: inline-flex;
          align-items: baseline;
          gap: 0.15em;
          text-shadow: 3px 3px 0px #FF69B4, 5px 5px 0px rgba(233,30,140,0.2);
          animation: float 3s ease-in-out infinite;
        }
        .b-logo span {
          font-family: 'Space Mono', monospace;
          font-size: 1rem;
          background: #E91E8C;
          padding: 0.18em 0.55em 0.22em;
          border-radius: 6px;
          box-shadow: 3px 3px 0px #b5146e;
        }

        /* language tabs */
        .bc-lang-tabs { display: flex; gap: 8px; flex-wrap: wrap; }
        .bc-lang-btn {
          padding: 7px 15px;
          border-radius: 10px;
          background-color: palevioletred;
          border: 1px solid white;
          color: white;
          font-family: 'Poppins', sans-serif;
          font-size: 13px;
          font-weight: 500;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 6px;
          transition: all 0.2s;
          box-shadow: 4px 4px 14px rgba(106,13,173,0.3);
        }
        .bc-lang-btn:hover { background: rgba(255,255,255,0.2); }
        .bc-lang-btn.active { background-color: white; color: palevioletred; font-weight: 600; }
        .dot { width: 8px; height: 8px; border-radius: 50%; display: inline-block; }

        /* toolbar */
        .bc-toolbar { display: flex; gap: 8px; align-items: center; flex-wrap: wrap; }
        .bc-btn {
          padding: 7px 15px;
          border: 1px solid rgba(255,255,255,0.5);
          background: rgba(255,255,255,0.12);
          color: white;
          border-radius: 10px;
          font-family: 'Poppins', sans-serif;
          font-size: 13px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s;
          box-shadow: 2px 2px 8px rgba(106,13,173,0.2);
        }
        .bc-btn:hover { background: rgba(255,255,255,0.22); }
        .bc-btn.run {
          background: linear-gradient(135deg, #ff69b4, #6a0dad);
          border: none;
          font-weight: 600;
          box-shadow: 0 6px 20px rgba(106,13,173,0.3);
        }
        .bc-btn.run:hover { transform: translateY(-2px); box-shadow: 0 10px 25px rgba(255,105,180,0.4); }
        .bc-btn.run:active { transform: scale(0.95); }
        .bc-btn.copied { border-color: #a5d6a7; color: #a5d6a7; }
        .bc-btn.toggle { border-color: #FFE066; color: #FFE066; background: rgba(255,224,102,0.1); }

        /* ── WORKSPACE ── */
        .bc-workspace {
          flex: 1;
          display: flex;
          overflow: hidden;
          min-height: 0;
          position: relative;
          z-index: 1;
        }

        /* ── LESSONS PANEL ── */
        .bc-lessons {
          width: 256px;
          min-width: 256px;
          background: rgba(255,255,255,0.13);
          backdrop-filter: blur(14px);
          border-right: 1px solid rgba(255,255,255,0.22);
          display: flex;
          flex-direction: column;
          overflow: hidden;
          transition: width 0.3s ease, min-width 0.3s ease;
        }
        .bc-lessons.closed { width: 0; min-width: 0; }

        .bc-lessons-head {
          padding: 12px 14px;
          background: rgba(0,0,0,0.12);
          border-bottom: 1px solid rgba(255,255,255,0.15);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 1px;
          text-transform: uppercase;
          color: rgba(255,255,255,0.65);
          white-space: nowrap;
        }

        .bc-lesson-list {
          overflow-y: auto;
          flex: 1;
          padding: 10px;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .bc-lesson-list::-webkit-scrollbar { width: 4px; }
        .bc-lesson-list::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.2); border-radius: 2px; }

        /* topic card (mirrors your .topic-card but dark) */
        .bc-lesson-card {
          background: rgba(255,255,255,0.15);
          border: 1.5px solid rgba(255,255,255,0.22);
          border-radius: 14px;
          padding: 10px 12px;
          cursor: pointer;
          transition: all 0.2s;
          white-space: normal;
        }
        .bc-lesson-card:hover {
          background: rgba(255,255,255,0.28);
          border-color: white;
          transform: translateY(-2px);
          box-shadow: 0 6px 18px rgba(0,0,0,0.15);
        }
        .bc-lc-row { display: flex; align-items: center; gap: 8px; margin-bottom: 4px; }
        .bc-lc-icon { font-size: 15px; }
        .bc-lc-name { font-size: 13px; font-weight: 600; color: white; }
        .bc-lc-desc { font-size: 11px; color: rgba(255,255,255,0.72); line-height: 1.45; margin-bottom: 6px; }

        /* badges — same as your CSS */
        .badge { display:inline-block; font-size:0.65rem; font-weight:700; padding:2px 8px; border-radius:999px; }
        .badge-beginner     { background:#fce4ec; color:#880e4f; }
        .badge-intermediate { background:#fff3e0; color:#7c4b00; }
        .badge-advanced     { background:#f3e5f5; color:#4a148c; }

        /* ── EDITOR PANE ── */
        .bc-editor-pane {
          display: flex;
          flex-direction: column;
          background: rgba(20,0,14,0.72);
          backdrop-filter: blur(10px);
          border-right: 1px solid rgba(255,105,180,0.18);
          min-width: 160px;
          overflow: hidden;
        }
        .bc-pane-bar {
          padding: 7px 14px;
          font-size: 11px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: rgba(255,255,255,0.4);
          background: rgba(0,0,0,0.25);
          border-bottom: 1px solid rgba(255,105,180,0.12);
          display: flex;
          align-items: center;
          gap: 6px;
          white-space: nowrap;
        }
        .mac-dot { width: 10px; height: 10px; border-radius: 50%; flex-shrink: 0; }

        .bc-code-area { flex:1; display:flex; overflow:hidden; }

        .bc-linenums {
          width: 40px; min-width: 40px;
          padding: 14px 8px 14px 0;
          background: rgba(0,0,0,0.22);
          border-right: 1px solid rgba(255,105,180,0.08);
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          overflow: hidden;
          pointer-events: none;
          will-change: transform;
        }
        .bc-linenum {
          font-family: 'Space Mono', monospace;
          font-size: 12px;
          line-height: 21px;
          color: rgba(255,105,180,0.22);
          min-height: 21px;
          display: block;
        }

        .code-editor {
          flex: 1;
          background: transparent;
          border: none;
          outline: none;
          resize: none;
          color: #f8c8de;
          font-family: 'Space Mono', monospace;
          font-size: 13px;
          line-height: 21px;
          padding: 14px 14px;
          caret-color: #ff69b4;
          overflow-y: auto;
          overflow-x: auto;
          white-space: pre;
          tab-size: 2;
          width: 100%;
        }
        .code-editor::selection { background: rgba(255,105,180,0.25); }
        .code-editor::-webkit-scrollbar { width: 5px; height: 5px; }
        .code-editor::-webkit-scrollbar-thumb { background: rgba(255,105,180,0.2); border-radius: 3px; }

        /* errors */
        .bc-error-box { background: rgba(160,0,0,0.18); border-top: 1px solid rgba(255,80,80,0.2); }
        .error {
          padding: 7px 14px;
          font-family: 'Space Mono', monospace;
          font-size: 11px;
          color: #ff8a8a;
          border-bottom: 1px solid rgba(255,80,80,0.1);
          display: flex;
          gap: 7px;
        }

        /* ── DIVIDER ── */
        .bc-divider {
          width: 5px;
          background: rgba(255,105,180,0.15);
          cursor: col-resize;
          flex-shrink: 0;
          transition: background 0.2s;
          position: relative;
          z-index: 5;
        }
        .bc-divider:hover { background: rgba(255,105,180,0.45); }
        .bc-divider::after {
          content:'⋮';
          position:absolute; top:50%; left:50%;
          transform:translate(-50%,-50%);
          color:rgba(255,255,255,0.25);
          font-size:13px;
          pointer-events:none;
        }

        /* ── PREVIEW PANE ── */
        .bc-preview-pane {
          flex: 1;
          min-width: 140px;
          display: flex;
          flex-direction: column;
          background: rgba(255,255,255,0.08);
          backdrop-filter: blur(10px);
          overflow: hidden;
        }
        .bc-preview-inner { flex:1; overflow:hidden; position:relative; }

        /* your existing preview/output-box style for the iframe wrapper */
        .preview {
          width: 100%;
          height: 100%;
        }
        .preview iframe {
          width: 100%;
          height: 100%;
          border: none;
          background: white;
        }

        .bc-placeholder {
          display:flex; flex-direction:column;
          align-items:center; justify-content:center;
          height:100%; gap:10px;
          color:rgba(255,255,255,0.5);
          font-size:14px; text-align:center; padding:20px;
        }
        .bc-placeholder span { font-size:38px; }

        /* python note */
        .bc-py-note {
          padding: 24px;
          height: 100%;
          overflow-y: auto;
          background: rgba(0,0,0,0.28);
          color: white;
          font-family: 'Poppins', sans-serif;
        }
        .bc-py-note h3 { color: #FFE066; margin-bottom: 12px; font-size: 16px; }
        .bc-py-note p  { font-size: 13px; line-height: 1.7; color: rgba(255,255,255,0.8); margin-bottom: 10px; }
        .bc-py-note ul { padding-left: 20px; font-size: 13px; color: rgba(255,255,255,0.75); line-height: 2.1; }
        .bc-py-note a  { color: #4fc3f7; }

        @keyframes float {
          0%,100% { transform:translateY(0); }
          50%      { transform:translateY(-5px); }
        }
      `}</style>

      <div className="bc-root">
        {/* Barbie image — uncomment when you have the asset */}
        {/* <img src={barbieImg} className="barbie-bg" alt="" /> */}

        {/* ── TOP BAR ── */}
        <div className="bc-topbar">
          <div className="b-logo">Barbie <span>&lt;/&gt;</span></div>

          <div className="bc-lang-tabs">
            {Object.entries(LESSONS).map(([id, l]) => (
              <button
                key={id}
                className={`bc-lang-btn ${lang === id ? "active" : ""}`}
                onClick={() => switchLang(id)}
              >
                <span className="dot" style={{ background: l.dot }} />
                {l.label}
              </button>
            ))}
          </div>

          <div className="bc-toolbar">
            <button className="bc-btn toggle" onClick={() => setShowLessons(p => !p)}>
              {showLessons ? "Hide Lessons" : "📚 Lessons"}
            </button>
            <button className="bc-btn" onClick={clearCode}>🗑 Clear</button>
            <button className={`bc-btn ${copied ? "copied" : ""}`} onClick={copyCode}>
              {copied ? "✓ Copied!" : "📋 Copy"}
            </button>
            <button className="bc-btn run" onClick={runCode}>▶ Run</button>
          </div>
        </div>

        {/* ── WORKSPACE ── */}
        <div className="bc-workspace" ref={containerRef}>

          {/* LESSONS PANEL */}
          <div className={`bc-lessons ${showLessons ? "" : "closed"}`}>
            <div className="bc-lessons-head">
              {currentLang.icon} {currentLang.label} Lessons
            </div>
            <div className="bc-lesson-list">
              {currentLang.topics.map((topic) => (
                <div key={topic.name} className="bc-lesson-card" onClick={() => loadTopic(topic)}>
                  <div className="bc-lc-row">
                    <span className="bc-lc-icon">{topic.icon}</span>
                    <span className="bc-lc-name">{topic.name}</span>
                  </div>
                  <p className="bc-lc-desc">{topic.desc}</p>
                  <span className={`badge badge-${topic.level?.toLowerCase()}`}>{topic.level}</span>
                </div>
              ))}
            </div>
          </div>

          {/* EDITOR PANE */}
          <div className="bc-editor-pane" style={{ width: `${splitPct}%`, flexShrink: 0 }}>
            <div className="bc-pane-bar">
              <div className="mac-dot" style={{ background: "#ff5f57" }} />
              <div className="mac-dot" style={{ background: "#febc2e" }} />
              <div className="mac-dot" style={{ background: "#28c840" }} />
              &nbsp;
              {lang === "python" ? "script.py" : lang === "css" ? "styles.css" : lang === "js" ? "app.js" : "index.html"}
            </div>

            <div className="bc-code-area">
              <LineNumbers code={code} scrollTop={scrollTop} />
              <textarea
                className="code-editor"
                value={code}
                onChange={e => setCode(e.target.value)}
                onKeyDown={handleKeyDown}
                onScroll={e => setScrollTop(e.target.scrollTop)}
                spellCheck={false}
                autoCapitalize="off"
                autoCorrect="off"
              />
            </div>

            {errors.length > 0 && (
              <div className="bc-error-box">
                {errors.map((err, i) => (
                  <div key={i} className="error">⚠️ {err}</div>
                ))}
              </div>
            )}
          </div>

          {/* DRAG DIVIDER */}
          <div className="bc-divider" onMouseDown={onDividerDown} />

          {/* PREVIEW PANE */}
          <div className="bc-preview-pane">
            <div className="bc-pane-bar">
              <div className="mac-dot" style={{ background: "#ff69b4" }} />
              {isPython ? "Python Note" : "Preview"}
            </div>
            <div className="bc-preview-inner">
              {output === "__python__" ? (
                <div className="bc-py-note">
                  <h3>🐍 Python can't run in the browser!</h3>
                  <p>Python runs on a server or your computer. To run this code, try:</p>
                  <ul>
                    <li><a href="https://replit.com" target="_blank" rel="noreferrer">Replit.com</a> — free online Python editor</li>
                    <li><a href="https://www.online-python.com" target="_blank" rel="noreferrer">online-python.com</a> — paste & run instantly</li>
                    <li>Install <a href="https://www.python.org/downloads/" target="_blank" rel="noreferrer">Python</a> on your computer</li>
                  </ul>
                  <p style={{ marginTop: 14 }}>💡 Use <strong>📋 Copy</strong> above to copy your code, then paste it there!</p>
                </div>
              ) : output ? (
                <div className="preview">
                  <iframe
                    title="preview"
                    sandbox="allow-scripts allow-same-origin"
                    srcDoc={output}
                  />
                </div>
              ) : (
                <div className="bc-placeholder">
                  <span>✨</span>
                  <p>Hit <strong>▶ Run</strong> to see your creation!</p>
                  <p style={{ fontSize: 12, opacity: 0.7 }}>Or click a lesson on the left 💖</p>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </>
  );
}