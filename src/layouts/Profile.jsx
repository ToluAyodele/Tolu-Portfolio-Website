import React from 'react'
import "./profile.css";
import profilePic from "../assets/my-picture.JPG";
import resume from "../assets/Resume-ToluwanimiAyodele.pdf";
import linkedin from "../assets/linkedin.png";
import github from "../assets/github.png";

const Profile = () => {

    const openResume=() => {
        window.open(resume);
    }

    return (
        <div>
        <section className="profile">
                    <div className="section__pic-container">

                    
                        <img className="profile-pic" style={{width: "500px", height: "700px", borderRadius: "5rem"}} src={profilePic} alt="profile-pic1"
                        />
                        
                    </div>
                    <div className="section__text">
                        <p className="section__text__p1">Hello, I'm </p>
                        <h1 className="title">Toluwanimi Ayodele</h1>
                        <p className="section__text__p2">Frontend Developer</p>
                        <div className="btn-container">
                            <button className="btn btn-color-2" onClick={openResume}>
                                Download Resume
                            </button>
                            <button className="btn btn-color-1" onClick={()=>(window.location.href='./#contact')}>
                                Contact Info
                            </button>


                            
                        </div>

                        <div className="socials-container">
                            <img src={linkedin} alt="LinkedIn profile" 
                                className="icon" onClick={() => (window.location.href="https://www.linkedin.com/in/toluwanimi-ayodele-28a5491b0/")}
                            />

                            <img src={github} alt="github profile" 
                                className="icon" onClick={() => (window.location.href="https://github.com/ToluAyodele?tab=repositories")}
                            />
                        </div>

                    </div>
                </section>
        </div>
    )
}

export default Profile
