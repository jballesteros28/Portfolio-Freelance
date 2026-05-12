import React from "react";
import SectionHeader from "../../components/common/SectionHeader";
import ServiceCard from "../../components/cards/ServiceCard";
import { services } from "../../data/services";
import "./Services.css";

function Services() {
  return (
    <section className="services section" id="servicios">
      <div className="container">
        <SectionHeader
          eyebrow="Servicios"
          title="Servicios que ofrezco"
          description="Soluciones web, sistemas y soporte tecnico para pasar de la idea a una herramienta util."
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
