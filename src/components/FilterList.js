
import React from 'react';
import PopUp from '../components/PopUp';

import '../assets/styles/components/filterList.css';

export default function FilterList (props) {
    return(
        <div className="card-container">
         <button className="filter-button" onClick={props.togglePopup}>Add/Remove Attributes</button>
         {props.showPopup && (
            <PopUp
             text='Add/Remove Attributes'
             closePopup={props.togglePopup}
             checkedItems={props.checkedItems}
             handleChange={props.handleChange}
            />
          )}
        </div>
    )
}