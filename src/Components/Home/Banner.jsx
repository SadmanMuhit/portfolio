import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaBasketballBall } from "react-icons/fa";
import { SlSocialPintarest } from "react-icons/sl";
const Banner = () => {
  return (
    <>
    <section className='bg-black py-80'>
      <div className="container m-auto flex justify-between items-center">
        <div className='text-wrap'>
        <h1 className='text-6xl text-white m-[30px]'> Hi, It's sadman sakib muhit</h1>
        <p className='text-white mt-3.5 text-[40px] m-[30px]'>I'm a Frontend Developer</p>
        <p className='text-white mt-3.5 text-[25px] m-[30px]'>A passionate Front-end software developer having an experience of buliding website application with javascript/React/Tailwindcss/React Natue and some other cool libraries and frameworks.</p>
          <div className="text-black flex justify-center gap-4 mb-12">
          <button className='rounded-full w-12 h-12 bg-white flex justify-center items-center text-2xl duration-300 hover:bg-orange-600 transfroms hover:scale-125 hover:text-white'><FaFacebookF/></button>
          <button className='rounded-full w-12 h-12 bg-white flex justify-center items-center text-2xl duration-300 hover:bg-orange-600 transfroms hover:scale-125 hover:text-white'><FaTwitter/></button>
          <button className='rounded-full w-12 h-12 bg-white flex justify-center items-center text-2xl duration-300 hover:bg-orange-600 transfroms hover:scale-125 hover:text-white'><FaBasketballBall/></button>
          <button className='rounded-full w-12 h-12 bg-white flex justify-center items-center text-2xl duration-300 hover:bg-orange-600 transfroms hover:scale-125 hover:text-white'><SlSocialPintarest/></button>
          </div>
        </div>
        <div>
        <img src="/banner.jpg" alt="" className='w-[900px] rounded-full'/>
        </div>
      </div>
    </section>
    </>
  )
}

export default Banner