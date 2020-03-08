import React from 'react';
import SearchBar from '../components/Searchbar';

import '../assets/styles/components/popup.css';

export default function Popup (props) {
    return (
      <div className='popup'>
        <div className='popup_inner'>
        <h5>{props.text}</h5> 
        <hr/>
          <div className='content'>
            <SearchBar 
              checkedItems={props.checkedItems}
              handleChange={props.handleChange}
            />
          </div>
          <hr/>
          <div className="button_container">
            <button onClick={props.closePopup}>Cancel</button>
            <button onClick={props.closePopup}>Apply</button>
          </div>
        </div>
      </div>
    );
  }