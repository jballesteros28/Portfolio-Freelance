import React from "react";
import Badge from "../../common/Badge";
import Card from "../../common/Card";
import { getIcon } from "../../../utils/iconMap";
import "./ServiceCard.css";

function ServiceCard({ service }) {
  const Icon = getIcon(service.icon);

  return (
    <Card className="service-card" interactive>
      <div className="service-card__icon">
        <Icon aria-hidden="true" size={26} strokeWidth={1.8} />
      </div>
      <div className="service-card__body">
        <h3>{service.title}</h3>
        <p>{service.description}</p>
      </div>
      <div className="service-card__highlights">
        {service.highlights.map((highlight) => (
          <Badge key={highlight}>{highlight}</Badge>
        ))}
      </div>
    </Card>
  );
}

export default ServiceCard;
