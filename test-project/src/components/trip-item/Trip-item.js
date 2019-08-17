import React, { Component } from 'react'
import Trip from '../trip';
import DateTrip from '../date';
import Cost from '../cost';
import './Trip-item.css';

export default class TripItem extends Component {
    render() {
        return (
            <div className="trip-item-container">
                <div className="item-check">
                    <i className="fas fa-check-circle"></i>
                </div>
                <div className="item-trip">
                    <div className="item-trip-date">
                        <DateTrip />
                    </div>
                    <div className="separador" />
                    <div className="item-trip-trip">
                        <Trip from="Houston, TX 36619" to="Atranta, GA 30123"/>
                    </div>
                    <div className="separador" />
                    <div className="item-trip-cos">
                        <Cost price="250.00" />
                    </div>
                </div>
            </div>
        )
    }
}
