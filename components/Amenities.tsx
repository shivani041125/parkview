import {
  Building2,
  DoorOpen,
  Grid2x2,
  Paintbrush,
  CookingPot,
  Bath,
  ArrowUpDown,
  Trees,
  Droplet,
  Car,
  Zap,
  Cable,
} from "lucide-react";

const rows = [
  [
    {
      icon: Building2,
      title: "Structure & Super Structure",
      desc: "RCC framed structure designed to withstand wind and seismic loads. Standard cement machine compressed bricks.",
    },
    {
      icon: Droplet,
      title: "Water Supply",
      desc: "Adequate supply of water from borewell.",
    },
  ],
  [
    {
      icon: DoorOpen,
      title: "Doors & Windows",
      desc: "Teak wood main door and premium UPVC windows with mosquito mesh.",
    },
    {
      icon: Car,
      title: "Parking",
      desc: "Cellar floor covered parking with driveways.",
    },
  ],
  [
    {
      icon: Grid2x2,
      title: "Flooring",
      desc: "Vitrified tiles of 2×2 size of reputed make.",
    },
    {
      icon: Zap,
      title: "Generator",
      desc: "Power backup for one tube light and one fan for each flat.",
    },
  ],
  [
    {
      icon: Paintbrush,
      title: "Painting",
      desc: "Premium quality interior and exterior weatherproof paints for a lasting finish.",
    },
    {
      icon: Cable,
      title: "Electrical",
      desc: "Concealed copper wiring with modular switches and premium quality fittings.",
    },
  ],
  [
    {
      icon: CookingPot,
      title: "Kitchen",
      desc: "Granite platform with stainless steel sink and glazed tile dado.",
    },
    {
      icon: ArrowUpDown,
      title: "Elevator",
      desc: "Two lifts with 6 persons capacity standard company lift.",
    },
  ],
  [
    {
      icon: Bath,
      title: "Toilets",
      desc: "Glazed ceramic tiles with premium CP fittings and sanitary ware.",
    },
    {
      icon: Trees,
      title: "Rooftop Amenities",
      desc: "Children's play area, swimming pool, rooftop garden, open gym and terrace.",
    },
  ],
];

export default function Amenities() {
  return (
    <section className="border-t border-[#b38a4a]/20 bg-[#eeeae1] py-12 md:py-14">
      <div className="mx-auto max-w-6xl px-5 md:px-8 lg:px-10">
        {/* Heading */}
        <div className="mb-8 text-center">
          <p className="text-[11px] font-medium uppercase tracking-[0.35em] text-[#b38a4a]">
            Amenities
          </p>

          <h2 className="mt-2 font-serif text-3xl leading-tight text-[#0b3543] md:text-4xl">
            Thoughtfully Planned for
            <br />
            Better Living
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-[15px] leading-6 text-[#0b3543]/70">
            Every detail is carefully chosen to ensure comfort, quality and a
            lifestyle you deserve.
          </p>
        </div>

        {/* Six paired cards */}
        <div className="space-y-1">
          {rows.map((row, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-[18px] border border-[#0b3543]/10 bg-[#f8f7f3] shadow-sm"
            >
              <div className="grid md:grid-cols-2">
                {row.map((item, idx) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className={`relative flex items-center gap-3 px-4 py-4 md:px-5 md:py-5 ${
                        idx === 0
                          ? "md:after:absolute md:after:right-0 md:after:top-4 md:after:bottom-4 md:after:w-px md:after:bg-[#0b3543]/15"
                          : ""
                      }`}
                    >
                      {/* Icon */}
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#f5f1ea] ring-1 ring-[#b38a4a]/10">
                        <Icon
                          size={22}
                          strokeWidth={1.5}
                          className="text-[#b38a4a]"
                        />
                      </div>

                      {/* Text */}
                      <div>
                        <h3 className="text-sm font-semibold uppercase tracking-[0.08em] text-[#0b3543]">
                          {item.title}
                        </h3>

                        <p className="mt-1 text-[13px] leading-5 text-[#0b3543]/70">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
