import React from "react";
import SectionHeader from "../../components/common/SectionHeader";
import TechBadge from "../../components/cards/TechBadge";
import { technologies } from "../../data/technologies";
import "./Technologies.css";

function Technologies() {
  const marqueeItems = [...technologies, ...technologies];

  return (
    <section className="technologies section" id="tecnologias">
      <div className="container">
        <SectionHeader
          title="Tecnologias que manejo"
          description="Herramientas actuales para frontend, backend, datos y despliegue."
        />
      </div>

      <div className="technologies__marquee" aria-label="Tecnologias que manejo">
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
