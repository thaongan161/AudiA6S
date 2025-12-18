"use client";

import EngineStory from "@/components/Engine/EngineStory";
import EngineSpecs from "@/components/Engine/EngineSpecs";

export default function EngineSection(): JSX.Element {
  return (
    <section id="engine" className="min-h-screen py-40 text-white">
      <div className="mx-auto max-w-[1400px] px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-start">
          
          {/* LEFT — Story */}
          <div className="flex justify-center">
            <div className="sticky top-24 space-y-24 max-w-[640px]">
              {/* Title */}
              <div>
                <span className="uppercase tracking-[0.35em] text-xs text-red-500">
                  Performance
                </span>
                <h2 className="mt-6 text-7xl font-serif leading-tight">
                  Engine
                </h2>
              <EngineStory />

              </div>
            </div>
          </div>

          {/* RIGHT — Specs */}
          <div className="flex justify-center">
            <div className="max-w-[600px] w-full">
              <EngineSpecs />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
