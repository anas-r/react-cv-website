import { motion } from "framer-motion";
import React from "react";
import MyIMG from "../../me.png";
import "./Introduction.css";

export const Introduction = () => {
  return (
    <motion.div className="introduction">
      <img src={MyIMG} alt="Mon portfolio" height="250px" width="250px"/>
      <motion.section>
        <motion.header whileHover={{transform: "translateX(-15px)", backgroundSize: "-100%"}}>Bonjour</motion.header>
        <motion.p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Risus viverra
        adipiscing at in tellus integer. Vitae tempus quam pellentesque nec nam
        aliquam sem et tortor. Mauris pellentesque pulvinar pellentesque
        habitant morbi tristique senectus. Nullam non nisi est sit amet
        facilisis magna etiam. Nulla facilisi nullam vehicula ipsum a arcu
        cursus vitae. Leo vel fringilla est ullamcorper eget nulla facilisi
        etiam. Facilisis gravida neque convallis a. Lacinia quis vel eros donec
        ac odio. Tincidunt dui ut ornare lectus sit amet. Volutpat odio
        facilisis mauris sit. Convallis posuere morbi leo urna. Amet nisl
        suscipit adipiscing bibendum est. Consectetur a erat nam at lectus urna
        duis convallis. Pretium viverra suspendisse potenti nullam ac tortor
        vitae purus. Justo eget magna fermentum iaculis eu non diam. Ut enim
        blandit volutpat maecenas.
        </motion.p>
      </motion.section>
    </motion.div>
  );
};
