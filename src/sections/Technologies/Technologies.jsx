import React from "react";
import SectionHeader from "../../components/common/SectionHeader";
import TechBadge from "../../components/cards/TechBadge";
import { technologies } from "../../data/technologies";
import { sectionContent } from "../../data/siteContent";
import "./Technologies.css";

function Technologies() {
  const marqueeItems = [...technologies, ...technologies];

  return (
    <section className="technologies section" id="tecnologias">
      <div className="container">
        <SectionHeader
          title={sectionContent.technologies.title}
          description={sectionContent.technologies.description}
        />
      </div>

      <div className="technologies__marquee" aria-label={sectionContent.technologies.title}>
        <div className="technologies__track">
          {marqueeItems.map((technology, index) => (
            <TechBadge key={`${technology.id}-${index}`} technology={technology} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Technologies;
