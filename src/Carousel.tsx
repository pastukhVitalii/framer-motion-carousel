import {motion, useMotionValue, useTransform} from "framer-motion";
import * as React from "react";
import {useState} from "react";
import {CardItem} from "./CardItem/CardItem";
import {images} from "./image-data";

export const Carousel = () => {

  const [activeIndex, setActive] = useState(2);
  const [sec, setSec] = useState(0);
  const [isDrag, setIsDrag] = useState(false);
  const [isColaps, setIsColaps] = useState(true);

  const onDrag = async (event: any, info: any) => {

    if (Math.abs(info.offset.x) > 130) {
      setTimeout(() => {
        if (info.offset.x < 0) {
          activeIndex > 0 && setActive(activeIndex - 1)
          if (isColaps) {
            setIsColaps(false);
          }
        } else {
          activeIndex < images.length - 1 && setActive(activeIndex + 1)
          if (isColaps) {
            setIsColaps(false);
          }
        }
      }, 1000)
    }
  }

  const x = useMotionValue(0);

  let backgroundColor = useTransform(x, [-100, 0, 100], ['#1a6ec7', '#f4fa3c', '#1a6ec7']);

  const onDragEnd = () => {
    setIsDrag(false);
  }

  const cardWidth = 402;
  const halfWidthOfActiveCard = 221;
  const cardMargin = 40;

  const activeCarousel = (index: number) => {
    setActive(index);
    setIsColaps(false);
  }

  const closeCarousel = () => {
    setIsColaps(true)
  }

  return (
    <>
      <div>
        <div style={{position: 'absolute', left: '0', top: '0', width: '50%'}}/>
        <div style={{position: 'absolute', right: '0', top: '25%', width: '50%'}}>
          <motion.div
            style={{
              display: "flex",
              width: "fit-content",
              justifyContent: "space-between",
            }}
            animate={{x: -activeIndex * cardWidth - halfWidthOfActiveCard - activeIndex * cardMargin * 2 - cardMargin / 2,}}
            transition={{
              easy: 'linear',
              duration: 1,
              delay: 0.5,
            }}
          >
            {images.map((item, index) => (
              <CardItem
                key={item.brand}
                item={item}
                isSelected={activeIndex === index}
                handleClick={() => activeCarousel(index)}
                isColaps={isColaps}
                closeCarousel={closeCarousel}
              />
            ))}
          </motion.div>
        </div>
      </div>
      <div>
      </div>
      <motion.div
        style={{
          x, backgroundColor,
          width: '80px',
          height: '80px',
          zIndex: 20,
          borderRadius: '50%',
          margin: '0 auto',
          position: 'absolute',
          left: 'calc(50% - 40px)',
          bottom: '20px',
        }}
        drag="x"
        onDrag={onDrag}
        onDragEnd={onDragEnd}
        // onDragStart={onDragStart}
        // @ts-ignore
        // whileDrag={whileDrag}
        dragMomentum={false}
        dragConstraints={{left: 0, right: 0}}
        dragElastic={0.7}
      />
    </>
  )
}
