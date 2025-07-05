import React from "react";
import { Col, Container, Row, ListGroup, ListGroupItem } from "react-bootstrap";

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
      <Container>
        <Row>
          <Col lg="4">
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
          </Col>
          <Col lg="2">
            <h6>Explore</h6>
            <ListGroup className="list_group">
              {FooterQuickLink.map((item, index) => (
                <ListGroupItem
                  key={index}
                  className="border-0 bold ps-0 list_link"
                >
                  {""}
                  <a className="explore-link" href={item}>
                    {item.display}
                  </a>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>
          <Col lg="2">
            <h6>Information</h6>
            <ListGroup>
              {FooterInfoLinks.map((item, index) => (
                <ListGroupItem key={index} className="border-0 ps-0 list_link">
                  {""}
                  <p roll={item.url} aria-disabled="true">
                    {item.display}
                  </p>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>
          <Col lg="4">
            <h6>Get in touch</h6>
            <div className="get_in_touch">
              <p className="m-0">Faisalabad Punjab Pakistan</p>
              <p className="m-0">
                Phone: <a href="tel:+923270029087">+923270029087</a>
              </p>
              <p>
                Email:{" "}
                <a href="mailto:info.arqamacademy@gmail.com" aria-label="email">
                  info.arqamacademy@gmail.com
                </a>
              </p>
            </div>
          </Col>
        </Row>
        <Row>
          <hr className="mt-3" />
          <Col lg="12">
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
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
