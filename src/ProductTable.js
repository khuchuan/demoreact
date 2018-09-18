import React, { Component } from 'react';
import './ProductTable.css';

let lastCategory = null; 

var ShowCategory = (item) => {
    if (lastCategory !== item.category) {
        lastCategory = item.category;
        return <tr><td colSpan="2">{item.category}</td></tr>;
    }
};

class ProductTable extends Component {
    constructor(props){
        super(props);        
    }

    render() {
        lastCategory = null;
        
        return (
            <div>
                <table >
                    <thead>
                        <tr>
                            <td>Name</td>
                            <td>Price</td>
                        </tr>
                    </thead>

                    {this.props.data.map(item => (
                        <tbody key={item.name}>
                            {ShowCategory(item)}
                            <tr >
                                <td> {item.name} </td>
                                <td> {item.price} </td>
                            </tr>
                        </tbody>
                    )
                    )}
                </table>
            </div>
        );
    }
}

export default ProductTable;