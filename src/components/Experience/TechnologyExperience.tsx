export default function TechnologyExperience() {
  return (
    <section className="px-[10%] py-40 grid md:grid-cols-3 gap-16">
      {[
        "Virtual Cockpit Plus",
        "MMI Touch Response",
        "Advanced Driver Assistance",
      ].map((item) => (
        <div key={item} className="space-y-4">
          <h3 className="text-2xl font-light">{item}</h3>
          <p className="text-white/60">
            Technology designed to serve, not distract.
          </p>
        </div>
      ))}
    </section>
  );
}
