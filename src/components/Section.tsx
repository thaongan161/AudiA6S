import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import Image, { StaticImageData } from "next/image";

interface SectionProps {
  image: StaticImageData;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ image, children }) => {
  const sectionRef = useRef<HTMLElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "10%"]);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen overflow-hidden"
    >
      {/* Background image with parallax */}
      <motion.div
        className="absolute inset-0 h-[120%] -z-10"
        style={{ y }}
      >
        <div className="absolute inset-0 z-10" />
        <Image
          src={image}
          alt="Section background"
          fill
          className="object-cover"
          priority
        />
      </motion.div>

      {/* Content slot */}
      <div className="relative z-20 h-full flex items-center px-24">
        {children}
      </div>
    </section>
  );
};

export default Section;
