import React from 'react'

const OurWorks = () => {
  return (
    <section id="ourworks" className="p-10 bg-gray-50 text-center">
    <h2 className="text-3xl font-bold mb-6 paint-text">OUR WORKS</h2>
    <div className="grid gap-4 md:grid-cols-3">
      {[1, 2, 3].map((i) => (
        <img
          key={i}
          src={`https://via.placeholder.com/300x200?text=Project+${i}`}
          alt={`Project ${i}`}
          className="rounded-lg shadow hover:shadow-lg transition"
        />
      ))}
    </div>
  </section>
  )
}

export default OurWorks
