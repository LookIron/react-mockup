import React, { Component } from 'react';
import Trip from '../trip-item/Trip-item';
import  './Trip-Items.css';

class Items extends Component {
        
    render() {
        return <div className="trip-items-container">
            <div className="trip-share">
                <input className="item-search" type="text" placeholder="Search..." />
            </div>
           <div className="trip-items-list">
                <Trip />
                <Trip />
                <Trip />
            </div>
            <div className="floating-button">
                <i className="fas fa-plus-circle"></i>
            </div>             
            
        </div>
        
    }
}
export default Items;