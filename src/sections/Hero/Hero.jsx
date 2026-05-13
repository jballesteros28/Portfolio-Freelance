import React from "react";
import { ArrowRight, MessageCircle, Sparkles } from "lucide-react";
import Button from "../../components/common/Button";
import Badge from "../../components/common/Badge";
import heroVisual from "../../assets/images/hero-dashboard.png";
import { socialLinks } from "../../data/socialLinks";
import { heroContent } from "../../data/siteContent";
import { getIcon } from "../../utils/iconMap";
import "./Hero.css";

function Hero() {
  const whatsappLink = socialLinks.find((link) => link.id === "whatsapp")?.href || "#contacto";

  return (
    <section className="hero section" id="inicio">
      <div className="hero__background" aria-hidden="true">
        <img src={heroVisual} alt="" />
      </div>

      <div className="hero__inner">
        <div className="hero__content animate-in">
          <Badge variant="accent" className="hero__badge">
            <Sparkles aria-hidden="true" size={16} />
            {heroContent.badge}
          </Badge>
          <h1>{heroContent.title}</h1>
          <p>{heroContent.subtitle}</p>
          <div className="hero__actions">
            <Button href="#proyectos" size="lg" icon={ArrowRight}>
              {heroContent.primaryCta}
            </Button>
            <Button href={whatsappLink} size="lg" variant="secondary" icon={MessageCircle}>
              {heroContent.secondaryCta}
            </Button>
          </div>
          <div className="hero__metrics" aria-label={heroContent.metricsLabel}>
            {heroContent.metrics.map((metric) => {
              const Icon = getIcon(metric.icon);

              return (
                <span key={metric.id}>
                  <Icon aria-hidden="true" size={22} />
                  <strong>{metric.value}</strong>
                  {metric.label}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
