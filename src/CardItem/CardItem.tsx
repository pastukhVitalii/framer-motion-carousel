import {AnimatePresence, motion} from "framer-motion";
import * as React from "react";
import "./cardItem.css";
import {Octagon} from "../Octagon/Octagon";

export const CardItem = (props: any) => {

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
        }}
        animate={{
          height: isColaps ? '500px' : isSelected ? "600px" : '500px',
          scaleX: isColaps ? 1 : isSelected ? 1.1 : 1,
          y: isColaps ? 0 : isSelected ? -50 : 0,
        }}
        transition={{
          easy: 'linear',
          duration: 1.5,
        }}
      >

        {!isColaps && <AnimatePresence>
          {isSelected &&
          <div>
            <motion.button
              className="close_button"
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
              }}
              transition={{
                delay: 1,
              }}
              onClick={closeCarousel}>
              X
            </motion.button>
            <Octagon/>
          </div>
          }
        </AnimatePresence>}

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
          style={{
            width: '350px',
          }}
        />
      </motion.div>
    </>
  )
}