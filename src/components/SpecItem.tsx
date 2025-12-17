"use client";

import React from "react";
import { motion } from "framer-motion";

const specs = [
  {
    label: "Engine Output",
    value: "Up to 335 hp",
    desc: "Turbocharged performance with refined efficiency",
  },
  {
    label: "Acceleration",
    value: "0–100 km/h · 5.1 s",
    desc: "Effortless responsiveness on demand",
  },
  {
    label: "Drive System",
    value: "quattro® AWD",
    desc: "Balanced traction and confident handling",
  },
];

export default function SpecItem({ item }: { item: typeof specs[number] }) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 160, damping: 18 }}
      className="relative pt-6 pl-10 cursor-pointer"
    >
      {/* RED LINE */}
      <motion.span
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="absolute left-0 top-0 h-[2px] w-full bg-red-600 origin-left"
      />

      <span className="uppercase text-xs tracking-widest text-white/60">
        {item.label}
      </span>

      <h3 className="text-3xl font-light mt-2">
        {item.value}
      </h3>

      <p className="text-white/60 mt-2 max-w-[32ch]">
        {item.desc}
      </p>
    </motion.div>
  );
}
