/* eslint-disable no-unused-vars */
import React from 'react'

const Heron = () => {
  return (
    <div>
        <div
      className="h-screen flex items-center justify-center"
      style={{
        backgroundImage: `url('/assets/heroimage.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="w-10/12 md:w-9/12 lg:w-8/12 flex justify-between items-center bg-opacity-50 bg-blue-900 p-6 rounded-lg shadow-lg">
        {/* Left Section */}
        <div className="text-white w-1/2 pr-6">
          <h1 className="text-4xl font-bold mb-4">Consult, Design, and Maintain</h1>
          <p className="text-lg">
            We offer professional services to help bring your vision to life.
            Let us handle your next big idea with expertise.
          </p>
        </div>

        {/* Right Section (Form) */}
        <div className="bg-blue-700 text-white rounded-lg p-6 w-full md:w-1/2 shadow-lg">
          <h2 className="text-2xl font-bold text-center mb-6">Get a Free Consultation</h2>
          <form>
            <input
              type="text"
              placeholder="Full Name"
              className="w-full mb-4 p-2 border border-white rounded-lg bg-blue-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <input
              type="email"
              placeholder="Enter Email Address"
              className="w-full mb-4 p-2 border border-white rounded-lg bg-blue-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <input
              type="text"
              placeholder="Mobile Number"
              className="w-full mb-4 p-2 border border-white rounded-lg bg-blue-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <input
              type="text"
              placeholder="Area, City"
              className="w-full mb-6 p-2 border border-white rounded-lg bg-blue-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <button
              type="submit"
              className="w-full py-2 bg-orange-500 text-white font-bold rounded-lg hover:bg-orange-600 transition duration-300"
            >
              Get Quick Quote
            </button>
          </form>
        </div>
      </div>
    </div>    
  

    </div>
  )
}

export default Heron
