import { useContext } from "react";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import TimeLine from "./components/experience/TimeLine";
import Footer from "./components/footer/Footer";
import Intro from "./components/intro/Intro";
import Navbar from "./components/navbar/Navbar";
import ProductList from "./components/productList/ProductList";
import Skills from "./components/skills/Skills";
import { ThemeContext } from "./context";

const App = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      style={{
        backgroundColor: darkMode ? "#222" : "white",
        color: darkMode && "white",
      }}
    >
      <Navbar />
      <Intro />
      <About />
      <Skills />
      <TimeLine />
      <ProductList />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
