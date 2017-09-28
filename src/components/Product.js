import React, {Component} from 'react'

class Product extends Component {
  render(){
    const starships = this.props.data.results.map(starship => {
      return(
        <div key={starship.name}>
          {starship.name}
        </div>
      )
    })
    return(
      <div>
        {starships}
      </div>
    )
  }
}

export default Product
