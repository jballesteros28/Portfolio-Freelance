import React from "react";
import "./SectionHeader.css";

function SectionHeader({ eyebrow, title, description, align = "center", className = "" }) {
  return (
    <div className={`section-header section-header--${align} ${className}`}>
      {eyebrow ? <span className="section-header__eyebrow">{eyebrow}</span> : null}
      <h2>{title}</h2>
      {description ? <p>{description}</p> : null}
    </div>
  );
}

export default SectionHeader;
