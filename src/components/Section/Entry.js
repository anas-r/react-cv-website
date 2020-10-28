import { motion } from "framer-motion";
import React, { useState } from "react";
import {FiChevronsDown, FiChevronsUp} from "react-icons/fi"
import "./Entry.css";
import "./EntrySpecial.css";

export const Entry = ({ entryInfo, id }) => {
  const [collapsed, setCollapsed] = useState(true);
  return (
    <motion.div
      className="entry-card"
      id={id}
      whileHover={{ transform: "translateY(-3px)" }}
    >
      {(entryInfo.title || entryInfo.description) && (
        <motion.div className="entry-card-main">
          {entryInfo.title && (
            <motion.div className="entry-title">
              <motion.h3 className="entry-title-title">
                {entryInfo.title}
              </motion.h3>
              <motion.button
                className="entry-title-collapse"
                onClick={() => setCollapsed(!collapsed)}
              >
                {collapsed ? (<FiChevronsDown />) : (<FiChevronsUp />)}
              </motion.button>
            </motion.div>
          )}
          {entryInfo.description && !collapsed && (
            <motion.p className="entry-description" initial = {{scaleY: 0}} animate={{scaleY: 1}}>
              {entryInfo.description}
            </motion.p>
          )}
        </motion.div>
      )}
      <motion.ul className="entry-card-more">
        <motion.li className="entry-card-est">
          {entryInfo.establishment}
        </motion.li>
        {entryInfo.location && (
          <motion.li className="entry-card-loc">{entryInfo.location}</motion.li>
        )}
        {entryInfo.date && (
          <motion.li className="entry-card-date">
            {entryInfo.date[0]} &#8212; {entryInfo.date[1]}
          </motion.li>
        )}
        <motion.li>
          {entryInfo.keywords &&
            entryInfo.keywords.map((kw, i) => <Keyword name={kw} key={i} />)}
        </motion.li>
      </motion.ul>
    </motion.div>
  );
};

const Keyword = ({ name }) => (
  <motion.div className="entry-card-kw">
    <motion.span className="entry-card-kw-label">{name}</motion.span>
  </motion.div>
);
