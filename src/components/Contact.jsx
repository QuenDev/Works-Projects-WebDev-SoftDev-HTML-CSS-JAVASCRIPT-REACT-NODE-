import React from 'react'

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-blue-50 to-blue-100/60 relative overflow-hidden">
      <div className="container mx-auto px-6 md:grid md:grid-cols-2 gap-10 items-start relative z-10">
        {/* Contact Info */}
        <div>
          <h3 className="text-3xl font-semibold text-blue-800">Get in Touch</h3>
          <p className="mt-3 text-slate-700 leading-relaxed">
            Send a message and Marci will reach out. Appointments outside office hours are available upon request.
          </p>
          <address className="not-italic mt-6 text-sm text-slate-600 space-y-2">
            <div>
              <strong>Phone:</strong>{' '}
              <a href="tel:2069196886" className="text-blue-700 hover:text-blue-900 transition-colors">
                206-919-6886
              </a>
            </div>
            <div>
              <strong>Email:</strong>{' '}
              <a href="mailto:hello@marcimetzger.com" className="text-blue-700 hover:text-blue-900 transition-colors">
                hello@marcimetzger.com
              </a>
            </div>
            <div>
              <strong>Office:</strong> 3190 HW-160, Suite F, Pahrump, NV 89048
            </div>
            <div>
              <strong>Hours:</strong> 8:00am – 7:00pm daily
            </div>
          </address>
        </div>

        {/* Contact Form */}
        <form
          className="bg-white/90 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-blue-100"
          onSubmit={(e) => {
            e.preventDefault()
            alert('Message sent! We will get back to you shortly.')
          }}
        >
          <label className="block text-sm font-medium text-slate-700">Name</label>
          <input
            className="w-full rounded-md border border-blue-200 px-3 py-2 mt-1 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
            required
          />

          <label className="block text-sm font-medium text-slate-700 mt-4">Email</label>
          <input
            type="email"
            className="w-full rounded-md border border-blue-200 px-3 py-2 mt-1 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
            required
          />

          <label className="block text-sm font-medium text-slate-700 mt-4">Message</label>
          <textarea
            className="w-full rounded-md border border-blue-200 px-3 py-2 mt-1 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
            rows="4"
            required
          />

          <button
            type="submit"
            className="mt-6 w-full bg-blue-700 hover:bg-blue-800 text-white font-medium py-2.5 rounded-md shadow-md transition-all"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Decorative background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[400px] bg-blue-300/10 blur-3xl rounded-full"></div>
    </section>
  )
}
