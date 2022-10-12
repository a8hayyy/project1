import React from 'react'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'

function Products() {
  return (
    <>
        <Header/>
        <div className='product-container'>
            <h4>Item 1                                           Price1</h4>
            <h4>Item 2                                           Price2</h4>
            <h4>Item 3                                           Price3</h4>
            <h4>Item 4                                           Price4</h4>
            <h4>Item 5                                           Price5</h4>
            <h4>Item 6                                           Price6</h4>
            <h4>Item 7                                           Price7</h4>
            <h4>Item 8                                           Price8</h4>
        </div>
        <Footer/>
    </>
  )
}

export default Products