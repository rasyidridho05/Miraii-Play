import React from "react";
import Link from "next/link";
import Head from "next/head";

const Undefined = () => {
  return (
    <>
      <Head>
        <title>404 | Not Found</title>
      </Head>
      <section className="w-full h-screen">
        <div className="container flex items-center min-h-screen px-6 py-12 mx-auto">
          <div className="flex flex-col items-center max-w-sm mx-auto text-center">
            <p className="p-3 text-sm font-medium text-gray-400 rounded-full bg-[#1C1C1C]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
                />
              </svg>
            </p>
            <h1 className="mt-3 text-2xl font-semibold text-white md:text-3xl">
              404 | Not Found
            </h1>
            <p className="mt-4 text-gray-400">
              The page you are looking for doesn`t exist.
            </p>

            <div className="flex items-center w-full mt-6 gap-x-3 shrink-0 sm:w-auto">
              <button className="flex items-center justify-center w-1/2 px-5 py-2 text-sm transition-colors duration-200  border rounded-lg gap-x-2 sm:w-auto hover:bg-stone-800 bg-[#1C1C1C]  text-gray-200 hover:text-gray-50  border-gray-700 hover:border-gray-200">
                <Link href="/">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-5 h-5 rtl:rotate-180 inline-block transition-transform duration-200 hover:translate-x-2  hover:scale-100"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                    />
                  </svg>
                  <span>Take Me Home</span>
                </Link>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Undefined;
