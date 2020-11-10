import { motion, useViewportScroll } from "framer-motion";
import React, {useState, useEffect} from "react";
import MyIMG from "../../me.png";
import "./Introduction.css";

export const Introduction = () => {  
  const {scrollYProgress} = useViewportScroll();
  const [scrolled,setScrolled] = useState(false);
  useEffect(() => scrollYProgress.onChange(latest => {latest > 0.1 ? setScrolled(true) : setScrolled(false)}))
  return (
    <motion.div className="introduction">
      <motion.img
        src={MyIMG}
        className={
          (scrolled
            ? "introduction-img-scrolled"
            : "")
        }
        alt="Mon portfolio"
        height="250px"
        width="250px"
      />
      <motion.section>
        <motion.header
          whileHover={{
            transform: "translateX(-5px)",
            backgroundSize: "-100%",
          }}
        >
          Bonjour
        </motion.header>
        <motion.p style={{ width: "95%" }}>
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
          enjeux d'un monde en transition numérique. À travers ce site web, conçu par moi-même, vous trouverez les grandes lignes de mon parcours.
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
          <Pulse delay={0} scale={0.8} />
        </motion.div>
      </motion.section>
    </motion.div>
  );
};

const Pulse = ({ delay, scale }) => (
  <motion.div
    className="introduction-pulse"
    style={{
      color: "rgba(0,0,0,0)",
      backgroundColor: "#fff",
      position: "absolute",
      top: "-20px",
      zIndex: "-1",
    }}
    animate={{
      scaleX: [1, 1 + scale / 15],
      scaleY: [1, 1 + scale],
      opacity: [0.2, 0],
      filter: ["blur(0)", "blur(5px)"],
    }}
    transition={{
      repeat: Infinity,
      duration: 1.5,
      delay: delay,
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
    À la recherche d'un stage de fin d'études à partir du mois d'avril 2021
  </motion.div>
);
