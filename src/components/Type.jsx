import React from 'react'
import Typewriter from 'typewriter-effect';

const Type = () => {
  return (
    <div>
        <Typewriter 
        options={{
            strings: ['FrontEnd Developer', 'ML Engineer',  'Data Scientist'],
            autoStart: true,
            loop: true,
            delay: 90,
            deleteSpeed: 50,
        }}
      
      />
    </div>
  )
}

export default Type
