import { Building2, House, Ruler, ShieldCheck, BadgeCheck } from "lucide-react";

const highlights = [
  {
    icon: Building2,
    title: "Cellar +",
    value: "G + 5 Floors",
  },
  {
    icon: House,
    title: "78",
    value: "Luxury Flats",
  },
  {
    icon: Ruler,
    title: "1200–1400",
    value: "Sq.ft.",
  },
  {
    icon: ShieldCheck,
    title: "24×7",
    value: "Security",
  },
  {
    icon: BadgeCheck,
    title: "100%",
    value: "Vasthu",
  },
];

export default function ProjectHighlights() {
  return (
    <section className="relative z-30 -mt-12">
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-2 overflow-hidden rounded-[24px] border border-[#0b3543]/8 bg-[#f8f7f3] shadow-[0_20px_50px_rgba(11,53,67,0.13)] md:grid-cols-5">
          {highlights.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={item.value}
                className={`group flex items-center justify-center gap-3 px-4 py-4 text-center transition-all duration-300 hover:bg-white md:py-5 ${
                  index !== highlights.length - 1
                    ? "md:border-r border-[#0b3543]/10"
                    : ""
                }`}
              >
                <Icon
                  size={26}
                  strokeWidth={1.6}
                  className="shrink-0 text-[#b38a4a] transition-transform duration-300 group-hover:scale-110"
                />

                <div>
                  <p className="text-[11px] uppercase tracking-wide text-[#0b3543]/55">
                    {item.title}
                  </p>

                  <p className="mt-0.5 text-sm font-semibold leading-5 text-[#0b3543]">
                    {item.value}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
