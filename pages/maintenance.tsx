import React from "react";
import Image from "next/image";
import Link from "next/link";

const Maintenance = () => {
  return (
    <div className="h-screen">
      <div className="relative w-screen h-full">
        <Image
          src="/image/Topographic.svg"
          width={1440}
          height={1024}
          alt="..loading"
          className="md:w-full md:h-full object-cover aspect-video -z-10"
        />
      </div>
      <div className="absolute md:top-1/2 md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2 z-10">
        <div className="flex flex-row justify-between w-screen">
        <div className="h-screen">
            <Image
              className="h-full"
              src="/image/cogs.svg"
              width={720}
              height={512}
              alt="..loading"
            />
          </div>
          <div className="h-screen w-full">This Page is Under Maintenance</div>
          
        </div>
      </div>
    </div>
  );
};

export default Maintenance;
