import React, { Component } from 'react';

class TripFromTo extends React.Component {
    
    constructor(){
        super();
        this.state = {
            click: false
        };
    }
    
    render() {
        return <div className="trip-from-to">
            <div className="trip-info">
                <div className="item-from">
                    Image
                </div>
                <div className="item-img">
                    Hello
                </div>
                <div className="item-to">
                    Hello
                </div>
            </div>
            <div className="trip-location-img">

            </div>
            
        </div>
        
    }
}