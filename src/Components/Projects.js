import { BsCodeSlash } from "react-icons/bs";
import ProjectItem from "./ProjectItem";
import desynconPic from "../pictures/desyncron_site.png";
import marketPathPic from "../pictures/marketPath.png";
import studyBrewPic from "../pictures/studyBrew.jpg";
import tabinatorPic from "../pictures/tabinator.png";
import KirkviewPic from "../pictures/kirkview.png";
import wildWatcherPic from "../pictures/wildwatcher.png";
import React from 'react';
import styled from 'styled-components';

// Project data
const projects = [
  {
    title: "Kirkview",
    description:
        "Kirkview is a web application designed to enhance the experience of Concordia University's Kirkland campus community. " +
        "It provides a platform for students to connect with each other, share information, and access resources. " +
        "The application features user authentication, a discussion forum, and a resource library, all built using React and Node.js.",
    img: KirkviewPic,
    tools: ["React", "Node.js", "Express", "MongoDB"],
  },
  {
    title: "The-Wild-Watcher",
    description:
        "A real-time wildfire prediction and analysis dashboard built for ConUHacks IX (SAP Challenge). The project helps monitor and predict wildfire incidents in Quebec using environmental data and machine learning. " +
        "Features include smart CSV uploads, real-time fire incident analysis, interactive map visualizations with Google Maps API, and ML-based risk prediction using a Random Forest classifier. " +
        "The frontend was built with React (Vite + Tailwind + Framer Motion), and the backend with Flask, deployed on Vercel and Render respectively.",
    img: wildWatcherPic,
    tools: ["React", "Vite", "Tailwind", "Flask", "Python", "Pandas", "Scikit-learn", "Google Maps API"],
    githubLink: "https://github.com/Sujith-Kumar-2003/The-Wild-Watcher",
    websiteLink: "https://wild-watch.vercel.app",
  },
  {
    title: "SAPDrive",
    description:
        "Built in 24 hours during ConUHacks VIII, leading to victory in the SAP Challenge and securing a $750 cash prize. " +
        "Developed a specialized scheduling algorithm for tire changing shops, managing 10 bays with distinct allocation rules: 5 for walk-ins and 5 for pre-bookings, optimizing revenue generation. " +
        "Utilized Flask with Python for backend, and Angular 13 for frontend to create SAPDrive, optimizing scheduling, operations, and revenue generation. " +
        "Collaborated on integrating the algorithm seamlessly into SAPDrive's UI for a user-friendly experience.",
    img: tabinatorPic,
    tools: ["Rust", "Tauri", "Powershell", "Swift", "Python", "React"],
    githubLink: "https://github.com/Sujith-Kumar-2003/SAPDrive",
    websiteLink: "https://devpost.com/software/sapdrive",
  },
  {
    title: "Info Retriever for Concordia Spectrum",
    description:
        "Info Retriever for Concordia Spectrum is a Python-based tool designed to extract academic documents from the Concordia Spectrum website, process them using an inverted index, and perform clustering to group similar documents. This project helps users efficiently retrieve and organize relevant academic content from the university's open access portal.",
    img: marketPathPic,
    tools: ["Streamlit", "Scikit Learn", "Python"],
    githubLink: "https://github.com/Sujith-Kumar-2003/COMP6791-Information-Retrieval-and-Web-Search",
    websiteLink: "https://github.com/Sujith-Kumar-2003/COMP6791-Information-Retrieval-and-Web-Search",
  },
  {
    title: "HTTP Desync Tool (Desyncron)",
    description: `Designed and programmed "DESYNCRON," a robust tool in Python 3.X for evaluating website vulnerability.
    "DESYNCRON" serves as a proactive assessment tool to detect potential security weaknesses.
    Conducts valid assessments on websites, identifying and addressing request smuggling and desynchronization vulnerabilities.
    Delivers actionable insights to fortify web application security, ensuring the safeguarding of data integrity and overall resilience.`,
    img: desynconPic,
    tools: ["JavaScript", "HTML", "CSS"],
    githubLink: "https://github.com/Sujith-Kumar-2003/HTTP-REQUEST-SMUGGLING",
    websiteLink: "https://www.akamai.com/blog/security/http-2-request-smulggling",
  },
  {
    title: "Warzone Game (using MVC)",
    description:
        "This project is a Java-based Command Line implementation of the popular game 'Risk,' designed to be compatible with the rules and map files used in the command-line version of 'Warzone.' The game follows the MVC architecture and is implemented using Java 17, JUnit 4, and JGraph. Developed by a team of six, this project was undertaken as part of the WarzoneSOEN6441 course.",
    img: studyBrewPic,
    tools: ["Java", "JUnit 4", "JGraph"],
    githubLink: "https://github.com/Sujith-Kumar-2003/WarzoneSOEN6441",
    websiteLink: "https://www.warzone.com/SinglePlayer?Level=50",
  },
];

// Styled components
const Title = styled.h1`
  padding: 1px;
  color: #Ffffff; /* Gold color */
  font-size: clamp(20px, 6vw, 35px); /* Ensure proper font size */
  display: flex;
  align-items: center;
`;

const IconWrapper = styled.div`
  svg {
    color: #F9C74F; /* Gold color for the icon */
    width: 2em; /* Set the size */
    height: 1.5em; /* Set the size */
    margin-right: 8px; /* Space between icon and title */
  }
`;

function Projects() {
  return (
      <section style={{ paddingTop: '8px', marginBottom: '20vh' }}>
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: '3px' }}>
          <IconWrapper>
            <BsCodeSlash /> {/* The icon will be styled here */}
          </IconWrapper>
          <Title>Projects</Title> {/* Gold title styled with clamp font size */}
        </div>

        {/* Render each project item */}
        {projects.map((project, index) => (
            <ProjectItem key={index} project={project} />
        ))}
      </section>
  );
}

export default Projects;
