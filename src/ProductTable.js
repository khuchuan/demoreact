import React, { Component } from 'react';
import './ProductTable.css';

const list = [
    { category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football" },
    { category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball" },
    { category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball" },
    { category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch" },
    { category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5" },
    { category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7" }
];

var lastCategory = '';

var ShowCategory = (item) => {
    if (lastCategory !== item.category) {
        lastCategory = item.category;
        return <tr><td colSpan="2">{item.category}</td></tr>;
    }
    return '';
};


class ProductTable extends Component {
    constructor(props) {
        super(props);
        this.state = { list: list, };
    }


    render() {

        return (

            <div>
                <table >
                    <thead>
                        <tr>
                            <td>Name</td>
                            <td>Price</td>
                        </tr>
                    </thead>

                    {this.state.list.map(item => (
                        <tbody>
                            {ShowCategory(item)}
                            <tr>
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