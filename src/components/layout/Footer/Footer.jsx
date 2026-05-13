import React from "react";
import { MessageCircle } from "lucide-react";
import Button from "../../common/Button";
import { socialLinks } from "../../../data/socialLinks";
import { footerContent, footerLinks } from "../../../data/siteContent";
import logoJD from "../../../assets/icons/favicon.ico";
import { getIcon } from "../../../utils/iconMap";
import "./Footer.css";

function Footer() {
  const whatsappLink = socialLinks.find((link) => link.id === "whatsapp")?.href || "#contacto";

  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__brand">
          <a className="footer__logo" href="#inicio">
            <img className="navbar__logo" src={logoJD} alt="Juan David logo" />
            <strong>Juan David</strong>
          </a>
          <p>{footerContent.description}</p>
        </div>

        <div className="footer__group">
          <h3>Navegacion</h3>
          <nav className="footer__nav" aria-label="Navegacion secundaria">
            {footerLinks.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="footer__group">
          <h3>Recursos</h3>
          <div className="footer__socials">
            {socialLinks.map((link) => {
              const Icon = getIcon(link.icon);

              return (
                <a key={link.id} href={link.href} target="_blank" rel="noreferrer" aria-label={link.label}>
                  <Icon aria-hidden="true" size={15} />
                  <span>{link.label}</span>
                </a>
              );
            })}
          </div>
        </div>

        <div className="footer__cta">
          <h3>{footerContent.ctaTitle}</h3>
          <p>{footerContent.ctaDescription}</p>
          <Button href={whatsappLink} variant="secondary" size="sm" icon={MessageCircle}>
            Hablemos por WhatsApp
          </Button>
        </div>
      </div>
      <div className="footer__copyright">
        <span>Copyright 2026 Juan David. Portfolio freelance.</span>
      </div>
    </footer>
  );
}

export default Footer;
