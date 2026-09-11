import {
  Plane,
  Train,
  Route,
  Hospital,
  School,
  ShoppingCart,
  Building2,
  Clapperboard,
} from "lucide-react";

const places = [
  {
    icon: Plane,
    title: "Airport",
    items: ["Shamshabad International Airport"],
  },
  {
    icon: Hospital,
    title: "Healthcare",
    items: ["Yashoda Hospital", "Renova Hospital", "GVK EMRI", "Rush Hospital"],
  },
  {
    icon: Building2,
    title: "IT & Business Hub",
    items: ["IT Hub Gateway Kandlakoya", "Tech Mahindra Bahadurpally SEZ"],
  },
  {
    icon: Train,
    title: "Rail Connectivity",
    items: ["Medchal Railway Station", "Secunderabad Railway Station"],
  },
  {
    icon: School,
    title: "Education",
    items: [
      "Time School",
      "Neeraj International School",
      "DRS International School",
      "Sunflower Vedic School",
    ],
  },
  {
    icon: Clapperboard,
    title: "Entertainment",
    items: ["Dholari-Dhani", "TNR Mall & Multiplex", "Cine Planet Multiplex"],
  },
  {
    icon: Route,
    title: "Road Connectivity",
    items: ["Outer Ring Road (ORR)", "Nizamabad – NH 44 Highway"],
  },
  {
    icon: ShoppingCart,
    title: "Daily Conveniences",
    items: [
      "Vijetha Super Market",
      "Big Bazaar",
      "D-Mart",
      "Metro",
      "Subway",
      "Domino's Pizza",
    ],
  },
];

export default function Location() {
  return (
    <section className="bg-[#eeeae1] py-10 md:py-12">
      <div className="mx-auto max-w-6xl px-5 md:px-8 lg:px-10">
        <div className="grid items-start gap-8 lg:grid-cols-12">
          {/* Left Content */}
          <div className="lg:col-span-6">
            <p className="text-[11px] font-medium uppercase tracking-[0.35em] text-[#b38a4a]">
              Location
            </p>

            <h2 className="mt-2 font-serif text-3xl leading-tight text-[#0b3543] md:text-4xl">
              A Prime Location
              <br />
              of Choice
            </h2>

            <p className="mt-4 max-w-md text-[15px] leading-6 text-[#0b3543]/70">
              Strategically located at Godavallely with seamless access to ORR,
              NH-44, leading IT hubs, educational institutions and everyday
              conveniences.
            </p>

            <div className="my-5 h-px w-full bg-[#0b3543]/15" />

            <div className="grid gap-x-5 gap-y-4 sm:grid-cols-2">
              {places.map((place) => {
                const Icon = place.icon;

                return (
                  <div key={place.title} className="flex gap-2.5">
                    <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-[#f8f7f3]">
                      <Icon
                        size={16}
                        strokeWidth={1.8}
                        className="text-[#b38a4a]"
                      />
                    </div>

                    <div>
                      <h3 className="text-sm font-semibold text-[#0b3543]">
                        {place.title}
                      </h3>

                      <p className="mt-0.5 text-[11px] leading-4 text-[#0b3543]/65">
                        {place.items.join(" • ")}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Map */}
          <div className="flex justify-end lg:col-span-6">
            <div className="w-full max-w-[520px]">
              <div className="overflow-hidden rounded-xl border border-[#b38a4a]/25 bg-[#f8f7f3] p-2">
                <img
                  src="/images/location/location-map.jpg"
                  alt="ParkView Location Map"
                  className="h-auto w-full rounded-lg object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
