"use client";

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

import Section from "@/components/Section";
import HeroSection from "@/components/HeroSection";
import Overview from "./Overview";

import BgIntro from "@/../public/AudiA6SIntro.jpg";
import EngineSection from "./EngineSection";
import ExperienceHero from "@/components/ExperienceHero";
import DrivingExperience from "@/components/DrivingExperience";
import InteriorExperience from "@/components/InteriorExperience";
import TechnologyExperience from "@/components/TechnologyExperience";
import HorizontalWrapper from "@/components/HorizontalWrapper";
import ParallaxSection from "@/components/ParallaxSection";
import ContactPage from "./ContactForm";
import ContactForm from "./ContactForm";

export default function Home() {
  const bg1 = "/experience.jpg";
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
      <Section image={BgIntro}>
        <Overview />
      </Section>

      <Section image={BgIntro}>
        <EngineSection />
      </Section>
      
      <HorizontalWrapper>
        <ParallaxSection
          bg={bg1}
          direction="both"
          parallax
          center={false}
        >
          <ExperienceHero />
        </ParallaxSection>

        <ParallaxSection
          bg={bg1}
          direction="both"
          parallax
          center={false}
        >
          <DrivingExperience />
        </ParallaxSection>

        <ParallaxSection
          bg={bg1}
          direction="both"
          parallax
          center={false}
        >
          <InteriorExperience />
        </ParallaxSection>

        <ParallaxSection
          bg={bg1}
          direction="both"
          parallax
          center={false}
        >
          <TechnologyExperience />
        </ParallaxSection>
      </HorizontalWrapper>
      <ContactForm />
    </main>
  );
}
