import React, { Component } from 'react';
import logo from '../assets/logo.png';
import '../styles/filter.css';

class Filter extends Component {
   
    render() {
        return <div className="filter-container">
            <div className="filter-logo">
                <img alt="logo" src={logo}/>
            </div>
            <div className="filter-content">  
                <div className="filter-title">
                    <i className="far fa-lightbulb space"/>
                    <span>Smart Filters</span>
                </div>
            
                <div className="filter-items">
                    <div className="item-content">
                        <i className="fas fa-home space"/>
                        <i className="fas fa-toggle-off space-left"/>
                    </div>
                    <div className="item-content">
                        <i className="fas fa-calendar-alt space"/>
                        <i className="fas fa-toggle-off space-left"/>
                    </div>
                    <div className="item-content">
                        <i className="fas fa-heart space"/>
                        <i className="fas fa-toggle-off space-left"/>
                    </div>             
                </div>
                          
                
                <div className="filter-buttons">
                    <span>Satus</span>
                    <input type="text" placeholder="Search..." />
                    <button type="button" class="btn btn-light">DELIVERED</button>
                </div>
            </div>
        </div>
        
    }
}
export default Filter;