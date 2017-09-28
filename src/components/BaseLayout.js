import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'
import ProductList from './ProductList'

class BaseLayout extends Component {
  render(){
    return(
      <div>
        <header>
          <NavLink exact to="/">
            Home
          </NavLink>
          <NavLink to="/about">
            About Us
          </NavLink>
          <NavLink to="/contactus">
            Contact Us
          </NavLink>
        </header>
        <ProductList>

        </ProductList>
      </div>
    )
  }
}

export default BaseLayout
