import {motion, PanInfo, useMotionValue, useTransform} from "framer-motion";
import {useState} from "react";
import {CardItem} from "./CardItem/CardItem";
import {images} from "./image-data";
import "./carousel.css";

export const Carousel = () => {
  const [activeIndex, setActive] = useState(2);
  const [isCollapse, setIsCollapse] = useState(true);

  const onDrag = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    if (Math.abs(info.offset.x) > 130) {
      if (info.offset.x < 0) {
        activeIndex > 0 && setActive(activeIndex - 2)
        if (isCollapse) {
          setIsCollapse(false);
        }
      } else {
        activeIndex < images.length - 1 && setActive(activeIndex + 2)
        if (isCollapse) {
          setIsCollapse(false);
        }
      }
    }
  }

  const x = useMotionValue(0);

  let backgroundColor = useTransform(x, [-100, 0, 100], ['#474747', '#ffffff', '#474747']);

  const cardWidth = 402;
  const halfWidthOfActiveCard = 221;
  const cardMargin = 40;

  const activeCarousel = (index: number) => {
    setActive(index);
    setIsCollapse(false);
  }

  const closeCarousel = () => {
    setIsCollapse(true)
  }

  const carouselVariants = {
    animate: {
      x: -activeIndex * cardWidth - halfWidthOfActiveCard - activeIndex * cardMargin * 2 - cardMargin / 2,
      transition: {
        easy: 'linear',
        duration: 1,
        delay: 0.5,
      }
    },
  }

  return (
    <>
      <>
        <div className="left_container"/>
        <div className="right_container">
          <motion.div
            className="carousel"
            variants={carouselVariants}
            animate="animate"
          >
            {images.map((item, index) => (
              <CardItem
                key={item.brand}
                item={item}
                isSelected={activeIndex === index}
                handleClick={() => activeCarousel(index)}
                isCollapse={isCollapse}
                closeCarousel={closeCarousel}
              />
            ))}
          </motion.div>
        </div>
      </>
      <div>
      </div>
      <motion.div
        className="switcher"
        style={{
          x, backgroundColor,
        }}
        drag="x"
        onDragEnd={onDrag}
        dragMomentum={false}
        dragConstraints={{left: 0, right: 0}}
        dragElastic={0.5}
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
