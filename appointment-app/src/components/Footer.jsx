import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
            {/* left */}
            <div>
                <img className='mb-5 w-50' src={assets.logo} alt="" />
                <p className='w-full md:w-2/3 text-gray-600 leading-6'>This website streamlines your healthcare experience by allowing you to easily book appointments with doctors, view their profiles, and manage your medical records, all from the comfort of your home. </p>
            </div>

            {/* middle */}
            <div>
                <p className='text-xl font-medium mb-5'>COMPANY</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>

            {/* right */}
            <div>
                <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>+91 XXXXX XXXXX</li>
                    <li>ks2724003@gmail.com</li>
                </ul>
            </div>
        </div>
        <div>
            <hr />
            <p className='py-5 text-sm text-center'>Copyright 2025@ MediSphere - All Rights Reserved</p>
        </div>
    </div>
  )
}

export default Footer