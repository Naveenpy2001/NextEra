import React, { useState } from 'react';
import './Services.css'; // Ensure the CSS file is included
import Navbar from '../HomeComponents/Nav';
import Footer from '../Footer';

const Blockchain = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    subject: 'Blockchain P2P Energy Trading'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted', formData);
  };

  return (
    <>
      <Navbar />
      <div className="service-page">
        <header className="service-header">
          <img 
            src="https://www.smart-energy.com/wp-content/uploads/2023/04/blockchain-p2p-trading-800x600-1.jpg" // Replace with the path to your image
            alt="Blockchain P2P Energy Trading" 
            className="header-image" 
          />
          <h1 className="header-title">Blockchain P2P Energy Trading</h1>
        </header>
        <section className="service-content">
          <p className="intro-paragraph">
            Transforming Energy Markets with Blockchain Technology. Our Peer-to-Peer (P2P) Energy Trading platform leverages blockchain to create a secure, transparent, and efficient marketplace for energy transactions. By utilizing decentralized ledger technology, we enable users to buy and sell energy directly from each other, reducing reliance on traditional intermediaries and fostering a more open and dynamic energy market.
          </p>
          <p className="technology-paragraph">
            Blockchain technology provides an immutable and transparent record of all transactions, ensuring trust and accountability in every trade. Our platform supports smart contracts that automate and enforce the terms of energy transactions, reducing administrative overhead and minimizing the potential for disputes. With real-time transaction tracking and secure payment mechanisms, our P2P trading system is designed to offer a seamless and user-friendly experience.
          </p>
          <ul className="service-features">
            <li className="feature-item"><strong className="feature-title">Decentralized Trading:</strong> Enable direct energy exchanges between users without the need for traditional intermediaries.</li>
            <li className="feature-item"><strong className="feature-title">Enhanced Security:</strong> Blockchain technology ensures the security and integrity of all transactions through cryptographic methods.</li>
            <li className="feature-item"><strong className="feature-title">Smart Contracts:</strong> Automate and enforce trade agreements, reducing the risk of errors and disputes.</li>
            <li className="feature-item"><strong className="feature-title">Transparency:</strong> Provide a clear and unalterable record of all transactions, fostering trust and accountability.</li>
            <li className="feature-item"><strong className="feature-title">Cost Efficiency:</strong> Minimize transaction fees and administrative costs associated with traditional energy trading methods.</li>
          </ul>
          <section className="additional-info">
            <h2 className="info-title">Why Choose Our Blockchain P2P Energy Trading Platform?</h2>
            <p className="info-paragraph">
              Our blockchain-based P2P energy trading platform represents a significant leap forward in the evolution of energy markets. By removing intermediaries and leveraging the power of blockchain technology, we create a more efficient, secure, and transparent marketplace for energy transactions. Our platform empowers users to take control of their energy usage and trading, offering a more democratic and flexible approach to energy management.
            </p>
            <p className="info-paragraph">
              We are committed to driving innovation in the energy sector and providing solutions that meet the needs of a rapidly evolving market. Our team of experts is dedicated to ensuring that our platform delivers exceptional performance, security, and user experience. Join us in shaping the future of energy trading with blockchain technology.
            </p>
          </section>
          <footer className="service-footer">
            <h2 className="footer-title">Contact Us</h2>
            <form className="contact-form" onSubmit={handleSubmit}>
              <label htmlFor="name" className="form-label">
                Name:
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="form-input"
                  required
                />
              </label>
              <label htmlFor="email" className="form-label">
                Email:
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-input"
                  required
                />
              </label>
              <label htmlFor="subject" className="form-label">
                Subject:
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="form-select"
                >
                  <option value="Blockchain P2P Energy Trading">Blockchain P2P Energy Trading</option>
                  {/* You can add more options here if needed */}
                </select>
              </label>
              <label htmlFor="message" className="form-label">
                Message:
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="form-textarea"
                  rows="5"
                  required
                ></textarea>
              </label>
              <button type="submit" className="form-button">Submit</button>
            </form>
          </footer>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Blockchain;
