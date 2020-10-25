import React, {useState} from "react";
import { Navigation } from "./components/Navigation/Navigation";
import { sectionsConfig } from "./sections.config";
import { links } from "./links.config";
import { motion } from "framer-motion";
import { Introduction } from './components/Introduction/Introduction'
import { Section } from "./components/Section/Section";
import { Footer } from "./components/Footer/Footer";


const styleTest = {
  display:"grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gridTemplateRows: "auto",
}

function App() {
  let visibleSections = []
  const setSection = (id) => {
    visibleSections.push(id)
    visibleSections = visibleSections.sort()
    setCurrentSection(visibleSections[0])
    visibleSections = []
  }
  const [currentSection, setCurrentSection] = useState("000")
  return (
    <div className="App">
      <Navigation.Bar
        name={{ normal: "rachyd", animated: ".works" }}
        animatedName=".works"
        sections={sectionsConfig}
        links={links}
        currentSection={currentSection}
        onChangeSection={setCurrentSection}
      />
      <motion.main>
        <Introduction />
        <Section data={sectionsConfig[0]} onChangeSection={setSection}/>
        <Section data={sectionsConfig[1]} onChangeSection={setSection}/>
        <Section data={sectionsConfig[2]} onChangeSection={setSection} style={styleTest}/>
        <Section data={sectionsConfig[3]} onChangeSection={setSection}/>
        <Section data={sectionsConfig[4]} onChangeSection={setSection}/>
        <Section data={sectionsConfig[5]} onChangeSection={setSection}/>
      </motion.main>
      <Footer />
    </div>
  );
}

export default App;
