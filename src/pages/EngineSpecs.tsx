"use client";

import SpecCard from "./SpecCard";

interface Spec {
  label: string;
  value: string;
  desc: string;
}

const specs: Spec[] = [
  {
    label: "Engine Output",
    value: "Up to 335 hp",
    desc: "Turbocharged performance with refined efficiency",
  },
  {
    label: "Acceleration",
    value: "0–100 km/h · 5.1 s",
    desc: "Effortless responsiveness on demand",
  },
  {
    label: "Drive System",
    value: "quattro® AWD",
    desc: "Balanced traction and confident handling",
  },
];

export default function EngineSpecs(): JSX.Element {
  return (
    <div className="space-y-10">
        <br></br>
      {specs.map((item) => (
        <SpecCard key={item.label} {...item} />
      ))}
    </div>
  );
}
