import {motion, useMotionValue, useTransform} from "framer-motion";
import {useState} from "react";
import {CardItem} from "./CardItem/CardItem";
import {images} from "./image-data";
import "./carousel.css";

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

  let backgroundColor = useTransform(x, [-100, 0, 100], ['#474747', '#ffffff', '#474747']);

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
        className="carousel"
        style={{
          x, backgroundColor,
        }}
        drag="x"
        onDrag={onDrag}
        onDragEnd={onDragEnd}
        dragMomentum={false}
        dragConstraints={{left: 0, right: 0}}
        dragElastic={0.7}
      >
        <div className="dot">
          <div className="arrow_right">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24">
              <path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z"/>
            </svg>
          </div>
          <div className="arrow_left">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24">
              <path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z"/>
            </svg>
          </div>
        </div>
      </motion.div>
      <div className="line"/>
    </>
  )
}
