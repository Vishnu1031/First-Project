import React, { useState } from "react";
import Topbar from "./components/topbar/Topbar.jsx";
import Intro from "./components/intro/Intro.jsx";
import Portfolio from "./components/portfolio/Portfolio.jsx";
import Works from "./components/works/Works.jsx";
import Testimonials from "./components/testimonials/Testimonials.jsx";
import Contact from "./components/contact/Contact.jsx";
import Shop from "./components/shop/Shop.jsx";
import "./app.scss";
import Menu from "./components/menu/Menu.jsx";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Routes,
    Link
  } from "react-router-dom";
  


function App(){
    const [menuOpen,setMenuOpen]= useState(false)
    return (
        <Router>
        <div className="app">
            {/* <h1>Hello, Vishnu!</h1> */}
            
            
                <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
                <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
                
            <div className="sections">
            <Routes>  
                <Route path="/" element={<Intro/>}/>
                <Route  path="/portfolio" element={<Portfolio/>}/>
                <Route  path="/works" element={<Works/>}/>
                <Route  path="/testimonials" element={<Testimonials/>}/>
                <Route  path="/contact" element={<Contact/>}/>
                <Route path="/shop"  element={<Shop/>}/>
            </Routes>
            </div>
            
        </div>
        </Router>
        // <div className="app">
        //     <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        //     <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        //     <div className="sections">
        //         <Intro/>
        //         <Portfolio/>
        //         <Works/>
        //         <Testimonials/>
        //         <Contact/>
        //     </div>
        // </div>
    )
}

export default App;