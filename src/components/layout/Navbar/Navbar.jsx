import React from "react";
import { Menu, Send, X } from "lucide-react";
import { useState } from "react";
import Button from "../../common/Button";
import "./Navbar.css";

const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Tecnologias", href: "#tecnologias" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Proceso", href: "#proceso" },
  { label: "Sobre mi", href: "#sobre-mi" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="navbar">
      <a className="navbar__brand" href="#inicio" onClick={closeMenu} aria-label="Ir al inicio">
        <span className="navbar__mark">JD</span>
        <span className="navbar__brand-text">
          <strong>Juan David</strong>
          <small>Desarrollador Full Stack</small>
        </span>
      </a>

      <nav className={`navbar__links ${isOpen ? "navbar__links--open" : ""}`} aria-label="Navegacion principal">
        {navLinks.map((link) => (
          <a key={link.href} href={link.href} onClick={closeMenu}>
            {link.label}
          </a>
        ))}
      </nav>

      <div className="navbar__actions">
        <Button href="#contacto" variant="secondary" size="sm" icon={Send}>
          Hablemos
        </Button>
        <button
          className="navbar__toggle"
          type="button"
          aria-label={isOpen ? "Cerrar menu" : "Abrir menu"}
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
