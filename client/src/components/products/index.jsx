import React, { useEffect, useState } from 'react'
import { NavLink } from "react-router-dom";
import axios from 'axios';
import "./index.scss"
import { Link } from "react-router-dom";

const Products = ({wishlist, setWishlist}) => {
  const [product, setProduct] = useState([])
  const [toggle, setToggle] = useState(true)

  const [load, setLoad] = useState(8)

  useEffect(() => {
    axios.get(`http://localhost:8080/`).then((data) => setProduct(data.data))
   }, [])

   const handleSearch = (value) => {
    axios.get(`http://localhost:8080/`).then((data) => {
      let searchByName = data.data.filter((product) => product.name.toLocaleLowerCase().includes(value.toLocaleLowerCase()))
      setProduct(searchByName)
    })
   }


   const handleSort = () => {
    setToggle(!toggle)
    if(toggle) {
     let sortByPrice = product.sort((a, b) => a.price - b.price)
     setProduct([...sortByPrice])
    }else{
     axios.get(`http://localhost:8080/`).then((data) => setProduct(data.data))
    }
   }

   const handleWishlish = (el) => {
    if(!wishlist.find((e) => e._id === el._id)){
      setWishlist([...wishlist, el])
    }else{
      alert("Alreade exist")
    }
  }

  const handleDelete = (_id) => {
    axios.delete(`http://localhost:8080/${_id}`).then((data) => axios.get(`http://localhost:8080/`).then((data) => setProduct(data.data)))
  }

  const loadMore = () =>  {
    setLoad(load + load)
  }

  const slice = product.slice(0, load)

  return (
        <div id='Products'>
            <div className="menu">
            <div className="nav">
            <div className="link">
              <p> <NavLink to={"/"}> All products</NavLink></p>
              <p> <NavLink to={"/"}> Women</NavLink></p>
              <p> <NavLink to={"/"}> Bag</NavLink></p>
              <p> <NavLink to={"/"}> Shoes</NavLink></p>
              <p> <NavLink to={"/"}> Watches</NavLink></p>
            </div>

            <button className='filterByPrice' onClick={() => handleSort()}><i className="fa-solid fa-filter"></i> Filter </button>
            </div>
            <input type="text"  onChange={(e) => handleSearch(e.target.value)} className='searchByName' placeholder='Search '/>
            </div>
            

            <div className="products-cards">
              {slice.map((product) => {
                return(
                 <div className="card">
                  <Link to={`/details/${product._id}`}>
                    <img src={product.img} alt="" width={"300px"} height={"400px"}/>
                  </Link>
                    <div className="contain">
                    <p className='cardTitle'>{product.name}</p>
                    <div className="card-action">
                    <button onClick={() => handleDelete(product._id)} className="delBtn"><i className="fa-solid fa-trash"></i></button>
                    <button className='wishListBtn' onClick={() => handleWishlish(product)}>{(wishlist.find((w) => w._id === product._id)) ? <i class="fa-solid fa-heart"></i> : <i class="fa-regular fa-heart"></i>}</button>
                    </div>
                    </div>
                    <p>${product.price}</p>
                 </div>
                )
              })}
            </div>
              <button className='loadBtn' onClick={() => loadMore()}> LOAD MORE  </button>

      </div>
  )
}
export default Products