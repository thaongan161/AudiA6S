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
    <div className="relative h-[460px] overflow-hidden max-w-2xl">
      {/* Mask top & bottom (optional, luxury fade) */}
      <div className="pointer-events-none absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-black to-transparent z-10" />
      <div className="pointer-events-none absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-black to-transparent z-10" />

      <motion.div
        className="
  space-y-10
  text-white/80
  text-lg
  leading-8
  max-w-[60ch]
"

        animate={{ y: ["0%", "-50%"] }}
        transition={{
          duration: 28,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {/* Duplicate content for seamless loop */}
        {[...STORY, ...STORY].map((text, index) => (
          <p key={index} className="max-w-[55ch]">
            {text}
          </p>
        ))}
      </motion.div>
    </div>
  );
}
