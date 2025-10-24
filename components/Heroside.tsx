"use client";

import Link from "next/link";
import { motion } from "framer-motion";


const Header = () => {
  return (
    <header className="w-full  flex flex-col  justify-center text-white  px-6 py-10 md:py-16">
      {/* NAME & INTRO */}
      <div className="flex flex-col text-center md:text-left md:text-normal justify-center itmes-center md:justify-start  space-y-2">
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
          Adnan Mohamed
        </h1>
        <h5 className="text-lg text-gray-400">Fullstack Engineer</h5>
        <p className="text-gray-300 max-w-md text-base md:text-lg leading-relaxed">
          I build accessible, pixel-perfect <br /> digital experiences for the web.
        </p>
      </div>

     {/* NAV LINKS */}
<nav className="hidden md:flex md:flex-col gap-6 mt-10 
  justify-center items-center md:items-start md:justify-start text-center md:text-left">
    
 <motion.div
      initial="rest"
      whileHover="hover"
      animate="rest"
      className="flex items-center cursor-pointer"
    >
      {/* Animated line */}
      <motion.span
        variants={{
          rest: { width: 30, opacity: 0.7 },
          hover: { width: 80, opacity: 1 },
        }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="h-[2px] bg-white rounded-full mr-3"
      />

      {/* Text triggers hover too */}
      <Link
        href="#about"
        className="text-gray-300 hover:text-white transition-colors duration-200 text-lg"
      >
        About
      </Link>
    </motion.div>




 <motion.div
      initial="rest"
      whileHover="hover"
      animate="rest"
      className="flex items-center cursor-pointer"
    >
      {/* Animated line */}
      <motion.span
        variants={{
          rest: { width: 30, opacity: 0.7 },
          hover: { width: 80, opacity: 1 },
        }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="h-[2px] bg-white rounded-full mr-3"
      />

      {/* Text triggers hover too */}
      <Link
        href="#experience"
        className="text-gray-300 hover:text-white transition-colors duration-200 text-lg"
      >
        Experience
      </Link>
    </motion.div>


  <motion.div
      initial="rest"
      whileHover="hover"
      animate="rest"
      className="flex items-center cursor-pointer"
    >
      {/* Animated line */}
      <motion.span
        variants={{
          rest: { width: 30, opacity: 0.7 },
          hover: { width: 80, opacity: 1 },
        }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="h-[2px] bg-white rounded-full mr-3"
      />

      {/* Text triggers hover too */}
      <Link
        href="#contact"
        className="text-gray-300 hover:text-white transition-colors duration-200 text-lg"
      >
        Contact
      </Link>
    </motion.div>


</nav>

{/* SOCIAL LINKS */}
<div className="flex space-x-6 mt-10 justify-center items-center md:justify-start md:items-start">
  <a
    href="#"
    className="text-gray-400 hover:text-white transition-colors duration-200"
    target="_blank"
    rel="noopener noreferrer"
  >
    GitHub
  </a>
  <a
    href="#"
    className="text-gray-400 hover:text-white transition-colors duration-200"
    target="_blank"
    rel="noopener noreferrer"
  >
    LinkedIn
  </a>
  <a
    href="#"
    className="text-gray-400 hover:text-white transition-colors duration-200"
    target="_blank"
    rel="noopener noreferrer"
  >
    Twitter
  </a>
</div>

    </header>
  );
};

export default Header;
