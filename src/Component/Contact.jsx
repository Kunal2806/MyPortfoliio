import React from 'react'
import { useState } from 'react';

const Contact = () => {

const [detail, setdetail] = useState({name:"",email:"",phone:"",message:""});

const handleChange = (e) =>{
  const {name , value} = e.target;
  setdetail( (pre) => ({...pre,[name]:value}));
}
const handleSubmit = async() =>{
  let data = detail;
  await fetch("  https://backend.kunalgoswami-2806.workers.dev/post", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type" : "application/json",
    },
    body: JSON.stringify(data),
  })
  setdetail({name:'',email:'',phone:'',message:''})
}

  return (
    <div  className='ContentContainer' id='Contact'>
      <img src="./image/working.png" alt="pic" />
      <div className="contactDetails">
        <input type='text' value={detail.name} name="name" id="name" placeholder='🖊_Name' onChange={handleChange}></input>
        <input type='email' value={detail.email} name="email" id="email" placeholder='✉_Email' onChange={handleChange}></input>
        <input type='number' value={detail.phone} name="phone" id="phone" placeholder='☎_Phone' onChange={handleChange}></input>
        <input type='text' value={detail.message} name="message" id="message" placeholder='🌹_Message' onChange={handleChange}></input>
        <button type='submit' onClick={handleSubmit}>Send</button>
      </div>
    </div>
  )
}

export default Contact