import React from "react";
import '../../css/navbar.css';

import Logo from '../../media/NexTera-logo.png'

const Navbar = () => {
  const toggleMenu = () => {
    const menu = document.querySelector(".menu");
    const overlay = document.querySelector(".menu-overlay");
    menu.classList.toggle("active");
    overlay.classList.toggle("active");
  };

  return (
    <header className="header-main stick">
      <div className="container-header">
        <div className="row v-center">
          <div className="header-item item-left">
            <div className="logo-tsar">
              <a href="/">
                <img src={Logo} alt="HMS" style={{width:'10%'}} />
              </a>
            </div>
          </div>
          {/* Menu starts here */}
          <div className="header-item item-center">
            <div className="menu-overlay" onClick={toggleMenu}></div>
            <div className="menu">
              <div className="mobile-menu-head">
                <div className="mobile-menu-close" onClick={toggleMenu}>
                  &times;
                </div>
              </div>
              <ul className="menu-main">
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/AboutUs">About Us</a>
                </li>
                <li>
                  <a href="/Services">Services</a>
                </li>
                <li>
                  <a href="/Support">Support</a>
                </li>
                <li>
                  <a href="/ContactUs">Contact Us</a>
                </li>
              </ul>
            </div>
          </div>
          {/* Menu ends here */}
          <div className="header-item item-right">
            {/* Invisible globe icon placeholder */}
            <a
              href="#"
              style={{ color: "#000", fontSize: "20px", visibility: "hidden" }}
            >
              <i className="fa-solid fa-globe"></i>
            </a>
            {/* Mobile menu trigger */}
            <div className="mobile-menu-trigger" onClick={toggleMenu}>
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
