import React from 'react'
import {productsData as ProductsData} from '../utils/apis';
import CardList from '../components/CardList';
import CompareTable from '../components/CompareTable';
import FilterList from '../components/FilterList'; 
import '../assets/styles/pages/home.css';

export default class Home extends React.Component {
  constructor(props){
    super(props)
    this.state={
      data: ProductsData || [],
      showPopup: false,
      checkedItems: {
        Price: true,
        Colors: true,
        Condition: true,
      },
    }
  }

  togglePopup = () => {
    this.setState({
      showPopup: !this.state.showPopup
    });
  }

  handleChange=(e)=> {
    const item = e.target.name;
  
    if (this.state.checkedItems[item]) {
      this.setState(prevState => ({
        checkedItems: { ...prevState.checkedItems, [item]: false}
      }))}
    else {
      this.setState(prevState => ({
        checkedItems: { ...prevState.checkedItems, [item]: true}
      }))}
    }

  handleSelected = (id) => {
    const filteredData = this.state.data.map((item) => {
      if(item.id===id){
        if(!item.isSelected){
          return {...item, isSelected: true};
        } else {
          return {...item, isSelected: false};
        }
      } else {
        return item;
      }
  });

  this.setState({data: filteredData });
}
  
  render(){
    const filteredData = this.state.data.filter(item => item.isSelected);

    return (
      <div className="container">
          <header>
            <h3>Compare Products</h3>
            <FilterList
              togglePopup={this.togglePopup}
              showPopup={this.state.showPopup}
              handleChange={this.handleChange}
              checkedItems={this.state.checkedItems}
            />
          </header>
        <CardList
          data={this.state.data}
          handleSelected={this.handleSelected}
        />
         {filteredData.length >= 2 &&
          <CompareTable 
          products={filteredData}
          checkedItems={this.state.checkedItems}/>
        }
      </div>
    )
  }
}