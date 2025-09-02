import React from "react";
import Link from "next/link";
import AnimatedChar from "./motion/AnimatedChar";
import { motion } from "framer-motion";
import { fadeUpSpring } from "@/config/motions";
import AnimatedText from "./motion/AnimatedText";
import { IoArrowDownSharp } from "react-icons/io5";

const Hero = () => {
  return (
    <>
      <section
        id="/"
        className="overflow-hidden flex flex-col justify-center h-screen items-center -mt-32 "
      >
        <div className="container max-w-screen-xl px-4 py-6 flex flex-col lg:flex-row gap-5 md:gap-0">
          <div className="flex flex-col gap-5 w-full lg:w-2/3">
            <div className="space-y-4 font-semibold text-[#141414]">
              <div className="flex">
                <h1 className="text-4xl lg:text-8xl ">
                  <AnimatedChar text="Turning" />
                </h1>
                <h1 className="text-4xl lg:text-8xl text-orange-500">
                  <AnimatedChar text=" Ideas" />
                </h1>
                <h1 className="text-4xl lg:text-8xl ">
                  <AnimatedChar text=" Into" />
                </h1>
              </div>
              <h1 className="text-4xl lg:text-8xl ">
                <AnimatedChar text="Playable Worlds." />
              </h1>
              <div className="text-xl lg:text-4xl font-medium">
                <AnimatedText text="From concept art to finished builds, discover how imagination becomes interaction." />
              </div>
            </div>
          </div>
          <div className=" w-full lg:w-1/3 flex items-end lg:justify-end">
            <motion.div
              variants={fadeUpSpring}
              initial="hidden"
              animate="visible"
              className="w-fit"
            >
              <div className="flex items-center gap-4">
                {" "}
                <div className="text-[#141414] text-base leading-tight lg:leading-none lg:text-right lg:text-4xl">Discover <br/> Our Games</div>
                <Link href="#games">
                  <button className="bg-[#F2F2F2] items-center outline outline-orange-500 text-orange-500 hover:bg-orange-500 hover:outline-[#F2F2F2] hover:text-[#F2F2F2] hover:border transition transform duration-300 rounded-full p-2 lg:p-4 lg:text-4xl">
                    <IoArrowDownSharp />
                  </button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
