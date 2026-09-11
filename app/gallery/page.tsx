import Link from "next/link";
import Footer from "@/components/Footer";

export default function GalleryPage() {
  const images = [
    "/images/gallery/gallery-1.jpg",
    "/images/gallery/gallery-2.jpg",
    "/images/gallery/gallery-3.jpg",
    "/images/gallery/gallery-4.jpg",
    "/images/gallery/gallery-5.png",
    "/images/gallery/gallery-6.png",
  ];

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
            <span className="text-[#f8f7f3]">Gallery</span>
          </div>

          <p className="mt-6 text-[11px] font-medium uppercase tracking-[0.35em] text-[#b38a4a]">
            ParkView Gallery
          </p>

          <h1 className="mt-3 font-serif text-3xl leading-tight text-[#f8f7f3] md:text-4xl">
            Discover ParkView
          </h1>

          <p className="mt-4 max-w-2xl text-[15px] leading-7 text-[#f8f7f3]/75">
            A visual journey through elegant architecture, landscaped
            surroundings, and thoughtfully designed spaces that make ParkView
            feel like home.
          </p>
        </div>
      </section>

      {/* Wide Images */}
      <div className="mx-auto mt-8 max-w-6xl space-y-5 px-5 md:px-8 lg:px-10">
        {images.slice(4).map((image, index) => (
          <div key={index} className="overflow-hidden rounded-2xl bg-[#eeeae1]">
            <img
              src={image}
              alt={`ParkView Gallery ${index + 5}`}
              className="h-auto w-full object-contain"
            />
          </div>
        ))}
      </div>

      {/* Gallery Grid */}
      <section className="py-14">
        <div className="mx-auto max-w-6xl px-5 md:px-8 lg:px-10">
          <div className="grid gap-5 md:grid-cols-2">
            {[1, 2, 3, 4].map((num) => (
              <div
                key={num}
                className="overflow-hidden rounded-2xl bg-[#eeeae1]"
              >
                <img
                  src={`/images/gallery/gallery-${num}.jpg`}
                  alt={`ParkView Gallery ${num}`}
                  className="h-full w-full object-cover transition duration-300 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Same footer as homepage */}
      <Footer />
    </main>
  );
}
