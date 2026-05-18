import bankingMockup from "../assets/mockups/wallet-saas.webp";
import bookingMockup from "../assets/mockups/sistema-turnos.webp";
import ecommerceMockup from "../assets/mockups/ecommerce-demo.webp";

export const projects = [
  {
    id: "Loyalty Wallet SaaS",
    title: "Loyalty Wallet SaaS",
    description:
      "Solución SaaS para programas de fidelización y créditos internos, diseñada para automatizar recompensas, movimientos y operaciones ecommerce.",
    image: bankingMockup,
    technologies: ["React", "FastAPI", "PostgreSQL","Docker"],
    type: "wallet / saas",
    links: {
      demo: "https://wallet-saas-gxh7.vercel.app/",
      code: "https://github.com/jballesteros28/wallet-saas",
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
    technologies: ["Python", "Django", "CSS","PostgreSQL"],
    type: "Comercio digital",
    links: {
      demo: "https://e-commerce-django-gbcs.onrender.com/",
      code: "https://github.com/jballesteros28/E-commerce-django",
    },
  },
  // {
  //   id: "todo-list-demo",
  //   title: "Tienda Online Demo",
  //   description:
  //     "Experiencia de compra responsive para mostrar productos, ordenar el catálogo y facilitar el camino hacia la venta.",
  //   image: ecommerceMockup,
  //   technologies: ["Python", "FastAPI", "React", "Vite","CSS","PostgreSQL"],
  //   type: "Comercio digital",
  //   links: {
  //     demo: "https://my-list-to-do-eight.vercel.app/login",
  //     code: "https://github.com/jballesteros28/My-List-To-Do",
  //   },
  // },
];
