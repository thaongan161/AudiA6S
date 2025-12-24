"use client";

import { useEffect, useState } from "react";

export interface BreakpointState {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
}

export function useBreakpoint(): BreakpointState {
  const [state, setState] = useState<BreakpointState>({
    isMobile: false,
    isTablet: false,
    isDesktop: true, // default desktop để tránh layout nhảy khi SSR
  });

  useEffect(() => {
    const mobileQuery = window.matchMedia("(max-width: 767px)");
    const tabletQuery = window.matchMedia(
      "(min-width: 768px) and (max-width: 1023px)"
    );
    const desktopQuery = window.matchMedia("(min-width: 1024px)");

    const update = () => {
      setState({
        isMobile: mobileQuery.matches,
        isTablet: tabletQuery.matches,
        isDesktop: desktopQuery.matches,
      });
    };

    // init lần đầu
    update();

    mobileQuery.addEventListener("change", update);
    tabletQuery.addEventListener("change", update);
    desktopQuery.addEventListener("change", update);

    return () => {
      mobileQuery.removeEventListener("change", update);
      tabletQuery.removeEventListener("change", update);
      desktopQuery.removeEventListener("change", update);
    };
  }, []);

  return state;
}
