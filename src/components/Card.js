
import React, {useState} from 'react'

import '../assets/styles/components/card.css';

export default function Card (props) {
    const [isShown, setIsShown] = useState(false);

    return(
        <div 
        key={props.id} 
        className="card"  
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}
        >
            <div className={isShown ? "image_hover" : ""}>
                <img src={props.image} alt="fruits image" className="card_image"/>
            </div>

            {(isShown || props.isSelected) && (
            <div className="card_details">
                <button onClick={() => props.handleSelected(props.id)}>{props.isSelected ? "Remove" : "Compare"}</button>
            </div>)}
            
            <div className="card_content">
                <ul>
                    <li>{props.name}</li>
                    <li>{props.price}</li>
                </ul>
                <p>{props.description}</p>
            </div>
        </div>
    )
}