import React from "react";
import SectionHeader from "../../components/common/SectionHeader";
import ProblemCard from "../../components/cards/ProblemCard";
import { problems } from "../../data/problems";
import problemsVisual from "../../assets/images/problems-mockup.png";
import "./Problems.css";

function Problems() {
  return (
    <section className="problems section" id="problemas">
      <div className="container problems__inner">
        <div className="problems__visual">
          <img src={problemsVisual} alt="Mockup oscuro de procesos digitales conectados" />
        </div>

        <div className="problems__content">
          <SectionHeader
            align="left"
            title="Problemas que resuelvo"
            description="Menos caos operativo, mas claridad y sistemas que trabajan a favor del negocio."
          />
          <div className="problems__grid">
            {problems.map((problem) => (
              <ProblemCard key={problem.id} problem={problem} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Problems;
