/* eslint-disable */

"use client";
import { Infinity } from "lucide-react";
import { motion } from "motion/react";

const AvatarsSection = () => {
  return (
    <div className="w-full h-fit min-h-fit relative max-lg:mt-24">
      <div className="absolute right-[calc(20*var(--dev-unit))] top-[calc(14*var(--dev-unit))] scale-70 sm:scale-80 md:scale-90 lg:scale-100 [transform-origin:top]">
        <div className="border-[5px] border-[#2A4747]/40 size-22 scale-[1.17] rounded-full"></div>
      </div>
      <div className="absolute right-[calc(20*var(--dev-unit))] top-[calc(14*var(--dev-unit))] scale-70 sm:scale-80 md:scale-90 lg:scale-100 [transform-origin:top]">
        <div className="border-[5px] border-[#2A4747]/10 size-22 scale-[1.38] rounded-full"></div>
      </div>
      <svg
        className="w-full relative z-0 max-md:hidden"
        viewBox="0 0 1440 515"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          pathLength={10}
          strokeDasharray={10}
          initial={{ strokeDashoffset: 10 }}
          whileInView={{ strokeDashoffset: 0 }}
          transition={{
            duration: 4,
            type: "spring",
          }}
          viewport={{ amount: 0.6, once: true }}
          d="M-39 70.3812C1.96472 59.2499 14.4984 30.69 60.7769 28.1317C198.374 20.5254 305.136 344.309 436.278 427.277C663.992 571.341 794.267 421.741 934.357 324.819C1055.34 241.112 1059.99 235.804 1135.59 232.303C1298.62 224.752 1398.63 466.384 1440 466.384"
          stroke="#E4EDEC"
          className="[stroke-width:55.52]"
        />
      </svg>

      <svg
        viewBox="0 0 1506 549"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="md:hidden"
      >
        <path
          d="M12 87.3812C52.9647 76.2499 65.4984 47.69 111.777 45.1317C249.374 37.5254 356.136 361.309 487.278 444.277C714.992 588.341 845.267 438.741 985.357 341.819C1106.34 258.112 1110.99 252.804 1186.59 249.303C1349.62 241.752 1449.63 483.384 1491 483.384"
          stroke="#E4EDEC"
          strokeWidth="90"
        />
      </svg>

      <div className="absolute right-[calc(20*var(--dev-unit))] top-[calc(14*var(--dev-unit))]">
        <img
          src="https://randomuser.me/api/portraits/men/32.jpg"
          alt=""
          className="inline-block size-22 rounded-full border-[4px] border-[#2A4747] scale-70 sm:scale-80 md:scale-90 lg:scale-100 [transform-origin:top]"
        />
      </div>
      {/*rest of the images 👇*/}
      <img
        src="https://randomuser.me/api/portraits/women/44.jpg"
        alt="Avatar 2"
        className="inline-block size-26 rounded-full absolute left-[calc(15*var(--dev-unit))] top-[calc(10*var(--dev-unit))] border-[3px] border-white scale-60 sm:scale-70 md:scale-100"
      />
      <img
        src="https://randomuser.me/api/portraits/men/85.jpg"
        alt="Avatar 3"
        className="inline-block size-21 rounded-full absolute max-sm:top-[calc(40*var(--dev-unit))] left-[calc(25*var(--dev-unit))] top-[calc(28*var(--dev-unit))] border-[3px] border-white scale-65 sm:scale-70 md:scale-100"
      />
      <img
        src="https://randomuser.me/api/portraits/women/55.jpg"
        alt="Avatar 4"
        className="inline-block size-12 rounded-full absolute max-sm:left-[calc(2*var(--dev-unit))] left-[calc(8*var(--dev-unit))] max-sm:top-[calc(50*var(--dev-unit))] top-[calc(35*var(--dev-unit))] border-[3px] border-white scale-65 sm:scale-70 md:scale-100"
      />
      <div>
        <img
          src="https://randomuser.me/api/portraits/men/71.jpg"
          alt="Avatar 5"
          className="inline-block size-20 rounded-full max-md:hidden absolute left-[calc(33*var(--dev-unit))] top-[calc(14*var(--dev-unit))] border-[3px] border-white scale-65 sm:scale-70 md:scale-100"
        />
        <div className="space-y-2 max-sm:-mt-10 text-center absolute top-[calc(0*var(--dev-unit))] -translate-x-1/2 left-[calc(50*var(--dev-unit))] lg:top-[calc(14*var(--dev-unit))]   w-[400px]">
          <h2 className="font-medium text-lg md:text-xl lg:text-2xl">
            Meaningful connections!
          </h2>
          <p className="mx-auto text-xs md:text-sm text-zinc-500 text-balance">
            No awkward intros or dead-end chats.  On Tyes, you join groups of
            like‑minded people.
          </p>
        </div>
      </div>
      <img
        src="https://randomuser.me/api/portraits/women/22.jpg"
        alt="Avatar 6"
        className="inline-block w-12 h-12 rounded-full absolute top-0 right-[calc(5*var(--dev-unit))] scale-65 sm:scale-70 md:scale-100"
      />
      <img
        src="https://randomuser.me/api/portraits/men/20.jpg"
        alt="Avatar 7"
        className="inline-block w-12 h-12 rounded-full absolute top-[calc(30*var(--dev-unit))] right-[calc(1*var(--dev-unit))] scale-70 sm:scale-70 md:scale-100"
      />
      <img
        src="https://randomuser.me/api/portraits/men/43.jpg"
        alt="Avatar 7"
        className="inline-block size-18 max-lg:hidden rounded-full absolute top-[calc(7*var(--dev-unit))] right-[calc(30*var(--dev-unit))] scale-80 sm:scale-70 md:scale-100"
      />
      <div className="bg-slate-700 hidden text-white text-base p-5 rounded-lg w-[300px] absolute top-[calc(23*var(--dev-unit))] right-[calc(15*var(--dev-unit))]">
        <p className="text-white text-sm">
          I went to a rooftop cooking class — and walked away with a new best
          friend (and a perfected pasta recipe). One plan can change everything.
        </p>
        <p className="text-white font-medium py-3">Eric B.</p>
      </div>
    </div>
  );
};

export default AvatarsSection;
