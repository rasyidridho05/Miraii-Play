import React from "react";
import PC from "./card/pc";
import { WorksTypes } from "@/type/works";
import { projects } from "@/data/works";
import { motion } from "framer-motion";
import { fadeTop, motionStep } from "@/config/motions";
import Link from "next/link";

const Works = () => {
  const desc = [
    "A showcase of ideas turned into immersive digital experiences. Let our work speak for itself. ",
  ];
  return (
    <>
      <motion.div variants={fadeTop} {...motionStep}>
        <section id="games" className="flex justify-center py-8 md:py-16">
          <div className="container max-w-screen-xl px-4 py-6">
            <div className="flex flex-col-reverse lg:flex-row md:gap-x-12">
              <div className="flex flex-col w-full gap-y-8 my-8">
                {projects
                  .filter((e: WorksTypes) => e.left == true)
                  .map((e: WorksTypes, i: number) => (
                    <PC key={i} {...e} />
                  ))}
              </div>
              <div className="flex flex-col w-full gap-y-8 my-8">
                <div className="flex flex-col w-full md:gap-y-4">
                  <h1 className="text-[#141414] text-2xl lg:text-6xl">
                    Worlds We’ve Brought to Life
                  </h1>
                  <p className="text-gray-500 lg:text-3xl">
                    A little showcase of the games we’ve built.
                  </p>
                </div>
                <div className="flex flex-col w-full gap-y-8 md:my-12">
                  {projects
                    .filter((e: WorksTypes) => e.left == false)
                    .map((e: WorksTypes, i: number) => (
                      <PC key={i} {...e} />
                    ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </motion.div>
    </>
  );
};

export default Works;
