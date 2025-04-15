import { BsFillPersonFill } from "react-icons/bs";
import mePic from "../pictures/me.png";
import React from "react";

function About() {
  // Define the styles as objects
  const styles = {
    section: {
      paddingTop: "2rem",
      marginBottom: "5vh",
    },
    header: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      fontSize: "clamp(20px, 6vw, 35px)",
    },
    icon: {
      fill: "#f9c74f", // Adjust the color based on your primary color
    },
    title: {
      padding: ".5rem",
    },
    container: {
      display: "flex",
      flexDirection: "row", // Align text and image in a row
      justifyContent: "space-between", // Space out the text and image
      alignItems: "center", // Align items vertically centered
      paddingTop: "1.5rem",
      gap: "2rem", // Added a gap between the article and aside
    },
    article: {
      width: "55%", // Slightly reduced the width to balance the layout
    },
    text: {
      color: "#ccc", // Adjust to match the second text color
      fontSize: "clamp(14px, 5vw, 18px)",
      maxWidth: "580px",
      marginBottom: "2rem",
    },
    spanPrimary: {
      color: "#f9c74f", // Adjust to match your primary color
    },
    aside: {
      flexShrink: 0,
      width: "45%", // Adjust the width to make it slightly smaller
      border: "1px solid #ccc", // Adjust to match second text color
      borderRadius: "8px",
    },
    img: {
      width: "100%",
      height: "auto",
      borderRadius: "8px",
    },
  };

  return (
      <section style={styles.section}>
        <div style={styles.header}>
          <BsFillPersonFill style={styles.icon} />
          <h1 style={styles.title}>About</h1>
        </div>
        <div style={styles.container}>
          <article style={styles.article}>
            <p style={styles.text}>
              Hello! I’m Sujith Kumar, a passionate developer with a deep love for
              coding and technology. In my second year at Concordia University, I’m
              actively engaged in software development and learning new
              technologies. At the moment, I’m particularly excited about
              <span style={styles.spanPrimary}> Web Development </span> and
              <span style={styles.spanPrimary}> Automation</span>.
            </p>
            <p style={styles.text}>
              I’ve enjoyed participating in hackathons and was one of the
              organizers for the first hackathon at my college,
              <span style={styles.spanPrimary}> ConUHacks</span>. These experiences
              were both rewarding and fun, allowing me to refine my skills and
              work with others on impactful projects.
            </p>
          </article>
          <aside style={styles.aside}>
            <img
                src={mePic} // Replace with your actual image URL
                alt="Me"
                style={styles.img}
            />
          </aside>
        </div>
      </section>
  );
}

export default About;
