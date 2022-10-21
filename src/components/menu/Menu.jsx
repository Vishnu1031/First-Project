import React from "react"
import "./menu.scss"
import { Link } from "react-router-dom"

export default  function Menu({ menuOpen, setMenuOpen }){
    return(
        <div className={"menu " + (menuOpen && "active")}>
            <ul>
                <li onClick={()=> setMenuOpen(false)}>
                    <Link to="/">Home</Link>
                </li>
                <li onClick={()=> setMenuOpen(false)}>
                    <Link to="portfolio">Portfolio</Link>
                </li>
                <li onClick={()=> setMenuOpen(false)}>
                    <Link to="works">Works</Link>
                </li>
                <li onClick={()=> setMenuOpen(false)}>
                    <Link to="testimonials">testimonials</Link>
                </li>
                <li onClick={()=> setMenuOpen(false)}>
                    <Link to="contact">Contact</Link>
                </li>
                <li onClick={()=> setMenuOpen(false)}>
                    <Link to="shop">Shop</Link>
                </li>
            </ul>
        </div>
    )
}