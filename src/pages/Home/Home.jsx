import React from "react";
import Footer from "../../components/layout/Footer";
import Navbar from "../../components/layout/Navbar";
import AboutContact from "../../sections/AboutContact/AboutContact.jsx";
import Hero from "../../sections/Hero/Hero.jsx";
import Problems from "../../sections/Problems/Problems.jsx";
import Process from "../../sections/Process/Process.jsx";
import Projects from "../../sections/Projects/Projects.jsx";
import QuickContact from "../../sections/QuickContact/QuickContact.jsx";
import Services from "../../sections/Services/Services.jsx";
import Technologies from "../../sections/Technologies/Technologies.jsx";
import "./Home.css";

function Home() {
  return (
    <>
      <Navbar />
      <main className="home">
        <Hero />
        <Services />
        <Technologies />
        <Problems />
        <QuickContact />
        <Projects />
        <Process />
        <AboutContact />
      </main>
      <Footer />
    </>
  );
}

export default Home;
