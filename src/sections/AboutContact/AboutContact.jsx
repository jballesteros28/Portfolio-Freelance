import React from "react";
import ContactForm from "../../components/forms/ContactForm";
import Badge from "../../components/common/Badge";
import portraitImage from "../../assets/images/juan-david-portrait.webp";
import { aboutContent } from "../../data/siteContent";
import { socialLinks } from "../../data/socialLinks";
import { getIcon } from "../../utils/iconMap";
import "./AboutContact.css";

function AboutContact() {
  return (
    <section className="about-contact section" id="sobre-mi">
      <div className="container about-contact__inner">
        <div className="about-contact__content">
          <div className="about-contact__card">
            <Badge variant="accent">{aboutContent.eyebrow}</Badge>
            <div className="about-contact__profile">
              <img src={portraitImage} alt={aboutContent.portraitAlt} loading="lazy" />
              <div>
                <h2>{aboutContent.name}</h2>
                <span className="about-contact__role">{aboutContent.role}</span>
                <p>{aboutContent.intro}</p>
              </div>
            </div>
            {aboutContent.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}

            <div className="about-contact__socials">
              {socialLinks.map((link) => {
                const Icon = getIcon(link.icon);

                return (
                  <a key={link.id} href={link.href} target="_blank" rel="noreferrer noopener" aria-label={link.label}>
                    <Icon aria-hidden="true" size={16} />
                    <span>{link.label}</span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div id="contacto" className="about-contact__form">
          <ContactForm
            title={aboutContent.formTitle}
            subtitle={aboutContent.formSubtitle}
          />
        </div>
      </div>
    </section>
  );
}

export default AboutContact;
