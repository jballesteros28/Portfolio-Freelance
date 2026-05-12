import React from "react";
import { CircleHelp, Clock3, Database, MessageSquare, ShieldCheck } from "lucide-react";
import SectionHeader from "../../components/common/SectionHeader";
import ProblemCard from "../../components/cards/ProblemCard";
import { problems } from "../../data/problems";
import "./Problems.css";

function Problems() {
  return (
    <section className="problems section" id="problemas">
      <div className="container problems__inner">
        <div className="problems__visual" aria-hidden="true">
          <div className="problems__screen">
            <span />
            <span />
            <span />
          </div>
          <div className="problems__person" />
          <div className="problems__question">
            <CircleHelp size={58} />
          </div>
          <div className="problems__node problems__node--one">
            <MessageSquare size={22} />
          </div>
          <div className="problems__node problems__node--two">
            <Clock3 size={22} />
          </div>
          <div className="problems__node problems__node--three">
            <Database size={22} />
          </div>
          <div className="problems__node problems__node--four">
            <ShieldCheck size={22} />
          </div>
        </div>

        <div className="problems__content">
          <SectionHeader
            align="left"
            eyebrow="Problemas"
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
