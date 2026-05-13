import React from "react";
import SectionHeader from "../../components/common/SectionHeader";
import ProblemCard from "../../components/cards/ProblemCard";
import { problems } from "../../data/problems";
import { sectionContent } from "../../data/siteContent";
import problemsVisual from "../../assets/images/problems-mockup.png";
import "./Problems.css";

function Problems() {
  return (
    <section className="problems section" id="problemas">
      <div className="problems__background" aria-hidden="true">
        <img src={problemsVisual} alt="" />
      </div>

      <div className="container problems__inner">
        <div className="problems__content">
          <SectionHeader
            align="left"
            title={sectionContent.problems.title}
            description={sectionContent.problems.description}
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
