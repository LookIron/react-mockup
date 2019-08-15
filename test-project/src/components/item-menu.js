import React, { Component } from 'react';
import '../styles/item-menu.css';

class ItemMenu extends Component {

    render() {
        return <div className="item-container">
            <div className="item-menu">
                <div className="item-menu-img">
                    <i className={this.props.icon}/>
                </div>
                <div className="item-menu-title">
                    {this.props.title}
                </div>
            </div>
        </div>
        
        
    }
}
export default ItemMenu;