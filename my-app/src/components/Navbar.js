import React from "react"
import logo from "../images/reactjs-icon.png"

export default function Navbar() {
    return(
        <nav className="navbar">
            <img src={logo}/>
            <h3 className="navbar--logo_text">ReactFacts</h3>
            <h4 className="navbar--project_text">React Course - Project 1</h4>
        </nav>
    )
}