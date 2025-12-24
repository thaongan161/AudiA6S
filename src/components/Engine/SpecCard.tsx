"use client";

import { motion } from "framer-motion";

interface SpecCardProps {
  label: string;
  value: string;
  desc: string;
}

export default function SpecCard({
  label,
  value,
  desc,
}: SpecCardProps): JSX.Element {
  return (
    <motion.div
      initial="rest"
      whileHover="hover"
      animate="rest"
      className="group cursor-pointer"
    >
      <div
        className="
          px-8 py-6
          max-lg:px-6 max-lg:py-5
          max-md:px-4 max-md:py-4
        "
      >
        {/* Header */}
        <div className="flex items-center justify-between gap-4">
          <span
            className="
              uppercase tracking-widest text-xs text-white/80
              max-md:text-[10px]
            "
          >
            {label}
          </span>

          <span
            className="
              text-2xl font-light
              max-lg:text-xl
              max-md:text-lg
              whitespace-nowrap
            "
          >
            {value}
          </span>
        </div>

        {/* Divider */}
        <motion.div
          variants={{
            rest: { width: 0 },
            hover: { width: "100%" },
          }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="
            h-px bg-red-500 my-4
            max-md:my-3
          "
        />

        {/* Description */}
        <motion.p
          variants={{
            rest: { opacity: 0, height: 0 },
            hover: { opacity: 1, height: "auto" },
          }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="
            text-sm text-white/70 overflow-hidden max-w-[42ch]
            max-lg:max-w-[38ch]
            max-md:text-xs max-md:max-w-[32ch]
            max-md:opacity-100 max-md:h-auto
          "
        >s
          {desc}
        </motion.p>
      </div>
    </motion.div>
  );
}
