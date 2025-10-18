import React from "react";

const sponsors = [
  { src: "/assets/ridge-logo.png", alt: "The Ridge Realty Group" },
  { src: "/assets/equal-housing.png", alt: "Equal Housing Opportunity" },
  { src: "/assets/realtor.png", alt: "Realtor" },
  { src: "/assets/pahrump-valley.png", alt: "Pahrump Valley Chamber of Commerce" },
];

export default function Affiliations() {
  return (
    <section className="py-10 bg-white border-t border-slate-100">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-center text-lg font-semibold text-slate-700 mb-6">
          Proud Member & Partner Of
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 items-center justify-items-center">
          {sponsors.map((logo, i) => (
            <img
              key={i}
              src={logo.src}
              alt={logo.alt}
              className="h-22 w-auto object-contain"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
