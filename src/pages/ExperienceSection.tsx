"use client";

import ExperienceHero from "@/components/Experience/ExperienceHero";
import ParallaxSection from "@/components/ParallaxEffect/ParallaxSection";
import HorizontalWrapper from "@/components/ParallaxEffect/HorizontalWrapper";
import ExperienceNReview from "@/pages/ExperienceNReview";

export default function ExperienceSection(): JSX.Element {
  const e1 = "/experience.jpg";
  const e2 = "/m_A251212_large.jpg";
  return (
    <section id="experience" className="text-white">
      <HorizontalWrapper>
        <ParallaxSection
          bg={e1}
          direction="both"
          parallax
          center={true}
        >
          <ExperienceHero />
        </ParallaxSection>

        <ParallaxSection
          bg={e2}
          direction="both"
          parallax
          center={true}
        >
          <ExperienceNReview />
        </ParallaxSection>

      </HorizontalWrapper>
    </section>
  );
}
