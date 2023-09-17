import React from "react";
export default function Card(props){
    return(
        <div className="card">
            <img src={props.card.coverImg} alt="" />
            <div className="content">
                <div>
                <i class="fa-solid fa-location-dot"></i>
                    <p>{props.card.location}</p>
                    <a href={props.card.map}>view on google map</a>
                </div>
                <h2>{props.card.title}</h2>
                <p>{props.card.date}</p>
                <p>{props.card.description}</p>
            </div>
        </div>
    )
}