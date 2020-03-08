import React, { useState } from 'react';
import Checkbox from '../components/Checkbox';
import {filteredProducts} from '../utils/apis';

import '../assets/styles/components/searchbar.css';

export default function Searchbar(props) {
  const [searchString, setSearchString] = useState('');
  
    const handleChange = (e) => {
      setSearchString(e.target.value);
    }

    let searchedString = searchString.trim().toLowerCase();
    let filteredData = filteredProducts;

    if (searchedString.length > 0) {
        filteredData = filteredData.filter(item => {
        return item.toLowerCase().match( searchedString );
      });
    } 

  return (
      <>
        <input type="text" value={searchedString} onChange={handleChange} placeholder="Search Attributes" className="searchbar"/>
        {
          filteredData.map(item => (
            <label key={item.key} className="checkbox">
              <Checkbox name={item} checked={props.checkedItems[item]} onChange={props.handleChange} />
              {item}
            </label>
          ))
        }
      </>
    );
}