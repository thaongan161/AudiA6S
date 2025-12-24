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
    <section
      id="overview"
      className="
        mx-auto
        max-w-[1400px]
        px-16 lg:px-12 md:px-8 px-4
        grid
        grid-cols-1
        lg:grid-cols-2
        gap-[clamp(3rem,7vw,6rem)]
        items-center
      "
    >
      {/* LEFT – TEXT */}
      <div className="space-y-10 md:space-y-8">
        <span className="uppercase tracking-[0.35em] text-xs text-red-500">
          Overview
        </span>

        <h2
          className="
            font-serif
            leading-tight
            text-[clamp(2.1rem,4vw,3.2rem)]
          "
        >
          Intelligence,
          <br />
          expressed with elegance.
        </h2>

        <p
          className="
            text-white/75
            leading-relaxed
            max-w-[45ch]
            md:max-w-[42ch]
            max-md:max-w-full
          "
        >
          The Audi A6 balances progressive design with intelligent technology,
          delivering a composed driving experience defined by confidence
          and precision.
        </p>
      </div>

      {/* RIGHT – CARDS */}
      <div
        className="
          grid
          grid-cols-2
          gap-6
          sm:gap-8
          md:gap-10
        "
      >
        {highlights.map((item) => (
          <motion.div
            key={item.title}
            initial="rest"
            whileHover="hover"
            animate="rest"
            className="relative cursor-pointer"
          >
            <div
              className="
                border border-white/20
                bg-white/5
                backdrop-blur-sm

                rounded-xl sm:rounded-2xl
                px-4 py-4
                sm:px-5 sm:py-5
                md:px-7 md:py-6

                h-full
              "
            >
              <h3
                className="
                  font-medium
                  mb-2
                  leading-snug
                  text-[0.85rem]
                  sm:text-[0.95rem]
                  md:text-[1rem]
                "
              >
                {item.title}
              </h3>

              <motion.p
                variants={{
                  rest: {
                    opacity: 0,
                    y: -8,
                    height: 0,
                  },
                  hover: {
                    opacity: 1,
                    y: 0,
                    height: "auto",
                  },
                }}
                transition={{
                  duration: 0.35,
                  ease: "easeOut",
                }}
                className="
                  text-white/70
                  leading-relaxed
                  overflow-hidden

                  text-[0.75rem]
                  sm:text-[0.8rem]
                  md:text-[0.875rem]
                "
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
