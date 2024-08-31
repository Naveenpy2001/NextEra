import React from "react";
import "../../css/AboutUs.css"; // Assuming you'll add your custom styles in this file

import Navbar from "./Nav";
import Footer from "../Footer";

import Oliver from '../../media/Oliver.jpeg'

const AboutUs = () => {
  return (
    <>
      <Navbar />
      <br />
      <section className="about_us">
        <div className="containerr">
          <div className="row-2">
            <div className="col-md-12">
              <div className="about_inner">
                <h2>About Our NextEra</h2>
                <p className="about_description">
                  NextEra is an African Wireless Electricity & Artificial
                  Intelligence (Ai) startup focused on powering billionsin the 4
                  th , 5 th & future industrial revolutions.
                </p>
                <p className="about_description">
                  Wireless Power Transmission (WPT) is an emergingtechnology to
                  transfer a certain amount of power between two physical
                  locations without the needfor a wire between them. This is
                  appealing for applications in which embedded devices are
                  placedin locations that are complex to reach with wire.
                </p>
                <p className="about_description">
                  The problem targeted in this project is WPT fromanexternal
                  power source to an embedded systemfor long-range applications.
                  To achieve maximumpower transfer at a certain distance with
                  minimumcomponents at a specified frequency, various designs
                  and prototypes of NextEra will be analysed.
                </p>
                <p className="about_description">
                  The entire plan was developed at NextEra Ltd a Zimbabwean
                  technology & dynamic energy startup. We have qualified
                  scientists & High Qualified Electrical Engineers on board.
                </p>
                <h3>Meet Our Team</h3>
                <div className="team_profiles">
                  <div className="profile_card">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlie4MsQ9pJSSKY7DoEpxn3uBAq-rT7in1sA&s"
                      alt="Dr. Sarah Johnson"
                      className="profile_image"
                    />
                    
                    <p className="profile_bio">
                    I need to oversee the project, keeping it on track with our goals and deadlines. I’ll coordinate between the team members, allocate resources, and handle communication with stakeholders. My role is to keep everything running smoothly and tackle any issues that come up.
                    </p>
                    <div className="bottomLeft">
                    <h4> - Jabivulla</h4>
                    <p className="profile_position">Manager</p>
                    </div>
                  </div>
                  <div className="profile_card">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4tbfEljozkPT6V0ErExQdTz1gPubg3GdLGDaz3XV18yYU3Ix7IZBYYLYQSkj_tBEFW0I&usqp=CAU"
                      alt="John Smith"
                      className="profile_image"
                    />
                    
                    <p className="profile_bio">
                    I’m responsible for designing and building the user interface of our application. This means focusing on how it looks and feels, using HTML, CSS, and JavaScript to make sure everything is responsive and engaging. My work ensures the application is both functional and visually appealing.
                    </p>
                    <div className="bottomLeft">
                    <h4> - Naveen</h4>
                    <p className="profile_position">Frontend Developer</p>
                    </div>
                  </div>
                  <div className="profile_card">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4tbfEljozkPT6V0ErExQdTz1gPubg3GdLGDaz3XV18yYU3Ix7IZBYYLYQSkj_tBEFW0I&usqp=CAU"
                      alt="Emily Davis"
                      className="profile_image"
                    />
                    
                    <p className="profile_bio">
                    I take care of the server-side logic and database management that users don’t see. I work with server-side languages and manage APIs and databases to keep the application running efficiently. My role is crucial for handling data and ensuring everything works seamlessly.
                    </p>
                    <div className="bottomLeft">
                    <h4> - Syed Basha</h4>
                    <p className="profile_position">Backend Developer</p>
                    </div>
                  </div>
                </div>
                <h3>Our Mission</h3>
                <p className="about_description">
                  Our cordial aim is to converge exponential wireless
                  technologies with 6D's Exponential frameworks which are
                  Digitized, Deceptive, Disruptive, Dematerialise, Demonitize
                  and Democratise.
                </p>
                <h3>Our Vision</h3>
                <p className="about_description">
                  With the right vision, plans and resources in place our
                  Wireless Technology Network reach full potential. We work with
                  city governments to develop this vision and roadmap so that we
                  assess and consider the concerns of citizens and business
                  stakeholders to ensure alignment with their priorities and to
                  get their buy-in. We match top-down initiatives with bottom-up
                  sentiment to create sustainable energy value.
                </p>
                <h3>Why Choose Our NextEra?</h3>
                <p className="about_description">
                NextEra Tenergy is accelerating the green energy transition by building a global wireless electricity technology network that will power billions from space or earth without laying powerlines.

 NextEra's state-of-the-art technology deliver the world's first wireless electricity transmission solution-intelligent, long range, high power, and point-to-multipoint.

NextEra Tenergy offers a ubiquitous energy connectivity service. We can address a wider range of customer requirements and provide hybrid wireless electricity connectivity services where they are required worldwide, all with industry leading resilience.

NextEra Tenergy is solving fundamental problems with wireless electricity transfer that will benefit our world.
                </p>
              </div>
              <div className="profileContain">
                <div className="containerProfile">
                  <div className="photoContainer">
                    <img src={Oliver} alt="Oliver" className="ProfileImg"/>
                  </div>
                  <div className="aboutContainer">
                    <div className="headerInfo">
                      <h2>Founder : </h2>
                      <h2>
                        <q style={{color:'green'}}> Oliver Tapuwa Mapunga </q>
                      </h2>
                    </div>
                    <div className="textContainer">
                      <p className="textAbout">
                      I'm from Zimbabwean serial entrepreneur, sportsperson and dynamic leader with an extensive background in artificial intelligence, modern smart city technologies among others. He is the founder of NextEra Tenergy, a wireless electricity technology startup creating clean energy access to over 2.3 Billion people without access to power.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default AboutUs;
