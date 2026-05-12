import React from "react";
import "./Card.css";

function Card({ children, className = "", interactive = false, as: Element = "article" }) {
  const classes = ["card", interactive ? "card--interactive" : "", className]
    .filter(Boolean)
    .join(" ");

  return <Element className={classes}>{children}</Element>;
}

export default Card;
