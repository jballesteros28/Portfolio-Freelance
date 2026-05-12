import React from "react";
import Card from "../../common/Card";
import { getIcon } from "../../../utils/iconMap";
import "./ProblemCard.css";

function ProblemCard({ problem }) {
  const Icon = getIcon(problem.icon);

  return (
    <Card className="problem-card" interactive>
      <div className="problem-card__icon">
        <Icon aria-hidden="true" size={24} />
      </div>
      <div>
        <h3>{problem.title}</h3>
        <p>{problem.description}</p>
      </div>
    </Card>
  );
}

export default ProblemCard;
