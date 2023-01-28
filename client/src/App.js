import './App.css';
import Header from './layouts/header';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import AddProduct from './pages/add';
import { useState } from 'react';
import Wishlist from './pages/wishlist';
import Footer from './layouts/footer';
import Detail from './pages/details';


function App() {
  const [wishlist, setWishlist] = useState([])

  return (
    <div className="App">
     <Header/>
     <Routes>
      <Route path={"/"} element={<Home wishlist={wishlist} setWishlist={setWishlist}/>}/>
      <Route path={"/add"} element={<AddProduct/>}/>
      <Route path={"/details/:_id"} element={<Detail/>}/>
      <Route path={"/wishlist"} element={<Wishlist wishlist={wishlist} setWishlist={setWishlist}/>}/>
     </Routes>
     <Footer/>
    </div>
  );
}

export default App;
