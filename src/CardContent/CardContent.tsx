import {motion} from "framer-motion";
import "./cardContent.css";
import {Price} from "../Price/Price";

export const CardContent = (props: any) => {
  return (
    <motion.div
      className="content"
      initial={{
        opacity: 0,
        y: 100,
      }}
      animate={{
        opacity: 1,
        y: 225
      }}
      exit={{
        opacity: 0,
        y: 100,
      }}
      transition={{
        easy: "linear",
        delay: 1,
      }}>
      {props.brand}
      <Price from={0} to={props.price}/>
    </motion.div>
  );
}