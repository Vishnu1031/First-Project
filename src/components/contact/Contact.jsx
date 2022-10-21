import React, { useState } from 'react'
import "./contact.scss"

export default function contact() {
  const [messsage,setMessage]=useState(false)

  const handleSubmit = (e)=>{
    e.preventDefault();
    setMessage(true)
  }
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src='assets/contact.png'  alt=''/>
      </div>
      <div className="right">
          <h2>Contact.</h2>
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Email"/>
            <textarea placeholder="messsage"></textarea>
            <button type="submit">Send</button>
            {messsage && <span>Thanks for your response :)</span>}
          </form>

      </div>
    </div>
  )
}
