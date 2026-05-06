import CTA from '@/components/common component/cta-01/cta'
import { Feature43 } from '@/components/home/feature'
import Hero from '@/components/home/Hero'
import TabsDemo from '@/components/home/tabs1'
import Testimonials from '@/components/home/testmonial'
import React from 'react'

const HomePage = () => {
  return (
    <>
    <Hero />
    <Feature43/>
    <TabsDemo />
    <Testimonials />
    <CTA />
    </>
  )
}

export default HomePage
