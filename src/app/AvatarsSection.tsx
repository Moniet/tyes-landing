/* eslint-disable */

"use client";
import { Handshake, Infinity } from "lucide-react";
import { motion } from "motion/react";
import Gutter from "./Gutter";

const AvatarsSection = () => {
  return (
    <Gutter>
      <div className="w-full h-fit min-h-fit relative max-lg:mt-24 bg-zinc-50 py-20 rounded-4xl border border-zinc-100">
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
            src="https://plus.unsplash.com/premium_photo-1688375301014-d47ef7e989ab?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Woman standing in field of sunflowers"
            className="inline-block size-22 rounded-full border-[4px] border-[#2A4747] object-cover scale-70 sm:scale-80 md:scale-90 lg:scale-100 [transform-origin:top]"
          />
        </div>
        {/*rest of the images 👇*/}
        {/*<img
          src="https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?q=80&w=1752&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Person using a laptop"
          className="inline-block size-26 rounded-full object-cover absolute left-[calc(15*var(--dev-unit))] top-[calc(10*var(--dev-unit))] border-[3px] border-white scale-60 sm:scale-70 md:scale-100"
        />*/}
        {/*<img
          src="https://images.unsplash.com/photo-1536548665027-b96d34a005ae?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className="inline-block size-21 rounded-full object-cover absolute max-sm:top-[calc(40*var(--dev-unit))] left-[calc(25*var(--dev-unit))] top-[calc(28*var(--dev-unit))] border-[3px] border-white scale-65 sm:scale-70 md:scale-100"
        />*/}
        {/*<img
          src="https://plus.unsplash.com/premium_photo-1689266188052-704d33673e69?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className="inline-block size-12 rounded-full object-cover absolute max-sm:left-[calc(2*var(--dev-unit))] left-[calc(8*var(--dev-unit))] max-sm:top-[calc(50*var(--dev-unit))] top-[calc(35*var(--dev-unit))] border-[3px] border-white scale-65 sm:scale-70 md:scale-100"
        />*/}
        <div>
          <img
            src="https://images.unsplash.com/photo-1546961329-78bef0414d7c?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Woman smiling while looking at her cell phone"
            className="inline-block size-20 rounded-full object-cover max-md:hidden absolute right-[calc(5*var(--dev-unit))] top-[calc(18*var(--dev-unit))] border-[3px] border-white scale-65 sm:scale-70 md:scale-100"
          />
          <div className="space-y-2 max-sm:-mt-10 text-center absolute top-10 left-10  w-[400px]">
            <h2 className="font-medium text-2xl md:text-xl lg:text-2xl ">
              Make meaningful connections!
            </h2>
            <p className="mx-auto text-base font-medium leading-6 tracking-wide text-zinc-500 text-balance">
              No awkward intros or dead-end chats.  On Tyes, you join groups of
              like‑minded people.
            </p>
          </div>
        </div>
        <img
          src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=facearea&w=512&h=512&facepad=2&q=80"
          alt=""
          className="inline-block w-12 h-12 rounded-full object-cover absolute top-10 right-[calc(5*var(--dev-unit))] scale-65 sm:scale-70 md:scale-100"
        />
        <img
          src="https://images.unsplash.com/photo-1526510747491-58f928ec870f?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className="inline-block w-12 h-12 rounded-full object-cover absolute top-[calc(30*var(--dev-unit))] right-[calc(1*var(--dev-unit))] scale-70 sm:scale-70 md:scale-100"
        />
        <img
          src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className="inline-block size-18 max-lg:hidden rounded-full object-cover absolute top-[calc(7*var(--dev-unit))] right-[calc(30*var(--dev-unit))] scale-80 sm:scale-70 md:scale-100"
        />
        <div className="bg-slate-700 max-md:hidden text-white text-base p-5 rounded-lg w-[300px] absolute top-[calc(23*var(--dev-unit))] right-[calc(15*var(--dev-unit))]">
          <p className="text-white text-sm">
            I went to a rooftop cooking class — and walked away with a new best
            friend (and a perfected pasta recipe). One plan can change
            everything.
          </p>
          <p className="text-white font-medium py-3">Eric B.</p>
        </div>
      </div>
    </Gutter>
  );
}

export default AvatarsSection;
