"use client";

import React from "react";
import { useMediaQuery } from "usehooks-ts";

export default function Adaptive({
  desktop,
  mobile,
}: {
  desktop: React.ReactNode;
  mobile: React.ReactNode;
}) {
  const isMobile = useMediaQuery("(max-width: 768px)");
  return <>{isMobile ? mobile : desktop}</>;
}
