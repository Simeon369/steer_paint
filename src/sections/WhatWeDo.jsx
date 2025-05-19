import React from "react";
import interior from '../assets/interior.jpg'
import exterior from '../assets/exterior.jpg'
import wallpaper from '../assets/wallpaper.jpg'

const WhatWeDo = () => {

    const services = [
        {
            title: 'Interior Painting',
            img: interior
        },
        {
            title: 'Exterior Painting',
            img: exterior
        },
        {
            title: 'Wallpaper Removal',
            img: wallpaper
        }
        ]
  return (
    <section id="whatwedo" className="p-10 text-center">
    <h2 className="text-3xl font-bold mb-6 paint-text">WHAT WE DO</h2>
    <div className="grid gap-6 md:grid-cols-3">
      {services.map((service, i) => (
        <div key={i} className={`-translate-y-[${10*i}px] hover:scale-105 transition-all`}>
            <img src={service.img} alt="" className="rounded-t-lg" />
            <div className="p-6 bg-white rounded-lg shadow hover:shadow-md transition">
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p>High-quality and affordable service tailored to your space.</p>
            </div>
        </div>
        
      ))}
    </div>
  </section>
  )
}

export default WhatWeDo
