import React from 'react'

const Education = () => {
  return (
    <div className='ContentContainer' id='Education'>
      <div className="eduHead">
        <div className="edutitle">
          <img src="./image/Education.png" alt="edu logo" />
          <p>My</p>
          <p id='e1'>Education</p>
        </div>
        <p id='e2'>Education is a superpower</p>
      </div>

      <div className="eduContainer">
      <div className="eduBody">
        <img src="./image/SDCMT.jfif" alt="college" />
        <div className="eduDetails">
          <p id='eb1'>Bachelor of Computer Applications</p>
          <p id='eb2'>SDCMT | CCS</p>
          <p id='eb3'>2023-26 | Pursuing</p>
        </div>
      </div>
      <div className="eduBody">
        <img src="./image/NRPS.jfif" alt="school" />
        <div className="eduDetails">
          <p id='eb1'>Class 12 | PCM</p>
          <p id='eb2'>NRPS | CBSE</p>
          <p id='eb3'>2022-23 | Completed</p>
        </div>
      </div>
    </div></div>
  )
}

export default Education