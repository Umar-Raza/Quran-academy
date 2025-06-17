import React from "react";
import QuranBannner from "../../assets/quranBannner.jpg";
import { Link } from "react-router-dom";
import { Users, Globe, Video, Award } from "lucide-react";

export default function HeroSection() {
  return (
    // <section>
    <div className="container">
      <div className="row mt-5">
        <div className="col-lg-6 col-md-12 mb-4 mb-lg-0 order-2 order-md-1 ">
          <div className="pe-lg-4">
            {/* Main Heading */}
            <h2 className="heroHeading display-5 fw-bold mb-3">
              Learn Quran Online with Expert Teachers
            </h2>
            {/* Description */}
            <p className="lead text-muted mb-4">
              Join our online Quran academy with qualified male and female
              English-speaking teachers from Pakistan. Learn Tajweed, Hifz, and
              Islamic studies from the comfort of your home.
            </p>

            {/* Action Buttons */}
            <div className="d-flex flex-wrap gap-3 mb-5">
              <button className="btn btn-md px-3 py-3 fw-semibold rounded-3 border-0">
                <Link className="freeTrailBtn" to="/registration">
                  Start Free Trial
                </Link>
              </button>
              <button className="exploreCoursesBtn btn-md px-3 py-3 fw-bold rounded-3 border-0">
                <a className="nav-link" href="#courses">
                  Explore Courses
                </a>
              </button>
            </div>

            {/* Feature Badges */}
            <div className="row g-3">
              <div className="col-sm-6">
                <div className=" d-flex align-items-center p-3 bg-white rounded-3 shadow-sm">
                  <div className=" me-3">
                    <Users size={24} className="featureBadges" />
                  </div>
                  <span className="fw-semibold text-dark">
                    Qualified Teachers
                  </span>
                </div>
              </div>

              <div className="col-sm-6">
                <div className="d-flex align-items-center p-3 bg-white rounded-3 shadow-sm">
                  <div className="me-3">
                    <Globe size={24} className="featureBadges" />
                  </div>
                  <span className="fw-semibold text-dark">
                    International Students
                  </span>
                </div>
              </div>

              <div className="col-sm-6">
                <div className="d-flex align-items-center p-3 bg-white rounded-3 shadow-sm">
                  <div className="me-3">
                    <Video size={24} className="featureBadges" />
                  </div>
                  <span className="fw-semibold text-dark">
                    Live Online Classes
                  </span>
                </div>
              </div>

              <div className="col-sm-6">
                <div className="d-flex align-items-center p-3 bg-white rounded-3 shadow-sm">
                  <div className="me-3">
                    <Award size={24} className="featureBadges" />
                  </div>
                  <span className="fw-semibold text-dark">Certification</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="col-lg-6 col-md-12 order-1 order-md-2 mb-4">
          <div className="d-flex  justify-content-lg-end justify-content-md-end justify-content-center h-100">
            <img
              src={QuranBannner}
              alt="Quran Academy Banner"
              width="430"
              className="img-fluid rounded-4 mb-sm-5  max-width-100 height-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
