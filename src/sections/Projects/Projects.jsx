import React from "react";
import SectionHeader from "../../components/common/SectionHeader";
import ProjectCard from "../../components/cards/ProjectCard";
import { projects } from "../../data/projects";
import "./Projects.css";

function Projects() {
  return (
    <section className="projects section" id="proyectos">
      <div className="container">
        <SectionHeader
          eyebrow="Proyectos"
          title="Proyectos destacados"
          description="Interfaces y sistemas demo pensados para operaciones reales, con buena experiencia y base mantenible."
        />
        <div className="projects__grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
