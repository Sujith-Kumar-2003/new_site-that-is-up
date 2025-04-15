import React, { useState } from 'react';

function Hero() {
  const [isHoveredResume, setIsHoveredResume] = useState(false);
  const [isHoveredBlog, setIsHoveredBlog] = useState(false);
  const [isHoveredImages, setIsHoveredImages] = useState(false);

  const getButtonStyle = (isHovered) => ({
    backgroundColor: isHovered ? "#F9C74F" : "transparent",
    color: isHovered ? "#2B2D42" : "#F9C74F",
    padding: "1.25rem 2.5rem",
    border: isHovered ? "2px solid transparent" : "2px solid #F9C74F",
    borderRadius: "9999px",
    fontSize: "1.25rem",
    transition: "background-color 0.3s, color 0.3s, border-color 0.3s",
    textDecoration: "none",
    cursor: "pointer",
    display: "inline-block",
    marginRight: "1rem" // space between buttons
  });

  const styles = {
    section: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
      alignItems: "flex-start",
      marginTop: "18vh",
      height: "80vh",
      padding: "0 1rem",
      marginLeft: "auto",
      marginRight: "auto",
    },
    heading1: {
      color: "#F9C74F",
      marginBottom: "2.5rem",
      fontSize: "clamp(13px, 5vw, 17px)",
    },
    heading2: {
      fontSize: "clamp(40px, 8vw, 80px)",
      marginBottom: "1.5rem",
    },
    heading3: {
      fontSize: "clamp(30px, 7vw, 52px)",
      color: "#6B7280",
      marginBottom: "2.5rem",
    },
    paragraph: {
      color: "#6B7280",
      maxWidth: "540px",
      fontSize: "clamp(13px, 5vw, 17px)",
      marginBottom: "3.5rem",
      lineHeight: "1.5",
    },
    buttonContainer: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      gap: "1rem", // optional spacing between buttons
    }
  };

  return (
      <section style={styles.section}>
        <h1 style={styles.heading1}>Hi, my name is</h1>
        <h2 style={styles.heading2}>Sujith Kumar.</h2>
        <h3 style={styles.heading3}>
          I build software that works. <small>(sometimes)</small>
        </h3>
        <p style={styles.paragraph}>
          I'm a CS student with a passion for software development. I enjoy
          creating innovative solutions and exploring new technologies. This
          portfolio showcases my projects and technical skills.
        </p>

        <div style={styles.buttonContainer}>
          <a
              href="https://drive.google.com/file/d/1-XYvWDjNs9bUkIVMJovqGSSg0UDAVWvu/view?usp=sharing"
              style={getButtonStyle(isHoveredResume)}
              onMouseOver={() => setIsHoveredResume(true)}
              onMouseOut={() => setIsHoveredResume(false)}
              target="_blank"
              rel="noopener noreferrer"
          >
            Check out my Resume!
          </a>

          <a
              href="https://sujith-kumar-2003.github.io/bL0g/"
              style={getButtonStyle(isHoveredBlog)}
              onMouseOver={() => setIsHoveredBlog(true)}
              onMouseOut={() => setIsHoveredBlog(false)}
              target="_blank"
              rel="noopener noreferrer"
          >
            My new Blog is out now!
          </a>

          <a
              href="https://octopus-wall.onrender.com/"
              style={getButtonStyle(isHoveredImages)}
              onMouseOver={() => setIsHoveredImages(true)}
              onMouseOut={() => setIsHoveredImages(false)}
              target="_blank"
              rel="noopener noreferrer"
          >
            Check out my Images!
          </a>
        </div>
      </section>
  );
}

export default Hero;
