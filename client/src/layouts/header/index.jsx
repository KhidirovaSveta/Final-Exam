import React, { useLayoutEffect, useRef } from 'react';
import {NavLink} from 'react-router-dom'
import "./index.scss"
import logo from "../../images/logo.png"

const Header = () => {
    const stickyHeader = useRef()
    useLayoutEffect(() => {
      const mainHeader = document.getElementById('mainHeader')
      let fixedTop = stickyHeader.current.offsetTop
      const fixedHeader = () => {
        if (window.pageYOffset > fixedTop) {
          mainHeader.classList.add('fixedTop')
        } else {
          mainHeader.classList.remove('fixedTop')
        }
      }
      window.addEventListener('scroll', fixedHeader)
    }, [])
  return (
    <div id="Header">
      <div className="mainHeader" id="mainHeader" ref={stickyHeader}>
        <div className="header">
            <div className="logo-nav">
        <div className="logo"><img src={logo} alt="" /> </div>
        <ul>
            <li>  <NavLink to={"/"}> Home </NavLink>   </li>
            <li> <NavLink to={"/"}> Shop </NavLink>   </li>
            <li>  <NavLink to={"/"}> Features </NavLink>  </li>
            <li>  <NavLink to={"/"}> Blog </NavLink>  </li>
            <li>  <NavLink to={"/"}> About </NavLink>  </li>
            <li>  <NavLink to={"/"}> Contact </NavLink>  </li>
            <li>  <NavLink to={"/add"}> Add Product </NavLink>  </li>

        </ul>
            </div>

            <div className="search-wishlist">
            <i className="fa-solid fa-magnifying-glass"></i>
            <i className="fa-solid fa-cart-shopping"></i>
            <NavLink to={"/wishlist"}> <i className="fa-regular fa-heart"></i> </NavLink>
            </div>
      </div>          
        </div>
      <div className="main-block">
      </div>
      </div>
  )
}

export default Header