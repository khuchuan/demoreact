import React, { Component } from 'react';

class SearchBar extends Component {
    render() {
        const {value, onChange} = this.props;
        
        return (
            <div>
                <input type="text" placeholder="Search" value={value} onChange={onChange} /><br />                
                <input type="checkbox" />Only show products in stock
            </div>            
        );
    }
}

export default SearchBar;