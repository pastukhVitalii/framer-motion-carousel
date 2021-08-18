import {motion} from "framer-motion";
import "./top.css";

type PropsType = {
  isSelected: boolean
  isColaps: boolean
}

export const Top = (props: PropsType) => {
  const {isSelected, isColaps} = props;

  const variantsContainer = {
    animate: {
      y: isSelected && !isColaps ? -80 : 0,
      transition: {
        duration: 1
      }
    }
  }

  const variants = {
    initial: {
      scale: 3.5
    },
    animate: {
      rotate: -360,
      scale: 3.5,
      transition: {
        repeat: Infinity,
        duration: 4,
        ease: "linear",
      }
    }
  }

  return (
    <motion.div
      className="top"
      variants={variantsContainer}
      animate="animate"
    >
      <p>top</p>
      <motion.svg
        xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="red"
        variants={variants}
        initial="initial"
        animate="animate">
        <path
          d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/>
      </motion.svg>
    </motion.div>
  )
}