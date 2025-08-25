import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { fadeTop, motionStep } from "@/config/motions";

const Contact = () => {
  return (
    <>
      <motion.div variants={fadeTop} {...motionStep}>
        <section id="contact" className="flex justify-center">
          <div className="container py-12 max-w-screen-xl px-4 bg-[#FF8500] group rounded-xl">
            <div>
              <h1>Now, It`s your Turn</h1>
              <p></p>     
            </div>
          </div>
        </section>
      </motion.div>
    </>
  );
};

export default Contact;
