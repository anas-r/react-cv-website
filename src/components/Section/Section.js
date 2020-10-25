import { motion } from "framer-motion";
import React from "react";
import { Entry } from "./Entry";
import VisibilitySensor from "react-visibility-sensor";
import "./Section.css";

export const Section = ({ data, onChangeSection }) => {
  return (
    <VisibilitySensor onChange={(isVisible) => {isVisible && onChangeSection(data.id)}}>
      <motion.section className="cv-section" id={data.id}>
        <motion.header
          className="cv-section-title"
          whileHover={{
            transform: "translateX(-15px)",
            backgroundSize: "-100%",
          }}
        >
          {data.title}
        </motion.header>
        <motion.div>
        {data.entries
          ? data.entries.map((entry,i) => <Entry entryInfo={entry} key={i} id={data.id+i}/>)
          : ""}
          </motion.div>
      </motion.section>
    </VisibilitySensor>
  );
};
