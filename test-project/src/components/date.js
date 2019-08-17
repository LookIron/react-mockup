import React, { Component } from 'react';
import '../styles/date.css';

export default class TripDate extends Component {

    render() {
        return <div className="date-container">
            <div className="date-day-desc">
                Monday
            </div>
            <div className="date-day-hour">
                10th 2:24
            </div>
            <div className="date-tipe">
                PM
            </div>
        </div>
        
    }
}