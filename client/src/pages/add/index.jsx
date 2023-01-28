import React from 'react'
import "./index.scss"
import { Formik, Form, Field } from 'formik';
import { AddProductSchema } from './schema/index.js';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {Helmet} from "react-helmet";

const AddProduct = () => {
  const navigate = useNavigate()
  return (
    <div id='Add'>
             <Helmet>
                <meta charSet="utf-8" />
                <title>Add Product</title>
            </Helmet>
    <h1 className='addTitle'>Add Product</h1>
    <Formik
      initialValues={{
        img: '',
        name: '',
        price: '',
      }}
      validationSchema={AddProductSchema}
      onSubmit={values => {
       axios.post(`http://localhost:8080/`, values)
       navigate("/")
        console.log(values);
      }}
    >
      {({ errors, touched }) => (
        <Form>
            <div className="formik-input">
          <Field name="img" placeholder="img"/>
          {console.log(errors)}
          {errors.img && touched.img ? (
            <div className='red'>{errors.img}</div>
          ) : null}
            </div>

            <div className="formik-input">
          <Field name="name" placeholder="name"/>
          {errors.name && touched.name ? (
            <div className='red'>{errors.name}</div>
          ) : null}
            </div>

            <div className="formik-input">
          <Field name="price" placeholder="price"/>
          {errors.price && touched.price ? (
            <div className='red'>{errors.price}</div>
          ) : null}
            </div>



          <button type="submit" className='addBtn'> Add </button>
        </Form>
      )}
    </Formik>
  </div>
  )
}

export default AddProduct