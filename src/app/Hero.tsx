"use client";

import Logo from "./logo";
import { motion } from "motion/react";
import VideoPlayer from "./VideoPlayer";
import Gutter from "./Gutter";

const Hero = () => {
  return (
    <div className="w-full lg:h-screen flex relative flex-col lg:flex-row">
      <div className="max-sm:min-h-[50vh] md:flex-[1.2] xl:flex-1 pt-16 pb-16 md:py-20 xl:py-20 flex-col flex justify-start lg:items-center relative overflow-hidden h-full">
        <SVGAnimations />
        <Gutter className="pb-10 md:pb-20">
          <div className="max-w-[500px]">
            <div className="w-fit">
              <div className="w-[50px] md:w-[64px] h-auto">
                <Logo />
              </div>
            </div>
            <h2 className="mt-10 max-sm:mt-10 xl:mt-30 text-3xl mb-5 md:text-4xl xl:text-5xl font-medium max-w-fit md:leading-11 xl:leading-14">
              Discover <span className="text-zinc-500">Experiences.</span>
              <br />
              Connect with <span className="text-zinc-500">people.</span>
              <br />
              Collect <span className="text-zinc-500">memories.</span>
              <br />
            </h2>
            <p className="font-medium md:text-base text-base xl:text-lg max-w-[500px] md:mt-7 xl:mt-10 text-zinc-400">
              Say yes to curated events where shared experiences turn strangers
              into friends and moments into lasting memories.
            </p>
            <div className="flex items-center mt-10 relative z-10 max-md:pb-10">
              <button className="bg-brand px-5 py-3 rounded-full text-white font-medium outline-none focus:outline-none hover:bg-brand/80 transition-all duration-300 cursor-pointer hover:-translate-y-1 hover:shadow-lg">
                Join waitlist
              </button>
              <div className="ml-4 bg-zinc-50 px-5 py-3 border-zinc-100 border rounded-full text-zinc-700 font-medium outline-none focus:outline-none transition-all duration-300 cursor-pointer hover:-translate-y-1 hover:shadow-lg/10">
                Contact Us
              </div>
            </div>
          </div>
        </Gutter>

        <div className="text-xs xl:text-base">
          <motion.div
            className="h-[50px] w-screen absolute bottom-0 left-0 flex items-center gap-8 text-white bg-brand whitespace-nowrap"
            initial={{ x: "0%" }}
            animate={{ x: "-100%" }}
            transition={{
              duration: 20,
              ease: "linear",
              repeat: Infinity,
              repeatType: "loop",
            }}
          >
            <div className="flex items-center justify-around w-full">
              <div className="-ml-[1px]">Launching soon</div>
              <div className="-ml-[1px]">Launching soon</div>
              <div className="-ml-[1px]">Launching soon</div>
              <div className="-ml-[1px] max-sm:hidden">Launching soon</div>
              <div className="-ml-[1px] max-sm:hidden">Launching soon</div>
              <div className="-ml-[1px] max-sm:hidden">Launching soon</div>
              <div className="-ml-[1px] max-xl:hidden">Launching soon</div>
              <div className="-ml-[1px] max-xl:hidden">Launching soon</div>
              <div className="-ml-[1px] max-xl:hidden">Launching soon</div>
            </div>
          </motion.div>

          <motion.div
            className="h-[50px] absolute bottom-0 left-0 w-screen flex items-center text-white bg-brand whitespace-nowrap -ml-[1px]"
            initial={{ x: "100%" }}
            animate={{ x: "0%" }}
            transition={{
              duration: 20,
              ease: "linear",
              repeat: Infinity,
              repeatType: "loop",
            }}
          >
            <div className="flex items-center justify-around w-full">
              <div>Launching soon</div>
              <div>Launching soon</div>
              <div>Launching soon</div>
              <div className="max-sm:hidden">Launching soon</div>
              <div className="max-sm:hidden">Launching soon</div>
              <div className="max-sm:hidden">Launching soon</div>
              <div className="-ml-[1px] max-xl:hidden">Launching soon</div>
              <div className="-ml-[1px] max-xl:hidden">Launching soon</div>
              <div className="-ml-[1px] max-xl:hidden">Launching soon</div>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="flex-1">
        <VideoPlayer />
      </div>
    </div>
  );
};

function SVGAnimations() {
  return (
    <>
      <svg
        viewBox="0 0 754 178"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute bottom-5 w-full max-sm:mb-3 left-0 pointer-events-none"
      >
        <motion.path
          d="M7 163.956C94.6515 67.9053 187.919 71.4418 267.768 140.864C344.06 207.192 520.121 141.035 543.635 89.9475C575.823 20.0177 470.316 -25.3181 456.896 42.2301C440.778 123.363 672.701 114.105 753 108.271"
          stroke="#58B2AD"
          strokeOpacity="0.16"
          strokeWidth="18"
          pathLength={10}
          strokeDasharray={"10"}
          initial={{ strokeDashoffset: 10 }}
          animate={{ strokeDashoffset: -10 }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "loop",
            repeatDelay: 10,
          }}
        />
      </svg>
      <div className="md:hidden">
        <svg
          viewBox="0 0 1024 240"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-0 right-0  w-1/2 rotate-180"
        >
          <motion.path
            strokeDasharray={10}
            pathLength={10}
            initial={{ strokeDashoffset: 10 }}
            animate={{ strokeDashoffset: -10 }}
            transition={{
              duration: 5,
              repeat: Infinity,
              repeatType: "loop",
              repeatDelay: 5,
              delay: 30,
            }}
            d="M5 170.247C76.9915 128.842 240.222 62.5689 317.212 128.722C413.449 211.415 491.07 258.59 590.257 208.551C655.729 175.521 834.5 27 701.5 27C532.982 27 796.906 218.574 933.802 208.551C988.476 204.548 1005.55 58.0825 1014 2"
            stroke="#58B2AD"
            strokeOpacity="0.16"
            strokeWidth="40"
          />
        </svg>
        <svg
          width="399"
          height="97"
          viewBox="0 0 399 97"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-0 left-0 -rotate-90"
        >
          <motion.path
            strokeDasharray={520}
            initial={{ strokeDashoffset: 520 }}
            animate={{ strokeDashoffset: -520 }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "loop",
              repeatDelay: 25,
              delay: 25,
            }}
            d="M10.1673 86.5295C23.4067 56.309 58.0361 1.77613 90.6383 25.4088C131.391 54.9495 232.031 68.8891 229.432 29.4088C226.834 -10.0715 102.71 18.4988 145.245 67.6539C187.78 116.809 400.712 59.2467 388.342 14.3641"
            stroke="#58B2AD"
            strokeOpacity="0.16"
            strokeWidth="15"
          />
        </svg>
        <svg
          width="133"
          height="284"
          viewBox="0 0 133 284"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="bottom-30 left-10 absolute"
        >
          <motion.path
            initial={{ strokeDashoffset: 10 }}
            animate={{ strokeDashoffset: -10 }}
            strokeDasharray={10}
            pathLength={10}
            transition={{
              duration: 5,
              repeat: Infinity,
              repeatType: "loop",
              repeatDelay: 30,
              delay: 30,
            }}
            d="M12.5547 0.800767C12.5547 114.801 122.94 191.537 122.94 92.1028C122.94 11.084 -5.44531 152.301 12.5547 282.301"
            stroke="#58B2AD"
            strokeOpacity="0.16"
            strokeWidth="20"
          />
        </svg>
        <svg
          width="133"
          height="284"
          viewBox="0 0 133 284"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="top-30 right-10 absolute rotate-180"
        >
          <motion.path
            initial={{ strokeDashoffset: 10 }}
            animate={{ strokeDashoffset: -10 }}
            strokeDasharray={10}
            pathLength={10}
            transition={{
              duration: 5,
              repeat: Infinity,
              repeatType: "loop",
              repeatDelay: 50,
              delay: 50,
            }}
            d="M12.5547 0.800767C12.5547 114.801 122.94 191.537 122.94 92.1028C122.94 11.084 -5.44531 152.301 12.5547 282.301"
            stroke="#58B2AD"
            strokeOpacity="0.16"
            strokeWidth="20"
          />
        </svg>
      </div>
    </>
  );
}

export default Hero;
