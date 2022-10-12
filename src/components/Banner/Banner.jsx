import React from 'react'
import {Link} from 'react-router-dom'
import './Banner.css'
import mainImg from "./main-photo2.png"


function Banner() {
  return (
    <div className='main-section-container'>
        <div className='main-text'>
            <h1>We Serve</h1>
            <h1>Best Products</h1>
            <div className='steps-container'>
                <h3>- Shop from all our latest categories here</h3>
                <h3>- Order Fruits, Vegetables, Drinks, Food and many more...</h3>
            </div>
            <div className='button-container'>
            <Link to='/products'><button>Products</button></Link>
            </div>
        </div>
        <div className='main-image'>
        </div>
        <img src={mainImg}/>
    </div>
  )
}

export default Banner