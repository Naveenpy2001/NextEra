import React from "react";
import FooterLogo from '../media/download.png';

import { SlSocialInstagram } from "react-icons/sl";
import { TiSocialFacebook } from "react-icons/ti";
import { TiSocialTwitter } from "react-icons/ti";
import { SlSocialYoutube } from "react-icons/sl";
// 'HMS.csc'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img src={FooterLogo} alt="Logo" style={{ width: "100%" }} />
        </div>
        <div className="footer-links">
          <a href="/AboutUs" className="footer-link">
            About Us
          </a>
          <a href="/Services" className="footer-link">
            Services
          </a>
          <a href="/ContactUs" className="footer-link">
            Contact Us
          </a>
          <p className="Icons-social">
            | Follow Us On :
            <a href="#!" className="socailIcons footer-link">
              <SlSocialInstagram />
            </a>
            <a href="#!" className="socailIcons footer-link">
              <TiSocialFacebook />
            </a>
            <a href="#!" className="socailIcons footer-link">
              <TiSocialTwitter />
            </a>
            <a href="#!" className="socailIcons footer-link">
              <SlSocialYoutube />
            </a>
          </p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 NextEra. All Rights Reserved.</p>
        <br />
        <p>Developed By : TSAR-IT PVT LTD</p>
      </div>
    </footer>
  );
};

export default Footer;
