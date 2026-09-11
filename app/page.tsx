"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import ProjectHighlights from "@/components/ProjectHighlights";
import WhyChoose from "@/components/WhyChooseUs";
import Amenities from "@/components/Amenities";
import FloorPlans from "@/components/FloorPlans";
import Location from "@/components/Location";
import Footer from "@/components/Footer";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="overflow-x-hidden bg-[#f8f7f3]">
      {/* ================= HERO ================= */}
      <section className="relative min-h-screen">
        {/* Background */}
        <img
          src="/images/hero/parkviewhero.jpeg"
          alt="ParkView"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />

        {/* ================= NAVBAR ================= */}
        <header className="relative z-30">
          <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 md:h-24 md:px-8">
            {/* Logo */}
            <Link href="/" className="shrink-0">
              <img
                src="/images/logos/parkview-logo.png"
                alt="ParkView"
                className="h-14 w-auto md:h-20"
              />
            </Link>

            {/* Desktop Nav */}
            <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-10 text-sm font-medium tracking-wide text-[#0b3543] lg:flex">
              <Link
                href="/about"
                className="transition-opacity hover:opacity-60"
              >
                About
              </Link>

              <a
                href="#amenities"
                className="transition-opacity hover:opacity-60"
              >
                Amenities
              </a>

              <a
                href="#location"
                className="transition-opacity hover:opacity-60"
              >
                Location
              </a>

              <Link
                href="/gallery"
                className="transition-opacity hover:opacity-60"
              >
                Gallery
              </Link>
            </div>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="rounded-md p-2 lg:hidden"
              aria-label="Toggle Menu"
            >
              {menuOpen ? (
                <X size={28} className="text-[#0b3543]" />
              ) : (
                <Menu size={28} className="text-[#0b3543]" />
              )}
            </button>
          </nav>

          {/* Mobile Menu */}
          {menuOpen && (
            <div className="border-t border-black/10 bg-[#f8f7f3]/95 backdrop-blur lg:hidden">
              <div className="mx-auto flex max-w-7xl flex-col px-5 py-3 text-[#0b3543]">
                <Link
                  href="/about"
                  onClick={() => setMenuOpen(false)}
                  className="py-3"
                >
                  About
                </Link>

                <a
                  href="#amenities"
                  onClick={() => setMenuOpen(false)}
                  className="py-3"
                >
                  Amenities
                </a>

                <a
                  href="#location"
                  onClick={() => setMenuOpen(false)}
                  className="py-3"
                >
                  Location
                </a>

                <Link
                  href="/gallery"
                  onClick={() => setMenuOpen(false)}
                  className="py-3"
                >
                  Gallery
                </Link>
              </div>
            </div>
          )}
        </header>

        {/* Builder Logos */}
        <div className="absolute right-4 top-20 z-20 flex items-center gap-3 md:right-8 md:top-14 md:gap-6">
          <img
            src="/images/logos/project-approved-by.png"
            alt="HMDA Approved"
            className="h-10 w-auto object-contain md:h-20"
          />

          <img
            src="/images/logos/builder-logo.png"
            alt="Mathrubhuumi Builders"
            className="h-10 w-auto object-contain md:h-20"
          />
        </div>

        {/* ================= HERO CONTENT ================= */}
        <div className="relative z-10 mx-auto flex min-h-[calc(100vh-80px)] max-w-7xl items-center px-6 pt-8 pb-20 md:min-h-[calc(100vh-96px)] md:px-12 md:pt-16 md:pb-24 lg:px-16">
          <div className="w-full max-w-xl md:w-1/2">
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-[#b38a4a] md:text-sm">
              Premium Residential Apartments
            </p>

            <h1 className="font-serif text-4xl leading-tight tracking-tight text-[#0b3543] md:text-5xl lg:text-6xl">
              Live Beside Nature.
              <br />
              Live at ParkView.
            </h1>

            <p className="mt-5 max-w-lg rounded-r-xl border-l-2 border-[#b38a4a] bg-white/30 px-4 py-3 text-base leading-7 text-[#0b3543] backdrop-blur-[2px] md:text-lg md:leading-8">
              Thoughtfully designed luxury homes with serene park views, modern
              amenities, and effortless city connectivity.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-md bg-[#0b3543] px-6 py-4 text-xs font-medium uppercase tracking-[0.18em] text-[#f8f7f3] transition hover:bg-[#15495a]"
              >
                Book a Site Visit
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-md border border-[#0b3543] bg-[#f8f7f3]/80 px-6 py-4 text-xs font-medium uppercase tracking-[0.18em] text-[#0b3543] transition hover:bg-[#0b3543] hover:text-[#f8f7f3]"
              >
                Enquire Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PROJECT HIGHLIGHTS ================= */}
      <ProjectHighlights />

      {/* ================= WHY CHOOSE PARKVIEW ================= */}
      <WhyChoose />

      {/* ================= AMENITIES ================= */}
      <section id="amenities">
        <Amenities />
      </section>

      {/* ================= FLOOR PLANS ================= */}
      <FloorPlans />

      {/* ================= LOCATION ================= */}
      <section id="location">
        <Location />
      </section>

      {/* ================= FOOTER ================= */}
      <Footer />
    </main>
  );
}
