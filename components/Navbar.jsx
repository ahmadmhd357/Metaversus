"use client";

import { motion } from "framer-motion";
import styles from "../styles";
import { navVariants } from "../utils/motion";

const Navbar = () => (
  <motion.nav
    variants={navVariants}
    className={`${styles.xPaddings} py-8 relative`}
    initial="hidden"
    whileInView="show"
  >
    <div className="absolute w-[50%] inset-0 gradient-01" />

    <div className={`mx-auto ${styles.innerWidth} flex justify-between gap-8`}>
      <img
        src="/search.svg"
        alt="searchIcon"
        className="w-[24] h-[24] object-contain"
      />
      <h1 className="font-extrabold text-[24px] leading-[30px] text-white">
        METAVERSUS
      </h1>
      <img
        src="/menu.svg"
        alt="menu"
        className="w-[24] h-[24] object-contain"
      />
    </div>
  </motion.nav>
);

export default Navbar;
