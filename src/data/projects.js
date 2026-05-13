import bankingMockup from "../assets/mockups/sistema-bancario-demo.png";
import bookingMockup from "../assets/mockups/sistema-turnos.png";
import ecommerceMockup from "../assets/mockups/ecommerce-demo.png";

export const projects = [
  {
    id: "sistema-bancario-demo",
    title: "Panel Financiero Demo",
    description:
      "Aplicación orientada a operaciones, movimientos y resumen de cuenta, pensada para mostrar flujos seguros y control de información.",
    image: bankingMockup,
    technologies: ["React", "FastAPI", "PostgreSQL"],
    type: "Fintech / Operaciones",
    links: {
      demo: "#contacto",
      code: "#contacto",
    },
  },
  {
    id: "sistema-turnos",
    title: "Sistema de Turnos",
    description:
      "Plataforma para organizar reservas, disponibilidad, clientes y sucursales desde un panel simple de administración.",
    image: bookingMockup,
    technologies: ["React", "FastAPI", "PostgreSQL"],
    type: "Gestión operativa",
    links: {
      demo: "#contacto",
      code: "#contacto",
    },
  },
  {
    id: "ecommerce-demo",
    title: "Tienda Online Demo",
    description:
      "Experiencia de compra responsive para mostrar productos, ordenar el catálogo y facilitar el camino hacia la venta.",
    image: ecommerceMockup,
    technologies: ["React", "Vite", "MongoDB"],
    type: "Comercio digital",
    links: {
      demo: "#contacto",
      code: "#contacto",
    },
  },
];
