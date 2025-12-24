"use client";

import EngineStory from "@/components/Engine/EngineStory";
import EngineSpecs from "@/components/Engine/EngineSpecs";

export default function EngineSection(): JSX.Element {
  return (
    <section
      id="engine"
      className="
        min-h-screen text-white
        py-40
        max-lg:py-28
        max-md:py-20
      "
    >
      <div
        className="
          mx-auto max-w-[1400px]
          px-16
          max-lg:px-10
          max-md:px-6
        "
      >
        <div
          className="
            grid grid-cols-1 lg:grid-cols-2
            gap-32
            max-lg:gap-20
            max-md:gap-12
            items-start
          "
        >
          {/* LEFT — Story */}
          <div className="flex justify-center">
            <div
              className="
                max-w-[640px]
                space-y-24
                sticky top-24

                max-lg:space-y-16
                max-lg:top-20

                max-md:static
                max-md:space-y-10
              "
            >
              {/* Title */}
              <div>
                <span className="uppercase tracking-[0.35em] text-xs text-red-500">
                  Performance
                </span>

                <h2
                  className="
                    mt-6 text-7xl font-serif leading-tight
                    max-lg:text-6xl
                    max-md:text-4xl
                  "
                >
                  Engine
                </h2>

                <EngineStory />
              </div>
            </div>
          </div>

          {/* RIGHT — Specs */}
          <div className="flex justify-center">
            <div
              className="
                w-full max-w-[600px]
                max-md:max-w-full
              "
            >
              <EngineSpecs />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
