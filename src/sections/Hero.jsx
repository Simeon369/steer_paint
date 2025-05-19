import React from 'react'
import logo from '../assets/logo.png'

const Hero = () => {
  return (
    <section
    id="hero"
    className="min-h-screen relative bg-gradient-to-br from-yellow-400 via-pink-500 to-blue-600 text-white flex items-center justify-center text-center p-6"
  >
    <div className="absolute top-0 py-3 px-10 w-full flex justify-center md:justify-left items-center">
        <img src={logo} alt="" className="w-[50px]" />
        <h1 className="ml-4 text-3xl font-bold text-black paint-text">STEER PAINT</h1>
    </div>
    <div>
      <h1 className="text-4xl md:text-5xl font-bold mb-4 paint-text">WELCOME TO STEER PAINT</h1>
      <p className="md:text-xl text-sm mb-6">We bring color to your walls and life</p>
      <a
        href="#contact"
        className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition"
      >
        Get a Free Quote
      </a>
    </div>
  </section>
  )
}

export default Hero
