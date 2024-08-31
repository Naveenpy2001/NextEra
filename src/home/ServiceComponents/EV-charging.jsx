import React, { useState } from 'react';
import './Services.css'; // Ensure the CSS file is included
import Navbar from '../HomeComponents/Nav';
import Footer from '../Footer';
const EVcharging = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    subject: 'EV Charging Infrastructure'
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
          src="https://www.evengineeringonline.com/wp-content/uploads/2024/04/ev-charging-1.jpg" // Replace with the path to your image
          alt="EV Charging Infrastructure" 
          className="header-image" 
        />
        <h1 className="header-title">EV Charging Infrastructure</h1>
      </header>
      <section className="service-content">
        <p className="intro-paragraph">
          Accelerating Sustainable Transportation. Our extensive EV charging infrastructure supports widespread electric vehicle adoption, reducing carbon emissions and promoting a healthier environment. We are dedicated to providing a robust and reliable network of charging stations that cater to the growing demand for electric vehicles. Our infrastructure is strategically placed to offer convenience and accessibility, ensuring that EV users can easily find and use charging points across various locations.
        </p>
        <p className="technology-paragraph">
          Our EV charging stations are designed with cutting-edge technology to deliver efficient and fast charging solutions. We offer various charging options including Level 2 chargers for everyday use and DC fast chargers for quick top-ups during longer journeys. The reliability of our network is backed by 24/7 support and real-time monitoring, ensuring minimal downtime and optimal performance. Additionally, we are continually expanding our network to cover new areas and meet the evolving needs of electric vehicle owners.
        </p>
        <ul className="service-features">
          <li className="feature-item"><strong className="feature-title">Wide Coverage:</strong> Our charging stations are located in key areas such as shopping centers, parking lots, and highway rest stops.</li>
          <li className="feature-item"><strong className="feature-title">Fast Charging:</strong> Benefit from high-speed charging technology that reduces wait times and enhances your driving experience.</li>
          <li className="feature-item"><strong className="feature-title">User-Friendly App:</strong> Our mobile app provides easy access to station locations, real-time availability, and payment options.</li>
          <li className="feature-item"><strong className="feature-title">Eco-Friendly:</strong> We use renewable energy sources to power our charging stations, further supporting our commitment to sustainability.</li>
          <li className="feature-item"><strong className="feature-title">Future-Proof:</strong> Our infrastructure is built to accommodate emerging EV technologies and charging standards.</li>
        </ul>
        <section className="additional-info">
          <h2 className="info-title">Why Choose Our EV Charging Stations?</h2>
          <p className="info-paragraph">
            Choosing our EV charging stations means investing in the future of transportation. We are committed to delivering not only the best charging experience but also supporting advancements in electric vehicle technology. Our network's scalability ensures that as more EVs hit the road, our infrastructure will be ready to meet the increasing demand.
          </p>
          <p className="info-paragraph">
            Our team is constantly researching and implementing new technologies to enhance charging speeds and user convenience. We are also actively engaging with communities and businesses to expand our network in strategic locations. By partnering with us, you're not just accessing a charging point; you're joining a movement towards a more sustainable and technologically advanced future.
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
                <option value="EV Charging Infrastructure">EV Charging Infrastructure</option>
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

export default EVcharging;
