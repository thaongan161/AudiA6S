"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";

// ⭐ Carousel quotes
const quotes = [
  {
    text: "The Audi A6 S-Line is a perfect balance of performance and luxury.",
    author: "MotorTrend",
  },
  {
    text: "A refined driving experience with intuitive technology inside.",
    author: "TopGear",
  },
  {
    text: "Comfortable, elegant, and sporty—this is Audi perfection.",
    author: "Autocar",
  },
];

// 📊 Stats
const stats = [
  { label: "Engine Output", value: "335 hp" },
  { label: "0–100 km/h", value: "5.1 s" },
  { label: "Drive System", value: "quattro® AWD" },
];

export default function ExperienceNReview(): JSX.Element {
  const [currentQuote, setCurrentQuote] = useState(0);
  const videoRef = useRef<HTMLIFrameElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { amount: 0.4 });

  // ⭐ Carousel auto
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // 🕹 Auto play video when in view
  useEffect(() => {
    if (!videoRef.current) return;
    const base =
      "https://www.youtube.com/embed/rJ5z2772o3s?mute=1&controls=1&enablejsapi=1";

    videoRef.current.src = isInView
      ? `${base}&autoplay=1`
      : `${base}&autoplay=0`;
  }, [isInView]);

  return (
    <section
      id="experience"
      ref={containerRef}
      className="
        text-white
        px-4 sm:px-6 md:px-8
        py-6 sm:py-8 lg:py-40
        min-h-[auto] lg:min-h-screen
      "
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-20 items-start">
        {/* LEFT — Info + Carousel + Stats */}
        <div className="space-y-2 sm:space-y-3 lg:space-y-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif leading-tight">
            Experience & Reviews
          </h2>

          <p className="text-sm sm:text-base lg:text-lg text-white/80 leading-relaxed max-w-[60ch]">
            The all-new Audi A6 S-Line captivates with its refined aesthetic
            language, balancing sporty allure with timeless elegance in every
            curve and surface.
          </p>

          {/* ⭐ Carousel Quotes */}
          <div className="relative h-24 sm:h-28 lg:h-32 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentQuote}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6 }}
                className="absolute"
              >
                <p className="text-sm sm:text-base lg:text-lg italic">
                  {quotes[currentQuote].text}
                </p>
                <p className="mt-1 text-xs sm:text-sm text-red-500">
                  — {quotes[currentQuote].author}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* 📊 Stats */}
          <div className="grid grid-cols-3 gap-2 sm:gap-4 mt-2">
            {stats.map((s) => (
              <div
                key={s.label}
                className="bg-white/10 p-2 sm:p-4 rounded-2xl text-center"
              >
                <p className="text-red-500 uppercase text-xs sm:text-xs">
                  {s.label}
                </p>
                <p className="mt-1 sm:mt-2 text-xl sm:text-2xl font-semibold">
                  {s.value}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT — Video */}
        <div className="flex justify-center lg:justify-center mt-4 lg:mt-0">
          <div
            className="
              w-[120px] sm:w-[180px] md:w-[200px] lg:w-[320px]
              aspect-[9/16]
              rounded-3xl
              overflow-hidden
              shadow-xl
              border border-white/10
            "
          >
            <iframe
              ref={videoRef}
              className="w-full h-full"
              title="Audi A6 S Experience"
              allow="autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}
