import React, { Component } from 'react'
import '../styles/cost.css';

export default class Cost extends Component {
    render() {
        return (
            <div className="cost-container">
                <i className="fas fa-truck"></i>
                <div className="cost-price">
                    ${this.props.price}
                </div>
                <input className="cost-numer" type="text" placeholder="1" />
                <i className="fas fa-ellipsis-v cost-car"></i>
            </div>
        )
    }
}
