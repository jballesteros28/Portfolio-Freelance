import React from "react";
import SectionHeader from "../../components/common/SectionHeader";
import ServiceCard from "../../components/cards/ServiceCard";
import { services } from "../../data/services";
import { sectionContent } from "../../data/siteContent";
import "./Services.css";

function Services() {
  return (
    <section className="services section" id="servicios">
      <div className="container">
        <SectionHeader
          title={sectionContent.services.title}
          description={sectionContent.services.description}
        />
        <div className="services__grid">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
