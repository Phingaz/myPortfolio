import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect } from "react";
import { useRef } from "react";

const Reveal = (props) => {
  const ref = useRef(null);

  const isInView = useInView(ref, { once: false });

  const mainControl = useAnimation();

  useEffect(() => {
    isInView && mainControl.start("visible");
  }, [isInView, mainControl]);

  return (
    <div ref={ref}>
      <motion.div
        variants={{
          hidden: props.reveal
            ? { opacity: 0, y: 13 }
            : props.fadeIn
            ? { opacity: 0 }
              ? props.slideLeft
              : { opacity: 1 }
            : props.slideLeft
            ? { opacity: 0, x: -13 }
            : props.slideRight
            ? { opacity: 0, x: 13 }
            : "",
          visible: props.reveal
            ? { opacity: 1, y: 0 }
            : props.fadeIn
            ? { opacity: 1 }
              ? props.slideLeft
              : { opacity: 1 }
            : props.slideLeft
            ? { opacity: 1, x: 0 }
            : props.slideRight
            ? { opacity: 1, x: 0 }
            : "",
        }}
        initial="hidden"
        animate={props.once && mainControl}
        whileInView={props.always && "visible"}
        transition={{
          duration: props.duration ? props.duration : 0.5,
          delay: props.delay,
        }}
      >
        {props.children}
      </motion.div>
    </div>
  );
};

export { Reveal };
