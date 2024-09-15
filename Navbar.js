import './navbar.css';
import React from 'react'
import image from './Airbnb.png'



export default function Navbar(){
    return(
    <nav className="nav">
        <img src={require('./Airbnb.png')} className="navlogo" style={{height:"70px",padding:"20px 36px"}}/>
    </nav>
    )
}