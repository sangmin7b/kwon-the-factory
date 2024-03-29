import React, { Component } from 'react'
import './Footer.css'
import { Link } from "react-router-dom"
import logo from "../../images/footer/logo-fit.png"
const ColoredLine = ({ color }) => (
    <hr
      style={{
        borderColor: color,
      }}
    />
  );

export default class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="footerContent">
                    <Link to="/"><img className="footerLogo" src={logo} alt="logo"/></Link>
                    <span>Instagram : @kwon_thefact0ry</span>
                    <span>e-mail : naxya0517@gmail.com</span>
                    <ColoredLine color="gray"></ColoredLine>
                    <span className="copyright">COPYRIGHT 2021. KWON,theFACTORY</span>
                    <span className="copyright">ALL RIGHTS RESERVED.</span>
                </div>
            </div>
        )
    }
}
