import React from 'react'
import Typewriter from 'typewriter-effect/dist/core';

const typeWriterEffect = () => {
  return (
    <span>
      <Typewriter 
        options={{
            strings: ['FrontEnd Developer', 'ML Engineer',  'Data Scientist'],
            autoStart: true,
            loop: true,
            delay: 70,
            deleteSpeed: 20,
        }}
      
      />
    </span>
  )
}

export default typeWriterEffect
