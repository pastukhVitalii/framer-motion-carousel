import {AnimatePresence, motion} from "framer-motion";
import "./cardItem.css";
import {Octagon} from "../Octagon/Octagon";
import {CardContent} from "../CardContent/CardContent";
import {Top} from "../Top/Top";
import {ProductType} from "../../image-data";
import {VideoPlayer} from "../../VideoPlayer/VideoPlayer";
import playButton from "../../assets/icon/play-button.svg";

type PropsType = {
  item: ProductType
  isSelected: boolean
  handleClick: () => void
  isCollapse: boolean
  closeCarousel: () => void
  isShowVideo: boolean
  setIsShowVideo: (value: boolean) => void
}

export const CardItem = (props: PropsType) => {
  const {item, isSelected, handleClick, isCollapse, closeCarousel, isShowVideo, setIsShowVideo} = props;

  const cardVariants = {
    animate: {
      height: isCollapse ? '500px' : isSelected ? "600px" : '500px',
      scaleX: isCollapse ? 1 : isSelected ? 1.1 : 1,
      y: isCollapse ? 0 : isSelected ? -50 : 0,
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
      scale: isCollapse ? 1 : isSelected ? 1.1 : 1,
      opacity: (isSelected && isShowVideo) ? 0 : 1,
      transition: {
        easy: 'linear',
        duration: 1.5,
      }
    }
  }

  const onClick = () => {
    handleClick();
  }

  const onShowVideo = () => {
    setIsShowVideo(!isShowVideo)
  }

  return (
    <>
      <motion.div
        className="card"
        variants={cardVariants}
        animate="animate"
      >

        {!isCollapse && <AnimatePresence>
          {isSelected &&
          <>
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
              <motion.img
                  className="video_button"
                  src={playButton}
                  variants={variantsActiveElements}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  onClick={onShowVideo}
                  alt="video_button"/>
          </>
          }
        </AnimatePresence>}

        <div className="static_content">
          {item.isTop && <Top isSelected={isSelected} isCollapse={isCollapse}/>}
          <AnimatePresence>
            {!isCollapse && isSelected && isShowVideo &&
            <VideoPlayer videoUrl={item.videoUrl}/>
            }
          </AnimatePresence>
          <motion.img
            className="card_img"
            onClick={onClick}
            variants={imgVariants}
            animate="animate"
            src={item.imageUrl}
          />
        </div>

      </motion.div>
    </>
  )
}