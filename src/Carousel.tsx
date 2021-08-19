import {motion, PanInfo, useMotionValue, useTransform} from "framer-motion";
import {useEffect, useState} from "react";
import {CardItem} from "./components/CardItem/CardItem";
import {images} from "./image-data";
import "./carousel.css";
import {useWindowWidth} from "@react-hook/window-size";

export const Carousel = () => {
  const width = useWindowWidth();
  const isMobile = width <= 500;
  const [activeIndex, setActive] = useState(2);
  const [isCollapse, setIsCollapse] = useState(true);

  useEffect(() => {
    if (isMobile) setIsCollapse(false)
  })
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

  const cardWidth = isMobile ? 302 : 402;
  const halfWidthOfActiveCard = isMobile ? 171 : 221;
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
        <div className="right_container">
          <motion.div
            className="carousel"
            variants={carouselVariants}
            animate="animate"
            drag='x'
            dragConstraints={{left: -((images.length + 1) * (cardWidth + cardMargin)), right: 0}}
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

      <div className="next" onClick={() => activeIndex < images.length - 1 && setActive(activeIndex + 1) }>
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24">
          <path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z"/>
        </svg>
      </div>
      <div className="prev" onClick={() => activeIndex > 0 && setActive(activeIndex - 1)}>
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24">
          <path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z"/>
        </svg>
      </div>
    </>
  )
}
