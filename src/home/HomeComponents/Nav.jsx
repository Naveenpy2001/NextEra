import React from "react";
import '../../css/navbar.css';

import Logo from '../../media/NexTera-logo.png';
import { RiArrowDropDownLine } from "react-icons/ri";

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
                  <a href="/"  className="navLinks">Home</a>
                </li>
                <li>
                  <a href="/AboutUs" className="navLinks">About Us</a>
                </li>
                <li className="servicesHover">
                  <a href="#!" className="centerIcon">Services <RiArrowDropDownLine className="arrow" /></a> 
                  <div className="popNav">
                    <a href="/EVcharging" className="subNav">EV Charging Infrastructure</a>
                    <a href="/AIpower" className="subNav">Virtual Power Plants</a>
                    <a href="/Blockchain" className="subNav">Blockchain P2P Energy Trading</a>
                    <a href="/VirtualPowerPlants" className="subNav">Al-Powered Predictive Analytics</a>
                  </div>
                </li>
                <li>
                  <a href="/Support" className="navLinks">Support</a>
                </li>
                <li>
                  <a href="/ContactUs" className="navLinks">Contact Us</a>
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
