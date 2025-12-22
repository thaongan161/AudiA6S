"use client";

import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";

import Section from "@/components/ParallaxEffect/Section";
import HeroSection from "@/components/HeroSection";
import Overview from "./Overview";

import BgIntro from "@/../public/AudiA6SIntro.jpg";
import m_A251212_large from "@/../public/m_A251212_large.jpg";
import A250151_large from "@/../public/A250151_large.gif";

import EngineSection from "./EngineSection";

import ContactForm from "./ContactForm";
// import ExperienceSection from "./ExperienceSection";
import ExperienceNReview from "@/pages/ExperienceNReview";

export default function Home() {

  useEffect(() => {
    const lenis = new Lenis();

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);
  
  return (
    <main className="min-h-screen">
      <HeroSection />

      {/* Overview Section with background image */}
      <Section image={A250151_large}>
        <Overview />
      </Section>

      <Section image={BgIntro}>
        <EngineSection />
      </Section>
      
      {/* <ExperienceSection /> */}
      <Section image={m_A251212_large}>
        <ExperienceNReview />
      </Section>
      <ContactForm />
    </main>
  );
}
