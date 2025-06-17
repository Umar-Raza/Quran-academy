import React, { useRef } from "react";
import { Link, Outlet } from "react-router-dom";

export default function Header() {
  const menuRef = useRef();
  const menuToggle = () => menuRef.current.classList.toggle("active_menu");
  return (
    <header className="header sticky-top shadow">
      <div className="container">
        <div className="navigation d-flex align-items-center justify-content-between">
          <div className="logo">
            <h2 className="d-flex align-items-center mb-0">
              <i className="ri-book-open-fill"></i>Miftah Al-Islam.
            </h2>
          </div>
          <div className="nav " id="navbar">
            <div className="nav_menu " ref={menuRef} onClick={menuToggle}>
              <ul className="nav_list">
                <li className="nav-item ">
                  <a className="nav-link" href="#home" aria-current="page">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#about">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#courses">
                    Courses
                  </a>
                </li>
                <li className="nav-item">
                  <Link to="/registration" className="nav-link">
                    Regitration
                  </Link>
                </li>
                <li className="nav-item ">
                  <a className="nav-link" href="#contact">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mobile_menu">
            <span>
              <i
                style={{ fontSize: "2rem" }}
                className="ri-menu-3-line"
                onClick={menuToggle}
              ></i>
            </span>
          </div>
        </div>
        <Outlet />
      </div>
    </header>
  );
}
