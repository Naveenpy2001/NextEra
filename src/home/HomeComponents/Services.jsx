import React from "react";
import '../../css/services.css'

import Navbar from "./Nav";
import Footer from "../Footer";

const Services = () => {
  return (
    <>
      <Navbar />
      <section className="srvs-services">
        <div className="srvs-container">
          <h2 className="srvs-section-title">Our Services</h2>
          <div className="srvs-service-cards">
            <div className="srvs-service-card">
              <img
                src="https://www.evengineeringonline.com/wp-content/uploads/2024/04/ev-charging-1.jpg"
                alt="Patient Management"
                className="srvs-card-image"
              />
              <h3 className="srvs-card-title">EV Charging Infrastructure</h3>
              <p className="srvs-card-description">
                Accelerating Sustainable Transportation Our extensive EV
                charging infrastructure supports widespread electric vehicle
                adoption, reducing carbon emissions and promoting a healthier
                environment.
              </p>
            </div>
            <div className="srvs-service-card">
              <img
                src="https://www.datocms-assets.com/93357/1697585240-torus_vpp_03b.jpg"
                alt="Doctor Scheduling"
                className="srvs-card-image"
              />
              <h3 className="srvs-card-title">Virtual Power Plants</h3>
              <p className="srvs-card-description">
                Harnessing Decentralized Energy Our Virtual Power Plants (VPPs)
                aggregate decentralized energy resources, enabling real-time
                optimization and efficient energy distribution.
              </p>
            </div>
            <div className="srvs-service-card">
              <img
                src="https://www.smart-energy.com/wp-content/uploads/2023/04/blockchain-p2p-trading-800x600-1.jpg"
                alt="Inventory Management"
                className="srvs-card-image"
              />
              <h3 className="srvs-card-title">Blockchain P2P Energy Trading</h3>
              <p className="srvs-card-description">
                Secure and Transparent Our blockchain-based peer-to-peer energy
                trading platform empowers consumers to buy and sell energy
                securely and efficiently.
              </p>
            </div>
            <div className="srvs-service-card">
              <img
                src="https://miro.medium.com/v2/resize:fit:1358/1*5fRxqeePK86nbKRgt3Ug4w.png"
                alt="Billing and Insurance"
                className="srvs-card-image"
              />
              <h3 className="srvs-card-title">
                Al-Powered Predictive Analytics
              </h3>
              <p className="srvs-card-description">
                Optimizing Energy Supply Our Al-driven predictive analytics
                optimize energy supply and demand, ensuring grid
                resilience and efficiency.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Services;
