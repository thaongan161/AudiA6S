"use client";

import React from "react";
import Logo from "@/../public/logo.svg";

const NavbarH = () => {
  const sections = ["overview", "engine", "experience", "contact"];

const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (!element) return;

  const navbarHeight = 64; // chiều cao navbar
  const startY = window.scrollY;
  const targetY = element.getBoundingClientRect().top + startY - navbarHeight;
  const distance = targetY - startY;
  const duration = 600; // thời gian scroll (ms)
  let startTime: number | null = null;

  // easing nhẹ nhàng, smooth
  const easeInOutQuad = (t: number) =>
    t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;

  const animate = (currentTime: number) => {
    if (startTime === null) startTime = currentTime;
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const eased = easeInOutQuad(progress);

    window.scrollTo(0, startY + distance * eased);

    if (progress < 1) {
      requestAnimationFrame(animate);
    }
  };

  requestAnimationFrame(animate);
};


  return (
    <nav className="fixed inset-x-0 top-0 h-16 flex justify-between items-center px-10 lg:px-20 bg-gradient-to-b from-black to-black/0 z-50">
      <Logo className="w-20 h-20" />
      <div className="flex gap-6">
        {sections.map((section) => (
          <button
            key={section}
            onClick={() => scrollToSection(section)}
            className="hover:text-red-500 transition text-white"
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default NavbarH;
