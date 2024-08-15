import React from 'react'
import HeroImg from "../../assets/heroPic.png"
import { Link } from 'react-router-dom'

export default function HeroSection() {
    return (
        // <section>
        <div className="container">
            <div className="row mt-5">
                <div className="col-lg-6 col-md-12 order-2  order-md-1 d-flex justify-content-center flex-column">
                    <div className="hero_contant">
                        <h1>Noor Al-Islam Academy. </h1>
                        <h3 className='type-p'>Anytime learn on your suitable schedule</h3>
                        <span><Link className="btn" to="/registration">Get Start</Link></span>
                    </div>
                </div>
                <div className='col-lg-6 col-md-6 order-1 order-md-2 d-flex justify-content-end mb-2'>
                    <img src={HeroImg} alt="QuranPak" className='w-100' />
                </div>
            </div>
        </div>
    )
}
