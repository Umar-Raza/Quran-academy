import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./home/Home";
import Register from "../components/register/Register";
import OurStory from "./about/OurStory";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
export default function Index() {
  return (
    <>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="registration" element={<Register />} />
        <Route path="ourStory" element={<OurStory />} />
      </Routes>
      {/* <Footer /> */}
    </>
  );
}
