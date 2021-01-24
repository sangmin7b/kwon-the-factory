import React from 'react'
import {Link} from "react-router-dom"
import './Nav.css'
import logo from "../../logo.png"
import img2 from "../../img2.png"
function Nav() {
    return (
        <div className="nav">
            <div className="logoWrapper">
                <Link to="/"><img className="logo" src={logo} alt="logo"/></Link>
            </div>
            <div className="linkWrapper">
                <ul>
                    <li>
                        <Link to="/shop" style={{ textDecoration: 'none' }}>SHOP</Link>
                    </li>
                    <li>
                        <Link to="/portfolio" style={{ textDecoration: 'none' }}>PORTFOLIO</Link>
                    </li>
                    <li>
                        <Link to="/contact" style={{ textDecoration: 'none' }}>CONTACT</Link>
                    </li>
                </ul>
            </div>
            <div className="imageWrapper">
                <Link to="/"><img className="image" src={img2} alt="img2"/></Link>
            </div>
        </div>
    )
}

export default Nav
