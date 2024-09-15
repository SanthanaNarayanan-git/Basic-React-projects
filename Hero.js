import React from 'react';

export default function Hero(){
    return(
        <section className="hero">
            <img src={require("./images.jpeg")} className="hero--img"/>
            <h1 className="hero--header">Online Experiance</h1>
            <p className="hero-text">Join unique interactive activities led by one-of-a-kind hosts-all without leaving home</p>
        </section>
    )
}