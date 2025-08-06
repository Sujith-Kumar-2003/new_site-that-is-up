import { BsFillEnvelopeFill } from "react-icons/bs";
import React, { useState } from 'react'; // Added useState for hover effect

function Contact() {
  const [isHovered, setIsHovered] = useState(false); // State to track hover

  const styles = {
    section: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      height: "auto",
      textAlign: "center",
      paddingBottom: "4vh",
      marginTop: "0.5rem",
    },
    header: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      fontSize: "clamp(20px, 6vw, 35px)",
      marginBottom: "0.5rem",
    },
    icon: {
      fill: "#F9C74F", // Primary color
    },
    title: {
      padding: "0.5rem",
    },
    description: {
      color: "#ccc", // Secondary text color
      maxWidth: "540px",
      fontSize: "clamp(13px, 5vw, 17px)",
      marginBottom: "3.5rem",
    },
    button: {
      backgroundColor: isHovered ? "#F9C74F" : "transparent", // Change to yellow on hover
      padding: "1.25rem 2.5rem",
      border: isHovered ? "2px solid transparent" : "2px solid #F9C74F", // Transparent border on hover
      color: isHovered ? "#ffffff" : "#F9C74F", // White text on hover
      textDecoration: "none",
      borderRadius: "10px",
      cursor: "pointer",
      transition: "background-color 0.3s, color 0.3s, border-color 0.3s",
    },
  };

  return (
      <section style={styles.section}>
        <div style={styles.header}>
          <BsFillEnvelopeFill style={styles.icon} />
          <h1 style={styles.title}>Contact</h1>
        </div>
        <p style={styles.description}>
          I’m currently seeking internship / Full time  opportunities where I can apply my
          skills and continue learning in a professional environment. If you’re
          interested in discussing potential roles or collaborating on projects,
          please feel free to reach out.
        </p>
        <a
            href="mailto:sujithkumar2003k@gmail.com?subject=Internship%20Opportunity"
            style={styles.button}
            onMouseOver={() => setIsHovered(true)} // Set hover state to true
            onMouseOut={() => setIsHovered(false)} // Set hover state to false
            target="_blank"
            rel="noopener noreferrer"
        >
          Get in Touch!
        </a>
      </section>
  );
}

export default Contact;
