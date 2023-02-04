import logo from "../assets/logo.jpg";
import React from "react";
import Portrait from "../assets/portrait.png";


const About = (props) => {
  return (
    <>
      <div className="App">
        <div className='mainContent'>
          <div className="aboutUsContent">
            <h1>About Us</h1>
            <p>Mom Life was created in 2022 and officially started in 2023 by Katie Odom.</p> <img className="portrait"src={Portrait}/><p>Katie started Mom Life as hobby & a creative outlet while her kids would sleep at night. Katie grew up in a family business and always dreamt of having a business of her own. It took many years for the idea to build. Over 5 years and 2 babies later, Katie had created a pregnancy planner & apparel in hopes to share with other moms. Katie finally compiled years' worth of notes and created the 1st Mom Life Pregnancy Planner in November 2022. She spent days and hours each night working endlessly on every tiny detail in hopes of creating the perfect, sophisticated, classy pregnancy planner for all expecting parents.</p>
          </div>
        </div>
      </div>

    </>
  );
};

export default About;
