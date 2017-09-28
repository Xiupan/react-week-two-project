import React, {Component} from 'react'
import Product from './Product'

class ProductList extends Component {
  constructor(props){
    super(props)
    this.state = {
      data: {
        results: []
      }
    }
  }

  componentDidMount(){
    fetch('https://swapi.co/api/starships/')
    .then(r => {
      return r.json()
    }).then(data => {
      this.setState({
        data: data
      })
    })
  }

  render(){
    return(
      <div>
        <Product data={this.state.data}/>
      </div>
    )
  }
}

export default ProductList
