import React, { useState } from "react";
import barbieImg from '../assets/barbie-editor.png'

export default function StartCoding() {
  const [code, setCode] = useState(`
<h1>Hello Barbie Coder 💖</h1>
<p>Start building your dreams here!</p>
`);

const [output, setOutput] = useState("");
  const [error, setError] = useState("");

 const runCode = () => {
  // Remove self-closing tags first
  const cleanedCode = code.replace(/<br\s*\/?>|<img[^>]*>|<input[^>]*>/gi, "");

  const openTags = (cleanedCode.match(/<([a-z]+)(?![^>]*\/>)[^>]*>/gi) || []).length;
  const closeTags = (cleanedCode.match(/<\/[a-z]+>/gi) || []).length;

  if (openTags !== closeTags) {
    setError("💅 Oops Barbie! You forgot to close a tag!");
    setOutput("");
    return;
  }

  setError("");
  setOutput(code);
};
  return (
    <div className="coding-page">
      <h2>Barbie Coder</h2>

      <img src={barbieImg} className="barbie-bg" />

        <div className="run-btn-div">
       <button className="run-btn" onClick={runCode}> ▶ Run</button>
      </div>

      <div className="editor-container">
        <textarea
          value={code}
          onChange={(e) => setCode(e.target.value)}
          className="code-editor"
        />
      </div>


      <div className="preview">
        <h3> Output</h3>
          {error && <p className="error">{error}</p>}


        <div
          className="output-box"
          dangerouslySetInnerHTML={{ __html: output }}
        />
      </div>
    </div>
  );
}