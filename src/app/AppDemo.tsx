"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { HiChat, HiCheckCircle, HiSearchCircle } from "react-icons/hi";
import { HiArrowUpCircle, HiBellAlert } from "react-icons/hi2";

const Video = ({ src = "", isActive = false }) => {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (isActive) {
      ref.current!.play();
    } else {
      ref.current?.pause();
      ref.current!.currentTime = 0;
    }
  }, [isActive]);

  return (
    <video
      ref={ref}
      src={src}
      muted
      playsInline
      loop
      className="w-[267px] min-w-[267px] rounded-[20px] object-cover"
    />
  );
};

const demoItems = [
  {
    label: "Join an event",
    Icon: HiArrowUpCircle,
    img: "https://pub-db5cfbac23934b6e9312219ce0bd3ca4.r2.dev/tyes/tyes-join-event-example.mp4",
    description: "Join an event in just one click, directly from your feed.",
  },
  {
    label: "Chat, make friends",
    Icon: HiChat,
    img: "https://pub-db5cfbac23934b6e9312219ce0bd3ca4.r2.dev/tyes/tyes-chat-screen.mp4",
    description:
      "Connect instantly—chat with other attendees and make new friends before, during the events.",
  },
  // {
  //   label: "Pay for an event",
  //   Icon: HiCreditCard,
  //   img: "/tyes-payment-screen.jpeg",
  //   description:
  //     "Easily complete your event registration with secure and seamless payment options.",
  // },
  // {
  //   label: "Create an event",
  //   Icon: HiCheckCircle,
  //   img: "/event-creation.jpeg",
  //   description:
  //     "Host your own gathering—set up an event in moments and share it with your community.",
  // },
  {
    label: "Discover events",
    Icon: HiSearchCircle,
    img: "https://pub-db5cfbac23934b6e9312219ce0bd3ca4.r2.dev/tyes/tyes-explore-page.mp4?reload=true",
    description:
      "Discover new and unique events by viewing shorts from recent events!",
  },
  {
    label: "View live stories",
    Icon: HiBellAlert,
    img: "https://pub-db5cfbac23934b6e9312219ce0bd3ca4.r2.dev/tyes/tyes-stories.mp4",
    description:
      "View stories of recent and upcoming events, tailored to your interests. View who's attending, and join the event in just one click!",
  },
];

const AppDemo = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const updateIndex = (idx: number) => () => {
    setActiveIndex(idx);
    const section = document.getElementById(`demo-section-${idx}`);
    section?.scrollIntoView({ block: "start" });
  };

  const getActiveClass = (expectedIdx: number) =>
    activeIndex === expectedIdx
      ? "bg-brand/90 text-white"
      : "bg-transparent text-white/50";
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const handleIdxUpdate = (idx: number, progress: number) => {
    console.log(idx, progress);
    if (
      progress >= idx / demoItems.length &&
      progress < (idx + 1) / demoItems.length
    ) {
      setActiveIndex(idx);
    }
  };
  useMotionValueEvent(scrollYProgress, "change", (progress) => {
    handleIdxUpdate(0, progress);
    handleIdxUpdate(1, progress);
    handleIdxUpdate(2, progress);
    handleIdxUpdate(3, progress);
    // handleIdxUpdate(4, progress);
  });

  return (
    <div
      className="w-full min-h-screen bg-zinc-800 overflow-visible py-20  md:py-30 lg:py-40"
      ref={ref}
      id="app-demo"
    >
      <div className="lg:max-2xl:w-[80vw] px-10 flex max-lg:flex-col-reverse sticky sm:max-2xl:portrait:top-[25vh] top-20 left-0 justify-center items-center mx-auto gap-8 md:gap-10 xl:gap-20">
        <div className="max-lg:hidden text-left flex justify-center text-balance text-white text-sm leading-6 font-light tracking-wide flex-1">
          <div className="max-w-[300px] ml-auto">
            {demoItems[activeIndex]?.description}
          </div>
        </div>
        <div className="min-w-[320px] max-w-[320px] h-auto relative flex-1 overflow-hidden">
          <div className="flex absolute top-[4%] left-[8%]">
            <div className="max-w-[267px] overflow-hidden rounded-[20px]">
              <motion.div
                className="w-fit h-fit flex rounded-[20px]"
                animate={{ x: -267 * activeIndex }}
                style={{ borderRadius: "20px" }}
                transition={{
                  duration: 0.5,
                  type: "spring",
                  damping: 15,
                  bounce: 8,
                }}
              >
                {demoItems.map((item, idx) => (
                  <Video
                    key={idx}
                    isActive={idx === activeIndex}
                    src={item.img}
                  />
                ))}
              </motion.div>
            </div>
          </div>
          <img
            src="/phone-outline.png"
            className="h-auto relative z-1 w-full pointer-events-none select-none"
            alt=""
          />
        </div>
        <div className="flex max-md:max-w-full max-lg: max-lg:overflow-x-auto max-lg:[scrollbar-width:none] max-lg:[-ms-overflow-style:none] max-lg:[&::-webkit-scrollbar]:hidden whitespace-nowrap max-w-[300px] md:max-w-[350px] lg:max-w-auto max-lg:bg-white/5 rounded-full max-lg:p-1 lg:flex-col gap-1 items-start h-fit flex-1">
          {demoItems.map((item, idx) => (
            <button
              key={idx}
              id={`demo-btn-${idx}`}
              className={`py-2 px-3 cursor-pointer transition-colors duration-300 select-none rounded-full text-[13px] font-medium flex items-center tracking-wide ${getActiveClass(
                idx,
              )}`}
              onClick={updateIndex(idx)}
            >
              <item.Icon className="size-4 mr-2" />
              {item.label}
            </button>
          ))}
        </div>
      </div>
      {/* Section anchors for scrolling */}
      <div className="w-full h-full pt-40 -mt-[100vh]">
        {/*<div id="demo-section-0" className="h-40" />*/}
        {demoItems.map((_, idx) => (
          <div
            key={idx}
            id={`demo-section-${idx}`}
            className="flex-1 h-[100vh] w-full"
          />
        ))}
      </div>
    </div>
  );
};

export default AppDemo;
