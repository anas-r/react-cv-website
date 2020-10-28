import React from "react";
import { Navigation } from "./components/Navigation/Navigation";
import { sectionsConfig } from "./sections.config";
import { links } from "./links.config";
import { motion } from "framer-motion";
import { Introduction } from './components/Introduction/Introduction'
import { Section } from "./components/Section/Section";
import { Footer } from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navigation.Bar
        name={{ normal: "rachyd", animated: ".works" }}
        animatedName=".works"
        sections={sectionsConfig}
        links={links}
      />
      <motion.main>
        <Introduction />
        {sectionsConfig.map((section) => (
          <>
          <Section data={section} />
          <motion.div className="section-separator" style={{height: "0px"}} />
          </>
        ))}
      </motion.main>
      <Footer />
    </div>
  );
}

export default App;
