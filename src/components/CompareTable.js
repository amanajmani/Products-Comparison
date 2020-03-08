import React from 'react'

import '../assets/styles/components/compareTable.css';

export default function CompareTable({products, checkedItems}){
  
  const renderTableColumnHeader = () => {
    return products.map(product =>
      <th key={product.id}>
        {product.name}
      </th>
    )}

  return (
      <div>
        <table className="table">

          <tr>
            <th />
            {renderTableColumnHeader()}
          </tr>

          {checkedItems.Price && (
          <tr>
            <th className="sub_heading">Price</th>
            {products.map(product =>
              <td key={product.id}>{product.price}</td>
            )}
          </tr>)}

          {checkedItems.Vendors &&(
          <tr className="vendors">
            <th className="sub_heading">Vendors</th>
            {products.map(product =>
              <td key={product.id}>
              {product.vendors.map((vendor, index)=>
              <ul key={index}>
                <li>{ (index ? ',' : '') + vendor }</li>
              </ul>
              )}
              </td>
            )}
          </tr>)}

          {checkedItems.Colors &&
          <tr className="colors">
            <th className="sub_heading">Colors</th>
            {products.map(product =>
              <td key={product.id}>
                {product.colors.map((color, index) =>
                  <span key={index} className={"circle-" + color} />
                )}
              </td>
            )}
          </tr>}

          {checkedItems.Condition &&
          <tr className="condition">
            <th className="sub_heading">Condition</th>
            {products.map(product =>
              <td key={product.id} className={product.condition === "Frozen" ? "circle-red" : "circle-green"}>
                {product.condition}
              </td>
            )}
          </tr>}

      </table>
  </div>)};