import { motion } from "framer-motion";
import React from "react";
import MyIMG from "../../me.png";
import "./Introduction.css";

export const Introduction = () => {
  return (
    <motion.div className="introduction">
      <img src={MyIMG} alt="Mon portfolio" height="250px" width="250px" />
      <motion.section>
        <motion.header
          whileHover={{
            transform: "translateX(-5px)",
            backgroundSize: "-100%",
          }}
        >
          Bonjour
        </motion.header>
        <motion.p style={{ width: "90%" }}>
          Je suis{" "}
          <motion.span style={{ fontWeight: "900" }}>Anas Rachyd</motion.span>,
          étudiant en dernière année de formation à{" "}
          <motion.span style={{ fontWeight: "900" }}>
            l'École des Mines de Saint-Étienne
          </motion.span>
          , parcours{" "}
          <motion.span style={{ fontWeight: "900" }}>
            &laquo; Ingénieur Civil des Mines &raquo;
          </motion.span>{" "}
          (BAC+5). De l'intelligence artificielle à la science de données, je
          suis largement sensibilisé aux métiers du digital pour faire face aux
          enjeux d'un monde en transition numérique. Sur ce site web, conçu à
          100% par moi, vous trouverez les grandes lignes de mon parcours.
        </motion.p>
        <motion.p style={{ marginTop: "5px" }}>Bonne visite !</motion.p>
        <motion.div
          className="introduction-container"
          style={{ position: "relative", transform: "translateX(-25px)" }}
        >
          <motion.div className="introduction-status">
            <motion.span
              style={{
                textTransform: "uppercase",
                fontWeight: "700",
                fontSize: "0.9rem",
                margin: "0 5px",
              }}
            >
              actuellement:
            </motion.span>
            À la recherche d'un stage de fin d'études à partir du mois d'avril
            2021
          </motion.div>
          <motion.div
            className="introduction-pulse"
            style={{
              color: "rgba(0,0,0,0)",
              backgroundColor: "#fff",
              position: "absolute",
              top: "-10px",
              zIndex: "-1",
            }}

            animate={{
              scaleY: [1,1.65,1],
              scaleX: [1,1.04,1],
              opacity: [0.15,0,0.15],
              filter: ["blur(0)","blur(2px)","blur(0)"]
            }}

            transition= {{
              repeat: Infinity,
              duration: 2.5
            }}
          >
            <motion.span
              style={{
                textTransform: "uppercase",
                fontWeight: "700",
                fontSize: "0.9rem",
                margin: "0 5px",
                color: "rgba(0,0,0,0)",
              }}
            >
              actuellement:
            </motion.span>
            À la recherche d'un stage de fin d'études à partir du mois d'avril
            2021
          </motion.div>
        </motion.div>
      </motion.section>
    </motion.div>
  );
};
