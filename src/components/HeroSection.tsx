import React from "react";
import Navbar from "./Navbar";

const HeroSection = () => {
  return (
    <section className="relative h-screen flex flex-col justify-center overflow-hidden">
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
      <div className="flex flex-col items-center gap-28">
        {/* Headline */}
        <div className="flex flex-col items-center gap-10">
          <span className="uppercase tracking-[0.35em] text-xs text-white/70">
            Audi A6
          </span>

          <h1 className="text-6xl md:text-7xl max-w-[16ch] text-center font-serif leading-[1.1]">
            Progress,
            <br />
            shaped by intelligence.
          </h1>

          <p className="max-w-[45ch] text-center text-white/75 leading-relaxed">
            A statement of modern luxury — where precision engineering,
            digital innovation, and timeless design come together to
            create an experience that moves with purpose.
          </p>

          <button className="bg-white text-black uppercase px-10 py-3 rounded-md tracking-[0.2em] hover:bg-neutral-200 transition">
            Stay informed
          </button>
        </div>

        {/* Highlights */}
        <div className="flex justify-between w-3/5 max-w-[960px]">
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
  <div className="h-full w-[1px] bg-white/30" />
);

const HighlightItem: React.FC<{
  title: string;
  content: string;
  sub: string;
}> = ({ title, content, sub }) => {
  return (
    <div className="flex flex-col items-center gap-3 text-center">
      <span className="uppercase text-xs tracking-widest text-white/60">
        {title}
      </span>
      <p className="text-2xl font-light">{content}</p>
      <span className="text-xs text-white/50 max-w-[14ch]">
        {sub}
      </span>
    </div>
  );
};

export default HeroSection;
