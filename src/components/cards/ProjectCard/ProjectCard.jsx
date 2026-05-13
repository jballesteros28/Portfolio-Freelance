import React from "react";
import { ArrowRight } from "lucide-react";
import Badge from "../../common/Badge";
import Card from "../../common/Card";
import "./ProjectCard.css";

function ProjectCard({ project }) {
  return (
    <Card className="project-card" interactive>
      <div className="project-card__media">
        <img src={project.image} alt={`Mockup de ${project.title}`} loading="lazy" />
        <Badge className="project-card__type" variant="blue">
          {project.type}
        </Badge>
      </div>
      <div className="project-card__content">
        <div className="project-card__copy">
          <h3>{project.title}</h3>
          <p>{project.description}</p>
        </div>
        <div className="project-card__techs">
          {project.technologies.map((tech) => (
            <Badge key={tech} variant="accent">
              {tech}
            </Badge>
          ))}
        </div>
        <div className="project-card__actions">
          <a href={project.links.demo} className="project-card__link">
            Ver proyecto <ArrowRight aria-hidden="true" size={15} />
          </a>
        </div>
      </div>
    </Card>
  );
}

export default ProjectCard;
