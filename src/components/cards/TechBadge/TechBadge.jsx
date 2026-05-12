import React, { useState } from "react";
import "./TechBadge.css";

function TechBadge({ technology }) {
  const [imageFailed, setImageFailed] = useState(false);
  const initials = technology.name
    .split(/\s+/)
    .map((word) => word[0])
    .join("")
    .slice(0, 3)
    .toUpperCase();
  const showLogo = technology.logo && !imageFailed;

  return (
    <div className="tech-badge" aria-label={technology.name}>
      <span className="tech-badge__icon">
        {showLogo ? (
          <img src={technology.logo} alt="" loading="lazy" onError={() => setImageFailed(true)} />
        ) : (
          <span className="tech-badge__fallback" aria-hidden="true">
            {initials}
          </span>
        )}
      </span>
      <span className="tech-badge__text">
        <strong>{technology.name}</strong>
      </span>
    </div>
  );
}

export default TechBadge;
