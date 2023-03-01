import React from "react"
import ziki from "../images/ziki.jpg"
import mail from "../images/Mail.png"
import linkedin from "../images/linkedin.png"

export default function Info() {
    return(
        <div className="info">
            <img className='info--portrait'src={ziki}/>
            <h1 className='info--name'>Ziki Zheng</h1>
            <h2 className='info--role'>Bachelors of Computer Science Student</h2>
            <h2 className='info--spec'>Specializing in Data Science</h2>
            <h2 className='info--major'>Majoring in Cybersecurity</h2>
            <p className='info--site'>zikizheng.website</p>
            <div className="info--links">
                <button className='info--email'>
                    <img className = "info--maillogo:"src={mail}/>
                    <h4 className = 'info--mailtxt'>Email</h4>
                </button>
                <button className='info--linkedin'>
                    <img className = "info-linkedinlogo" src={linkedin}/>
                    <h4 className = 'info--linkedintxt'>LinkedIn</h4>
                </button>
            </div>
        </div>
    )
}