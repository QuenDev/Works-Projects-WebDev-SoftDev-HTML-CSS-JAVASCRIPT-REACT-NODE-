import React, { useEffect, useState } from 'react'

const quotes = [
  { text: "Marci made the whole process effortless — thoughtful, responsive, and honest.", author: "Sarah L." },
  { text: "Great communication and excellent negotiation — sold our home above asking.", author: "James & Anna P." },
  { text: "I recommend Marci to everyone. She understands the market and made closing simple.", author: "Miguel R." },
]

export default function Testimonials() {
  const [idx, setIdx] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % quotes.length), 5000)
    return () => clearInterval(t)
  }, [])

  return (
    <section id="testimonials" className="py-16 bg-blue-50/60 backdrop-blur-sm">
      <div className="container mx-auto px-6 text-center">
        <h3 className="text-2xl font-semibold text-blue-800">What Clients Say</h3>
        <div className="mt-8 max-w-2xl mx-auto bg-white/80 shadow-md rounded-xl p-8">
          <blockquote className="italic text-slate-700 text-lg leading-relaxed">
            “{quotes[idx].text}”
          </blockquote>
          <cite className="block mt-4 font-semibold text-blue-700">
            — {quotes[idx].author}
          </cite>

          <div className="mt-6 flex justify-center gap-2">
            {quotes.map((_, i) => (
              <button
                key={i}
                onClick={() => setIdx(i)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  i === idx ? 'bg-blue-700 scale-110' : 'bg-blue-200 hover:bg-blue-300'
                }`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
