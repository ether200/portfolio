import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

const FadeInWhenVisible = ({ children, divClass, fadeFrom }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  const getVariant = (direction) => {
    switch (direction) {
      case "right":
        return {
          visible: { x: 0, opacity: 1 },
          hidden: { x: 100, opacity: 0 },
        };
      case "left":
        return {
          visible: { x: 0, opacity: 1 },
          hidden: { x: -100, opacity: 0 },
        };
      case "top":
        return {
          visible: { y: 0, opacity: 1 },
          hidden: { y: -30, opacity: 0 },
        };
      case "bottom":
        return {
          visible: { y: 0, opacity: 1 },
          hidden: { y: 30, opacity: 0 },
        };
      default: {
        return {
          visible: { opacity: 1 },
          hidden: { opacity: 0 },
        };
      }
    }
  };

  const x = fadeFrom === "right" ? 100 : -100;

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      className={divClass || ""}
      ref={ref}
      animate={controls}
      variants={getVariant(fadeFrom)}
      initial="hidden"
      transition={{ duration: 1, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

export default FadeInWhenVisible;
