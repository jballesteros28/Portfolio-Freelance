import React from "react";
import { ArrowRight, Clock3, Headphones, MessageCircle, Rocket, ShieldCheck, Sparkles } from "lucide-react";
import Button from "../../components/common/Button";
import Badge from "../../components/common/Badge";
import heroVisual from "../../assets/images/hero-dashboard.png";
import { socialLinks } from "../../data/socialLinks";
import "./Hero.css";

function Hero() {
  const whatsappLink = socialLinks.find((link) => link.id === "whatsapp")?.href || "#contacto";

  return (
    <section className="hero section" id="inicio">
      <div className="hero__inner">
        <div className="hero__content animate-in">
          <Badge variant="accent" className="hero__badge">
            <Sparkles aria-hidden="true" size={16} />
            Desarrollo web & sistemas
          </Badge>
          <h1>Transformo ideas en soluciones digitales que impulsan negocios</h1>
          <p>
            Desarrollo sitios web, sistemas y aplicaciones modernas que optimizan procesos, mejoran la experiencia y
            generan resultados.
          </p>
          <div className="hero__actions">
            <Button href="#proyectos" size="lg" icon={ArrowRight}>
              Ver proyectos
            </Button>
            <Button href={whatsappLink} size="lg" variant="secondary" icon={MessageCircle}>
              Hablemos por WhatsApp
            </Button>
          </div>
          <div className="hero__metrics" aria-label="Resumen de experiencia">
            <span>
              <Rocket aria-hidden="true" size={22} />
              <strong>+5</strong>
              Proyectos completados
            </span>
            <span>
              <ShieldCheck aria-hidden="true" size={22} />
              <strong>100%</strong>
              Compromiso
            </span>
            <span>
              <Clock3 aria-hidden="true" size={22} />
              <strong>2+</strong>
              Anos de experiencia
            </span>
            <span>
              <Headphones aria-hidden="true" size={22} />
              <strong>Soporte</strong>
              Post-entrega
            </span>
          </div>
        </div>

        <div className="hero__visual animate-in animate-in--delay">
          <img src={heroVisual} alt="Dashboard oscuro con metricas y modulos de sistema digital" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
