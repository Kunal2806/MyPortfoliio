import React from 'react'

function About() {
  return (
    <div className='ContentContainer' id="About">
      <div className="aboutImg">
        <img src="./image/aboutPic.jpg" alt="pic" />
      </div>
      <div className="aboutContent">
        <div className="aboutHead">
          <img src="./image/person.png" alt="personLogo" />
          <p>AboutMe</p>
        </div>
        <div className="aboutBody">
          <p id='p1'>Hii 👋, I'm Kunal!</p>
          <p id='p2'>FullStack WebDeveloper</p>
          <div className="bodyContent">
          <p>🌱 Working Hard & Passonately</p>
          <p>👀 always looking for better opportunities</p>
          <p>😊 Can adapt to any environment</p>
          <p>📖 currently pursuing B.C.A</p>
          <p>💖 I enjoy resolving issues and coming up with new ideas</p>
          <p id='p3'>✉ Email: kunalgoswami.2806@gmail.com </p>
          <p>📞 Phone: +91 9711869549</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
