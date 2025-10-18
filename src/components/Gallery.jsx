import React from 'react'

const imgs = [
  '/assets/gallery1.jpg',
  '/assets/gallery2.jpg',
  '/assets/gallery3.jpg',
  '/assets/gallery4.jpg',
  '/assets/gallery5.jpg',
]

export default function Gallery() {
  return (
    <section id="gallery" className="py-16 bg-blue-50/40 backdrop-blur-sm">
      <div className="container mx-auto px-6 text-center">
        <h3 className="text-2xl font-semibold text-blue-800">Photo Gallery</h3>
        <p className="text-blue-600 mt-2 text-sm">A glimpse of our finest moments</p>
        <div className="mt-6 grid grid-cols-2 md:grid-cols-5 gap-4">
          {imgs.map((src, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-transform duration-300 hover:scale-105"
            >
              <img
                src={src}
                alt={`gallery ${i + 1}`}
                className="w-full h-40 object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
