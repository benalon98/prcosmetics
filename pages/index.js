import dynamic from "next/dynamic";
import { useEffect } from "react";
import About from "../src/components/About";
import Contact from "../src/components/Contact";
import Home from "../src/components/Home";
import News from "../src/components/News";
import Header from "../src/layout/Header";
import Layout from "../src/layout/Layout";
import MobileMenu from "../src/layout/MobileMenu";
import Mouse from "../src/layout/Mouse";
import PogressBar from "../src/layout/PogressBar";
import { activeSkillProgress } from "../src/utilits";
const Portfolio = dynamic(() => import("../src/components/Portfolio"), {
  ssr: false,
});

const Index = () => {
  useEffect(() => {
    window.addEventListener("scroll", activeSkillProgress);
  }, []);

  return (
    <Layout>
      <MobileMenu />
      <Header />
      <Home />
      {/* /HERO */}
      {/* ABOUT */}
      <About />
      {/* /ABOUT */}
      {/* SERVICE */}
      <News />
      {/* /SERVICE */}
      {/* PORTFOLIO */}
      <Portfolio />
      {/* /PORTFOLIO */}

      <Contact />
      <Mouse />
      <PogressBar />
    </Layout>
  );
};
export default Index;
