"use client";

import { useEffect, useRef, useState } from "react";
import { PartyPopper, Play, Plus } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Noise, useNoiseConfig } from "react-noise";
import "react-noise/css";

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
      [...document.querySelectorAll("#video-player .video")].forEach((el) =>
        el?.pause(),
      );
    } else {
      [...document.querySelectorAll("#video-player .video")].forEach((el) =>
        el?.play(),
      );
    }
  }, [open]);

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
              className="w-full h-full object-cover absolute top-0 left-0 video"
              style={{ opacity: i === index ? 1 : 0 }}
              muted
              autoPlay={!open}
              loop
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
            <video
              className="w-[250px] h-[550px] rounded-[20px] object-cover absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-0"
              src={videos[0]}
              autoPlay
              playsInline
              loop
              muted
            />
            <img src="/iphone.png" className="w-[650px] h-auto z-10 relative" />
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
