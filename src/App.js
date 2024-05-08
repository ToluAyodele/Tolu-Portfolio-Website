import "./App.css";
import Navbar from "./layouts/Navbar";
import Profile from "./layouts/Profile";
import React from 'react'

const App = () => {
  return (
    <div className="app-container">
      <Navbar/>
      <Profile/>
    </div>
  )
}

export default App
