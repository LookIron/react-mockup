import React, { Component } from 'react';
import Item from '../item-menu';
import  './Menu.css'

class Menu extends Component {
        
    render() {
        return <div className="menu-container">
            <Item icon="fas fa-home" title="Home"/>
            <Item icon="fas fa-envelope" title="Messages"/>
            <Item icon="fas fa-star" title="Wishlist"/>
            <Item icon="fas fa-cog" title="Settings"/>
            <Item icon="fas fa-user" title="My Account"/>
        </div>
        
    }
}
export default Menu;