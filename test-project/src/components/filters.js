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
                <hr />
                <div className="filter-items">
                    <div className="item-content">
                        <i className="fas fa-funnel-dollar space" />
                        <label className="switch">
                            <input type="checkbox" />
                            <span className="slider round"></span>
                        </label>
                    </div>
                    <div className="item-content">
                        <i className="fas fa-calendar-alt space"/>
                        <label className="switch">
                            <input type="checkbox" />
                            <span className="slider round"></span>
                        </label>
                    </div>
                    <div className="item-content">
                        <i className="fas fa-heart space"/>
                        <label className="switch">
                            <input type="checkbox" />
                            <span className="slider round"></span>
                        </label>
                    </div>             
                </div>                         
                <hr />
                <div className="filter-buttons">                   
                    <span className="title-buttom"> Status</span>                    
                    <input className="search" type="text" placeholder="Search..." />
                    <button className="filter-button" type="button" >DELIVERED</button>
                </div>
            </div>
        </div>
        
    }
}
export default Filter;