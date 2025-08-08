import React from "react";
import { Whatsapp } from "../whatsapp/Whatsapp";
export default function Footer() {
  const year = new Date().getFullYear();

  const FooterQuickLink = [
    {
      display: "Home",
      url: "#home",
    },
    {
      display: "About",
      url: "#about",
    },
    {
      display: "Courses",
      url: "#courses",
    },
    {
      display: "Contact",
      url: "#contact",
    },
  ];

  const FooterInfoLinks = [
    {
      display: "Terms & Conditions",
    },
    {
      display: "Privacy Policy",
    },
    {
      display: "Terms of Use",
    },
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <h2 className="d-flex align-items-center gap-1">
              <i className="ri-book-open-fill"></i>Arqam Quran academy.
            </h2>
            <div className="follows">
              <p>Follow us on social media</p>
              <span>
                {""}
                <a
                  href="https://www.facebook.com/arqamonlineacademy"
                  aria-label="facebook link"
                >
                  <i className="ri-facebook-circle-line"></i>
                </a>
              </span>
              <span>
                {""}
                <a
                  href="https://www.instagram.com/arqamquranacademy"
                  aria-label="instagram link"
                >
                  <i className="ri-instagram-line"></i>
                </a>
              </span>
              <span>
                {""}
                <a
                  href="https://api.whatsapp.com/send?phone=+923270029087"
                  aria-label="whatsapp link"
                >
                  <i className="ri-whatsapp-line"></i>
                </a>
              </span>
            </div>
          </div>
          <div className="col-lg-2">
            <h6>Explore</h6>
            <ul className="list_group p-0">
              {FooterQuickLink.map((item, index) => (
                <li
                  key={index}
                  className="list-group-item mb-3 ms-0 bold ps-0 list_link"
                >
                  <a className="explore-link" href={item}>
                    {item.display}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-lg-2">
            <h6>Information</h6>
            <ul className="list-group">
              {FooterInfoLinks.map((item, index) => (
                <li
                  key={index}
                  className="list-group-item border-0 ps-0 list_link"
                >
                  <p roll={item.url} aria-disabled="true">
                    {item.display}
                  </p>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-lg-4">
            <h6>Get in touch</h6>
            <div className="get_in_touch">
              <p className="m-0">Faisalabad, Punjab Pakistan</p>
              <p className="m-0">
                Phone: <a href="tel:+923270029087" aria-label="phone">+923270029087</a>
              </p>
              <p>
                Email:
                 <a href="mailto:umardev92@gmail.com" className="mx-1" aria-label="email"> 
                   umardev92@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <hr className="mt-3" />
          <div className="col-lg-12">
            <div className="policy">
              <p className=" m-0 text-center">
                &copy;{year} All Rights reserved. Designed By{" "}
                <a
                  href="https://mu-portfolio.web.app/"
                  target="blank"
                  aria-label="portfolio link"
                >
                  Muhammad Umar.
                </a>
              </p>
            </div>
          </div>
          <Whatsapp/>
        </div>
      </div>
    </footer>
  );
}
