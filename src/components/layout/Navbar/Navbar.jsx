import React from "react";
import { Menu, Send, X } from "lucide-react";
import { useState } from "react";
import Button from "../../common/Button";
import logoJD from "../../../assets/icons/favicon.ico";
import { brandContent, navbarContent, navLinks } from "../../../data/siteContent";
import "./Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="navbar">
      <a className="navbar__brand" href="#inicio" onClick={closeMenu} aria-label={navbarContent.brandLabel}>
        <img className="navbar__logo" src={logoJD} alt={brandContent.logoAlt} />
        <span className="navbar__brand-text">
          <strong>{brandContent.name}</strong>
          <small>{brandContent.role}</small>
        </span>
      </a>

      <nav
        className={`navbar__links ${isOpen ? "navbar__links--open" : ""}`}
        aria-label={navbarContent.mainNavigationLabel}
      >
        {navLinks.map((link) => (
          <a key={link.href} href={link.href} onClick={closeMenu}>
            {link.label}
          </a>
        ))}
      </nav>

      <div className="navbar__actions">
        <Button href="#contacto" variant="secondary" size="sm" icon={Send}>
          {navbarContent.cta}
        </Button>
        <button
          className="navbar__toggle"
          type="button"
          aria-label={isOpen ? navbarContent.closeMenuLabel : navbarContent.openMenuLabel}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((current) => !current)}
        >
          {isOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </div>
    </header>
  );
}

export default Navbar;
