import { motion } from "framer-motion";
import React from "react";
import { Entry } from "./Entry";
import {
  Element,
} from "react-scroll";
import "./Section.css";

export const Section = ({ data }) => {
  return (
      <Element className="cv-section" id={data.id}>
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
      </Element>
  );
};
