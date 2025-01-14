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
          <a href="#" target='_blank'><img src="./image/LinkedIn.png" alt="LinkedIn"/></a>
          <a href="https://leetcode.com/u/Kunal__2806" target='_blank'><img src="./image/LeetCode.png" alt="LeetCode" /></a>
          <a href="https://www.figma.com/files/team/1420722685421903072/recents-and-sharing?fuid=1420722683193932299" target='_blank'><img src="./image/Figma.png" alt="Figma" /></a>
          <a href="https://github.com/Kunal2806" target='_blank'><img src="./image/GitHub.png" alt="GitHub" /></a>
          <a href="#"><img src="./image/resume.png" alt="Resume" /></a>
        </div>
      </div>
      <div className="homePic">
        <img src="./image/homePic.jpeg" alt="pic" />
      </div>
    </div>
  )
}

export default Home
