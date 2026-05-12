import React from "react";
import Card from "../../common/Card";
import { getIcon } from "../../../utils/iconMap";
import "./ProcessStep.css";

function ProcessStep({ step }) {
  const Icon = getIcon(step.icon);

  return (
    <Card className="process-step" interactive>
      <span className="process-step__number">{step.number}</span>
      <div className="process-step__icon">
        <Icon aria-hidden="true" size={24} />
      </div>
      <h3>{step.title}</h3>
      <p>{step.description}</p>
    </Card>
  );
}

export default ProcessStep;
