import { motion } from "framer-motion";
import React from "react";
import Obfuscate from "react-obfuscate";
import "./Footer.css";

export const Footer = () => {
  return (
    <motion.footer>
    <motion.div className="footer-padder"/>
      <motion.div>Une opportunité à proposer ?</motion.div>
      <motion.div className="dont-hesitate">
        <motion.div>
          <Obfuscate
            email="anas.rachyd@protonmail.com"
            headers={{
              subject: "Une nouvelle opportunité",
            }}
          >
            N'hésitez pas !
          </Obfuscate>
        </motion.div>
      </motion.div>
    </motion.footer>
  );
};
