import "./App.css";
import Navbar from "./layouts/Navbar";
import Profile from "./layouts/Profile";
// import About from "./layouts/About";
import Experience from "./layouts/Experience";
import Projects from "./layouts/Projects";
import React from 'react'

const App = () => {
  return (
    <div className="app-container">
      <Navbar/>
      <Profile/>
      <Experience/>
      <Projects/>

    </div>
  )
}

export default App
