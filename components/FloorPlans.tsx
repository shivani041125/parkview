"use client";

import { useState } from "react";

const plans = [
  {
    id: "west",
    label: "2 BHK · West",
    title: "2 BHK — West View",
    size: "1200 Sq.ft.",
    flat: "Flat No. 2, 3, 6, 7, 10",
    image: "/images/floorplans/west-2bhk.png",
  },
  {
    id: "east",
    label: "2 BHK · East",
    title: "2 BHK — East View",
    size: "1200 Sq.ft.",
    flat: "Flat No. 1, 4, 5, 8, 9, 11, 12",
    image: "/images/floorplans/east-2bhk.png",
  },
  {
    id: "north",
    label: "3 BHK · North",
    title: "3 BHK — North View",
    size: "1400 Sq.ft.",
    flat: "Flat No. 13",
    image: "/images/floorplans/north-3bhk.png",
  },
];

export default function FloorPlans() {
  const [active, setActive] = useState(plans[1]);

  return (
    <>
      {/* ===== Typical Floor Plan ===== */}
      <section className="bg-[#0b3543] py-12 md:py-14">
        <div className="mx-auto max-w-6xl px-5 md:px-8 lg:px-10">
          <div className="mb-8 text-center">
            <p className="text-[11px] font-medium uppercase tracking-[0.35em] text-[#b38a4a]">
              Typical Floor Plan
            </p>

            <h2 className="mt-2 font-serif text-3xl leading-tight text-[#f8f7f3] md:text-4xl">
              A Well-Planned Community Layout
            </h2>

            <p className="mx-auto mt-3 max-w-2xl text-[15px] leading-6 text-[#f8f7f3]/75">
              The typical floor arrangement is thoughtfully designed to maximize
              ventilation, privacy and efficient circulation across all
              residences.
            </p>
          </div>

          <div className="overflow-hidden rounded-2xl border border-[#f8f7f3]/10 bg-[#ffffff] p-3 md:p-5">
            <img
              src="/images/floorplans/typical-floor-plan.jpg"
              alt="Typical Floor Plan"
              className="h-auto w-full object-contain"
            />
          </div>
        </div>
      </section>

      {/* ===== Interactive Unit Plans ===== */}
      <section className="bg-[#f8f7f3] py-10 md:py-12">
        <div className="mx-auto max-w-6xl px-5 md:px-8 lg:px-10">
          <div className="text-center">
            <p className="text-[11px] font-medium uppercase tracking-[0.35em] text-[#b38a4a]">
              Unit Layouts
            </p>

            <h2 className="mt-2 font-serif text-3xl leading-tight text-[#0b3543] md:text-4xl">
              Explore Individual Floor Plans
            </h2>

            <p className="mx-auto mt-3 max-w-xl text-[15px] leading-6 text-[#0b3543]/70">
              Compare our thoughtfully designed 2 BHK and 3 BHK residences to
              find the layout that suits your lifestyle.
            </p>
          </div>

          {/* Buttons */}
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            {plans.map((plan) => (
              <button
                key={plan.id}
                onClick={() => setActive(plan)}
                className={`rounded-full px-4 py-2 text-xs font-medium transition ${
                  active.id === plan.id
                    ? "bg-[#b38a4a] text-[#f8f7f3]"
                    : "border border-[#0b3543]/15 bg-white text-[#0b3543] hover:border-[#b38a4a]"
                }`}
              >
                {plan.label}
              </button>
            ))}
          </div>

          {/* Floor Plan Display */}
          <div className="mt-6 flex justify-center">
            <div className="w-full max-w-4xl rounded-[24px] bg-[#ffffff] px-3 py-6 md:px-4 md:py-8">
              <div className="mb-4 text-center">
                <h3 className="font-serif text-xl text-[#0b3543]">
                  {active.title}
                </h3>

                <p className="mt-1 text-sm text-[#0b3543]/70">
                  {active.size} • {active.flat}
                </p>
              </div>

              <img
                src={active.image}
                alt={active.title}
                className="mx-auto h-auto w-full max-w-2xl object-contain"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
