import Image from "next/image";
import Link from "next/link";
import React from "react";
import { LiaInstagram, LiaLinkedin } from "react-icons/lia";

const Footer = () => {
  return (
    <footer className="divide-y bg-[#090A0C]">
      <div className="container max-w-screen-xl py-10  mx-auto space-y-0 lg:flex-row lg:space-y-0">
        <div className="w-full border"></div>
        <div className="flex flex-col lg:flex-row justify-start px-3">
          <div className="w-full lg:w-2/3">
            <Image src="/image/MIRAI.webp" alt="" width={200} height={100} />
            <div className="flex flex-wrap lg:flex-nowrap lg:flex-row justify-start gap-3 lg:gap-0 lg:space-x-5 w-full lg:w-fit">
              <Link href="/#services">
                <button className=" w-fit hover:bg-white bg-[#090A0C] hover:text-black text-white border transition transform duration-300 rounded-full px-6 py-2 text-xs lg:text-sm">
                  Education Game
                </button>
              </Link>
              <Link href="/#services">
                <button className=" w-fit hover:bg-white bg-[#090A0C] hover:text-black text-white border transition transform duration-300 rounded-full px-6 py-2 text-xs lg:text-sm">
                  Gamification
                </button>
              </Link>
              <Link href="/#services">
                <button className=" w-fit hover:bg-white bg-[#090A0C] hover:text-black text-white border transition transform duration-300 rounded-full px-6 py-2 text-xs lg:text-sm">
                  Board Game
                </button>
              </Link>
            </div>
          </div>
          <div className="w-full lg:w-1/3 flex flex-col lg:justify-end py-8 lg:py-0">
            <div className="flex lg:justify-end">
              <Link target="_blank" href="https://www.instagram.com/miraii.studio/">
                <LiaInstagram size={48} className="w-8 lg:w-fit lg:hover:text-gray-300 transition transform duration-300" />
              </Link>
              <Link target="_blank" href="https://www.linkedin.com/company/miraii-studio/">
                <LiaLinkedin size={48} className="w-8 lg:w-fit lg:hover:text-gray-300 transition transform duration-300" />
              </Link>
            </div>
            <div className="lg:py-3 text-sm lg:text-base text-left lg:text-end dark:text-[#C7C7C7]">
              © 2025 Miraii Studio. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
