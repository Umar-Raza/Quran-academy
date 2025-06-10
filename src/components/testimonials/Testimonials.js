import React from "react";
import Slider from "react-slick";
export default function Testimonials() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="container">
      <div className="row">
        <h2 className="testimonials_hadding mt-5 mb-3">Our Student Voice</h2>
        <div className="col-12 col-md-8 m-auto mt-3">
          <div className="testimonials_content ">
            <Slider {...settings} className="w-100 overflow-hidden">
              <div>
                <div className="single_testimonial">
                  <p>
                    <span className="quotes">
                      A brilliant service and personally I’ve learned the
                      reading of Quran with proper Arabic accent and
                      pronunciation by taking admission in the Nazra Quran
                      (Quran Reading) Course. The person who teaches me Quran is
                      very knowledgeable and explains each and every point of
                      recitation in an efficient manner.
                    </span>
                  </p>
                  <h4>Ghulam Mustafa</h4>
                  <h6>South Africa</h6>
                </div>
              </div>
              <div>
                <div className="single_testimonial">
                  <p>
                    <span className="quotes">
                      I am doing Namaz course for few months and get to know
                      about many mistakes which I was making in my Namaz and now
                      I have learned Namaz in a proper manner as prescribed by
                      Sharia.
                    </span>
                  </p>
                  <h4>Muhammad Qasim</h4>
                  <h6>United Arab Emirates</h6>
                </div>
              </div>
              <div>
                <div className="single_testimonial">
                  <p>
                    <span className="quotes">
                      I am in my 30’s right now but unfortunately I could not
                      recite the holy Quran few months back but now by the grace
                      of Allah now I can read many chapters of Holy Quran with
                      respect to Arabic pronunciation and Insha’Allah I will
                      soon complete my Quran.
                    </span>
                  </p>
                  <h4>Abdullah</h4>
                  <h6 className="mt-0">United Kingdom</h6>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}
