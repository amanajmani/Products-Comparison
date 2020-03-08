
import React from 'react'
import Card from './Card';

import '../assets/styles/components/cardList.css';

export default function CardList (props) {
    return(
        <div className="card-container">
         {props.data.map(item=>{
            return(
                <Card 
                id={item.id}
                image={item.image}
                price={item.price}
                name={item.name}
                description={item.description}
                isSelected={item.isSelected}
                handleSelected={props.handleSelected}
                />
            )})}
        </div>
    )
}