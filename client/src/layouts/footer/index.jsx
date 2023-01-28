import React from 'react'
import {NavLink} from 'react-router-dom'
import "./index.scss"
const Footer = () => {
  return (
    <div id='Footer'>
        <div className="container">
            <div className="footer">
                <ul>
                    <li className='mainName'>CATEGORIES</li>
                    <li><NavLink to={"/"}> Women</NavLink> </li>
                    <li><NavLink to={"/"}> Men</NavLink> </li>
                    <li><NavLink to={"/"}> Shoes</NavLink> </li>
                    <li><NavLink to={"/"}> Watches</NavLink> </li>
                </ul>

                <ul>
                    <li className='mainName'>HELP</li>
                    <li><NavLink to={"/"}> Track Order</NavLink> </li>
                    <li><NavLink to={"/"}> Returns </NavLink> </li>
                    <li><NavLink to={"/"}> Shipping </NavLink> </li>
                    <li><NavLink to={"/"}> FAQs </NavLink> </li>
                </ul>

                  <div className="right">
                <div className="get-in-touch">
                    <h4>GET IN TOUCH</h4>
                    <p className='footerParag'>Any questions? Let us know in store at 8th floor, 379 Hudson St, 
                        New York, NY 10018 or call us on (+1) 96 716 6879</p>
                        <div className="social-media">
                        <i className="fa-brands fa-facebook-f "></i>
                        <i className="fa-brands fa-instagram "></i>
                        <i className="fa-brands fa-pinterest-p "></i>
                        </div>
                </div>

                <div className="footer-input">
                    <h4>NEWSLETTER</h4>
                    <input type="text" placeholder='vumu@mailinator.com' className='footerInput'/>
                    <button className='footerBtn'>SUBSCRIBE</button>
                </div>
                  </div>

            </div>

            <div className="footer-down">
            <div className="cards">
            <i className="fa-brands fa-cc-visa"></i>
            <i className="fa-brands fa-cc-apple-pay"></i>
            <i className="fa-brands fa-cc-mastercard"></i>
            <i className="fa-brands fa-cc-amex"></i>
            <i className="fa-brands fa-cc-amazon-pay"></i>
            </div>
          <p>Copyright © 2023 All rights reserved | This template is made with  by Colorlib</p>
            </div>
        </div>

    </div>
  )
}

export default Footer