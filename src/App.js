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
    this.state = { list: list, };
  }

  render() {
    return (

      <div className="App">
        <SearchBar />
        <ProductTable />
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
