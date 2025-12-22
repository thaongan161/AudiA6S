"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";

// ⭐ Carousel quotes
const quotes = [
  {
    text: "The Audi A6 S-Line is a perfect balance of performance and luxury.",
    author: "MotorTrend"
  },
  {
    text: "A refined driving experience with intuitive technology inside.",
    author: "TopGear"
  },
  {
    text: "Comfortable, elegant, and sporty—this is Audi perfection.",
    author: "Autocar"
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
  const isInView = useInView(containerRef, { amount: 0.5 });

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
    const src = "https://www.youtube.com/embed/rJ5z2772o3s?autoplay=1&mute=0&controls=1&enablejsapi=1";
    if (isInView) videoRef.current.src = src;
    else videoRef.current.src = src.replace("autoplay=1", "autoplay=0");
  }, [isInView]);

  return (
    <section ref={containerRef} className="min-h-screen py-40 px-[10%] text-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">

        {/* LEFT — Info + Carousel + Stats */}
        <div className="space-y-10">
          <h2 className="text-5xl font-serif leading-tight">Experience & Reviews</h2>

          <p className="text-lg text-white/80 leading-relaxed">
            The all‑new Audi A6 S‑Line captivates with its refined aesthetic language,
            balancing sporty allure with timeless elegance in every curve and surface.
          </p>

          {/* ⭐ Carousel Quotes */}
          <div className="relative h-32 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentQuote}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6 }}
                className="absolute"
              >
                <p className="text-lg italic">{quotes[currentQuote].text}</p>
                <p className="mt-2 text-sm text-red-500">— {quotes[currentQuote].author}</p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* 📊 Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
            {stats.map((s) => (
              <div key={s.label} className="bg-white/10 p-6 rounded-2xl text-center">
                <p className="text-red-500 uppercase text-xs">{s.label}</p>
                <p className="mt-2 text-2xl font-semibold">{s.value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT — Video (portrait / phone style) */}
        <div className="flex justify-center items-start">
          <div className="w-[250px] sm:w-[280px] md:w-[300px] lg:w-[320px] aspect-[9/16] rounded-3xl overflow-hidden shadow-xl border border-white/10">
            <iframe
              ref={videoRef}
              className="w-full h-full"
              src="https://www.youtube.com/embed/rJ5z2772o3s?autoplay=0&mute=1&controls=1&enablejsapi=1"
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
