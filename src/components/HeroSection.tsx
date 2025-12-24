"use client";

import React from "react";
import Navbar from "./Navbar";

const HeroSection = () => {
  return (
    <section className="relative h-screen flex flex-col justify-center overflow-hidden text-white">
      <Navbar />

      {/* Background video */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-black/45 z-10" />
        <video
          className="w-full h-full object-cover scale-105"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/audi_a6_Intro.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Content */}
      <div className="flex flex-col items-center gap-28 max-md:gap-18">
        {/* Headline */}
        <div className="flex flex-col items-center gap-10 max-md:gap-8 px-6 text-center">
          <span className="uppercase tracking-[0.35em] text-xs text-white/70">
            Audi A6
          </span>

          {/* Scale đều – không đổi bố cục */}
          <h1 className="text-6xl md:text-7xl max-md:text-5xl max-w-[16ch] font-serif leading-[1.1]">
            Progress,
            <br />
            shaped by intelligence.
          </h1>

          <p className="max-w-[45ch] max-md:max-w-[42ch] text-white/75 leading-relaxed text-base max-md:text-sm">
            A statement of modern luxury — where precision engineering,
            digital innovation, and timeless design come together to
            create an experience that moves with purpose.
          </p>

          <button className="bg-white text-black uppercase px-10 py-3 max-md:px-9 max-md:py-2.5 rounded-md tracking-[0.2em] hover:bg-neutral-200 transition text-sm">
            Stay informed
          </button>
        </div>

        {/* Highlights */}
        {/* Desktop & Mobile dùng CÙNG layout */}
        <div
          className="
            flex justify-between w-3/5 max-w-[960px]
            max-md:w-[92%]
          "
        >
          <HighlightItem
            title="Performance"
            content="Up to 335 hp"
            sub="Balanced power & efficiency"
          />

          <Divider />

          <HighlightItem
            title="Drive"
            content="quattro® AWD"
            sub="Confidence in every condition"
          />

          <Divider />

          <HighlightItem
            title="Acceleration"
            content="0–100 km/h · 5.1 s"
            sub="Effortless responsiveness"
          />

          <Divider />

          <HighlightItem
            title="Digital Interior"
            content="Dual Touch MMI"
            sub="Intuitive by design"
          />
        </div>
      </div>
    </section>
  );
};

const Divider = () => (
  <div className="flex items-center">
    <div className="h-16 md:h-20 w-px bg-white/30 max-md:h-12" />
  </div>
);

const HighlightItem: React.FC<{
  title: string;
  content: string;
  sub: string;
}> = ({ title, content, sub }) => {
  return (
    <div className="flex flex-col items-center gap-3 max-md:gap-2 text-center">
      <span className="uppercase text-xs tracking-widest text-white/60 max-md:text-[10px]">
        {title}
      </span>

      <p className="text-2xl max-md:text-lg font-light">
        {content}
      </p>

      <span className="text-xs text-white/50 max-w-[14ch] max-md:text-[10px]">
        {sub}
      </span>
    </div>
  );
};

export default HeroSection;
