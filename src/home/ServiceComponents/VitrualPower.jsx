import React, { useState } from 'react';
import './Services.css'; // Ensure the CSS file is included
import Navbar from '../HomeComponents/Nav';
import Footer from '../Footer';

const VirtualPowerPlants = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    subject: 'Virtual Power Plants'
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
            src="https://www.datocms-assets.com/93357/1697585240-torus_vpp_03b.jpg" // Replace with the path to your image
            alt="Virtual Power Plant" 
            className="header-image" 
          />
          <h1 className="header-title">Virtual Power Plants</h1>
        </header>
        <section className="service-content">
          <p className="intro-paragraph">
            Pioneering the Future of Energy Management. Our Virtual Power Plants (VPPs) represent the cutting edge of decentralized energy solutions. By integrating and managing a network of distributed energy resources, including solar panels, wind turbines, and battery storage systems, we create a unified and efficient energy ecosystem. Our VPPs enhance grid reliability, optimize energy consumption, and support the transition to a more sustainable energy future.
          </p>
          <p className="technology-paragraph">
            Our VPP technology employs advanced software algorithms and real-time data analytics to coordinate and optimize the performance of various energy resources. This dynamic approach allows us to balance supply and demand effectively, reduce energy costs, and increase the resilience of the power grid. Our platform supports a range of energy resources and provides valuable insights into energy usage patterns, enabling smarter decision-making and more efficient energy management.
          </p>
          <ul className="service-features">
            <li className="feature-item"><strong className="feature-title">Decentralized Control:</strong> Efficiently manage a diverse array of distributed energy resources from a central platform.</li>
            <li className="feature-item"><strong className="feature-title">Grid Stability:</strong> Enhance the reliability and stability of the power grid through optimized resource management.</li>
            <li className="feature-item"><strong className="feature-title">Cost Efficiency:</strong> Reduce energy costs by optimizing resource usage and minimizing waste.</li>
            <li className="feature-item"><strong className="feature-title">Advanced Analytics:</strong> Utilize real-time data and predictive analytics to make informed energy management decisions.</li>
            <li className="feature-item"><strong className="feature-title">Scalable Solutions:</strong> Easily scale the VPP infrastructure to accommodate new energy resources and evolving technologies.</li>
          </ul>
          <section className="additional-info">
            <h2 className="info-title">Why Choose Our Virtual Power Plants?</h2>
            <p className="info-paragraph">
              By opting for our Virtual Power Plants, you're investing in a transformative approach to energy management. Our VPPs provide a sustainable solution that integrates renewable energy sources, enhances grid stability, and reduces energy costs. We are dedicated to advancing energy technology and delivering innovative solutions that meet the growing demands of modern energy systems.
            </p>
            <p className="info-paragraph">
              Our team of experts is committed to leveraging cutting-edge technology and industry best practices to optimize energy performance and support a more sustainable future. Partnering with us means gaining access to a state-of-the-art energy management system that is designed to meet your needs and exceed your expectations.
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
                  <option value="Virtual Power Plants">Virtual Power Plants</option>
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

export default VirtualPowerPlants;
