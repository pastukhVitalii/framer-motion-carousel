import {AnimatePresence, motion} from "framer-motion";
import "./cardItem.css";
import {Octagon} from "../Octagon/Octagon";
import {CardContent} from "../CardContent/CardContent";
import {Top} from "../Top/Top";
import {ProductType} from "../image-data";

type PropsType = {
  item: ProductType
  isSelected: boolean
  handleClick: () => void
  isColaps: boolean
  closeCarousel: () => void
}

export const CardItem = (props: PropsType) => {
  const {item, isSelected, handleClick, isColaps, closeCarousel} = props;

  const cardVariants = {
    animate: {
      height: isColaps ? '500px' : isSelected ? "600px" : '500px',
      scaleX: isColaps ? 1 : isSelected ? 1.1 : 1,
      y: isColaps ? 0 : isSelected ? -50 : 0,
      transition: {
        easy: 'linear',
        duration: 1,
      }
    }
  }

  const variantsActiveElements = {
    hidden: {
      opacity: 0,
      transition: {
        delay: 0.5,
      }
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 1,
      }
    }
  }

  const imgVariants = {
    animate: {
      scale: isColaps ? 1 : isSelected ? 1.1 : 1,
      transition: {
        easy: 'linear',
        duration: 1.5,
      }
    }
  }

  const onClick = (e: any) => {
    handleClick();
  }

  return (
    <>
      <motion.div
        className="card"
        variants={cardVariants}
        animate="animate"
      >

        {!isColaps && <AnimatePresence>
          {isSelected &&
          <div>
            <motion.button
              className="close_button"
              variants={variantsActiveElements}
              initial="hidden"
              animate="visible"
              exit="hidden"
              onClick={closeCarousel}>
              X
            </motion.button>
            <Octagon/>
            <CardContent brand={item.brand} price={item.price}/>
          </div>
          }
        </AnimatePresence>}

        <div className="static_content">
          {item.isTop && <Top isSelected={isSelected} isColaps={isColaps}/>}
          <motion.img
            className="card_img"
            onClick={onClick}
            variants={imgVariants}
            animate="animate"
            src={item.url}
          />
        </div>

      </motion.div>
    </>
  )
}