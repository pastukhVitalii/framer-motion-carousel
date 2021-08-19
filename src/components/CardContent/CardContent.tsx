import {motion} from "framer-motion";
import "./cardContent.css";
import {Price} from "../Price/Price";

type PropsType = {
  price: number
  brand: string
}
export const CardContent = (props: PropsType) => {
  const variants = {
    hidden: {
      opacity: 0,
      y: 100,
      transition: {
        easy: "linear",
        delay: 0.5,
      }
    },
    visible: {
      opacity: 1,
      y: 225,
      transition: {
        easy: "linear",
        delay: 1,
      }
    },
  }

  return (
    <motion.div
      className="content"
      variants={variants}
      initial="hidden"
      animate="visible"
      exit="hidden">
      {props.brand}
      <Price from={0} to={props.price}/>
    </motion.div>
  );
}