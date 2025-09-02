import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { fadeTop, motionStep } from "@/config/motions";

const Contact = () => {
  return (
    <>
      <motion.div variants={fadeTop} {...motionStep}>
        <section id="contact" className="flex justify-center">
          <div className="container py-12 max-w-screen-xl mx-4 md:mx-0 px-4 bg-[#FF8500] group rounded-xl">
            <div className="flex flex-col text-center justify-center gap-y-12">
              <h1 className="text-white text-3xl lg:text-6xl">Wanna Talk With Us?</h1>
              <p className="text-white  lg:text-xl font-light">
                Don`t hesitate to get in touch. <br/> Take the first step by clicking
                the button below.
              </p>
              <Link href="mailto:miraiistudio.team@gmail.com">
                <button className="bg-white text-orange-500 text-xl py-4 px-6 rounded-full font-medium hover:bg-orange-100 transition transform duration-300">Get in Touch</button>
              </Link>{" "}
            </div>
          </div>
        </section>
      </motion.div>
    </>
  );
};

export default Contact;
