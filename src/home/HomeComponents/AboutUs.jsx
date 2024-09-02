import React from "react";
import '../../css/HMS.css'

const AboutUs = () => {
  return (
    <section className="about-us">
      <div className="container">
        <h2 className="section-title">About Us</h2>
        <h2 className="about-content bold">Welcome to NextEra Tenergy</h2>
        <p className="about-content">
          NextEra Tenergy develops power beaming energy technology designed to
          enable long-range wireless energy transmission. Our technology
          includes wireless charging for electric vehicles, network delivery,
          wireless distribution network, and backup installation, enabling
          utilities, line companies, and engineering firms to transmit energy
          where traditional wire-based connections are not economically viable.
        </p>
      </div>
    </section>
  );
};

const Services = () => {
  return (
    <section className="services">
      <div className="container">
        <h2 className="section-title">Our Services</h2>
        <div className="service-cards card">
          <a href="/EVcharging" className="service-card card1">
            <div className="go-corner">
              <span className="go-arrow">→</span>
            </div>
            <h3>EV Charging Infrastructure</h3>
            <p>
            Accelerating Sustainable Transportation Our extensive EV
                charging infrastructure supports widespread electric vehicle
                adoption...
            </p>
          </a>
          <a href="/VirtualPowerPlants" className="service-card card1">
            <div className="go-corner">
              <span className="go-arrow">→</span>
            </div>
            <h3>Virtual Power Plants</h3>
            <p>
            Harnessing Decentralized Energy Our Virtual Power Plants (VPPs)
            aggregate decentralized energy resources...
            </p>
          </a>
          <a href="/Blockchain" className="service-card card1">
            <div className="go-corner">
              <span className="go-arrow">→</span>
            </div>
            <h3>Blockchain P2P Energy Trading</h3>
            <p>
            Secure and Transparent Our blockchain-based peer-to-peer energy
                trading platform empowers consumers to buy and sell energy
                securely and efficiently..
            </p>
          </a>
          <a href="/AIpower" className="service-card card1">
            <div className="go-corner">
              <span className="go-arrow">→</span>
            </div>
            <h3>Al-Powered Predictive Analytics</h3>
            <p>
            Optimizing Energy Supply Our Al-driven predictive analytics
                optimize energy supply and demand, ensuring grid
                resilience and efficiency.
            </p>
          </a>

        </div>
      </div>
    </section>
  );
};

export { AboutUs, Services };
