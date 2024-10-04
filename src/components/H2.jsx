/* eslint-disable react/prop-types */

import { RxDragHandleVertical } from "react-icons/rx";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

// For language switching

const HeadingComponent = ({ headingKey, paragraphKey }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 1], [-190, 0]); // Comes from left
  const opacity = useTransform(scrollYProgress, [0, 0.6], [0, 1]); // Fades in
  return (
    <motion.div
      ref={ref}
      className="w-[60%] py-4 mx-auto mb-3"
      style={{ x, opacity }}
    >
      <div className="hidden lg:flex items-center ">
        {/* Left Icon */}
        <div className="flex justify-center gap-0 ">
          <RxDragHandleVertical className="text-2xl  text-[#F4D70F]" />
        </div>

        {/* Main Heading */}
        <div className="">
          <h1 className="text-3xl font-bold text-white font-serif">
            {headingKey}
          </h1>
        </div>

        {/* Paragraph/Description */}
        <div className="flex-shrink-0 mt-3  ml-2">
          <p className="text-sm text-white">{paragraphKey}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default HeadingComponent;
