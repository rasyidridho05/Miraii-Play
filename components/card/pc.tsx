import React from "react";
import Image from "next/image";
import Link from "next/link";
import { IoArrowForwardSharp } from "react-icons/io5";
import { WorksTypes } from "@/type/works";

const PC = ({ title, genre, live, description, thumbnail }: WorksTypes) => {
  return (
    <div className="col-span-12 sm:col-span-6 md:col-span-6 bg-none p-4 lg:p-0 group ">
      <div className="h-[368px] w-full relative overflow-hidden">
        <Link href={`${live}`}>
          <Image
            src={`/image/works/${thumbnail}`}
            blurDataURL={`/image/works/${thumbnail}`}
            className="transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 rounded-lg"
            layout="fill"
            objectFit="cover"
            quality={100}
            alt="loading..."
            priority
          />
          <div className="absolute top-0 bottom-0 left-0 right-0 transition-all duration-300 cursor-pointer group-hover:opacity-0" />
        </Link>
      </div>

      <div className=" flex flex-row justify-between py-2 md:pt-4">
        <h1 className="text-4xl font-medium mb-1 text-orange-500"> {title} </h1>
        <div className="flex text-[#141414] gap-x-2 font-medium uppercase">
          {genre?.map((e: string, i: number) => (
            <span key={i}>[ {e} ]</span>
          ))}
        </div>
      </div>
      <div className="flex w-full justify-between md:pt-4">
        <div className="text-gray-500 w-2/3">
          <p className="">{description}</p>
        </div>
        <div>
          <Link href={`${live}`}>
            <button className="bg-[#F2F2F2] outline outline-orange-500 text-orange-500 hover:bg-orange-500 hover:outline-[#F2F2F2] hover:text-[#F2F2F2] hover:border transition transform duration-300 rounded-full lg:p-2 lg:text-2xl">
              <IoArrowForwardSharp />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PC;
