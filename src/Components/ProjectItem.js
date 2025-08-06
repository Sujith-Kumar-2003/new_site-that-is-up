import React from "react";
import { BsGithub } from "react-icons/bs";
import { FiExternalLink } from "react-icons/fi";
import styled from "styled-components"; // Import styled-components

// Define the main project section styling
const ProjectSection = styled.section`
  display: flex;
  flex-direction: column; // Default to column for small screens
  align-items: center;
  margin-bottom: 20px;
  
  @media (min-width: 768px) {
    flex-direction: row; // Switch to row for larger screens
    margin-bottom: 40px;
  }
`;

// Define the image section styling
const ImageSection = styled.aside`
  display: block;
  flex-shrink: 0;
  width: 100%;
  margin-top: 16px;
  margin-bottom: 8px;
  margin-right: 4vw; // Space between image and text on larger screens

  @media (min-width: 768px) {
    width: 50%; // Take up half the width on larger screens
    margin-right: 20px; // Margin on the right for better spacing
  }
`;

// Define the container for the image without the gold tint
const ImageContainer = styled.div`
  background-color: #F9C74F;
  opacity: 0.8;
  transition: opacity 0.3s ease-in-out;
  border-color: #ffffff;
  border-radius: 12px;
  border: 1px solid #ffffff; /* Increased border size and color */
  overflow: hidden;

  &:hover {
    opacity: 1;
  }

  width: 100%;
  height: auto;
  max-height: 300px;
`;

// Define the project image styling
const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  border-radius: 12px;
  border-color: #ffffff;
`;

// Define the text content section styling
const TextContentSection = styled.article`
  background-color: #212121;
  padding: 12px;
  margin-top: 6px;
  border-radius: 12px;
  width: 100%;
  text-align: center; // Center text for small screens

  @media (min-width: 500px) {
    text-align: left; // Left-align text for medium to large screens
    width: 50%;
    padding: 20px;
  }
`;

// Define the title styling with gold color
const Title = styled.h2`
  font-size: 24px;
  color: #F9C74F; /* Gold color */
  margin-bottom: 2px;
`;

// Define the description styling
const Description = styled.p`
  color: var(--secondText);
  font-size: 16px;
  margin-bottom: 2px;
  line-height: 1.5;
  text-align: justify; /* Justify the description text */
`;

// Define the list of tools styling
const ToolsList = styled.ul`
  margin-bottom: 2px;
  color: var(--secondText);
  padding-left: 0;
  list-style-type: none;
`;

// Define each tool item styling
const ToolItem = styled.li`
  display: inline-block;
  // padding-right: 8px;
  font-size: 14px;
`;

// Define the section for links to GitHub and website, aligned right
const LinkSection = styled.div`
  display: flex;
  justify-content: flex-end; /* Align icons to the right */
  gap: 5px;
  margin-top: 1px;
`;

// Define the styling for each link (GitHub and website)
const ProjectLink = styled.a`
  text-decoration: none;
  color: var(--primary);
  display: flex;
  align-items: center;
  font-size: 24px;
  transition: color 0.3s ease;

  &:hover {
    color: var(--highlight); /* Optional: Add hover color for better UX */
  }
  
  /* Make the icons gold */
  svg {
    color: #F9C74F; /* Gold color for the icons */
  }
`;

function ProjectItem({ project }) {
  return (
    <ProjectSection>
      {/* Image Section */}
      <ImageSection>
        <ImageContainer>
          <ProjectImage
            src={project.img}
            alt={`${project.title}`}
          />
        </ImageContainer>
      </ImageSection>
      
      {/* Text Content Section */}
      <TextContentSection>
        <Title>{project.title}</Title>
        <Description>{project.description}</Description>
        <ToolsList>
          {project.tools.map((tool, index) => (
            <ToolItem key={index}>{tool}</ToolItem>
          ))}
        </ToolsList>
        
        {/* Link Section for GitHub and Website */}
        <LinkSection>
          <ProjectLink
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsGithub />
          </ProjectLink>
          
          <ProjectLink
            href={project.websiteLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiExternalLink />
          </ProjectLink>
        </LinkSection>
      </TextContentSection>
    </ProjectSection>
  );
}

export default ProjectItem;
