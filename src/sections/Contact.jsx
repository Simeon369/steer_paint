import React from 'react'
import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {
  const [state, handleSubmit] = useForm("mdkgjnbv");
  if (state.succeeded) {
      return <div className='bg-white w-full h-[60vw] flex justify-center items-center'>
          <p className='paint-text text-center'>Message Sent!</p>
        </div>;
  }
  return (
    <section
    id="contact"
    className="p-10 bg-gradient-to-br from-pink-500 to-purple-600 text-white text-center"
  >
    <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
    <form
      onSubmit={handleSubmit}
      method="POST"
      className="max-w-md mx-auto space-y-4"
    >
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        className="w-full p-3 rounded text-black focus:outline-none focus:border-b"
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        className="w-full p-3 rounded text-black focus:outline-none focus:border-b"
        required
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <textarea
        name="message"
        rows="5"
        placeholder="Your Message"
        className="w-full p-3 rounded text-black focus:outline-none focus:border-b"
        required
      ></textarea>
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <button
        type="submit"
        disabled={state.submitting}
        className="bg-white text-black px-6 py-2 rounded font-semibold hover:bg-gray-200 transition"
      >
        Send Message
      </button>
    </form>
    <div className="mt-8 text-sm">
      <p><strong>Address:</strong> 123 Color Lane, Paintville, PA 19000</p>
      <p><strong>Email:</strong> contact@steerpaint.com</p>
    </div>
    <div className="mt-6 flex justify-center space-x-4">
      <a
        href="https://www.instagram.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:opacity-80"
      >
        <img
          src="https://img.icons8.com/ios-filled/40/ffffff/instagram-new.png"
          alt="Instagram"
        />
      </a>
      <a
        href="https://www.linkedin.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:opacity-80"
      >
        <img
          src="https://img.icons8.com/ios-filled/40/ffffff/linkedin.png"
          alt="LinkedIn"
        />
      </a>
    </div>
  </section>
  )
}

export default Contact
