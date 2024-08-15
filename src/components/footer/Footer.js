import React from 'react'
import { Col, Container, Row, ListGroup, ListGroupItem } from 'react-bootstrap';

export default function Footer() {
  const year = new Date().getFullYear();

  const FooterQuickLink = [
    {
      display: "Home",
      url: "#home"
    },
    {
      display: "About",
      url: "#about"
    },
    {
      display: "Courses",
      url: "#courses"
    },
    {
      display: "Contact",
      url: "#contact"
    }

  ]

  const FooterInfoLinks = [
    {
      display: "Terms & Conditions",
      url: ""
    },
    {
      display: "Privacy Policy",
      url: ""
    },
    {
      display: "Terms of Use",
      url: ""
    }

  ]

  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="3">
            <h2 className='d-flex align-items-center gap-1'><i className="ri-book-open-fill"></i>Learn Quran.</h2>
            <div className="follows">
              <p>Follow us on social media</p>
              <span>
                {""}
                <a href="faceboook.com"><i class="ri-facebook-circle-line"></i></a>
              </span>
              <span>
                {""}
                <a href="instagram.com"><i class="ri-instagram-line"></i></a>
              </span>
              <span>
                {""}
                <a href="faceboook.com"><i class="ri-mail-line"></i></a>
              </span>
              <span>
                {""}
                <a href="https://api.whatsapp.com/send?phone=+923107029087"><i class="ri-whatsapp-line"></i></a>
              </span>
            </div>
          </Col>
          <Col lg="3">
            <h6 >Explore</h6>
            <ListGroup className='list_group'>
              {FooterQuickLink.map((item, index) => (
                <ListGroupItem key={index} className='border-0 ps-0 list_link'>
                  {""}
                  <a className='explore-link' href={item.url}>{item.display}</a>
                </ListGroupItem>
              ))
              }
            </ListGroup>
          </Col>
          <Col lg="3">
            <h6 >Information</h6>
            <ListGroup  >
              {FooterInfoLinks.map((item, index) => (
                <ListGroupItem key={index} className='border-0 ps-0 list_link'>
                  {""}
                  <a roll={item.url} aria-disabled="true">{item.display}</a>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>
          <Col lg="3">
            <h6 >Get in touch</h6>
            <div className="get_in_touch">
              <p className='m-0'>Faisalabad Punjab Pakistan</p>
              <p className='m-0'>Phone: <a href="tel:+92 3107029087">+923107029087</a></p>
              <p>Email: <a href="mailto:nooralislam512@gmail.com">nooralislam512@gmail.com</a></p>
            </div>
          </Col>
        </Row>
        <Row>
          <hr className='mt-3' />
          <Col lg="12">
            <div className="policy">
              <p className=' m-0 text-center'>&copy;{year} All Rights reserved. Designed By <a href="mu-portfolio.web.app">Muhammad Umar.</a></p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer >
  )
}
