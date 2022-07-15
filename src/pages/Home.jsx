import React from "react";
import About from "../components/about/About";
import Contact from "../components/contact/Contact";
import TimeLine from "../components/experience/TimeLine";
import Footer from "../components/footer/Footer";
import Intro from "../components/intro/Intro";
import Navbar from "../components/navbar/Navbar";
import ProductList from "../components/productList/ProductList";
import Skills from "../components/skills/Skills";

const Home = () => {
  return (
    <>
      <Navbar />
      <Intro />
      <About />
      <Skills />
      <TimeLine />
      <ProductList />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
