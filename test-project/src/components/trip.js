import React, { Component } from 'react';
import '../styles/trip.css';

export default class TripFromTo extends Component {
    
    constructor(){
        super();
        this.state = {
            click: false
        };
    }
    
    render() {
        return <div className="trip-from-to-container">
            <div className="trip-location-img">
                <i className="fas fa-location-arrow"></i>
            </div>
            <div className="trip-info">
                <div className="item-from">
                    {this.props.from}
                </div>
                <div className="item-img">
                    <i className="fas fa-chevron-down"></i>
                </div>
                <div className="item-to">
                    {this.props.to}
                </div>
            </div>
        </div>
        
    }
}