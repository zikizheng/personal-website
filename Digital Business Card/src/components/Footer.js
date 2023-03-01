import React from "react"
import twitter from "../images/Twitter Icon.png"
import facebook from "../images/Facebook Icon.png"
import instagram from "../images/Instagram Icon.png"
import github from "../images/GitHub Icon.png"

export default function Footer(){
    return(
        <div className = "footer">
            <button><img src ={twitter}/></button>
            <button><img src ={facebook} className ="footer--fb"/></button>
            <button><img src ={instagram} className ="footer--insta"/></button>
            <button><img src ={github}/></button>
        </div>
    )
}