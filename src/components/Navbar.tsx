import React from "react";

import Logo from "@/../public/logo.svg";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="absolute inset-x-0 top-0 h-16 flex justify-between items-center px-20 bg-gradient-to-b from-black to-black/0">
      <Logo className="w-20 h-20" />
      <div className="flex gap-6">
        <Link href="#">Overview</Link>
        <Link href="#">Engine</Link>
        <Link href="#">Experience</Link>
        <Link href="#">Collection</Link>
        <Link href="#">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
