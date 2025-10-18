import React from 'react'

export default function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <img
            src="/assets/marci.jpg"
            alt="Marci Metzger"
            className="rounded-xl w-auto h-96 object-cover shadow-lg border border-blue-100 mx-auto"
          />
        </div>

        <div>
          <h2 className="text-3xl font-semibold text-blue-900">Marci Metzger</h2>
          <p className="mt-4 text-slate-700 leading-relaxed">
            REALTOR® for nearly 3 decades! We helped nearly 90 clients in 2021 and
            closed 28.5 million in sales. Our team works tirelessly every day to grow,
            learn, and provide exceptional service in our market.
          </p>

          <ul className="mt-5 space-y-2 text-slate-600 list-disc list-inside">
            <li>Top residential sales for the last 5 years</li>
            <li>Personalized marketing & negotiation strategies</li>
            <li>Local market insights & contractor referrals</li>
          </ul>

          <div className="mt-8">
            <a
              href="#contact"
              className="px-6 py-3 bg-blue-700 text-white rounded-md shadow hover:bg-blue-800 transition"
            >
              Get It Sold
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
