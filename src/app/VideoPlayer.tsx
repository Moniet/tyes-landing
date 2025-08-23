"use client";

import { ReactEventHandler, useEffect, useRef, useState } from "react";
import { Bluetooth, PartyPopper, Pause, Play, Plus, Wifi } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Noise, useNoiseConfig } from "react-noise";
import "react-noise/css";
import { RiRestartFill, RiRestartLine, RiRestaurantLine } from "react-icons/ri";
import { IoCellular } from "react-icons/io5";

const videos = [
  "https://videos.pexels.com/video-files/4877896/4877896-uhd_2732_1440_25fps.mp4",
  // "https://videos.pexels.com/video-files/5159096/5159096-uhd_1440_2732_25fps.mp4",
  "https://videos.pexels.com/video-files/4881727/4881727-uhd_2732_1440_25fps.mp4",
  "https://videos.pexels.com/video-files/5329615/5329615-uhd_1440_2732_25fps.mp4",
];

const VideoPlayer = () => {
  const [playState, setPlayState] = useState<"idle" | "paused" | "playing">(
    "idle",
  );
  const [open, setOpen] = useState(false);
  const video = useRef<HTMLVideoElement>(null);
  useNoiseConfig(
    {
      key: "custom",
      opacity: 0.15,
      color: "100 100 100",
    },
    [],
  );

  const [index, setIndex] = useState(0);
  useEffect(() => {
    const to = open
      ? null
      : setTimeout(() => {
          setIndex(index + 1 >= videos.length ? 0 : index + 1);
        }, 10_000);

    return () => {
      if (to) clearTimeout(to);
    };
  }, [index, open]);

  useEffect(() => {
    if (open) {
      (
        [
          ...document.querySelectorAll("#video-player .video"),
        ] as HTMLVideoElement[]
      ).forEach((el) => el?.pause());
    } else {
      (
        [
          ...document.querySelectorAll("#video-player .video"),
        ] as HTMLVideoElement[]
      ).forEach((el) => el?.play());
    }
  }, [open]);

  const [position, setPosition] = useState<string[]>([]);

  const onTimeUpdate: ReactEventHandler<HTMLVideoElement> | undefined = () => {
    const currentTime = video.current!.currentTime;
  };

  return (
    <div
      className="w-full max-w-full overflow-hidden max-sm:h-screen max-lg:h-[700px] lg:h-full relative"
      id="video-player"
    >
      {videos.map(
        (url, i) =>
          i > index - 2 &&
          i < index + 2 && (
            <video
              src={url}
              key={i}
              poster="/poster.jpg"
              className="w-full h-full object-cover absolute top-0  left-0 video"
              style={{ opacity: i === index ? 1 : 0 }}
              muted
              autoPlay={!open}
              playsInline
            />
          ),
      )}
      <div className="size-full top-0 left-0 absolute bg-zinc-600/50" />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="absolute top-0 left-0 size-full"
      >
        <Noise
          noiseKey="custom"
          className="size-full pointer-events-none"
          isAnimated
        />
      </motion.div>
      <button
        className="px-7 py-3.5 whitespace-nowrap md:text-base text-sm rounded-full bg-black/40 cursor-pointer shadow-lg text-white flex items-center justify-center hover:scale-105 transition-all duration-200 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        onClick={() => setOpen(true)}
      >
        Watch The Demo
        <Play className="fill-white stroke-none size-4.5 ml-2" />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            exit={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="w-full h-full bg-white/80 flex items-center justify-center z-10 absolute top-0 left-0"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[286px] h-[535px] shadow-2xl rounded-[22px] bg-gradient-to-b from-zinc-500 to-zinc-400" />
            <video
              onTimeUpdate={onTimeUpdate}
              onPlay={() => setPlayState("playing")}
              onPause={() => setPlayState("paused")}
              ref={video}
              className="w-[280px] mt-[10px] h-[499px] rounded-bl-[20px] rounded-br-[20px] object-cover absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-1"
              src={
                "https://pub-db5cfbac23934b6e9312219ce0bd3ca4.r2.dev/tyes%20demo.mp4"
              }
              playsInline
            />
            <div className="w-[280px] h-[529px] border-[5px] rounded-[20px] relative z-2 overflow-visible">
              <div className="absolute top-16 right-0 bg-zinc-400 h-20 w-1 z-0 translate-x-3 rounded-tr-md rounded-br-md" />
              <div className="absolute top-16 left-0 bg-zinc-400 h-10 w-1 z-0 -translate-x-3 rounded-tl-md rounded-bl-md" />
              <div className="absolute top-30 left-0 bg-zinc-400 h-10 w-1 z-0 -translate-x-3 rounded-tl-md rounded-bl-md" />
              <div className="absolute top-4 left-1/2 -translate-x-1/2 w-18 h-3 rounded-bl-md rounded-br-md border-[4px] bg-zinc-900 border-zinc-900" />
              <div className="bg-zinc-900 h-[19px] rounded-tl-lg text-white rounded-tr-lg w-full top-0 left-0 absolute flex items-center justify-between px-3">
                <div className="text-[8px] font-medium">
                  {new Date().toString().slice(16, 21)}
                </div>
                <div className="flex gap-1">
                  <Wifi className="size-2" />
                  <IoCellular className="size-2" />
                  <Bluetooth className="size-2" />
                </div>
              </div>
              <motion.div
                layout="position"
                className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full pt-10 flex gap-2 items-center"
              >
                <motion.div
                  layout="position"
                  className="text-sm bg-zinc-900 text-white px-4 py-2 rounded-full flex transition-all hover:scale-105 hover:shadow-lg cursor-pointer items-center justify-center -mb-5 whitespace-nowrap"
                  onClick={() => {
                    if (playState !== "playing") {
                      video.current?.play();
                    } else {
                      video.current?.pause();
                    }
                  }}
                >
                  {playState === "playing" ? (
                    <Pause className="size-4 stroke-none fill-white mr-2 text-white" />
                  ) : (
                    <Play className="size-4 stroke-none fill-white mr-2 " />
                  )}
                  {playState === "playing" ? "Pause Demo" : "Start Demo"}
                </motion.div>
                {playState === "playing" && (
                  <motion.div
                    layout="position"
                    className="text-sm bg-zinc-50 text-zinc-800 border border-zinc-100 px-4 py-2 rounded-full flex transition-all hover:scale-105 hover:shadow-lg cursor-pointer items-center justify-center -mb-5 whitespace-nowrap"
                    onClick={() => {
                      if (video.current) {
                        video.current.currentTime = 0;
                      }
                    }}
                  >
                    <RiRestartLine className="size-4 mr-2 text-black" />
                    Restart
                  </motion.div>
                )}
              </motion.div>
            </div>

            {/*<img
              src="/iphone.png"
              className="min-w-[800px]  h-auto z-10 relative"
            />*/}
            <div
              className="absolute top-5 right-5"
              onClick={() => setOpen(false)}
            >
              <Plus className="size-6 rotate-45" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default VideoPlayer;
