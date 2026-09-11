"use client";

import { useState } from "react";

export default function Footer() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <footer id="contact" className="bg-[#0b3543] text-[#f8f7f3]">
        <div className="mx-auto max-w-6xl px-5 py-6 md:px-8 lg:px-10">
          <div className="grid gap-6 md:grid-cols-3">
            {/* Column 1 - Brand */}
            <div className="md:pr-5">
              <img
                src="/images/logos/parkview-white.png"
                alt="ParkView"
                className="h-12 w-auto"
              />

              <h3 className="mt-3 font-serif text-lg leading-snug text-[#f8f7f3]">
                Find Your Place at ParkView
              </h3>

              <p className="mt-2 text-sm leading-6 text-[#f8f7f3]/70">
                Your future home is just a visit away. Whether you're looking
                for your first home or your next investment, we're here to help.
              </p>

              <button
                onClick={() => setOpen(true)}
                className="mt-4 inline-flex items-center rounded-full border border-[#b38a4a] px-4 py-2 text-sm font-medium text-[#b38a4a] transition hover:bg-[#b38a4a] hover:text-[#f8f7f3]"
              >
                Become a Channel Partner →
              </button>
            </div>

            {/* Column 2 - Enquiry */}
            <div className="border-y border-[#f8f7f3]/10 py-5 md:border-x md:border-y-0 md:px-5 md:py-0">
              <h4 className="mb-3 font-serif text-lg text-[#f8f7f3]">
                Enquiry
              </h4>

              <form className="space-y-2.5">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-white placeholder:text-white/40 focus:border-[#b38a4a] focus:outline-none"
                />

                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-white placeholder:text-white/40 focus:border-[#b38a4a] focus:outline-none"
                />

                <select
                  defaultValue=""
                  className="w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-white focus:border-[#b38a4a] focus:outline-none"
                >
                  <option value="" disabled className="text-gray-700">
                    I'd like to...
                  </option>
                  <option value="visit" className="text-gray-900">
                    Book a Site Visit
                  </option>
                  <option value="callback" className="text-gray-900">
                    Request a Call Back
                  </option>
                  <option value="brochure" className="text-gray-900">
                    Get the Brochure
                  </option>
                  <option value="pricing" className="text-gray-900">
                    Know Pricing
                  </option>
                </select>

                <button
                  type="submit"
                  className="w-full rounded-md bg-[#b38a4a] py-2 text-sm font-medium text-[#f8f7f3] transition hover:opacity-90"
                >
                  Submit Enquiry
                </button>
              </form>
            </div>

            {/* Column 3 - Contact */}
            <div className="md:pl-5">
              <h4 className="mb-3 font-serif text-lg text-[#f8f7f3]">
                Contact
              </h4>

              <div className="space-y-2.5 text-sm">
                <div>
                  <p className="text-[#b38a4a]">Phone</p>
                  <p className="mt-0.5 text-[#f8f7f3]/75">+91 98498 39153</p>
                </div>

                <div>
                  <p className="text-[#b38a4a]">Email</p>
                  <p className="mt-0.5 text-[#f8f7f3]/75">
                    sales@parkviewhomes.in
                  </p>
                </div>

                <a
                  href="https://wa.me/919849839153"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center justify-center rounded-full bg-[#25D366] px-4 py-2 text-sm font-medium text-white transition hover:opacity-90"
                >
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Strip */}
          <div className="mt-6 border-t border-[#f8f7f3]/10 pt-3">
            <div className="flex flex-col items-center justify-between gap-2 text-xs text-[#f8f7f3]/55 md:flex-row">
              <p>© 2026 ParkView. All rights reserved.</p>

              <div className="flex items-center gap-4">
                <a href="#amenities" className="hover:text-[#b38a4a]">
                  Amenities
                </a>
                <a href="#location" className="hover:text-[#b38a4a]">
                  Location
                </a>
                <a href="#contact" className="hover:text-[#b38a4a]">
                  Contact
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* ===== Channel Partner Modal ===== */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/55 p-4">
          <div className="relative w-full max-w-md rounded-2xl bg-[#f8f7f3] p-6 shadow-2xl">
            {/* Close */}
            <button
              onClick={() => setOpen(false)}
              className="absolute right-4 top-4 text-xl text-[#0b3543]/60 hover:text-[#0b3543]"
            >
              ×
            </button>

            <p className="text-[11px] font-medium uppercase tracking-[0.35em] text-[#b38a4a]">
              Channel Partners
            </p>

            <h2 className="mt-2 font-serif text-2xl leading-snug text-[#0b3543]">
              Partner with Mathrubhuumi's ParkView at Medchal–Gandimaisama
              Highway
            </h2>

            <p className="mt-3 text-sm leading-6 text-[#0b3543]/70">
              Interested in becoming a Channel Partner? Leave your details and
              our team will get in touch with you.
            </p>

            <form className="mt-5 space-y-3">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full rounded-lg border border-[#0b3543]/10 bg-white px-4 py-3 text-sm text-[#0b3543] outline-none focus:border-[#b38a4a]"
              />

              <input
                type="tel"
                placeholder="Mobile Number"
                className="w-full rounded-lg border border-[#0b3543]/10 bg-white px-4 py-3 text-sm text-[#0b3543] outline-none focus:border-[#b38a4a]"
              />

              <input
                type="text"
                placeholder="Location"
                className="w-full rounded-lg border border-[#0b3543]/10 bg-white px-4 py-3 text-sm text-[#0b3543] outline-none focus:border-[#b38a4a]"
              />

              <button
                type="submit"
                className="w-full rounded-lg bg-[#0b3543] py-3 text-sm font-medium text-[#f8f7f3] transition hover:bg-[#15495a]"
              >
                Become a Channel Partner →
              </button>
            </form>

            <p className="mt-4 text-xs leading-5 text-[#0b3543]/55">
              Your information will only be used to contact you regarding the
              ParkView Channel Partner opportunity.
            </p>
          </div>
        </div>
      )}
    </>
  );
}
