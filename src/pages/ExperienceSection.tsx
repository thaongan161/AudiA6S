"use client";

import ExperienceHero from "@/components/ExperienceHero";
import DrivingExperience from "@/components/DrivingExperience";
import InteriorExperience from "@/components/InteriorExperience";
import TechnologyExperience from "@/components/TechnologyExperience";

export default function ExperienceSection(): JSX.Element {
  return (
    <main className="text-white">
      <ExperienceHero />
      <DrivingExperience />
      <InteriorExperience />
      <TechnologyExperience />
    </main>
  );
}
