
import React, { useEffect, useState } from 'react'
import PortfolioList from '../portfolioList/PortfolioList.jsx';
import "./portfolio.scss"
import { 
  webPortfolio ,
  mobilePortfolio,
  designPortfolio,
  contentPortfolio,
  productPortfolio,
} from '../../data.js';

export default function Portfolio() {
  const [selected,setSelected]=useState("feature 1");
  const [data,setData] =useState([]);
  const List=[
    {
      id:"feature 1",
      title:"Web",
    },
    {
      id:"feature 2",
      title:"Mobile",
    },
    {
      id:"feature 3",
      title:"Content",
    },
    {
      id:"feature 4",
      title:"Design",
    },
    {
      id:"feature 5",
      title:"Product",
    },
  ];

  useEffect(()=>{
    switch(selected){

      case "feature 1":
        setData(webPortfolio);
        break;

      case "feature 2":
        setData(mobilePortfolio);
        break;

      case "feature 3":
          setData(designPortfolio);
          break;

      case "feature 4":
        setData(contentPortfolio);
        break;

      case "feature 5":
        setData(productPortfolio);
        break;
        default:
          setData(webPortfolio);
    }
  },[selected])

  return (
    <div className='portfolio' id="portfolio">
      <h1>Portfolio</h1>
      <ul>
          {List.map((item) => (
             <PortfolioList title={item.title} 
             active={selected === item.id} 
             setSelected={setSelected}
             id={item.id}/>
          ))}
      </ul>
      <div className="container">
        {data.map((d)=> (
        <div className="item">
          <img src={d.img}
            alt=''
          />
          <h3>{d.title}</h3>
        </div>
        ))}
       
      </div>
    </div>
  )
}
