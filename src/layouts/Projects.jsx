import React from 'react'
import "./projects.css";
import "./profile.css";
import "./experience.css";
import project1 from "../assets/project-1.png";

const Projects = () => {
  return (
    <div>
      <section className='projects'>
        <p className="section__text__p1">Browse My Recent</p>
        <h1 className='title'>Projects</h1>
        <div className='experience-details-container'>
          <div className='about-containers'>
            <div className='details-containers color-container'>
                  <div className='articles-container'>
                      <img src={project1} alt="project 1" className='project-img' />
                  </div>
                  <h2 className='experience-sub-title project-title'>TalentBridge</h2>
                  <div ckassName='button-container'>
                      <button className='btn btn-color-2 project-btn' onClick={() => {window.location.href='https://github.com/ToluAyodele/TalentBridge-project'}}>
                          GitHub
                      </button>
                      <button className='btn btn-color-2 project-btn' onClick={() => {window.location.href='https://github.com/ToluAyodele/TalentBridge-project'}}>
                          Live Demo
                      </button>
                  </div>
            </div>
            <div className='details-containers color-container'>
                  <div className='articles-container'>
                      <img src={project1} alt="project 1" className='project-img' />
                  </div>
                  <h2 className='experience-sub-title project-title'>TalentBridge</h2>
                  <div ckassName='button-container'>
                      <button className='btn btn-color-2 project-btn' onClick={() => {window.location.href='https://github.com/ToluAyodele/TalentBridge-project'}}>
                          GitHub
                      </button>
                      <button className='btn btn-color-2 project-btn' onClick={() => {window.location.href='https://github.com/ToluAyodele/TalentBridge-project'}}>
                          Live Demo
                      </button>
                  </div>
            </div>
            <div className='details-containers color-container'>
                  <div className='articles-container'>
                      <img src={project1} alt="project 1" className='project-img' />
                  </div>
                  <h2 className='experience-sub-title project-title'>TalentBridge</h2>
                  <div ckassName='button-container'>
                      <button className='btn btn-color-2 project-btn' onClick={() => {window.location.href='https://github.com/ToluAyodele/TalentBridge-project'}}>
                          GitHub
                      </button>
                      <button className='btn btn-color-2 project-btn' onClick={() => {window.location.href='https://github.com/ToluAyodele/TalentBridge-project'}}>
                          Live Demo
                      </button>
                  </div>
            </div>
            
          </div>
            

        </div>
      </section>
    </div>
  )
}

export default Projects
