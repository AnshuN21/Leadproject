/* eslint-disable no-unused-vars */
import React from 'react'
import ContactForm from './ContactForm';

const Hero = () => {

 

  return (
     <>
    <div style={
      {
        backgroundImage: `url('/assets/heroimage.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }
    }
    className='bg-white'>
         
         <div className='flex justify-between '>

          <div className='mt-56 ml-24'>

           <h1 className='text-white text-7xl  font-bold'>Consultation,</h1>
           <h1 className='text-white text-7xl font-bold '>Design</h1>
           <h1 className='text-white text-7xl  font-bold'>& Marketing</h1>
           
           </div>
          <ContactForm />
           
           


          </div>
         
          

    </div>
    </>
  )
}

export default Hero
