"use client";

import React from "react";
import { motion } from "framer-motion";

const highlights = [
  {
    title: "Progressive Design",
    desc: "A refined silhouette defined by sharp lines, a wide Singleframe grille, and a confident, athletic stance.",
  },
  {
    title: "Digital Intelligence",
    desc: "A fully connected cockpit featuring Audi Virtual Cockpit and dual-touch MMI displays.",
  },
  {
    title: "quattro® Confidence",
    desc: "Legendary all-wheel drive delivering composed handling and assured traction.",
  },
  {
    title: "Crafted Interior",
    desc: "Premium materials, precision detailing, and ambient lighting create a calm, focused space.",
  },
];

export default function Overview(): JSX.Element {
  return (
    <section id="overview" className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-24 items-center">
      {/* LEFT – TEXT */}
      <div className="space-y-10">
        <span className="uppercase tracking-[0.35em] text-xs text-red-500">
          Overview
        </span>

        <h2 className="text-4xl md:text-5xl font-serif leading-tight">
          Intelligence,
          <br />
          expressed with elegance.
        </h2>

        <p className="text-white/75 leading-relaxed max-w-[45ch]">
          The Audi A6 balances progressive design with intelligent technology,
          delivering a composed driving experience defined by confidence
          and precision.
        </p>
      </div>

      {/* RIGHT – HOVER CARDS */}
      <div className="grid sm:grid-cols-2 gap-10">
        {highlights.map((item) => (
          <motion.div
            key={item.title}
            initial="rest"
            whileHover="hover"
            animate="rest"
            className="relative cursor-pointer"
          >
            {/* Card container */}
            <div className="border border-white/20 rounded-2xl px-8 py-6 backdrop-blur-sm bg-white/5">
              <h3 className="text-lg font-medium mb-2">
                {item.title}
              </h3>

              {/* Hidden description */}
              <motion.p
                variants={{
                  rest: {
                    opacity: 0,
                    y: -10,
                    height: 0,
                  },
                  hover: {
                    opacity: 1,
                    y: 0,
                    height: "auto",
                  },
                }}
                transition={{
                  duration: 0.4,
                  ease: "easeOut",
                }}
                className="text-sm text-white/70 overflow-hidden"
              >
                {item.desc}
              </motion.p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
