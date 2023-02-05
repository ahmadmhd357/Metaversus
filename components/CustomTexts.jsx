"use client";
import { motion } from "framer-motion";
import { textContainer, textVariant2 } from "../utils/motion";

export const TypingText = ({ title, textStyles }) => {
  return (
    <motion.p
      variants={textContainer}
      className={`font-normal text-secondary-white text-[14px] ${textStyles}`}
    >
      {Array.from(title).map((letter, index) => {
        return (
          <motion.span variants={textVariant2} key={index}>
            {letter === " " ? "\u00A0" : letter}
          </motion.span>
        );
      })}
    </motion.p>
  );
};

export const TitleText = ({ title, textStyles }) => (
  <motion.h2
    variants={textVariant2}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }}
    className={`mt-[8px] font-bold md:text-[64px] text-[40px] text-white ${textStyles} `}
  >
    {title}
  </motion.h2>
);
