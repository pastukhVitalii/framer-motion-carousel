import {motion} from "framer-motion";
import "./octagon.css";

export const Octagon = () => {
  const variantsContainer = {
    hidden: {
      scale: 0,
      transition: {
        delay: 0.5,
      }
    },
    visible: {
      scale: 1,
      transition: {
        delay: 1,
      }
    },
  }
  const variants = {
    initial: {
      scale: 3,
    },
    rotate: {
      rotate: 360,
      scale: 3,
      transition: {
        repeat: Infinity,
        duration: 4,
        ease: "linear",
      }
    }
  }

  return (
    <motion.div
      className="octagon"
      variants={variantsContainer}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      <p>buy</p>
      <motion.svg
        xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
        variants={variants}
        initial="initial"
        animate="rotate"
      >
        <path d="M24 16.971l-7.029 7.029h-9.942l-7.029-7.029v-9.942l7.029-7.029h9.942l7.029 7.029z"/>
      </motion.svg>
    </motion.div>
  )
}
