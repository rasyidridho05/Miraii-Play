import React from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { teams } from "@/data/team";
import { teamTypes } from "@/type/team";
import TeamCard from "@/components/card/team";
import Head from "next/head";
import { motion } from "framer-motion";
import { fadeLeft, fadeRight, fadeTop, motionStep } from "@/config/motions";

const Team = () => {
  return (
    <>
      <section id="team">
        <div className=" flex justify-center py-8 md:py-16 lg:mt-24 ">
          <div className="container max-w-screen-xl px-4">
            <div className="">
              <motion.div variants={fadeLeft} {...motionStep}>
                <div className="flex flex-col gap-y-4">
                  <h1 className="text-3xl lg:text-6xl  font-medium text-[#141414]">
                    Meet The Team
                  </h1>
                  <div className="font-light lg:text-3xl text-gray-500 text-left">
                    Meet the creative people behind the fun.
                  </div>
                </div>
              </motion.div>
            </div>
            <motion.div variants={fadeTop} {...motionStep}>
              <div className="lg:pt-10 flex flex-col lg:flex-row w-full gap-6 gap-y-8 my-8 ">
                {teams.map((e: teamTypes, i: number) => (
                  <TeamCard key={i} {...e} />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;
