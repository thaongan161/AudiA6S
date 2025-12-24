"use client";

import { motion } from "framer-motion";

const STORY = [
  "Beneath the sculpted silhouette of the Audi A6 S lies a turbocharged engine engineered for immediacy and composure.",
  "Power arrives effortlessly — never abrupt, always intentional.",
  "Advanced drivetrain calibration and quattro® all-wheel drive work in harmony to deliver balanced traction and precise handling.",
  "Every acceleration is refined. Every response measured.",
  "Performance — perfected through engineering discipline.",
];

export default function EngineStoryInfinite(): JSX.Element {
  return (
    <div
      className="
        relative overflow-hidden max-w-2xl
        h-[460px]
        max-lg:h-[360px]
        max-md:h-[260px]
      "
    >
      {/* Mask top & bottom */}
      <div className="pointer-events-none absolute top-0 left-0 w-full h-16 z-10" />
      <div className="pointer-events-none absolute bottom-0 left-0 w-full h-16 z-10" />

      <motion.div
        className="
          text-white/80
          text-lg
          leading-8
          space-y-10
          max-w-[60ch]

          max-lg:text-base
          max-lg:leading-7
          max-lg:space-y-6

          max-md:text-sm
          max-md:leading-6
          max-md:space-y-4
          max-md:max-w-[44ch]
        "
        animate={{ y: ["0%", "-50%"] }}
        transition={{
          duration: 28,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {[...STORY, ...STORY].map((text, index) => (
          <p
            key={index}
            className="
              max-w-[55ch]
              max-lg:max-w-[48ch]
              max-md:max-w-full
            "
          >
            {text}
          </p>
        ))}
      </motion.div>
    </div>
  );
}
