import React from "react";
import { getIcon } from "../../../utils/iconMap";
import "./TechBadge.css";

function TechBadge({ technology }) {
  const Icon = getIcon(technology.icon);

  return (
    <div className="tech-badge" aria-label={technology.name}>
      <span className="tech-badge__icon">
        <Icon aria-hidden="true" size={22} />
      </span>
      <span className="tech-badge__text">
        <strong>{technology.name}</strong>
        <small>{technology.category}</small>
      </span>
    </div>
  );
}

export default TechBadge;
