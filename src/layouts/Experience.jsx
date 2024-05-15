import React from 'react'
import "./profile.css"
import "./experience.css";
import checkmark from "../assets/checkmark.png";

const Experience = () => {
  return (
    <div>
      <section className='experience'>
        <p className='section__text__p1'> Explore My</p>
        <h1 className='title'> Experience</h1>
        <div className='experience-details-container'>
            <div className='about-containers'>
                <div className='details-containers'>
                    <h2 className='experience-sub-title'>FrontEnd Development</h2>
                    <div className='article-container'>
                        <article >
                            <img className='icon' src={checkmark} alt="Experience Icon" />
                            <div>
                                <h3>HTML/CSS</h3>
                                <p>Experienced</p>
                            </div>
                        </article>
                        <article >
                            <img className='icon' src={checkmark} alt="Experience Icon" />
                            <div>
                                <h3>JavaScript</h3>
                                <p>Experienced</p>
                            </div>
                        </article>
                        <article >
                            <img className='icon' src={checkmark} alt="Experience Icon" />
                            <div>
                                <h3>React</h3>
                                <p>Experienced</p>
                            </div>
                        </article>
                        <article >
                            <img className='icon' src={checkmark} alt="Experience Icon" />
                            <div>
                                <h3>Python</h3>
                                <p>Experienced</p>
                            </div>
                        </article>
                        <article >
                            <img className='icon' src={checkmark} alt="Experience Icon" />
                            <div>
                                <h3>Git/GitHub</h3>
                                <p>Experienced</p>
                            </div>
                        </article>
                        <article >
                            <img className='icon' src={checkmark} alt="Experience Icon" />
                            <div>
                                <h3>HTML</h3>
                                <p>Experienced</p>
                            </div>
                        </article>
                    </div>
                </div>
                <div className='details-containers'>
                    <h2 className='experience-sub-title'>BackEnd Development</h2>
                    <div className='article-container'>
                        <article >
                            <img className='icon' src={checkmark} alt="Experience Icon" />
                            <div>
                                <h3>Node.js</h3>
                                <p>Experienced</p>
                            </div>
                        </article>
                        <article >
                            <img className='icon' src={checkmark} alt="Experience Icon" />
                            <div>
                                <h3>Express.js</h3>
                                <p>Experienced</p>
                            </div>
                        </article>
                        <article >
                            <img className='icon' src={checkmark} alt="Experience Icon" />
                            <div>
                                <h3>PostgreSQL</h3>
                                <p>Experienced</p>
                            </div>
                        </article>
                        
                    </div>
                </div>
            </div>
        </div>
      </section>
    </div>
  )
}

export default Experience
