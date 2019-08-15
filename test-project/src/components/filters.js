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
                    <i className="far fa-lightbulb"/>
                    <span>Smart Filters</span>
                </div>
                <r/>
                <div className="filter-items">
                    <div className="item-content">
                        <i className="fas fa-home"/>
                        <div className="custom-control custom-switch">
                            <input type="checkbox" className="custom-control-input" id="customSwitch1" />
                            <label class="custom-control-label" for="customSwitch1"></label>
                        </div>
                    </div>
                    <div className="item-content">
                        <i className="fas fa-home"/>
                        <div className="custom-control custom-switch">
                            <input type="checkbox" className="custom-control-input" id="customSwitch1" />
                            <label class="custom-control-label" for="customSwitch1"></label>
                        </div>
                    </div>
                    <div className="item-content">
                        <i className="fas fa-home"/>
                        <div className="custom-control custom-switch">
                            <input type="checkbox" className="custom-control-input" id="customSwitch1" />
                            <label class="custom-control-label" for="customSwitch1"></label>
                        </div>
                    </div>             
                </div>
                <div className="filter-buttons">
                    <span>Smart Filters</span>
                    <input type="text" placeholder="Search..." />
                    <button type="button" class="btn btn-light">DELIVERED</button>
                </div>
            </div>
        </div>
        
    }
}
export default Filter;