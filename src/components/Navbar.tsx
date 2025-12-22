"use client";

import React from "react";
import Logo from "@/../public/logo.svg";

const Navbar = () => {
  const sections = ["overview", "engine", "experience", "contact"];

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
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

export default Navbar;
