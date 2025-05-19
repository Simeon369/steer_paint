import React from 'react'

const WhyChooseUs = () => {
  return (
    <section id="whychooseus" className="p-10 text-center bg-white">
    <h2 className="text-3xl font-bold mb-10">Why Choose Us</h2>
    <div className="grid gap-8 md:grid-cols-3">
      <div className="flex flex-col items-center p-6 bg-gray-50 rounded-lg shadow hover:shadow-lg transition">
        <img src="https://img.icons8.com/fluency/48/experience-skill.png" alt="Experience" className="mb-4" />
        <h3 className="text-xl font-semibold mb-2">Over 10 Years of Experience</h3>
        <p className="text-sm text-gray-700">Our seasoned professionals have transformed hundreds of homes and commercial spaces with expert craftsmanship.</p>
      </div>
      <div className="flex flex-col items-center p-6 bg-gray-50 rounded-lg shadow hover:shadow-lg transition">
        <img src="https://img.icons8.com/fluency/48/money.png" alt="Affordable" className="mb-4" />
        <h3 className="text-xl font-semibold mb-2">Affordable Pricing</h3>
        <p className="text-sm text-gray-700">We provide competitive quotes with no hidden fees — just transparent pricing for top-tier service.</p>
      </div>
      <div className="flex flex-col items-center p-6 bg-gray-50 rounded-lg shadow hover:shadow-lg transition">
        <img src="https://img.icons8.com/fluency/48/approval.png" alt="Satisfaction" className="mb-4" />
        <h3 className="text-xl font-semibold mb-2">Satisfaction Guaranteed</h3>
        <p className="text-sm text-gray-700">We’re not done until you’re happy. Our team ensures every detail meets your expectations.</p>
      </div>
    </div>
  </section>
  )
}

export default WhyChooseUs
