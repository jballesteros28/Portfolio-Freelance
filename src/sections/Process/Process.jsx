import React from "react";
import SectionHeader from "../../components/common/SectionHeader";
import ProcessStep from "../../components/cards/ProcessStep";
import { processSteps } from "../../data/processSteps";
import "./Process.css";

function Process() {
  return (
    <section className="process section" id="proceso">
      <div className="container">
        <SectionHeader
          title="Mi proceso de trabajo"
          description="Un recorrido simple para entender, construir, entregar y mejorar sin perder claridad."
        />
        <div className="process__grid">
          {processSteps.map((step) => (
            <ProcessStep key={step.id} step={step} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Process;
