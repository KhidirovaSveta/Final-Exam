import React from 'react'
import "./index.scss"
import {Helmet} from "react-helmet";

const Wishlist = ({wishlist, setWishlist}) => {
  const handleRemove = (_id) => {
    let deleted = wishlist.filter((e) => e._id !== _id)
    setWishlist(deleted)
  }

  const removeAll = () => {
    setWishlist([])
  }

  return (
    <div id='Wishlist'>
        <div className="container">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Wishlist</title>
            </Helmet>
          <div className="wishlist">
          {wishlist.map((wish) => {
            return(
                  <div className="wish-card">
                    <img src={wish.img} alt="" width={"350px"}/>
                    <div className="botton">
                      <div className="wish-info">
                    <p>{wish.name}</p>
                    <p>{wish.price}</p>
                      </div>
                    <button onClick={() => handleRemove(wish._id)} className="removeBtn"> <i class="fa-solid fa-trash"></i> </button>
                    </div>
                  </div>
            )
          })}
        </div>
        <button onClick={() => removeAll()} className="removeAllBtn"> Remove All </button>
      </div>
    </div>
  )
}

export default Wishlist