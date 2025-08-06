import { FaGithub, FaLinkedin } from "react-icons/fa";
import React from 'react';

function Footer() {
  const styles = {
    footer: {
      width: "100%",
      margin: "0 auto",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "1rem", // Increased padding for more spacing
    },
    textContainer: {
      display: "flex",
      alignItems: "center",
      fontSize: "1.5rem", // Larger font size for the text
      marginBottom: "1.5rem", // Increased margin for spacing
    },
    heartIcon: {
      color: "#F44336", // Red color
      fontSize: "2rem", // Larger heart icon
      margin: "0 0.5rem", // Add spacing around the heart
    },
    socialLinks: {
      display: "flex",
      gap: "2rem", // Increased gap between icons
      fontSize: "clamp(2.5rem, 6vw, 3.5rem)", // Bigger responsive icon size
    },
    iconHover: {
      color: "#F9C74F", // Primary color on hover
      transition: "color 0.3s",
    },
  };

  return (
      <footer style={styles.footer}>
        <div style={styles.textContainer}>
          <span>Developed with</span>
          <span role="img" aria-label="heart" style={styles.heartIcon}>❤️</span>
          <span>by Sujith Kumar</span>
        </div>
        <div style={styles.socialLinks}>
          <a
              href="https://github.com/Sujith-Kumar-2003"
              target="_blank"
              rel="noopener noreferrer"
              style={styles.iconHover}
          >
            <FaGithub />
          </a>
          <a
              href="https://www.linkedin.com/in/sujith-kumar-2003cassy/"
              target="_blank"
              rel="noopener noreferrer"
              style={styles.iconHover}
          >
            <FaLinkedin />
          </a>
        </div>
      </footer>
  );
}

export default Footer;
