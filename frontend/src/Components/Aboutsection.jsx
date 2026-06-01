import React from "react";

export default function AboutComponent() {
  return (
    <section className="w-full bg-white text-zinc-950 py-20 md:py-25 px-6 md:px-12 lg:px-16 font-['Satoshi'] selection:bg-zinc-950 selection:text-white">
      <div className="w-full">
        <div className="flex flex-col pb-15">
          <h1 className="text-3xl md:text-5xl font-bold leading-none pb-4">
            Meet Petrocore
          </h1>
          <p className="text-md md:text-xl text-neutral-500">
            A Snapshot of Our Expertise
          </p>
        </div>

        <div className="w-full text-xl md:text-2xl text-neutral-700 flex flex-col gap-5">
          <p>
            Petrocore Workforce Solutions Private Limited is a specialized oil &
            gas service company delivering integrated solutions across Project
            Management Consultancy (PMC), Well Engineering, Execution Support,
            and Skilled Workforce deployment for Exploration & Production (E&P)
            projects.
          </p>
          <p>
            We support small to mid-sized operators, joint venture partners, and
            service companies in planning and executing drilling, field
            development, and workover campaigns with a strong focus on safety,
            efficiency, and cost control.
          </p>
          <p>
            Our team combines technical expertise with practical field
            experience to ensure smooth project execution from concept to
            completion. Our services cover complete project lifecycle support —
            including well planning and design, contractor coordination, onsite
            supervision, cost monitoring, risk management, and regulatory
            compliance. Through our integrated PMC and manpower model, we
            provide clients with a single-point, accountable solution that
            enhances operational performance and minimizes non-productive time.
          </p>
          <p>
            At Petrocore, we are committed to delivering technically sound,
            commercially efficient, and safety-driven solutions that help
            clients achieve reliable and sustainable field development outcomes.
          </p>
        </div>
      </div>
    </section>
  );
}
