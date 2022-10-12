import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'


function Cart() {
  return (
    <>
        <Header/>
        <div className='cart-container'>
            <h4>Item 1------------------------------------------Price1</h4>
            <h4>Item 2------------------------------------------Price2</h4>
            <h4>Item 3------------------------------------------Price3</h4>
            <h4>Item 4------------------------------------------Price4</h4>
            <h4>Item 5------------------------------------------Price5</h4>
        <div className='total-container'>
            <h1>Total=============Price</h1>
        </div>
        <button>Check Out</button>
        </div>
        <Footer/>
    </>
  )
}

export default Cart