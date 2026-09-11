import { Trees, Building2, Flower2, Users, Droplets } from "lucide-react";

const features = [
  {
    icon: Trees,
    title: "Green Living",
    description:
      "Landscaped gardens and abundant open spaces for a refreshing lifestyle.",
  },
  {
    icon: Building2,
    title: "Clubhouse Lifestyle",
    description:
      "Premium clubhouse with indoor recreation and community gathering spaces.",
  },
  {
    icon: Flower2,
    title: "Yoga & Meditation",
    description:
      "Dedicated wellness spaces created for mindful everyday living.",
  },
  {
    icon: Users,
    title: "Family-Friendly Community",
    description:
      "Children's play area and senior citizen seating for every generation.",
  },
  {
    icon: Droplets,
    title: "Rainwater Harvesting",
    description:
      "Sustainable infrastructure supporting environmentally responsible living.",
  },
];

export default function WhyChoose() {
  return (
    <section className="relative -mt-8 border-t border-[#b38a4a]/20 bg-[#0b3543] py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-5 md:px-8 lg:px-10">
        {/* Heading */}
        <div className="mb-10 text-center">
          <p className="text-[11px] font-medium uppercase tracking-[0.35em] text-[#b38a4a]">
            Why Choose ParkView
          </p>

          <h2 className="mt-2 font-serif text-3xl leading-tight text-[#f8f7f3] md:text-4xl">
            A Lifestyle Designed for You
          </h2>
        </div>

        {/* Feature Cards */}
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="flex h-full flex-col rounded-[18px] border border-[#0b3543]/8 bg-[#f8f7f3] p-5 text-center transition-transform duration-300 hover:-translate-y-1"
              >
                {/* Icon */}
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#eeeae1] ring-1 ring-[#b38a4a]/10">
                  <Icon
                    size={22}
                    strokeWidth={1.5}
                    className="text-[#b38a4a]"
                  />
                </div>

                {/* Title */}
                <h3 className="min-h-[40px] text-sm font-semibold uppercase tracking-[0.08em] text-[#0b3543]">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="mt-2 flex-1 text-[13px] leading-6 text-[#0b3543]/70">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
