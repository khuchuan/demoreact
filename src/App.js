import React, { Component } from 'react';
import './App.css';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

const list = [
  { category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football" },
  { category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball" },
  { category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball" },
  { category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch" },
  { category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5" },
  { category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7" }
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      list: list
    };

    this.onSearchChange = this.onSearchChange.bind(this);
  }

  onSearchChange(event) {
    // console.log('searchTerm: ', event.target.value);
    var conditionSearch = event.target.value;
    this.setState({ searchTerm: conditionSearch });
    // console.log("List: " + JSON.stringify( this.state.list));
    this.setState({
      list: (conditionSearch.trim().length === 0) ? list: this.state.list.filter(
        function (element) { return element.name.toLowerCase().includes(conditionSearch.toLowerCase()) }
      )
    });
  }

  render() {
    const { searchTerm, list } = this.state;
    return (

      <div className="App">
        <SearchBar value={searchTerm} onChange={this.onSearchChange} />
        <ProductTable data={list} />
      </div>
    );
  }

  // render() {
  //   return (

  //     <div className="App">

  //         {this.state.list.map(item =>
  //           <div key={item.name}>             
  //             <span>{item.name}</span>   
  //           </div>
  //         )}

  //     </div>
  //   );
  // }



}

export default App;
