import React from "react"
import "./topbar.scss"
import { useSelector} from "react-redux"

export default function Topbar({menuOpen,setMenuOpen}) {
  const amount = useSelector(state => state.amount)
  return (
    <><div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">Genius.</a>
          
        </div>
        <div className="btn-primary">
            <button  className="btn-primary"> Your Balance:{amount}</button>
          </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
   </>
  )
}
