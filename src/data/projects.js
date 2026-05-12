import bankingMockup from "../assets/mockups/sistema-bancario-demo.png";
import bookingMockup from "../assets/mockups/sistema-turnos.png";
import ecommerceMockup from "../assets/mockups/ecommerce-demo.png";

export const projects = [
  {
    id: "sistema-bancario-demo",
    title: "Sistema Bancario Demo",
    description:
      "Interfaz de operaciones bancarias con movimientos, resumen de cuenta y flujos pensados para control financiero.",
    image: bankingMockup,
    technologies: ["React", "JavaScript", "CSS3"],
    type: "Fintech demo",
    links: {
      demo: "#contacto",
      code: "#contacto",
    },
  },
  {
    id: "sistema-turnos",
    title: "Sistema de Turnos",
    description:
      "Gestion de reservas, disponibilidad y administracion de clientes para ordenar la operacion diaria.",
    image: bookingMockup,
    technologies: ["React", "FastAPI", "PostgreSQL"],
    type: "Gestion",
    links: {
      demo: "#contacto",
      code: "#contacto",
    },
  },
  {
    id: "ecommerce-demo",
    title: "E-commerce Demo",
    description:
      "Catalogo, detalle de productos y experiencia de compra responsive para validar tiendas digitales.",
    image: ecommerceMockup,
    technologies: ["Vite", "React", "MongoDB"],
    type: "Comercio digital",
    links: {
      demo: "#contacto",
      code: "#contacto",
    },
  },
];
