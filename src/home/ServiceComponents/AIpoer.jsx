import React, { useState } from 'react';
import './Services.css'; // Ensure the CSS file is included
import Navbar from '../HomeComponents/Nav';
import Footer from '../Footer';

const AIpower = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    subject: 'AI-Powered Predictive Analytics'
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
            src="https://miro.medium.com/v2/resize:fit:1358/1*5fRxqeePK86nbKRgt3Ug4w.png" // Replace with the path to your image
            alt="AI-Powered Predictive Analytics" 
            className="header-image" 
          />
          <h1 className="header-title">AI-Powered Predictive Analytics</h1>
        </header>
        <section className="service-content">
          <p className="intro-paragraph">
            Harnessing the Power of Artificial Intelligence for Future Insights. Our AI-powered predictive analytics solutions leverage cutting-edge machine learning algorithms and data processing techniques to provide actionable insights and forecasts. By analyzing historical data and identifying patterns, our platform helps businesses anticipate future trends, optimize operations, and make informed decisions with greater confidence.
          </p>
          <p className="technology-paragraph">
            Our platform integrates advanced AI technologies to deliver accurate and reliable predictions across various domains. From sales forecasting to risk management, our predictive analytics solutions utilize sophisticated algorithms to analyze complex datasets and generate insights that drive strategic decision-making. By continuously learning from new data, our AI models enhance their predictive accuracy and adapt to evolving business environments.
          </p>
          <ul className="service-features">
            <li className="feature-item"><strong className="feature-title">Advanced Algorithms:</strong> Utilize state-of-the-art machine learning techniques to analyze data and generate forecasts.</li>
            <li className="feature-item"><strong className="feature-title">Real-Time Insights:</strong> Access up-to-date predictions and recommendations based on the latest data.</li>
            <li className="feature-item"><strong className="feature-title">Customizable Solutions:</strong> Tailor predictive models to meet the specific needs and objectives of your business.</li>
            <li className="feature-item"><strong className="feature-title">Data Integration:</strong> Seamlessly integrate with existing data sources and systems for comprehensive analysis.</li>
            <li className="feature-item"><strong className="feature-title">Continuous Improvement:</strong> Benefit from models that evolve and improve as new data is incorporated.</li>
          </ul>
          <section className="additional-info">
            <h2 className="info-title">Why Choose Our AI-Powered Predictive Analytics?</h2>
            <p className="info-paragraph">
              Our AI-powered predictive analytics solutions offer a transformative approach to data analysis and decision-making. By leveraging the latest advancements in artificial intelligence, we provide businesses with the tools they need to anticipate future trends, optimize strategies, and achieve competitive advantages. Our platform's ability to deliver accurate predictions and actionable insights empowers organizations to navigate uncertainty and drive growth.
            </p>
            <p className="info-paragraph">
              We are dedicated to helping businesses unlock the full potential of their data through innovative AI technologies. Our team of experts is committed to delivering high-quality solutions that meet your unique needs and exceed your expectations. Choose our AI-powered predictive analytics to gain a deeper understanding of your business environment and make data-driven decisions with confidence.
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
                  <option value="AI-Powered Predictive Analytics">AI-Powered Predictive Analytics</option>
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

export default AIpower;
