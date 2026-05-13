import React from "react";
import SectionHeader from "../../components/common/SectionHeader";
import ProcessStep from "../../components/cards/ProcessStep";
import { processSteps } from "../../data/processSteps";
import { sectionContent } from "../../data/siteContent";
import "./Process.css";

function Process() {
  return (
    <section className="process section" id="proceso">
      <div className="container">
        <SectionHeader
          title={sectionContent.process.title}
          description={sectionContent.process.description}
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
