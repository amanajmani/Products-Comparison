import React from 'react';

const Checkbox = ({ type = 'checkbox', name, checked = false, onChange }) => (
  <ul>
    <li><input type={type} name={name} checked={checked} onChange={onChange} /></li>
  </ul>
);

export default Checkbox;