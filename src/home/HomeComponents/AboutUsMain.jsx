import React from "react";
import "../../css/AboutUs.css"; // Assuming you'll add your custom styles in this file

import Navbar from "./Nav";
import Footer from "../Footer";
const AboutUs = () => {
  return (
    <>
      <Navbar />
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
                      src="https://static.vecteezy.com/system/resources/previews/021/548/095/non_2x/default-profile-picture-avatar-user-avatar-icon-person-icon-head-icon-profile-picture-icons-default-anonymous-user-male-and-female-businessman-photo-placeholder-social-network-avatar-portrait-free-vector.jpg"
                      alt="Dr. Sarah Johnson"
                      className="profile_image"
                    />
                    <h4> Sarah Johnson</h4>
                    <p className="profile_position">Developer</p>
                    <p className="profile_bio">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, dignissimos distinctio eum aspernatur adipisci sit!
                    </p>
                  </div>
                  <div className="profile_card">
                    <img
                      src="https://static.vecteezy.com/system/resources/previews/021/548/095/non_2x/default-profile-picture-avatar-user-avatar-icon-person-icon-head-icon-profile-picture-icons-default-anonymous-user-male-and-female-businessman-photo-placeholder-social-network-avatar-portrait-free-vector.jpg"
                      alt="John Smith"
                      className="profile_image"
                    />
                    <h4>John Smith</h4>
                    <p className="profile_position">Developer</p>
                    <p className="profile_bio">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore dolorem veniam, enim cupiditate minima ut?
                    </p>
                  </div>
                  <div className="profile_card">
                    <img
                      src="https://static.vecteezy.com/system/resources/previews/021/548/095/non_2x/default-profile-picture-avatar-user-avatar-icon-person-icon-head-icon-profile-picture-icons-default-anonymous-user-male-and-female-businessman-photo-placeholder-social-network-avatar-portrait-free-vector.jpg"
                      alt="Emily Davis"
                      className="profile_image"
                    />
                    <h4>Emily Davis</h4>
                    <p className="profile_position">Developer</p>
                    <p className="profile_bio">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem aperiam dignissimos accusamus.
                    </p>
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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Officiis sunt molestiae rerum commodi ad incidunt nisi quasi
                  mollitia, ipsum doloribus corporis consequatur ratione cum
                  voluptatibus dicta omnis, deserunt maxime eligendi quas ab
                  assumenda, a fugit dignissimos. Eos aliquid sit asperiores
                  omnis officiis veniam suscipit. Sint dicta perspiciatis neque
                  in sapiente optio laudantium, culpa quibusdam hic, assumenda
                  ducimus reprehenderit mollitia ullam, fugiat debitis
                  exercitationem quidem porro facere. Veniam reprehenderit
                  asperiores pariatur fugiat quis et numquam hic eius ipsa
                  explicabo sint dolore itaque inventore officia impedit
                  expedita, nihil quibusdam, ab vel non. Quod laborum aut
                  repudiandae! Dolorem consequuntur recusandae dicta praesentium
                  quibusdam.
                </p>
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
