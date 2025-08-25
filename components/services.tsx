import React from "react";
import Accordion from "./Accordion/accordion";
import { fadeTop, motionStep } from "@/config/motions";
import { motion } from "framer-motion";

const Services: React.FC = () => {
  return (
    <>
      <motion.div variants={fadeTop} {...motionStep}>
        <section id="services" className="flex justify-center py-16">
          <div className="container max-w-screen-xl px-4 py-6">
            <div className="flex flex-col lg:flex-row w-full justify-between">
              <h1 className="font-medium text-[#E600DF] lg:py-6">SERVICES</h1>
              <h1 className="text-3xl lg:text-5xl max-w-5xl text-left font-medium leading-[150%] lg:leading-[190%] uppercase">
                We Offer More Than Just Design. Here`s What We Love to Build.
              </h1>
            </div>

            <div className="mt-4 lg:mt-16">
              <Accordion title="Education Game">
                <p>
                  From concept to launch, our educational game brings knowledges
                  to life in a fun way, stunning visuals, and unforgettable
                  experiences.
                </p>
              </Accordion>

              <Accordion title="Gamification">
                <p>
                  Designing playful and purpose-driven experiences that inspire
                  action, increase engagement, and turn everyday tasks into
                  meaningful journeys.
                </p>
              </Accordion>

              <Accordion title="Board Game">
                <p>
                  We create all the components and assets that bring a new
                  experience to playing board games, turning every session into
                  an unforgettable adventure.
                </p>
              </Accordion>
            </div>
          </div>
        </section>
      </motion.div>
    </>
  );
};

export default Services;
