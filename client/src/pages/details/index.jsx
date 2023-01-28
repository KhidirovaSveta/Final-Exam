import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios';
import "./index.scss"
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import {Helmet} from "react-helmet";

const Detail = () => {
    const [detail, setDetail] = useState([])
    const {_id} = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`http://localhost:8080/${_id}`).then((data) => setDetail(data.data))
       }, [])
    
       const handleDelete = (_id) => {
        axios.delete(`http://localhost:8080/${_id}`).then((data) => axios.get(`http://localhost:8080/`).then((data) => setDetail(data.data)))
        navigate("/")
      }
    
  return (
    <div id='Detail'>
        <div className="container">
           <Helmet>
                <meta charSet="utf-8" />
                <title>{detail.name}</title>
            </Helmet>
        <button className='goBackBtn' onClick={() => navigate(-1)}> <i className="fa-solid fa-arrow-left"></i> Back </button>
           <div className="detail">
            <img src={detail.img} alt="" width={"350px"}/>
            <div className="info">
            <p> Name: <h1>{detail.name}</h1></p>
            <p> Price: <h3>${detail.price}</h3></p>
            <button onClick={() => handleDelete(detail._id)} className="delBtn"><i className="fa-solid fa-trash"></i></button>
            </div>
           </div>
        </div>
    </div>
  )
}

export default Detail