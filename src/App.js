import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Features from "./components/Features";
import About from "./components/About";
import Stats from "./components/Stats";
import Footer from "./components/Footer";
import Editor from "./components/Editor";
import Learn from "./components/Learn";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
   <BrowserRouter>
      <Routes>

        {/* Home page */}
        <Route path="/" element={
          <div className="b-wrap">
            <Nav />
            <Hero />
            <Features />
             <About />
            <Stats />

            <Footer />
          </div>
        } />

        <Route path="/editor" element={<Editor />} />
        <Route path="/learn"  element={<Learn />}  />

      </Routes>
    </BrowserRouter>
  );
}

export default App;