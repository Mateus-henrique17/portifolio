import { useState, useEffect } from "react";
import Header from "./components/Header/Header.jsx";
import Hero from "./components/Hero/Hero.jsx";
import About from "./components/About/About.jsx";
import Technologies from "./components/Technologies/Technologies.jsx";
import Projects from "./components/Projects/Projects.jsx";
import ContactForm from "./components/ContactForm/ContactForm.jsx";
import Footer from "./components/Footer/Footer.jsx";

export default function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "dark";
  });

  useEffect(() => {
    if (theme === "light") {
      document.documentElement.setAttribute("data-theme", "light");
    } else {
      document.documentElement.removeAttribute("data-theme");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  return (
    <>
      <Header theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <About />
        <Technologies />
        <Projects theme={theme} />
        <ContactForm />
      </main>
      <Footer /> 
    </>
  );
}
