import React from 'react'

const About = () => {
  return (
    <>
    <section className='bg-black pt-5'>
      <div className="container m-auto text-white text-center">
        <div>
        <h2 className='text-6xl'>About Me</h2>
        </div>
       <div className='flex items-center justify-between'>
       <img src="/about.jpg" alt="" className='mt-[60px] rounded-full'/>
       <p>this is sadman sakib muhit</p>
       </div>
      </div>
    </section>
    </>
  )
}

export default About
