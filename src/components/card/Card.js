import React from "react";

import "./card.css"

const Card = props => {
    return(
        <div className="card__container">
            <div className="card-header___container">
                <h1 className="card-title">{props.title}</h1>
                <h4 className="card-subtitle">{props.author}</h4>
            </div>
            <div className="card-content___container">
                <div className="card-image___container">
                    <img src={props.photo} alt="card view screen item"></img>
                </div>
                <div className="card-description___container">
                    <p>{props.description}</p>
                </div>
                <div className="card-buttons__container">
                    <button className="card-button___confirm">Yes</button>
                    <button className="card-button___reject">No</button>
                </div>
            </div>
        </div>
    );
};

export default Card;