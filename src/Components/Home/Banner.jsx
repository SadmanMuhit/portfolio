import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaBasketballBall } from "react-icons/fa";
import { SlSocialPintarest } from "react-icons/sl";
const Banner = () => {
  return (
    <>
    <section className='bg-black py-20'>
      <div className="container m-auto text-balance flex justify-between items-center">
        <div>
        <h1 className='text-6xl text-white'>sadman sakib muhit</h1>
        <p className='text-white mt-3.5 text-[20px]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste ipsa dolores eaque nemo laboriosam commodi in veritatis, numquam quos eum fuga magni adipisci debitis nulla. Reprehenderit ea autem suscipit totam.</p>
        <ul className="text-black flex justify-center gap-4 mb-12 mt-12">
                <li className="rounded-full w-10 h-10 bg-white flex justify-center items-center"><a href="#"><FaFacebookF/></a></li>
                <li className="rounded-full w-10 h-10 bg-white flex justify-center items-center"><a href="#"><FaTwitter/></a></li>
                <li className="rounded-full w-10 h-10 bg-white flex justify-center items-center"><a href="#"><FaBasketballBall/></a></li>
                <li className="rounded-full w-10 h-10 bg-white flex justify-center items-center"><a href="#"><SlSocialPintarest/></a></li>
            </ul>
        </div>
        <div>
        <img src="/banner.jpg" alt="" className='w-[600px] rounded-full'/>
        </div>
      </div>
    </section>
    </>
  )
}

export default Banner