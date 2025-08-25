import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeTop, motionStep } from "@/config/motions";

const About = () => {
  const content = [
    "We specialize in gamification, 2D design, and game development with one goal in mind: to make every story feel alive and every idea feel playable. we help you break through the noise and connect with your audience in unexpected ways. ",
  ];

  return (
    <>
      <motion.div variants={fadeTop} {...motionStep}>
        <section
          id="about"
          className="flex justify-center lg:py-16 pb-16 lg:pb-0"
        >
          <div className="container py-6 max-w-screen-xl px-4">
            <div className="flex flex-col lg:flex-row w-full justify-between">
              <h1 className="font-medium text-[#E600DF] lg:py-6">ABOUT US</h1>
              <h1 className="text-3xl lg:text-5xl max-w-5xl lg:text-right font-medium leading-[150%] lg:leading-[190%] uppercase">
                At Miraii Studio, we don’t just create media — we craft
                experiences.{" "}
              </h1>
            </div>
            <div className="py-5 lg:py-10">
              {content.map((e: string, i: number) => (
                <p
                  key={i}
                  className="text-justify font-extralight text-lg lg:text-3xl text-gray-300 lg:leading-[190%]"
                >
                  {e}
                  <Link href="/team">
                    <button className="text-[#E600DF] underline hover:text-[#9B0F97] transition transform duration-300">
                      Let`s take you behind the project.
                    </button>
                  </Link>
                </p>
              ))}
            </div>
          </div>
        </section>
      </motion.div>
    </>
  );
};

export default About;
