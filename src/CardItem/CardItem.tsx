import {motion} from "framer-motion";
import * as React from "react";
import "./cardItem.css";

export const MenuItem = (props: any) => {

  const {item, isSelected, handleClick, isColaps, closeCarousel = Function.prototype} = props;

  const onClick = (e: any) => {
    handleClick();
  }

  return (
    <>
      <motion.div
        className="card"
        style={{
          margin: '0 40px',
          pointerEvents: 'auto',
        }}
        animate={{
          zIndex: isColaps ? 1 : isSelected ? 15 : 1,
          scaleY: isColaps ? 1 : isSelected ? 1.1 : 1,
          scaleX: isColaps ? 1 : isSelected ? 1.1 : 1,
        }}
        transition={{
          easy: 'linear',
          duration: 1.5,
        }}
      >
        {isSelected &&
        <motion.button
          className="red"
          style={{
            width: '40px',
            height: '40px',
            border: "none",
            borderRadius: '50%',
            position: "fixed",
            zIndex: 20,
            left: '-50px',
            top: '-50px',
          }}
          initial={{
            opacity: 0
          }}
          animate={{
            opacity: 1
          }}
          transition={{
            delay: 1
          }}
          onClick={closeCarousel}>
          X
        </motion.button>}
        <motion.img
          onClick={onClick}
          animate={{
            scaleY: isColaps ? 1 : isSelected ? 1.1 : 1,
            scaleX: isColaps ? 1 : isSelected ? 1.1 : 1,
          }}
          transition={{
            easy: 'linear',
            duration: 1.5,
          }}
          src={item}
          width='350px'
        />
      </motion.div>
    </>
  );
}