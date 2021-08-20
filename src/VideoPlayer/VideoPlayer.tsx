import "./videoPlayer.css";
import {motion} from "framer-motion";

type PropsType = {
  videoUrl?: string
}

export const VideoPlayer = (props: PropsType) => {
  const playerVariants = {
    hidden: {
      scale: 0,
      y: -250,
      opacity: 0,
      transition: {
        delay: 0.5
      }
    },
    visible: {
      scale: 1,
      y: 0,
      opacity: 1,
      transition: {
        easy: 'linear',
        duration: 1.5,
      }
    }
  }

  return (
    <>
      <motion.video
        className="card_video"
        width="402" height="605" controls autoPlay muted
        variants={playerVariants}
        initial="hidden"
        animate="visible"
        exit="hidden">
        <source
          src={props.videoUrl}
          type="video/mp4"/>
        Your browser does not support the video tag.
      </motion.video>
    </>
  )
}
