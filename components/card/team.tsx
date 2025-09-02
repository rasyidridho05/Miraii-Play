import React from "react";
import Image from "next/image";
import Link from "next/link";

import { LiaInstagram, LiaLinkedin } from "react-icons/lia";
import { teamTypes } from "@/type/team";

const team = ({ name, photo, role, instagram, linkedin }: teamTypes) => {
  return (
    <div className="w-full bg-none group">
      <div className=" relative bg-gradient-to-b from-[#FFD230] to-[#FF8904] to-50% group-[]:rounded-xl">
        <div className="h-[400px] lg:h-[296px] w-full relative  overflow-hidden">
          <Image
            src={`/image/team/${photo}`}
            blurDataURL={`/image/team/${photo}`}
            className=" transition-all duration-300 group-hover:scale-110 group-[]:rounded-xl"
            layout="fill"
            objectFit="cover"
            quality={100}
            alt="loading..."
          />
        </div>
      </div>
      <div className="flex flex-col w-full justify-start py-2">
        <h1 className=" text-start text-xl lg:text-base sm:text-xl font-medium text-[#141414]">
          {name}
        </h1>
        <div className="flex w-full justify-between">
          <h2 className=" text-start text-lg lg:text-base tracking-tight font-medium text-gray-500">
            {role}
          </h2>
          <div className="flex justify-start">
            {instagram && (
              <Link
                href={`${instagram}`}
                target="_blank"
                className="text-orange-500 hover:text-orange-300 transition-all duration-300 hover:scale-110 text-2xl"
              >
                <p className="items-left text-sm">
                  <LiaInstagram size={28} />
                </p>
              </Link>
            )}
            {linkedin && (
              <Link
                href={`${linkedin}`}
                target="_blank"
                className="text-orange-500 hover:text-orange-300 transition-all duration-300 hover:scale-110 text-2xl"
              >
                <p className="items-left text-sm">
                  <LiaLinkedin size={28} />
                </p>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default team;
