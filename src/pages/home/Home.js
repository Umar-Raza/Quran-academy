import React from "react";
import Header from "../../components/header/Header";
import HeroSection from "../../components/heroSection/HeroSection";
import Courses from "../courses/Courses";
import WhyChooseUs from "../../components/whyChooseUs/WhyChooseUs";
import TestiMonials from "../../components/testimonials/Testimonials";
import Footer from "../../components/footer/Footer";
import Contact from "../contact/Contact";
import About from "../about/About";

export default function Home() {
  return (
    <div id="home" className="p-0">
      <Header />
      <HeroSection />
      <About />
      <Courses />
      <WhyChooseUs />
      <TestiMonials />
      <Contact />
      <Footer />
    </div>
  );
}
