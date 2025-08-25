import React from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Head from "next/head";

const Game = () => {
  return (
    <>
    <Head>
      <title>Game Development</title>
    </Head>
      <Navbar />
      <div className=" flex justify-center my-12">
        <div className="container max-w-screen-xl px-4">
          <div>
            <h1 className="font-semibold text-5xl text-center ">
              Game Development
            </h1>
            <p className=" text-center font-light text-lg pt-2">
              Our main services, and our speciality
            </p>
          </div>
          {/* {Content} */}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Game;
