import Link from "next/link";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <main className="bg-[#f8f7f3]">
      {/* Hero */}
      <section className="border-b border-[#b38a4a]/10 bg-[#0b3543]">
        <div className="mx-auto max-w-6xl px-5 py-10 md:px-8 md:py-12 lg:px-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-[#f8f7f3]/60">
            <Link href="/" className="transition-colors hover:text-[#b38a4a]">
              Home
            </Link>
            <span>/</span>
            <span className="text-[#f8f7f3]">About</span>
          </div>

          <p className="mt-6 text-[11px] font-medium uppercase tracking-[0.35em] text-[#b38a4a]">
            About ParkView
          </p>

          <h1 className="mt-3 font-serif text-3xl leading-tight text-[#f8f7f3] md:text-4xl">
            A Home Designed Around
            <br />
            Modern Living
          </h1>

          <p className="mt-4 max-w-2xl text-[15px] leading-7 text-[#f8f7f3]/75">
            ParkView is a thoughtfully planned community offering spacious 2 & 3
            BHK homes, quality construction, and a peaceful lifestyle in the
            heart of Medchal–Gandimaisamma.
          </p>
        </div>
      </section>

      {/* Project */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-5 md:px-8 lg:px-10">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.35em] text-[#b38a4a]">
                The Project
              </p>

              <h2 className="mt-2 font-serif text-3xl text-[#0b3543]">
                Premium Residences at Gowdavelly
              </h2>

              <div className="mt-5 space-y-4 text-[15px] leading-7 text-[#0b3543]/75">
                <p>
                  ParkView is a thoughtfully planned residential community
                  offering spacious 2 & 3 BHK apartments surrounded by greenery
                  and excellent urban connectivity.
                </p>

                <p>
                  With 78 luxury flats across Cellar + Ground + 5 floors, the
                  project combines elegant architecture, modern amenities and
                  Vaasthu-compliant homes for comfortable family living.
                </p>

                <p>
                  Every residence is designed to maximize natural light, cross
                  ventilation and functional living spaces, creating a home that
                  is both beautiful and practical for generations to come.
                </p>

                <p>
                  Nestled along the Medchal–Gandimaisamma Highway, ParkView
                  offers the perfect balance of peaceful surroundings and
                  everyday convenience, making it an ideal destination for
                  families seeking a well-connected and future-ready home.
                </p>
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl">
              <img
                src="/images/about/about.jpg"
                alt="ParkView Exterior"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Builder */}
      <section className="bg-[#eeeae1] py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-5 md:px-8 lg:px-10">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="order-2 overflow-hidden rounded-2xl lg:order-1">
              <img
                src="/images/about/builder-projects.jpg"
                alt="Builder Previous and Ongoing Projects"
                className="w-full object-cover"
              />
            </div>

            <div className="order-1 lg:order-2">
              <p className="text-[11px] font-medium uppercase tracking-[0.35em] text-[#b38a4a]">
                The Builder
              </p>

              <h2 className="mt-2 font-serif text-3xl text-[#0b3543]">
                Building Trust Through Quality
              </h2>

              <p className="mt-5 text-[15px] leading-7 text-[#0b3543]/75">
                Backed by years of experience, our builder has successfully
                delivered multiple residential communities while continuing to
                develop thoughtfully designed homes across North Hyderabad.
                Every project reflects a commitment to quality construction,
                transparency and long-term value.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
