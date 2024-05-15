import React from 'react'
import "./about.css";
import aboutPic from "../assets/about-pic.png"

const About = () => {
  return (
    <div>
      <section className='about'>
        <p className="section__text__p1       ">Get to Know More</p>
        <h1 className='title         '>About Me </h1> 
        <div className='section-container     '>
            <div className=' section__pic-container    '>
                <img src={aboutPic}
                about="Profile picture" 
                className='about-pic'
                
                />

            </div>
            <div className="about-details-container">
                <div className='about-containers'>
                    <div className="details-container">
                        <img src="  "/>
                    </div>


                </div>

            </div>
        </div>

      </section>
    </div>
  )
}

export default About
