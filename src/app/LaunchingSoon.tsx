import { LucideDot, LucideStars } from "lucide-react"
import { motion } from "motion/react"

const LaunchingSoon = () => {
  return (
    <div className="text-xs xl:text-base z-20">
      <motion.div
        className="h-[50px] w-screen absolute bottom-0 left-0 flex items-center gap-8 text-zinc-500 bg-zinc-100 whitespace-nowrap"
        initial={{ x: "0%" }}
        animate={{ x: "-100%" }}
        transition={{
          duration: 20,
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop"
        }}
      >
        <div className="flex items-center justify-around w-full">
          <div className="-ml-[1px]">Launching soon</div>
          <span className="text-xl opacity-70">
            <LucideDot className="size-8" />
          </span>
          <div className="-ml-[1px] max-sm:hidden">Launching soon</div>
          <span className="text-xl opacity-70 max-sm:hidden">
            <LucideDot className="size-8" />
          </span>
          <div className="-ml-[1px] max-sm:hidden">Launching soon</div>
          <span className="text-xl opacity-70 max-sm:hidden">
            <LucideDot className="size-8" />
          </span>
          <div className="-ml-[1px] max-sm:hidden">Launching soon</div>
          <span className="text-xl opacity-70 max-sm:hidden">
            <LucideDot className="size-8" />
          </span>
          <div className="-ml-[1px] max-xl:hidden">Launching soon</div>
          <span className="text-xl opacity-70 max-xl:hidden">
            <LucideDot className="size-8 max-xl:hidden" />
          </span>
          <div className="-ml-[1px] max-xl:hidden">Launching soon</div>
          <span className="text-xl opacity-70 max-xl:hidden">
            <LucideDot className="size-8" />
          </span>
          <div className="-ml-[1px] max-xl:hidden">Launching soon</div>
          <span className="text-xl opacity-7 max-xl:hidden">
            <LucideDot className="size-8" />
          </span>
        </div>
      </motion.div>

      <motion.div
        className="h-[50px] absolute bottom-0 left-0 w-screen flex items-center text-zinc-500 bg-zinc-100 whitespace-nowrap -ml-[1px]"
        initial={{ x: "100%" }}
        animate={{ x: "0%" }}
        transition={{
          duration: 20,
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop"
        }}
      >
        <div className="flex items-center justify-around w-full">
          <div>Launching soon</div>
          <span className="text-xl opacity-70">
            <LucideDot className="size-8" />
          </span>
          <div className="max-sm:hidden">Launching soon</div>
          <span className="text-xl opacity-70 max-sm:hidden">
            <LucideDot className="size-8" />
          </span>
          <div className="max-sm:hidden">Launching soon</div>
          <span className="text-xl opacity-70 max-sm:hidden">
            <LucideDot className="size-8" />
          </span>
          <div className="max-sm:hidden ">Launching soon</div>
          <span className="text-xl opacity-70 max-sm:hidden">
            <LucideDot className="size-8" />
          </span>
          <div className="-ml-[1px] max-xl:hidden">Launching soon</div>
          <span className="text-xl opacity-70  max-xl:hidden">
            <LucideDot className="size-8" />
          </span>
          <div className="-ml-[1px] max-xl:hidden">Launching soon</div>
          <span className="text-xl opacity-70 max-xl:hidden">
            <LucideDot className="size-8" />
          </span>
          <div className="-ml-[1px] max-xl:hidden">Launching soon</div>
          <span className="text-xl opacity-70 max-xl:hidden">
            <LucideDot className="size-8" />
          </span>
        </div>
      </motion.div>
    </div>
  )
}

export default LaunchingSoon
