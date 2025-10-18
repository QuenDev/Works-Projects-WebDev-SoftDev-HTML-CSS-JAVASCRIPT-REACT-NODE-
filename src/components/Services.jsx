import React from 'react'

const services = [
  {
    id: 1,
    title: 'Real Estate Done Right',
    desc: 'We handle commercial & residential listings with personalized service and proven marketing.',
    img: '/assets/service1.jpg',
  },
  {
    id: 2,
    title: 'Guide to Buyers',
    desc: 'Market analysis, upgrades lists, trusted contractors, and expert support every step of the way.',
    img: '/assets/service2.jpg',
  },
  {
    id: 3,
    title: 'Rely on Expertise',
    desc: 'Get guidance on affordability, credit, loan options, and closing with confidence.',
    img: '/assets/service3.jpg',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-semibold text-blue-900">Our Services</h3>
          <p className="mt-3 text-slate-600 max-w-2xl mx-auto">
            We offer full-service real estate solutions — from buying to selling — backed by experience, trust, and dedication.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((s) => (
            <div
              key={s.id}
              className="bg-white rounded-xl overflow-hidden shadow-md border border-blue-100 hover:shadow-xl transition-transform hover:-translate-y-1"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={s.img}
                  alt={s.title}
                  className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h4 className="font-semibold text-lg text-blue-800">{s.title}</h4>
                <p className="mt-2 text-slate-600 text-sm leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
