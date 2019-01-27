import React from 'react';
import './style.css';

function Card(props) {
    return (
        <div className="img-div">
            <img id={props.id}
                alt={props.name}
                src={props.image}
                onClick={() => props.clickHandler(props.id)}/>
        </div>
    );
}

export default Card;