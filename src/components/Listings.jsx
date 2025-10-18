import React from 'react'

const sample = [
  { id: 1, img: '/assets/listing1.jpg', price: '$425,000', title: 'Charming 3-Bed Family Home', meta: '123 Main St • 3 bd • 2 ba' },
  { id: 2, img: '/assets/listing2.jpg', price: '$599,000', title: 'Modern Open-Plan Retreat', meta: '45 Desert Ave • 4 bd • 3 ba' },
  { id: 3, img: '/assets/listing3.jpg', price: '$325,000', title: 'Cozy Bungalow with Yard', meta: '7 Oak Ct • 2 bd • 1 ba' },
]

export default function Listings() {
  return (
    <section id="listings" className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
          <h3 className="text-2xl font-semibold text-blue-900">Featured Properties</h3>
          <p className="text-sm text-slate-600">
            Handpicked listings — move-in ready and priced to sell.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {sample.map((p) => (
            <article
              key={p.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg border border-blue-100 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="h-48 md:h-56 overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-5">
                <div className="text-blue-700 font-bold text-lg">{p.price}</div>
                <h4 className="mt-2 font-semibold text-slate-800">{p.title}</h4>
                <p className="text-sm text-slate-600 mt-1">{p.meta}</p>
                <div className="mt-4">
                  <a
                    href="#contact"
                    className="text-blue-700 font-semibold hover:underline"
                  >
                    View Details →
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
