import React, { useEffect } from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Career from "./Components/Career";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import "./index.css"; // Ensure Tailwind CSS is imported

function App() {
  useEffect(() => {
    document.title = "Sujith Kumar";
  }, []);

  const appStyles = {
    backgroundColor: "#212121", // Dark gray background
    color: "#ffffff", // Light text color for contrast
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    minHeight: "100vh",
    overflowY: "scroll", // Enable scrolling
  };

  const sectionStyles = {
    margin: "1rem 0",
  };

  const scrollbarStyles = `
    ::-webkit-scrollbar {
      width: 8px;
    }
    ::-webkit-scrollbar-track {
      background: #212121;
    }
    ::-webkit-scrollbar-thumb {
      background: white;
      border-radius: 8px;
    }
    ::-webkit-scrollbar-thumb:hover {
      background: #e5e5e5;
    }
  `;
// eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    const styleElement = document.createElement("style");
    styleElement.innerHTML = scrollbarStyles;
    document.head.appendChild(styleElement);
    return () => {
      document.head.removeChild(styleElement);
    };
  }, [scrollbarStyles]);


  return (
      <div className="App" style={appStyles}>
        <Navbar />
        <main style={{ width: "70%", margin: "0 auto", paddingTop: "1rem",paddingBottom: "60px" }}>
          <section id="Hero" style={sectionStyles}>
            <Hero />
          </section>
          <hr style={{ margin: "0.5rem 0", marginTop: "120px", borderTop: "1px solid #F9C74F" }} />
          <section id="About" style={sectionStyles}>
            <About />
          </section>
          <hr style={{ margin: "0.5rem 0", borderTop: "1px solid #F9C74F" }} />
          <section id="Projects" style={sectionStyles}>
            <Projects />
          </section>
          <hr style={{ margin: "0.5rem 0", borderTop: "1px solid #F9C74F" }} />
          <section id="Career" style={sectionStyles}>
            <Career />
          </section>
          <hr style={{ margin: "0.5rem 0", borderTop: "1px solid #F9C74F" }} />
          <section id="Contact" style={sectionStyles}>
            <Contact />
          </section>
        </main>
        <Footer />
      </div>
  );
}

export default App;
