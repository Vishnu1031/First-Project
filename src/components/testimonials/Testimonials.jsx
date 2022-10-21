import React from 'react'
import "./testimonials.scss"

export default function Testimonials() {

  const data =[
  {
    id:1,
    name: "Elon Musk",
    title: "CEO of Tesla",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg/1200px-Elon_Musk_Royal_Society_%28crop2%29.jpg",
    icon1: "assets/twitter.png",
    icon2: "assets/linkedin.png",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla felis sapien, pellentesque vel aliquam eget, rutrum et diam. Ut porta blandit posuere. Mauris sagittis molestie turpis.Interdum et malesuada fames ac ante ipsum primis in faucibus."
  },

  {
    id:2,
    name: "Elon Musk",
    title: "CEO of Tesla",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg/1200px-Elon_Musk_Royal_Society_%28crop2%29.jpg",
    icon1: "assets/twitter.png",
    icon2: "assets/linkedin.png",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla felis sapien, pellentesque vel aliquam eget, rutrum et diam. Ut porta blandit posuere. Mauris sagittis molestie turpis.Interdum et malesuada fames ac ante ipsum primis in faucibus.",
    featured:true,
  },

  {
    id:3,
    name: "Elon Musk",
    title: "CEO of Tesla",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg/1200px-Elon_Musk_Royal_Society_%28crop2%29.jpg",
    icon1: "assets/twitter.png",
    icon2: "assets/linkedin.png",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla felis sapien, pellentesque vel aliquam eget, rutrum et diam. Ut porta blandit posuere. Mauris sagittis molestie turpis.Interdum et malesuada fames ac ante ipsum primis in faucibus."
  },

];

  return (
    <div className="testimonials" id="testimonials">
      <h1>Testimonials</h1>
      <div className="container">

        {data.map((d)=>(
        <div className={d.featured ? "card featured" :"card"}>
          <div className="top">
            <img src={d.icon1} className='left' alt='twitter.logo'/>
            <img src={d.img} className='user' alt=''/>
            <img src={d.icon2} className='right' alt='linkedin.logo'/>
          </div>
          <div className="center">
          {d.desc}
          </div>
          <div className="bottom">
            <h3>{d.name}</h3>
            <h4>{d.title}</h4>
          </div>
        </div>
        ))}
       
        </div>
      </div>

    
  );
}
