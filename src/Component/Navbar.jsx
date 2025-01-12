import React, { useEffect } from 'react';
import { useState } from 'react';
const Navbar = () => {

  const [menuSelect, setmenuSelect] = useState("Home");

  const vh = 60 + window.innerHeight*0.95;
  const handleScroll = () => {

    if(window.scrollY<vh){
      setmenuSelect("Home");
    }
    else if(window.scrollY<2*vh){
      setmenuSelect("About")
    }
    else if(window.scrollY<3*vh){
      setmenuSelect("Skills")
    }
    else if(window.scrollY<4*vh){
      setmenuSelect("Education")
    }
    else if(window.scrollY<5*vh){
      setmenuSelect("Contact")
    }
    
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  
    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  }, [])
  
  
  return ( 
    <div className='NavContainer' >
      <ul className='NavList'>
        <li className={menuSelect==="Home"?"active":"inactive"}>< a href='#Home'>Home</a></li>
        <li className={menuSelect==="About"?"active":"inactive"}>< a href='#About'>About</a></li>
        <li className={menuSelect==="Skills"?"active":"inactive"}>< a href='#Skills'>Skills</a></li>
        <li className={menuSelect==="Education"?"active":"inactive"}>< a href='#Education'>Education</a></li>
        <li className={menuSelect==="Contact"?"active":"inactive"}>< a href='#Contact'>Contact</a></li>
      </ul>
    </div>
  )
}

export default Navbar