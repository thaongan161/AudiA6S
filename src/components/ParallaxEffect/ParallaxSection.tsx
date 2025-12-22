"use client";

import React,{ useRef } from "react";
import { MotionValue, useScroll, useTransform } from "framer-motion";
import ParallaxBackground from "./ParallaxBackground";

interface SectionProps {
  bg?: string;
  children?: React.ReactNode;
  parallax?: boolean;
  direction?: "vertical" | "horizontal" | "both";
  height?: string;
  center?: boolean;
  overlay?: string;
  horizontalProgress?: MotionValue<number>;
}

export default function ParallaxSection({
  bg,
  children,
  parallax = true,
  direction = "vertical",
  height = "h-screen",
  center = false,
  overlay = "",
  horizontalProgress,
}: SectionProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    parallax && (direction === "vertical" || direction === "both")
      ? ["-20%", "10%"]
      : ["0%", "0%"]
  );


  const x = useTransform(
    horizontalProgress ?? scrollYProgress,
    [0, 1],
    parallax && (direction === "horizontal" || direction === "both")
      ? ["10%", "-10%"]
      : ["0%", "0%"]
  );

  return (
    <section ref={ref} className={`relative w-screen overflow-hidden ${height}`}>
      {bg && (
        <ParallaxBackground
          bg={bg}
          x={direction !== "vertical" ? x : undefined}
          y={direction !== "horizontal" ? y : undefined}
          overlay={overlay}
          direction={direction}
        />
      )}
      <div
        className={`relative z-20 w-full h-full ${
          center ? "flex items-center justify-center" : "p-[5vw]"
        }`}
      >
        {children}
      </div>
    </section>
  );
}
