import React, { Component } from 'react';
import './header.css';
import { Link } from "react-router-dom";

class Header extends Component {
    render() {
        return (
            <div className="nav-container">
                <h2 className="logo-text">
                    Pro-Forms
                </h2>
                <ul className="right">
                    <li><Link to="/">HOME</Link></li>
                    <li><Link to="signup">SIGNUP</Link></li>
                </ul>
            </div>
        )
    }
} 

export default Header;
