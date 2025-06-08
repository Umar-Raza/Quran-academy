import React from "react";
import QuranBannner from "../../assets/quranBannner.jpg";
import { Link } from "react-router-dom";
import { Users, Globe, Video, Award } from "lucide-react";

export default function HeroSection() {
  return (
    // <section>
    <div className="container">
      <div className="row mt-5">
        <div className="col-lg-6 col-md-12 mb-4 mb-lg-0 order-2 order-md-1">
          <div className="pe-lg-4">
            {/* Main Heading */}
            <h2
              className="display-5 fw-bold mb-3"
              style={{ color: "#2d5a3d", fontFamily: "Poppins" }}
            >
              Learn Quran Online with Expert Teachers
            </h2>

            {/* Subheading */}
            {/* <h3 className="h4 fw-bold mb-4" style={{ color: "#f39c12" }}>
              Providing Quality Islamic Education Since 2022
            </h3> */}

            {/* Description */}
            <p
              className="lead text-muted mb-4"
              style={{
                fontSize: "1.1rem",
                lineHeight: "1.6",
                color: "#2d5a3d",
                fontFamily: "Poppins",
              }}
            >
              Join our online Quran academy with qualified male and female
              English-speaking teachers from Pakistan. Learn Tajweed, Hifz, and
              Islamic studies from the comfort of your home.
            </p>

            {/* Action Buttons */}
            <div className="d-flex flex-wrap gap-3 mb-5">
              <button
                className="btn-md px-3 py-3 fw-semibold rounded-3 border-0"
                style={{ backgroundColor: "#2d5a3d", color: "white" }}
              >
                <Link className="freeTrailBtn" to="/registration">
                  Start Free Trial
                </Link>
              </button>
              <button
                className="btn-md px-3 py-3 fw-semibold rounded-3 border-0"
                style={{ backgroundColor: "#f39c12", color: "white" }}
              >
                <a className="nav-link" href="#courses">
                  Explore Courses
                </a>
              </button>
            </div>

            {/* Feature Badges */}
            <div className="row g-3">
              <div className="col-sm-6">
                <div className="d-flex align-items-center p-3 bg-white rounded-3 shadow-sm">
                  <div className="me-3">
                    <Users size={24} style={{ color: "#2d5a3d" }} />
                  </div>
                  <span className="fw-semibold text-dark">
                    Qualified Teachers
                  </span>
                </div>
              </div>

              <div className="col-sm-6">
                <div className="d-flex align-items-center p-3 bg-white rounded-3 shadow-sm">
                  <div className="me-3">
                    <Globe size={24} style={{ color: "#2d5a3d" }} />
                  </div>
                  <span className="fw-semibold text-dark">
                    International Students
                  </span>
                </div>
              </div>

              <div className="col-sm-6">
                <div className="d-flex align-items-center p-3 bg-white rounded-3 shadow-sm">
                  <div className="me-3">
                    <Video size={24} style={{ color: "#2d5a3d" }} />
                  </div>
                  <span className="fw-semibold text-dark">
                    Live Online Classes
                  </span>
                </div>
              </div>

              <div className="col-sm-6">
                <div className="d-flex align-items-center p-3 bg-white rounded-3 shadow-sm">
                  <div className="me-3">
                    <Award size={24} style={{ color: "#2d5a3d" }} />
                  </div>
                  <span className="fw-semibold text-dark">Certification</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="col-lg-6 col-md-12 order-1 order-md-2 mb-4">
          <div className="d-flex justify-content-center align-items-center h-100">
            <img
              src={QuranBannner}
              alt="Quran Academy Banner"
              width="430"
              className="img-fluid  rounded-4 shadow-lg max-wodth-100 height-auto"

              //   <Image
              //     src="quranBannner"
              //     alt="Islam Online Academy - Learn Quran with Expert Teachers"
              //     width={600}
              //     height={400}
              //     className="img-fluid rounded-4 shadow-lg"
              //     style={{ maxWidth: "100%", height: "auto" }}*/}
            />
          </div>
        </div>
        {/* <img src={HeroImg} alt="QuranPak" className="w-100" /> */}
        {/* </div> */}
      </div>
    </div>
  );
}
