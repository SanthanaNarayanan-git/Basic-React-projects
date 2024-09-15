import React from 'react'

export default function Card(props){
    return(
        <div className="card">
            <img src={require(`../images/${props.img}`)} />
            <div className='card--stats'>
                <img src={require('../images/Red_star.svg.png')} className="star"/>
                <span>{props.rating}</span>
                <span>({props.reviewCount}) . </span>
                <span>{props.location
                    }</span>
            </div>
            <p>{props.title}</p>
            <p>${props.price}</p>
        </div>        
    )
}