/* eslint-disable no-unused-vars */
import React from 'react'

const RealtorSection = () => {
  return (
    <div id='1' className="bg-gray-50 text-center py-16 px-4">
      {/* Hero Section */}
      <section className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-4 text-blue-900">
          Not Your Average Realtor
        </h1>
        <p className="text-gray-600 mb-8">
          Real estate is more than just buying property; it’s about connecting
          buyers and sellers while maximizing potential. Trust us for profitable
          and effective results.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <img
            src="\assets\Ellipse 11.svg" 
            alt="Realtor 1"
            className="rounded-full w-40 h-40 mx-auto"
          />
          <img
            src="\assets\Ellipse 12.svg"
            alt="Realtor 2"
            className="rounded-full w-40 h-40 mx-auto"
          />
          <img
            src="\assets\Ellipse 13.svg"
            alt="Realtor 3"
            className="rounded-full w-40 h-40 mx-auto"
          />
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="max-w-5xl mx-auto mt-16">
        <h2 className="text-3xl font-semibold mb-4 text-blue-900">
          Why Choose Us?
        </h2>
        <img className='flex ml-96'
        src='\assets\icons\Rectangle 58.svg'></img>
       
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-4">
            <div className="text-blue-500 mb-4">
              <i className="fas fa-chart-line text-4xl"></i>
            </div>
            <h3 className="text-xl font-bold">Potential ROI</h3>
            <p className="text-gray-600 mt-2">
              Get the most value from your investment. We maximize returns with
              a proven track record.
            </p>
          </div>
          <div className="text-center p-4">
            <div className="text-blue-500 mb-4">
              <i className="fas fa-pencil-alt text-4xl"></i>
            </div>
            <h3 className="text-xl font-bold">Design</h3>
            <p className="text-gray-600 mt-2">
              We provide design services that add a polished and professional
              touch to your property.
            </p>
          </div>
          <div className="text-center p-4">
            <div className="text-blue-500 mb-4">
              <i className="fas fa-bullhorn text-4xl"></i>
            </div>
            <h3 className="text-xl font-bold">Marketing</h3>
            <p className="text-gray-600 mt-2">
              Expert marketing ensures your property gains visibility and
              attracts the right buyers.
            </p>
          </div>
        </div>
      </section>

      {/* Image Showcase Section */}
      <section className="max-w-5xl mx-auto mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        <img
          src="\assets\pexels-brett-sayles-2881232.svg" 
          alt="Showcase 1"
          className="rounded-lg shadow-lg"
        />
        <img
          src="\assets\pexels-andres-ayrton-6578391.svg"  
          alt="Showcase 2"
          className="rounded-lg shadow-lg"
        />
        <img
          src="\assets\pexels-fauxels-3182834.svg"  
          alt="Showcase 3"
          className="rounded-lg shadow-lg"
        />
      </section>

      {/* About Us Section */}
      <section className="max-w-5xl mx-auto mt-16 text-center">
        <h2 className="text-3xl font-bold mb-4 text-blue-900 mr-0">About Us</h2>
        <img className='flex ml-96'
        src='\assets\icons\Rectangle 58.svg'></img>

        <p className="text-gray-600">
          With years of expertise in real estate, we create customer-centric
          value and provide exceptional service. We strive to build connections
          and foster relationships with professionalism and dedication.
        </p>
      </section>
    </div>
  )
}

export default RealtorSection
