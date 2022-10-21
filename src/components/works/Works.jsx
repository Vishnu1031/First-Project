import React, { useState } from 'react'
import "./works.scss"

export default function Works() {
  const [currentSlide,setCurrentSlide] =useState(0);

  const data =[
    {
      id:"1",
      title:"Web Development",
      icon:"assets/smartphone.png",
      desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit.Sit adipisci ipsum harum, commodi similique incidunt atque."
    },
    {
      id:"2",
      title:"Mobile Development",
      icon:"assets/smartphone.png",
      desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit.Sit adipisci ipsum harum, commodi similique incidunt atque."
    },
    {
      id:"3",
      title:"Product Management",
      icon:"assets/smartphone.png",
      desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit.Sit adipisci ipsum harum, commodi similique incidunt atque."
    },
  ];

  const handleClick = (way)=>{
    way === "left" 
      ? setCurrentSlide(currentSlide >0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length-1 ? currentSlide +1 : 0)
  };

  return (
    <div className='works' id="works">
      <div className="slider" 
      style={{ transform : `translateX(-${currentSlide *100}vw)`}}
      >

      {data.map((d)=>(
        <div className="container">
          <div className="item">
            <div className="left">
              <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={d.icon} alt='' />
                  </div>
                  <h2>{d.title}</h2>
                  <p>
                    {d.desc}
                  </p>
                  <span>Projects</span>
              </div>
            </div>
            <div className="right">
              <img 
                src='https://mobirise.com/assets52/images/temps-3.jpg'
                alt=''
                />
            </div>
          </div>
        </div>
      ))}
      </div>
      <img src='assets/arrow.png' className='arrow left' alt='' onClick={()=>handleClick('left')}/>
      <img src='assets/arrow.png' className='arrow right' alt='' onClick={()=>handleClick()}/>
    </div>
  )
}
