import React from "react";

export default function Hero() {
  return (
   <section
  id="home"
  className="relative hero-bg overflow-hidden w-full"
  style={{
    backgroundImage: "url('/assets/hero.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
>
     
      <div className="absolute inset-0 bg-blue-950/30 backdrop-blur-[2px]" />

      <div className="relative container mx-auto px-6 py-28 flex flex-col md:flex-row items-center gap-10">
        {/* Left text section */}
        <div className="md:w-7/12 text-white drop-shadow-md">
          <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
            Pahrump Realtor
          </h1>
          <p className="mt-4 text-blue-100 max-w-xl">
            Trusted local real estate expertise. We help families buy and sell
            homes with integrity and excellent service.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="#listings"
              className="px-5 py-3 bg-blue-700 text-white rounded-md shadow hover:bg-blue-800 transition"
            >
              View Listings
            </a>
            <a
              href="#contact"
              className="px-5 py-3 border border-blue-200 text-blue-50 rounded-md hover:bg-blue-700/30 transition"
            >
              Send a Message
            </a>
          </div>

          <div className="mt-6 text-sm text-blue-100">
            <div>
              <strong>Phone:</strong>{" "}
              <a
                href="tel:2069196886"
                className="text-white font-medium hover:underline"
              >
                206-919-6886
              </a>
            </div>
            <div className="mt-1">
              <strong>Office:</strong> 3190 HW-160, Suite F, Pahrump, NV
            </div>
          </div>
        </div>

        {/* Right search card */}
        <div className="md:w-5/12 w-full">
          <div className="bg-white/90 rounded-lg shadow-lg overflow-hidden p-4 border border-blue-50 backdrop-blur-sm">
            <h3 className="font-semibold text-lg mb-2 text-blue-800">
              Search Listings
            </h3>
            <form
              className="space-y-3"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                className="w-full rounded-md border border-blue-200 px-3 py-2 focus:border-blue-500 focus:ring-1 focus:ring-blue-400"
                placeholder="Location (city, neighborhood, address)"
              />
              <div className="grid grid-cols-2 gap-2">
                <select className="rounded-md border border-blue-200 p-2 focus:border-blue-500 focus:ring-1 focus:ring-blue-400">
                  <option>Any Type</option>
                  <option>House</option>
                  <option>Condo</option>
                </select>
                <select className="rounded-md border border-blue-200 p-2 focus:border-blue-500 focus:ring-1 focus:ring-blue-400">
                  <option>Any Beds</option>
                  <option>1+</option>
                  <option>2+</option>
                  <option>3+</option>
                </select>
              </div>
              <div className="flex gap-2">
                <input
                  className="flex-1 rounded-md border border-blue-200 px-3 py-2 focus:border-blue-500 focus:ring-1 focus:ring-blue-400"
                  placeholder="Min Price"
                />
                <input
                  className="flex-1 rounded-md border border-blue-200 px-3 py-2 focus:border-blue-500 focus:ring-1 focus:ring-blue-400"
                  placeholder="Max Price"
                />
              </div>
              <button className="w-full bg-blue-700 text-white py-2 rounded-md hover:bg-blue-800 transition">
                Search Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
