import React from 'react'

function Home() {
  return (
    <div className='ContentContainer' id='Home' >
      <div className="homeIntro">
        <div className="homeIntroDetails">
          <p id='t1'>Hii, I am</p>
          <p id='t2'> Kunal Goswami</p>
          <p id='t3'>FUllStack WebDeveloper</p>
        </div>
        <div className="homeIntroImage">
          <img src="./image/LinkedIn.png" alt="LinkedIn" />
          <img src="./image/LeetCode.png" alt="LeetCode" />
          <img src="./image/Figma.png" alt="Figma" />
          <img src="./image/GitHub.png" alt="GitHub" />
          <img src="./image/resume.png" alt="Resume" />
        </div>
      </div>
      <div className="homePic"></div>
    </div>
  )
}

export default Home
