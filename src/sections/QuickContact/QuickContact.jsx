import React from "react";
import { Mail } from "lucide-react";
import ContactForm from "../../components/forms/ContactForm";
import { quickContactContent } from "../../data/siteContent";
import "./QuickContact.css";

function QuickContact() {
  return (
    <section className="quick-contact section" id="contacto-rapido">
      <div className="container quick-contact__inner">
        <div className="quick-contact__icon" aria-hidden="true">
          <Mail size={30} />
        </div>
        <div className="quick-contact__copy">
          <span>{quickContactContent.eyebrow}</span>
          <h2>{quickContactContent.title}</h2>
          <p>{quickContactContent.description}</p>
        </div>
        <ContactForm
          compact
          layout="inline"
          title=""
          subtitle=""
        />
      </div>
    </section>
  );
}

export default QuickContact;
