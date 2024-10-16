import React from 'react'
import Header from '../../components/header/Header'
import HeroSection from '../../components/heroSection/HeroSection'
import Courses from '../courses/Courses'
import WhyChooseUs from '../../components/whyChooseUs/WhyChooseUs';
import TestiMonials from '../../components/testimonials/Testimonials'
import Footer from '../../components/footer/Footer'
import Contact from '../contact/Contact';


export default function Home() {
  return (
    <div id='home'>
      <Header />
      <HeroSection />
      <Courses />
      <WhyChooseUs />
      <TestiMonials />
      <Contact />
      <Footer />
    </div>
  )
}
