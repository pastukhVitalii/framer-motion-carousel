import "./price.css";
import {LegacyRef, RefObject, useEffect, useRef} from "react";
import {animate} from "framer-motion";

export const Price = (props: any) => {

  const nodeRef = useRef();

  const {from, to} = props;
  useEffect(() => {
    const node = nodeRef.current;

    const controls = animate(from, to, {
      duration: 2,
      delay: 1,
      onUpdate(value) {
        // @ts-ignore
        node.textContent = value.toFixed(2);
      }
    });

    return () => controls.stop();
  }, [from, to]);

  // @ts-ignore
  return <div className="price">$<p ref={nodeRef}/></div>;
}