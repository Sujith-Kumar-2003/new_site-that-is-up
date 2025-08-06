import { BsFileTextFill } from "react-icons/bs";
import React from 'react';

const experiences = [
  {
    title: "Lead Developer",
    company: "Kirkview Farms",
    tasks: [
      "Extended farm-wide Wi-Fi coverage from the main house to the sugar shack (1.5 km away) and built a mobile solar power station for off-grid energy needs, demonstrating strong troubleshooting and system integration skills.",
      "Developed an IoT-based monitoring system with temperature and humidity sensors, logging data to farmer’s app every 2 hours.",
      "Designed and implemented a cross-platform mobile dashboard integrating real-time IoT sensor data and security camera feeds, significantly enhancing operational efficiency and security measures across the farm."
    ],
    timeframe: "January 2025 - May 2025"
  },
  {
    title: "Fullstack Developer Intern",
    company: "KaarDeep Engineering",
    tasks: [
      "Implemented and maintained robust full-stack solutions, resulting in a 25% improvement in overall system efficiency.",
      "Collaborated with a dynamic team to design and develop innovative features, enhancing the functionality and user experience of web applications.",
      "Utilized NodeJS, ReactJS, Oracle, Figma, Google API, Zoho API to create scalable and responsive applications, meeting project requirements and deadlines."
    ],
    timeframe: "April 2023 - February 2024",
  },
  {
    title: "Software Developer Intern",
    company: "Exposys DataLabs Inc",
    tasks: [
      "Developed a high-performance web application for Attendance Management System using Spring Boot and Angular 7, incorporating hibernate as a lightweight ORM tool to optimize Java application's interaction with the database.",
      "Utilized lazy loading techniques to load data dynamically and asynchronously, minimizing initial loading times and improving the user experience by fetching only the necessary information on-demand.",
      "Implemented asynchronous processing techniques, such as task queues/message queues, for time-consuming operations, freeing up server resources and improving the responsiveness of the web application."
    ],
    timeframe: "September 2022 - November 2022",
  },
  {
    title: "Director, GSA",
    company: "Concordia University",
    tasks: [
      "Collaborated with Executives to execute key duties, while proactively identifying and implementing initiatives to enhance the overall well-being and academic experience of Graduate Students Association at Concordia University.",
      "Managed and planned initiatives aimed at improving the academic experience for graduate students.",
      "Coordinated events and student outreach programs to boost community engagement and support."
    ],
    timeframe: "May 2024 - Present",
  },
];

const education = [
  {
    title: "Applied Computer Science",
    company: "Concordia University",
    tasks: [
      "3.1/4.0 GPA",
      "$1500 yearly award scholarship",
      "$2000 Internship Bursary from Kirkview Farms",
      "Concordia University Graduate Student Association Director",
    ],
    timeframe: "September 2023 - May 2025",
  },
  {
    title: "Bachelor of Engineering in Computer Science",
    company: "Crescent University",
    tasks: [
      "3.8/4.3 GPA",
      "2x Best Outgoing Student (2022), (2023)",
      "Crescent Data Science Club Vice-President",
    ],
    timeframe: "September 2019 - May 2023",
  }
];

function ExperienceItem({ experience }) {
  const styles = {
    section: {
      borderLeft: "2px solid #F9C74F", // Primary color
      background: "linear-gradient(to bottom left, #333333, #333333)", // Gradient
      padding: "2rem",
      borderRadius: "10px",
      marginBottom: "1vh",
    },
    title: {
      fontSize: "2rem",
      paddingBottom: "1rem",
    },
    company: {
      color: "#F9C74F", // Primary color
    },
    timeframe: {
      paddingBottom: "1rem",
      color: "#ccc", // Secondary text color
    },
    taskList: {
      paddingLeft: "1rem",
      fontSize: "clamp(13px, 1vw, 15px)",
      color: "#ccc", // Secondary text color
      marginTop: "1rem",
    },
    taskItem: {
      display: "flex",
      alignItems: "start",
    },
    taskIcon: {
      color: "#F9C74F", // Primary color
      paddingRight: "0.5rem",
      fontSize: "clamp(12px, 1vw, 13px)",
    },
  };

  return (
      <section style={styles.section}>
        <h4 style={styles.title}>
          {experience.title}
          <span style={styles.company}> @{experience.company}</span>
        </h4>
        <p style={styles.timeframe}>{experience.timeframe}</p>
        <ul style={styles.taskList}>
          {experience.tasks.map((task, index) => (
              <li key={index} style={styles.taskItem}>
                <span style={styles.taskIcon}>▹</span>
                {task}
              </li>
          ))}
        </ul>
      </section>
  );
}

function Career() {
  const styles = {
  section: {
    paddingTop: "1rem", // Reduced top padding
    marginBottom: "15vh",
    backgroundColor: "#212121",
  },
  header: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    fontSize: "clamp(20px, 6vw, 35px)",
    marginBottom: "2vh", // Reduced bottom margin
  },
  icon: {
    fill: "#F9C74F",
  },
  title: {
    padding: "0.5rem",
  },
  container: {
    display: "flex",
    flexDirection: "row",
    paddingTop: "1.5rem",
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
  experienceContainer: {
    width: "60%",
  },
  educationContainer: {
    width: "35%",
    marginLeft: "5%",
  },
  sectionTitle: {
    fontSize: "2.5rem",
    paddingBottom: "2vh", // optional tweak
  },
};

  return (
      <section style={styles.section}>
        <div style={styles.header}>
          <BsFileTextFill style={styles.icon} />
          <h1 style={styles.title}>Career</h1>
        </div>
        <div style={styles.container}>
          <div style={styles.experienceContainer}>
            <h3 style={styles.sectionTitle}>Experience</h3>
            {experiences.map((experience, index) => (
                <ExperienceItem key={index} experience={experience} />
            ))}
          </div>
          <div style={styles.educationContainer}>
            <h3 style={styles.sectionTitle}>Education</h3>
            {education.map((edu, index) => (
                <ExperienceItem key={index} experience={edu} />
            ))}
          </div>
        </div>
      </section>
  );
}

export default Career;
