import {motion} from "framer-motion";
import * as React from "react";
import "./octagon.css";

export const Octagon = () => {

  return (
    <motion.div
      className="octagon"
      initial={{
        scale: 0,
      }}
      animate={{
        scale: 1,
      }}
      exit={{
        scale: 0,
      }}
      transition={{
        delay: 1
      }}>
      <p>buy</p>
      <motion.svg
        xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
        initial={{
          scale: 3
        }}
        animate={{
          rotate: 180,
          scale: 3,
        }}
        transition={{
          repeat: Infinity,
          duration: 4,
          ease: "linear",
        }}>
        <path d="M24 16.971l-7.029 7.029h-9.942l-7.029-7.029v-9.942l7.029-7.029h9.942l7.029 7.029z"/>
      </motion.svg>

    </motion.div>
  );
}