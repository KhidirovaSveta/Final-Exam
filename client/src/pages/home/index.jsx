import React from 'react'
import "./index.scss"
import Carousel from '../../components/carousel'
import Products from '../../components/products'
import {Helmet} from "react-helmet";

const Home = ({wishlist, setWishlist}) => {
  return (
    <div id='Home'>
        <Carousel/>
        <div className="container">
           <Helmet>
                <meta charSet="utf-8" />
                <title>Home Page</title>
            </Helmet>
          {/* Section 2 */}

          <div className="second-section">
            <div className="cards">

              <div className=" card card1">
               <h2 className='cardTitle'>Women</h2>
               <p>Spring 2018</p>
              </div>

              <div className=" card card2">
               <h2 className='cardTitle'>Men</h2>
               <p>Spring 2018</p>
              </div>

              <div className=" card card3">
               <h2 className='cardTitle'>Accsessories</h2>
               <p>Spring 2018</p>
              </div>
            </div>
          </div>

          {/* Section 2 */}

          <div className="third-section">
            <h1 className='productsTitle'>PRODUCT OVERVIEW</h1>
                    <Products wishlist={wishlist} setWishlist={setWishlist}/>
          </div>

            
        </div>
    </div>
  )
}

export default Home