import Image from "next/image";
import Link from "next/link";
import React from "react";
import { LiaInstagram, LiaLinkedin } from "react-icons/lia";

const Footer = () => {
  return (
    <footer className="px-4 w-screen flex justify-center">
      <div className="py-6 text-base text-center text-[#141414] flex flex-row items-center gap-2 font-medium">
        © 2025 
        <Link
          href="https://miraiistudio.com/"
          className="hover:opacity-80 transition-all duration-300 font-semibold text-orange-500 hover:text-orange-400"
          target="_blank"
        >
          Miraii Studio.
        </Link>{" "}
         All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
