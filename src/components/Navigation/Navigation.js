import React, {useState} from "react";
import { motion, useViewportScroll } from "framer-motion";
import { ImGithub } from "react-icons/im";
import { ImLinkedin } from "react-icons/im";
import { Link } from "react-scroll";
import "./Navigation.css";

const Button = ({ label, id }) => {
  return (
    <Link
      activeClass="nav-button-clicked"
      className="nav-button-unclicked"
      to={id}
      spy={true}
      smooth={true}
      duration={500}
    >
      {label}
    </Link>
  );
};

const Bar = ({ name, sections, links }) => {
  return (
    <motion.nav>
      <Name name={name} />
      <motion.div className="nav-sections">
        {sections.map((sect) => (
          <Button label={sect.title} key={sect.id} id={sect.id} />
        ))}
      </motion.div>
      <SocialMediaLinks github={links.github} linkedin={links.linkedin} />
      <ProgressBar />
    </motion.nav>
  );
};

// website logo.
const Name = ({ name }) => {
  const [isHovered, setHovered] = useState(false);
  return (
    <motion.h1
      className="nav-logo"
      whileHover={{ transform: "translate(-5px,-5px)" }}
    >
      {name.normal}
      <motion.div
        style={{ transformOrigin: "5px 7px", marginLeft: "3px" }}
        whileHover={{ scale: 1.7, rotate: 5, color: "#38B2AC" }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {!isHovered ? `${name.animated}` : `${name.animated}!`}
      </motion.div>
    </motion.h1>
  );
};

// links to socialmedia.
const SocialMediaLinks = ({ github, linkedin }) => {
  return (
    <motion.div className="social-link-wrapper">
      <motion.a
        className="social-link"
        href={github}
        whileHover={{ scale: 1.15, opacity: 1 }}
      >
        <ImGithub />
      </motion.a>
      <motion.a
        className="social-link"
        href={linkedin}
        whileHover={{ scale: 1.15, opacity: 1 }}
      >
        <ImLinkedin />
      </motion.a>
    </motion.div>
  );
};

const ProgressBar = () => {
  return (
    <motion.div
      className="nav-progress-bar"
      style={{ scaleX: useViewportScroll().scrollYProgress }}
    ></motion.div>
  );
};
export const Navigation = {
  Bar,
};
