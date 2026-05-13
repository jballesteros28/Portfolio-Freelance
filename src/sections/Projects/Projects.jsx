import React from "react";
import SectionHeader from "../../components/common/SectionHeader";
import ProjectCard from "../../components/cards/ProjectCard";
import { projects } from "../../data/projects";
import { sectionContent } from "../../data/siteContent";
import "./Projects.css";

function Projects() {
  return (
    <section className="projects section" id="proyectos">
      <div className="container">
        <SectionHeader
          title={sectionContent.projects.title}
          description={sectionContent.projects.description}
        />
        <div className="projects__carousel" aria-label="Carrusel de proyectos destacados">
          <div className="projects__track">
            {projects.map((project) => (
              <div className="projects__slide" key={project.id}>
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
